const { distroSlugs } = require("../data/distros");
const { pingDocker, buildDistroImage, imageExists, imageTagFor } = require("../lib/docker");

const run = async () => {
  const requested = process.argv.slice(2).filter((arg) => !arg.startsWith("-"));
  const force = process.argv.includes("--force");
  const targets = requested.length > 0 ? requested : distroSlugs;

  const unknown = targets.filter((slug) => !distroSlugs.includes(slug));
  if (unknown.length > 0) {
    console.error(`Unknown distro(s): ${unknown.join(", ")}`);
    console.error(`Available: ${distroSlugs.join(", ")}`);
    process.exit(1);
  }

  await pingDocker().catch((error) => {
    console.error(`Docker is unreachable: ${error.message}`);
    console.error("Start the Docker daemon, or set DOCKER_SOCKET_PATH.");
    process.exit(1);
  });

  for (const slug of targets) {
    const tag = imageTagFor(slug);

    if (!force && (await imageExists(tag))) {
      console.log(`[${slug}] already built as ${tag}`);
      continue;
    }

    console.log(`[${slug}] building ${tag}`);
    const startedAt = Date.now();

    await buildDistroImage(slug, (line) => {
      const text = line.trim();
      if (text) process.stdout.write(`[${slug}] ${text}\n`);
    });

    console.log(`[${slug}] done in ${Math.round((Date.now() - startedAt) / 1000)}s`);
  }

  console.log("\nAll requested sandbox images are ready.");
};

run().catch((error) => {
  console.error(`Image build failed: ${error.message}`);
  process.exit(1);
});
