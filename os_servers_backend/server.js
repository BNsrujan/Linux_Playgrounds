const http = require("http");
const env = require("./config/env");
const { createApp } = require("./app");
const { connectDatabase } = require("./config/db");
const { createTerminalGateway } = require("./ws/terminalGateway");
const { pingDocker, listMissingImages } = require("./lib/docker");
const { reapIdleSessions, shutdownAllSessions } = require("./lib/sessionService");

const start = async () => {
  await connectDatabase();
  console.log("Connected to MongoDB");

  try {
    await pingDocker();
    const missing = await listMissingImages();
    if (missing.length > 0) {
      console.warn(
        `Sandbox images not built yet: ${missing.join(", ")}. ` +
          `Run "npm run images:build" or they will be built on first use.`
      );
    }
  } catch (error) {
    console.warn(`Docker is unreachable (${error.message}). Terminal sessions will fail.`);
  }

  const app = createApp();
  const httpServer = http.createServer(app);
  const gateway = createTerminalGateway(httpServer);

  const reaper = setInterval(() => {
    reapIdleSessions()
      .then((count) => {
        if (count > 0) console.log(`Reaped ${count} idle sandbox(es)`);
      })
      .catch((error) => console.error("Reaper failed", error));
  }, env.sandbox.reaperIntervalSeconds * 1000);

  httpServer.listen(env.port, () => {
    console.log(`API listening on http://localhost:${env.port}`);
    console.log(`Terminal socket on ws://localhost:${env.port}/ws/terminal`);
  });

  const shutdown = async (signal) => {
    console.log(`\n${signal} received, shutting down`);
    clearInterval(reaper);
    gateway.close();
    httpServer.close();
    await shutdownAllSessions().catch(() => {});
    process.exit(0);
  };

  process.on("SIGINT", () => shutdown("SIGINT"));
  process.on("SIGTERM", () => shutdown("SIGTERM"));
};

start().catch((error) => {
  console.error("Failed to start server:", error.message);
  process.exit(1);
});
