const jwt = require("jsonwebtoken");
const env = require("../config/env");

const signAccessToken = (user) =>
  jwt.sign({ sub: user._id.toString(), username: user.username }, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn,
  });

const verifyAccessToken = (token) => jwt.verify(token, env.jwtSecret);

module.exports = { signAccessToken, verifyAccessToken };
