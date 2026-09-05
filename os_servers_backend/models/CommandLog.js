const mongoose = require("mongoose");

const commandLogSchema = new mongoose.Schema(
  {
    session: { type: mongoose.Schema.Types.ObjectId, ref: "Session", required: true, index: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    distroSlug: { type: String, required: true, lowercase: true },
    command: { type: String, required: true, maxlength: 2000 },
    createdAt: { type: Date, default: Date.now, index: true },
  },
  { versionKey: false }
);

commandLogSchema.methods.toPublicJSON = function toPublicJSON() {
  return {
    id: this._id.toString(),
    command: this.command,
    distroSlug: this.distroSlug,
    createdAt: this.createdAt,
  };
};

module.exports = mongoose.model("CommandLog", commandLogSchema);
