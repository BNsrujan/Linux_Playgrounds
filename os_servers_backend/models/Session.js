const mongoose = require("mongoose");

const SESSION_STATUSES = ["starting", "running", "stopped", "failed"];
const END_REASONS = ["user", "idle", "error", "shutdown"];

const sessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    distroSlug: { type: String, required: true, lowercase: true },
    containerId: { type: String, default: null },
    containerName: { type: String, default: null },
    imageTag: { type: String, required: true },
    status: { type: String, enum: SESSION_STATUSES, default: "starting", index: true },
    endReason: { type: String, enum: END_REASONS, default: null },
    errorMessage: { type: String, default: null },
    commandCount: { type: Number, default: 0 },
    lastActiveAt: { type: Date, default: Date.now, index: true },
    endedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

sessionSchema.index({ user: 1, status: 1 });

sessionSchema.methods.toPublicJSON = function toPublicJSON() {
  return {
    id: this._id.toString(),
    distroSlug: this.distroSlug,
    status: this.status,
    endReason: this.endReason,
    errorMessage: this.errorMessage,
    commandCount: this.commandCount,
    createdAt: this.createdAt,
    lastActiveAt: this.lastActiveAt,
    endedAt: this.endedAt,
  };
};

module.exports = mongoose.model("Session", sessionSchema);
module.exports.SESSION_STATUSES = SESSION_STATUSES;
module.exports.END_REASONS = END_REASONS;
