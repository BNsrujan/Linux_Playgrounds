const crypto = require("crypto");
const env = require("../config/env");
const { docker, imageTagFor, ensureDistroImage } = require("./docker");

const containerNameFor = (sessionId) =>
  `${env.docker.imagePrefix}-${sessionId}-${crypto.randomBytes(3).toString("hex")}`;

const hostConfigFor = () => ({
  Memory: env.sandbox.memoryMb * 1024 * 1024,
  MemorySwap: env.sandbox.memoryMb * 1024 * 1024,
  NanoCpus: Math.round(env.sandbox.cpus * 1e9),
  PidsLimit: env.sandbox.pidsLimit,
  NetworkMode: env.sandbox.network,
  CapDrop: ["ALL"],
  SecurityOpt: ["no-new-privileges"],
  Privileged: false,
  AutoRemove: false,
  RestartPolicy: { Name: "no" },
  Tmpfs: { "/tmp": "rw,noexec,nosuid,size=32m" },
  Ulimits: [{ Name: "nofile", Soft: 1024, Hard: 2048 }],
});

const startSandbox = async ({ distroSlug, sessionId }) => {
  const imageTag = await ensureDistroImage(distroSlug);
  const name = containerNameFor(sessionId);

  const container = await docker.createContainer({
    Image: imageTag,
    name,
    Cmd: ["sleep", "infinity"],
    Tty: false,
    OpenStdin: false,
    WorkingDir: "/home/playground",
    Env: ["TERM=xterm-256color"],
    Labels: {
      "playground.session": String(sessionId),
      "playground.distro": distroSlug,
      "playground.managed": "true",
    },
    HostConfig: hostConfigFor(),
  });

  await container.start();

  return { containerId: container.id, containerName: name, imageTag };
};

const attachShell = async ({ containerId, shell, cols, rows }) => {
  const container = docker.getContainer(containerId);

  const exec = await container.exec({
    Cmd: [shell || "/bin/bash", "-l"],
    AttachStdin: true,
    AttachStdout: true,
    AttachStderr: true,
    Tty: true,
    WorkingDir: "/home/playground",
    Env: ["TERM=xterm-256color"],
  });

  const stream = await exec.start({ hijack: true, stdin: true, Tty: true });

  await exec.resize({ w: cols || 80, h: rows || 24 }).catch(() => {});

  return { exec, stream };
};

const resizeShell = async (exec, cols, rows) => {
  await exec.resize({ w: cols, h: rows }).catch(() => {});
};

const stopSandbox = async (containerId) => {
  if (!containerId) return;
  const container = docker.getContainer(containerId);
  try {
    await container.remove({ force: true, v: true });
  } catch (error) {
    if (error.statusCode !== 404) throw error;
  }
};

const isSandboxRunning = async (containerId) => {
  if (!containerId) return false;
  try {
    const details = await docker.getContainer(containerId).inspect();
    return Boolean(details.State && details.State.Running);
  } catch (error) {
    if (error.statusCode === 404) return false;
    throw error;
  }
};

const listManagedContainers = async () => {
  return docker.listContainers({
    all: true,
    filters: { label: ["playground.managed=true"] },
  });
};

module.exports = {
  startSandbox,
  attachShell,
  resizeShell,
  stopSandbox,
  isSandboxRunning,
  listManagedContainers,
  imageTagFor,
};
