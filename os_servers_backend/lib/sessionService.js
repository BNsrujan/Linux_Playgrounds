const env = require("../config/env");
const Session = require("../models/Session");
const CommandLog = require("../models/CommandLog");
const Distro = require("../models/Distro");
const { startSandbox, stopSandbox, isSandboxRunning, imageTagFor } = require("./sandbox");
const { notFound, tooMany, badRequest, serviceUnavailable } = require("./httpError");

const ACTIVE_STATUSES = ["starting", "running"];

const countActiveSessions = (userId) =>
  Session.countDocuments({ user: userId, status: { $in: ACTIVE_STATUSES } });

const listSessionsForUser = (userId) =>
  Session.find({ user: userId }).sort({ createdAt: -1 }).limit(50);

const getOwnedSession = async (userId, sessionId) => {
  const session = await Session.findOne({ _id: sessionId, user: userId }).catch(() => null);
  if (!session) throw notFound("Session not found");
  return session;
};

const findResumableSession = async (userId, distroSlug) => {
  const candidate = await Session.findOne({
    user: userId,
    distroSlug,
    status: { $in: ACTIVE_STATUSES },
  }).sort({ createdAt: -1 });

  if (!candidate) return null;

  if (await isSandboxRunning(candidate.containerId)) {
    candidate.status = "running";
    candidate.lastActiveAt = new Date();
    await candidate.save();
    return candidate;
  }

  candidate.status = "stopped";
  candidate.endReason = "error";
  candidate.endedAt = new Date();
  await candidate.save();
  return null;
};

const createSession = async (user, distroSlug) => {
  const distro = await Distro.findOne({ slug: distroSlug, enabled: true });
  if (!distro) throw badRequest(`Unknown or disabled distro: ${distroSlug}`);

  const resumable = await findResumableSession(user._id, distroSlug);
  if (resumable) return { session: resumable, resumed: true };

  const activeCount = await countActiveSessions(user._id);
  if (activeCount >= env.sandbox.maxSessionsPerUser) {
    throw tooMany(
      `Session limit reached (${env.sandbox.maxSessionsPerUser}). Stop a running sandbox first.`
    );
  }

  const session = await Session.create({
    user: user._id,
    distroSlug,
    imageTag: imageTagFor(distroSlug),
    status: "starting",
  });

  try {
    const { containerId, containerName, imageTag } = await startSandbox({
      distroSlug,
      sessionId: session._id.toString(),
    });

    session.containerId = containerId;
    session.containerName = containerName;
    session.imageTag = imageTag;
    session.status = "running";
    session.lastActiveAt = new Date();
    await session.save();

    return { session, resumed: false };
  } catch (error) {
    session.status = "failed";
    session.endReason = "error";
    session.errorMessage = error.message;
    session.endedAt = new Date();
    await session.save();
    throw serviceUnavailable(`Could not start sandbox: ${error.message}`);
  }
};

const stopSession = async (session, reason = "user") => {
  if (session.status === "stopped") return session;

  await stopSandbox(session.containerId);

  session.status = "stopped";
  session.endReason = reason;
  session.endedAt = new Date();
  await session.save();

  return session;
};

const touchSession = (sessionId) =>
  Session.updateOne({ _id: sessionId }, { $set: { lastActiveAt: new Date() } });

const recordCommand = async (session, command) => {
  const trimmed = command.trim();
  if (!trimmed) return null;

  const [log] = await Promise.all([
    CommandLog.create({
      session: session._id,
      user: session.user,
      distroSlug: session.distroSlug,
      command: trimmed.slice(0, 2000),
    }),
    Session.updateOne(
      { _id: session._id },
      { $inc: { commandCount: 1 }, $set: { lastActiveAt: new Date() } }
    ),
  ]);

  return log;
};

const listRecentCommands = (userId, limit = 20) =>
  CommandLog.find({ user: userId }).sort({ createdAt: -1 }).limit(limit);

const reapIdleSessions = async () => {
  const cutoff = new Date(Date.now() - env.sandbox.idleTimeoutMinutes * 60 * 1000);

  const stale = await Session.find({
    status: { $in: ACTIVE_STATUSES },
    lastActiveAt: { $lt: cutoff },
  });

  const results = await Promise.allSettled(stale.map((session) => stopSession(session, "idle")));

  return results.filter((result) => result.status === "fulfilled").length;
};

const shutdownAllSessions = async () => {
  const active = await Session.find({ status: { $in: ACTIVE_STATUSES } });
  await Promise.allSettled(active.map((session) => stopSession(session, "shutdown")));
  return active.length;
};

module.exports = {
  ACTIVE_STATUSES,
  createSession,
  stopSession,
  getOwnedSession,
  listSessionsForUser,
  countActiveSessions,
  touchSession,
  recordCommand,
  listRecentCommands,
  reapIdleSessions,
  shutdownAllSessions,
};
