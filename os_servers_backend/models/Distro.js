const mongoose = require("mongoose");

const distroSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, required: true, trim: true },
    release: { type: String, required: true, trim: true },
    family: { type: String, required: true, trim: true },
    accent: { type: String, required: true },
    packageManager: { type: String, required: true },
    defaultShell: { type: String, default: "/bin/bash" },
    tagline: { type: String, default: "" },
    description: { type: String, default: "" },
    tools: { type: [String], default: [] },
    sortOrder: { type: Number, default: 0 },
    enabled: { type: Boolean, default: true },
  },
  { timestamps: true }
);

distroSchema.methods.toPublicJSON = function toPublicJSON() {
  return {
    slug: this.slug,
    name: this.name,
    release: this.release,
    family: this.family,
    accent: this.accent,
    packageManager: this.packageManager,
    tagline: this.tagline,
    description: this.description,
    tools: this.tools,
  };
};

module.exports = mongoose.model("Distro", distroSchema);
