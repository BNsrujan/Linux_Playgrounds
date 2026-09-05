const distroCatalog = [
  {
    slug: "ubuntu",
    name: "Ubuntu",
    release: "24.04 LTS",
    family: "Debian",
    accent: "#E95420",
    packageManager: "apt",
    defaultShell: "/bin/bash",
    tagline: "The default answer to \"which Linux should I learn?\"",
    description:
      "Debian-derived and the most widely deployed server distribution. If a tutorial assumes a distro, it assumes this one. Start here if you have no reason not to.",
    tools: ["bash", "git", "python3", "vim", "jq", "htop"],
    sortOrder: 1,
  },
  {
    slug: "debian",
    name: "Debian",
    release: "12 Bookworm",
    family: "Debian",
    accent: "#A81D33",
    packageManager: "apt",
    defaultShell: "/bin/bash",
    tagline: "The upstream everything else is built on.",
    description:
      "Conservative, stable, and the base for Ubuntu, Mint and Raspberry Pi OS. Ships older package versions on purpose so that nothing moves under you.",
    tools: ["bash", "git", "python3", "vim", "jq", "htop"],
    sortOrder: 2,
  },
  {
    slug: "alpine",
    name: "Alpine",
    release: "3.20",
    family: "Independent",
    accent: "#0D597F",
    packageManager: "apk",
    defaultShell: "/bin/bash",
    tagline: "Musl and BusyBox, measured in megabytes.",
    description:
      "The distribution behind most small container images. Uses musl libc and BusyBox instead of glibc and GNU coreutils, which is exactly where portability bugs surface.",
    tools: ["bash", "busybox", "git", "python3", "vim", "jq"],
    sortOrder: 3,
  },
  {
    slug: "fedora",
    name: "Fedora",
    release: "40",
    family: "Red Hat",
    accent: "#3C6EB4",
    packageManager: "dnf",
    defaultShell: "/bin/bash",
    tagline: "Where RHEL features show up first.",
    description:
      "Fast-moving upstream for Red Hat Enterprise Linux. Good place to meet dnf, SELinux conventions and systemd-era tooling before they reach enterprise boxes.",
    tools: ["bash", "git", "python3", "vim", "jq", "htop"],
    sortOrder: 4,
  },
  {
    slug: "arch",
    name: "Arch",
    release: "Rolling",
    family: "Independent",
    accent: "#1793D1",
    packageManager: "pacman",
    defaultShell: "/bin/bash",
    tagline: "Rolling release, nothing assumed.",
    description:
      "Ships upstream packages almost unmodified and expects you to assemble the system yourself. The reference point for anyone reading the Arch Wiki, which is most of us.",
    tools: ["bash", "git", "python", "vim", "jq", "htop"],
    sortOrder: 5,
  },
];

const distroSlugs = distroCatalog.map((distro) => distro.slug);

const findDistro = (slug) =>
  distroCatalog.find((distro) => distro.slug === slug) || null;

module.exports = { distroCatalog, distroSlugs, findDistro };
