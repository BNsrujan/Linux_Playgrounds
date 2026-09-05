const path = require("path");
const Docker = require("dockerode");
const env = require("../config/env");
const { distroSlugs } = require("../data/distros");

const docker = new Docker({ socketPath: env.docker.socketPath });

const DOCKERFILE_ROOT = path.join(__dirname, "..", "dockerfiles");

const imageTagFor = (slug) => `${env.docker.imagePrefix}/${slug}:latest`;

const pingDocker = async () => {
  await docker.ping();
};

const imageExists = async (tag) => {
  try {
    await docker.getImage(tag).inspect();
    return true;
  } catch (error) {
    if (error.statusCode === 404) return false;
    throw error;
  }
};

const buildDistroImage = async (slug, onProgress = () => {}) => {
  if (!distroSlugs.includes(slug)) {
    throw new Error(`Unknown distro: ${slug}`);
  }

  const tag = imageTagFor(slug);

  const stream = await docker.buildImage(
    { context: DOCKERFILE_ROOT, src: [`${slug}/Dockerfile`, "motd.sh"] },
    { t: tag, dockerfile: `${slug}/Dockerfile`, rm: true, forcerm: true }
  );

  await new Promise((resolve, reject) => {
    docker.modem.followProgress(
      stream,
      (error, output) => {
        if (error) return reject(error);
        const failure = output.find((entry) => entry.error);
        if (failure) return reject(new Error(failure.error));
        return resolve(output);
      },
      (event) => {
        if (event.stream) onProgress(event.stream.replace(/\n$/, ""));
        if (event.status) onProgress(event.status);
      }
    );
  });

  return tag;
};

const ensureDistroImage = async (slug, onProgress) => {
  const tag = imageTagFor(slug);
  if (await imageExists(tag)) return tag;
  return buildDistroImage(slug, onProgress);
};

const listMissingImages = async () => {
  const checks = await Promise.all(
    distroSlugs.map(async (slug) => ({ slug, present: await imageExists(imageTagFor(slug)) }))
  );
  return checks.filter((entry) => !entry.present).map((entry) => entry.slug);
};

module.exports = {
  docker,
  imageTagFor,
  pingDocker,
  imageExists,
  buildDistroImage,
  ensureDistroImage,
  listMissingImages,
};
