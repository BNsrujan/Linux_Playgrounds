const { docker } = require("../lib/docker");
const { listManagedContainers } = require("../lib/sandbox");

const run = async () => {
  const containers = await listManagedContainers();

  if (containers.length === 0) {
    console.log("No managed sandbox containers found.");
    return;
  }

  for (const info of containers) {
    await docker.getContainer(info.Id).remove({ force: true, v: true });
    console.log(`Removed ${info.Names.join(", ")} (${info.Id.slice(0, 12)})`);
  }

  console.log(`\nRemoved ${containers.length} sandbox container(s).`);
};

run().catch((error) => {
  console.error(`Cleanup failed: ${error.message}`);
  process.exit(1);
});
