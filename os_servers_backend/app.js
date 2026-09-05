const express = require("express");
const cors = require("cors");
const env = require("./config/env");
const authRoutes = require("./routes/authRoutes");
const distroRoutes = require("./routes/distroRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const { notFoundHandler, errorHandler } = require("./middleware/errorHandler");
const { pingDocker } = require("./lib/docker");

const createApp = () => {
  const app = express();

  app.set("trust proxy", 1);
  app.use(express.json({ limit: "128kb" }));
  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || env.corsOrigins.includes("*") || env.corsOrigins.includes(origin)) {
          return callback(null, true);
        }
        return callback(new Error(`Origin ${origin} is not allowed`));
      },
      credentials: true,
    })
  );

  app.get("/api/health", async (req, res) => {
    const docker = await pingDocker().then(
      () => "ok",
      (error) => error.message
    );
    res.json({
      status: docker === "ok" ? "ok" : "degraded",
      docker,
      githubOAuth: env.github.enabled,
      uptimeSeconds: Math.round(process.uptime()),
    });
  });

  app.use("/api/auth", authRoutes);
  app.use("/api/distros", distroRoutes);
  app.use("/api/sessions", sessionRoutes);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};

module.exports = { createApp };
