require("dotenv").config();

const REQUIRED = ["MONGO_URI", "JWT_SECRET"];

const missing = REQUIRED.filter((key) => !process.env[key]);

if (missing.length > 0) {
  console.error(
    `Missing required environment variables: ${missing.join(", ")}\n` +
      `Copy .env.example to .env and fill them in.`
  );
  process.exit(1);
}

const toInt = (value, fallback) => {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const toList = (value, fallback) =>
  (value || fallback)
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);

const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: toInt(process.env.PORT, 5000),
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  corsOrigins: toList(process.env.CORS_ORIGINS, "http://localhost:5173"),
  publicWebUrl: process.env.PUBLIC_WEB_URL || "http://localhost:5173",
  github: {
    clientId: process.env.GITHUB_CLIENT_ID || "",
    clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    get enabled() {
      return Boolean(this.clientId && this.clientSecret);
    },
  },
  docker: {
    socketPath: process.env.DOCKER_SOCKET_PATH || "/var/run/docker.sock",
    imagePrefix: process.env.SANDBOX_IMAGE_PREFIX || "linux-playgrounds",
  },
  sandbox: {
    memoryMb: toInt(process.env.SANDBOX_MEMORY_MB, 256),
    cpus: Number.parseFloat(process.env.SANDBOX_CPUS || "0.5"),
    pidsLimit: toInt(process.env.SANDBOX_PIDS_LIMIT, 128),
    network: process.env.SANDBOX_NETWORK || "none",
    idleTimeoutMinutes: toInt(process.env.SANDBOX_IDLE_TIMEOUT_MINUTES, 20),
    maxSessionsPerUser: toInt(process.env.SANDBOX_MAX_SESSIONS_PER_USER, 3),
    reaperIntervalSeconds: toInt(process.env.SANDBOX_REAPER_INTERVAL_SECONDS, 60),
  },
};

module.exports = env;
