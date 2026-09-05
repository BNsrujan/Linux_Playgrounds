const mongoose = require("mongoose");
const { connectDatabase } = require("../config/db");
const { distroCatalog } = require("../data/distros");
const { imageTagFor } = require("../lib/docker");
const User = require("../models/User");
const Distro = require("../models/Distro");
const Session = require("../models/Session");
const CommandLog = require("../models/CommandLog");

const SEED_PASSWORD = process.env.SEED_PASSWORD || "playground123";

const seedUsers = [
  {
    username: "ada",
    email: "ada@example.com",
    displayName: "Ada Okonkwo",
    avatarUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=ada",
    githubId: null,
    githubLogin: null,
  },
  {
    username: "rafi",
    email: "rafi@example.com",
    displayName: "Rafi Haque",
    avatarUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=rafi",
    githubId: "90210001",
    githubLogin: "rafi-h",
  },
  {
    username: "juno",
    email: "juno@example.com",
    displayName: "Juno Val",
    avatarUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=juno",
    githubId: null,
    githubLogin: null,
  },
  {
    username: "sable",
    email: "sable@example.com",
    displayName: "Sable Mwangi",
    avatarUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=sable",
    githubId: "90210002",
    githubLogin: "sable-m",
  },
];

const sessionBlueprints = [
  { username: "ada", distroSlug: "ubuntu", status: "stopped", endReason: "idle", ageHours: 2 },
  { username: "ada", distroSlug: "alpine", status: "stopped", endReason: "user", ageHours: 26 },
  { username: "rafi", distroSlug: "arch", status: "stopped", endReason: "user", ageHours: 5 },
  { username: "rafi", distroSlug: "fedora", status: "stopped", endReason: "idle", ageHours: 49 },
  { username: "juno", distroSlug: "debian", status: "stopped", endReason: "user", ageHours: 8 },
  {
    username: "sable",
    distroSlug: "ubuntu",
    status: "failed",
    endReason: "error",
    ageHours: 12,
    errorMessage: "Sandbox image build timed out",
  },
];

const commandsByDistro = {
  ubuntu: ["uname -a", "cat /etc/os-release", "apt list --installed | head", "df -h", "ps aux"],
  debian: ["uname -r", "cat /etc/debian_version", "ls -la /etc", "whoami", "free -m"],
  alpine: ["cat /etc/alpine-release", "apk info | head", "busybox | head -5", "ls /bin", "id"],
  fedora: ["cat /etc/fedora-release", "rpm -qa | head", "systemctl --version", "pwd", "env"],
  arch: ["pacman -Q | head", "cat /etc/arch-release", "uname -m", "ls /usr/bin | wc -l", "date"],
};

const hoursAgo = (hours) => new Date(Date.now() - hours * 60 * 60 * 1000);

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1", "mongo", "host.docker.internal"]);

const describeTarget = (uri) => {
  const withoutScheme = uri.replace(/^mongodb(\+srv)?:\/\//, "");
  const authority = withoutScheme.split("/")[0].split("@").pop();
  const hosts = authority.split(",").map((entry) => entry.split(":")[0]);
  const path = withoutScheme.split("/").slice(1).join("/").split("?")[0];
  return {
    hosts,
    databaseName: path || "test",
    isLocal: hosts.every((host) => LOCAL_HOSTS.has(host)),
  };
};

const assertDropAllowed = (uri) => {
  const { hosts, databaseName, isLocal } = describeTarget(uri);
  if (isLocal || process.argv.includes("--force-remote")) return;

  console.error(
    [
      "",
      "Refusing to drop a database on a remote host.",
      "",
      `  host(s):  ${hosts.join(", ")}`,
      `  database: ${databaseName}`,
      "",
      "This looks like a hosted cluster, not a local dev database.",
      "Run `npm run seed` instead, which only replaces the seeded accounts,",
      "or re-run with --force-remote if you really mean to drop it.",
      "",
    ].join("\n")
  );
  process.exit(1);
};

const upsertDistros = async () => {
  await Promise.all(
    distroCatalog.map((distro) =>
      Distro.findOneAndUpdate(
        { slug: distro.slug },
        { $set: { ...distro, enabled: true } },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      )
    )
  );
  return distroCatalog.length;
};

const clearSeededUserData = async () => {
  const emails = seedUsers.map((user) => user.email);
  const existing = await User.find({ email: { $in: emails } }).select("_id");
  const ids = existing.map((user) => user._id);

  if (ids.length > 0) {
    await CommandLog.deleteMany({ user: { $in: ids } });
    await Session.deleteMany({ user: { $in: ids } });
    await User.deleteMany({ _id: { $in: ids } });
  }

  return ids.length;
};

const createUsers = async () => {
  const created = {};

  for (const blueprint of seedUsers) {
    const user = new User({ ...blueprint, lastLoginAt: hoursAgo(1) });
    await user.setPassword(SEED_PASSWORD);
    await user.save();
    created[blueprint.username] = user;
  }

  return created;
};

const createSessions = async (users) => {
  const sessions = [];

  for (const blueprint of sessionBlueprints) {
    const user = users[blueprint.username];
    const startedAt = hoursAgo(blueprint.ageHours);
    const commands = commandsByDistro[blueprint.distroSlug] || [];

    const session = await Session.create({
      user: user._id,
      distroSlug: blueprint.distroSlug,
      containerId: null,
      containerName: null,
      imageTag: imageTagFor(blueprint.distroSlug),
      status: blueprint.status,
      endReason: blueprint.endReason,
      errorMessage: blueprint.errorMessage || null,
      commandCount: blueprint.status === "failed" ? 0 : commands.length,
      lastActiveAt: startedAt,
      endedAt: hoursAgo(blueprint.ageHours - 0.5),
      createdAt: startedAt,
    });

    sessions.push({ session, user, commands, startedAt });
  }

  return sessions;
};

const createCommandLogs = async (sessions) => {
  const documents = [];

  sessions
    .filter(({ session }) => session.status !== "failed")
    .forEach(({ session, user, commands, startedAt }) => {
      commands.forEach((command, index) => {
        documents.push({
          session: session._id,
          user: user._id,
          distroSlug: session.distroSlug,
          command,
          createdAt: new Date(startedAt.getTime() + (index + 1) * 45 * 1000),
        });
      });
    });

  if (documents.length > 0) await CommandLog.insertMany(documents);

  return documents.length;
};

const run = async () => {
  const shouldDrop = process.argv.includes("--drop");

  if (shouldDrop) assertDropAllowed(process.env.MONGO_URI);

  await connectDatabase();

  if (shouldDrop) {
    await mongoose.connection.dropDatabase();
    console.log(`Dropped database ${mongoose.connection.name}`);
  }

  const removed = await clearSeededUserData();
  const distroCount = await upsertDistros();
  const users = await createUsers();
  const sessions = await createSessions(users);
  const commandCount = await createCommandLogs(sessions);

  console.log(`Target database:   ${mongoose.connection.name}`);
  console.log(`Removed ${removed} previously seeded user(s)`);
  console.log(`Distros upserted:  ${distroCount}`);
  console.log(`Users created:     ${Object.keys(users).length}`);
  console.log(`Sessions created:  ${sessions.length}`);
  console.log(`Commands logged:   ${commandCount}`);
  console.log(`\nSign in with any of:`);
  seedUsers.forEach((user) => console.log(`  ${user.email}  /  ${SEED_PASSWORD}`));

  await mongoose.disconnect();
};

run().catch(async (error) => {
  console.error("Seed failed:", error.message);
  await mongoose.disconnect().catch(() => {});
  process.exit(1);
});
