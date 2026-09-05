const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const SALT_ROUNDS = 12;

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 32,
      match: /^[a-zA-Z0-9_-]+$/,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    displayName: { type: String, trim: true, maxlength: 64 },
    avatarUrl: { type: String, default: "" },
    passwordHash: { type: String, default: null, select: false },
    githubId: { type: String, default: null },
    githubLogin: { type: String, default: null },
    lastLoginAt: { type: Date, default: null },
  },
  { timestamps: true }
);

userSchema.index(
  { githubId: 1 },
  { unique: true, partialFilterExpression: { githubId: { $type: "string" } } }
);

userSchema.methods.setPassword = async function setPassword(plainPassword) {
  this.passwordHash = await bcrypt.hash(plainPassword, SALT_ROUNDS);
};

userSchema.methods.comparePassword = async function comparePassword(plainPassword) {
  if (!this.passwordHash) return false;
  return bcrypt.compare(plainPassword, this.passwordHash);
};

userSchema.methods.toPublicJSON = function toPublicJSON() {
  return {
    id: this._id.toString(),
    username: this.username,
    email: this.email,
    displayName: this.displayName || this.username,
    avatarUrl: this.avatarUrl,
    githubLogin: this.githubLogin,
    hasPassword: Boolean(this.passwordHash),
    linkedGithub: Boolean(this.githubId),
    createdAt: this.createdAt,
  };
};

module.exports = mongoose.model("User", userSchema);
