const { badRequest } = require("./httpError");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const USERNAME_PATTERN = /^[a-zA-Z0-9_-]{3,32}$/;

const requireFields = (body, fields) => {
  const missing = fields.filter((field) => {
    const value = body[field];
    return value === undefined || value === null || String(value).trim() === "";
  });
  if (missing.length > 0) {
    throw badRequest(`Missing required field${missing.length > 1 ? "s" : ""}: ${missing.join(", ")}`);
  }
};

const assertEmail = (email) => {
  if (!EMAIL_PATTERN.test(String(email).trim())) throw badRequest("Enter a valid email address");
  return String(email).trim().toLowerCase();
};

const assertUsername = (username) => {
  const value = String(username).trim();
  if (!USERNAME_PATTERN.test(value)) {
    throw badRequest("Username must be 3-32 characters: letters, numbers, hyphen or underscore");
  }
  return value;
};

const assertPassword = (password) => {
  const value = String(password);
  if (value.length < 8) throw badRequest("Password must be at least 8 characters");
  if (value.length > 200) throw badRequest("Password must be at most 200 characters");
  return value;
};

module.exports = { requireFields, assertEmail, assertUsername, assertPassword };
