const express = require("express");
const env = require("../config/env");
const { requireAuth } = require("../middleware/auth");
const { asyncRoute } = require("../middleware/errorHandler");
const { requireFields } = require("../lib/validate");
const {
  createSession,
  stopSession,
  getOwnedSession,
  listSessionsForUser,
  listRecentCommands,
} = require("../lib/sessionService");

const router = express.Router();

router.use(requireAuth);

router.get(
  "/",
  asyncRoute(async (req, res) => {
    const sessions = await listSessionsForUser(req.user._id);
    res.json({
      sessions: sessions.map((session) => session.toPublicJSON()),
      limits: {
        maxSessionsPerUser: env.sandbox.maxSessionsPerUser,
        idleTimeoutMinutes: env.sandbox.idleTimeoutMinutes,
        memoryMb: env.sandbox.memoryMb,
        cpus: env.sandbox.cpus,
        network: env.sandbox.network,
      },
    });
  })
);

router.post(
  "/",
  asyncRoute(async (req, res) => {
    requireFields(req.body, ["distroSlug"]);
    const { session, resumed } = await createSession(
      req.user,
      String(req.body.distroSlug).toLowerCase()
    );
    res.status(resumed ? 200 : 201).json({ session: session.toPublicJSON(), resumed });
  })
);

router.get(
  "/history",
  asyncRoute(async (req, res) => {
    const commands = await listRecentCommands(req.user._id, 20);
    res.json({ commands: commands.map((entry) => entry.toPublicJSON()) });
  })
);

router.get(
  "/:id",
  asyncRoute(async (req, res) => {
    const session = await getOwnedSession(req.user._id, req.params.id);
    res.json({ session: session.toPublicJSON() });
  })
);

router.delete(
  "/:id",
  asyncRoute(async (req, res) => {
    const session = await getOwnedSession(req.user._id, req.params.id);
    await stopSession(session, "user");
    res.json({ session: session.toPublicJSON() });
  })
);

module.exports = router;
