const User = require("../models/User");
const { verifyAccessToken } = require("../lib/tokens");
const { unauthorized } = require("../lib/httpError");

const extractBearerToken = (req) => {
  const header = req.get("Authorization") || "";
  if (!header.startsWith("Bearer ")) return null;
  return header.slice(7).trim() || null;
};

const requireAuth = async (req, res, next) => {
  try {
    const token = extractBearerToken(req);
    if (!token) throw unauthorized();

    const payload = verifyAccessToken(token);
    const user = await User.findById(payload.sub);
    if (!user) throw unauthorized("Account no longer exists");

    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") return next(unauthorized("Session expired"));
    if (error.name === "JsonWebTokenError") return next(unauthorized("Invalid token"));
    next(error);
  }
};

module.exports = { requireAuth, extractBearerToken };
