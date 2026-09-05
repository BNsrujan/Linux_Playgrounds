const { WebSocketServer } = require("ws");
const User = require("../models/User");
const Distro = require("../models/Distro");
const { verifyAccessToken } = require("../lib/tokens");
const { attachShell, resizeShell, isSandboxRunning } = require("../lib/sandbox");
const { getOwnedSession, recordCommand, touchSession } = require("../lib/sessionService");

const WS_PATH = "/ws/terminal";
const HEARTBEAT_MS = 30000;
const MAX_COMMAND_BUFFER = 2000;

const send = (socket, payload) => {
  if (socket.readyState === socket.OPEN) socket.send(JSON.stringify(payload));
};

const endStreamQuietly = (stream) => {
  try {
    stream.end();
  } catch {
    stream.destroy?.();
  }
};

const closeWith = (socket, code, message) => {
  send(socket, { type: "error", message });
  socket.close(code, message.slice(0, 120));
};

const authenticateUpgrade = async (requestUrl) => {
  const token = requestUrl.searchParams.get("token");
  const sessionId = requestUrl.searchParams.get("session");

  if (!token || !sessionId) return { error: "Missing token or session" };

  let payload;
  try {
    payload = verifyAccessToken(token);
  } catch {
    return { error: "Invalid or expired token" };
  }

  const user = await User.findById(payload.sub);
  if (!user) return { error: "Account no longer exists" };

  let session;
  try {
    session = await getOwnedSession(user._id, sessionId);
  } catch {
    return { error: "Session not found" };
  }

  if (session.status !== "running") return { error: `Session is ${session.status}` };
  if (!(await isSandboxRunning(session.containerId))) return { error: "Sandbox is no longer running" };

  return { user, session };
};

const bridgeShell = async (socket, session) => {
  const distro = await Distro.findOne({ slug: session.distroSlug });

  const { exec, stream } = await attachShell({
    containerId: session.containerId,
    shell: distro ? distro.defaultShell : "/bin/bash",
    cols: 80,
    rows: 24,
  });

  let commandBuffer = "";
  let closed = false;

  const teardown = (reason) => {
    if (closed) return;
    closed = true;
    stream.removeAllListeners();
    endStreamQuietly(stream);
    send(socket, { type: "exit", reason });
    if (socket.readyState === socket.OPEN) socket.close(1000, "shell closed");
  };

  stream.on("data", (chunk) => {
    if (socket.readyState === socket.OPEN) {
      socket.send(JSON.stringify({ type: "output", data: chunk.toString("utf8") }));
    }
  });

  stream.on("end", () => teardown("shell exited"));
  stream.on("error", () => teardown("stream error"));

  socket.on("message", async (raw) => {
    let message;
    try {
      message = JSON.parse(raw.toString());
    } catch {
      return;
    }

    if (message.type === "input" && typeof message.data === "string") {
      stream.write(message.data);

      for (const character of message.data) {
        if (character === "\r" || character === "\n") {
          const command = commandBuffer.trim();
          commandBuffer = "";
          if (command) await recordCommand(session, command).catch(() => {});
        } else if (character === "\x7f") {
          commandBuffer = commandBuffer.slice(0, -1);
        } else if (commandBuffer.length < MAX_COMMAND_BUFFER) {
          commandBuffer += character;
        }
      }
      return;
    }

    if (message.type === "resize") {
      const cols = Number.parseInt(message.cols, 10);
      const rows = Number.parseInt(message.rows, 10);
      if (cols > 0 && rows > 0) await resizeShell(exec, cols, rows);
    }
  });

  socket.on("close", () => {
    if (!closed) {
      closed = true;
      endStreamQuietly(stream);
    }
    touchSession(session._id).catch(() => {});
  });

  send(socket, {
    type: "ready",
    sessionId: session._id.toString(),
    distroSlug: session.distroSlug,
  });
};

const createTerminalGateway = (httpServer) => {
  const wss = new WebSocketServer({ noServer: true, maxPayload: 1024 * 64 });

  httpServer.on("upgrade", async (request, socket, head) => {
    let requestUrl;
    try {
      requestUrl = new URL(request.url, `http://${request.headers.host}`);
    } catch {
      return socket.destroy();
    }

    if (requestUrl.pathname !== WS_PATH) return socket.destroy();

    const result = await authenticateUpgrade(requestUrl).catch(() => ({
      error: "Authentication failed",
    }));

    wss.handleUpgrade(request, socket, head, (client) => {
      if (result.error) return closeWith(client, 4001, result.error);

      client.isAlive = true;
      client.on("pong", () => {
        client.isAlive = true;
      });

      bridgeShell(client, result.session).catch((error) =>
        closeWith(client, 4002, `Could not attach shell: ${error.message}`)
      );
    });
  });

  const heartbeat = setInterval(() => {
    wss.clients.forEach((client) => {
      if (client.isAlive === false) return client.terminate();
      client.isAlive = false;
      client.ping();
    });
  }, HEARTBEAT_MS);

  const close = () => {
    clearInterval(heartbeat);
    wss.clients.forEach((client) => client.close(1001, "server shutting down"));
    wss.close();
  };

  return { wss, close };
};

module.exports = { createTerminalGateway, WS_PATH };
