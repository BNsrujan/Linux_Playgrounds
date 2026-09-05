const express = require("express");
const env = require("../config/env");
const User = require("../models/User");
const { signAccessToken } = require("../lib/tokens");
const { requireAuth } = require("../middleware/auth");
const { asyncRoute } = require("../middleware/errorHandler");
const { conflict, unauthorized, badRequest } = require("../lib/httpError");
const { requireFields, assertEmail, assertUsername, assertPassword } = require("../lib/validate");
const {
  buildAuthorizeUrl,
  readState,
  exchangeCodeForToken,
  fetchGithubProfile,
} = require("../lib/githubOAuth");

const router = express.Router();

const callbackUrlFor = (req) => `${req.protocol}://${req.get("host")}/api/auth/github/callback`;

const redirectToWeb = (res, params) => {
  const url = new URL("/auth/callback", env.publicWebUrl);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  res.redirect(url.toString());
};

router.post(
  "/register",
  asyncRoute(async (req, res) => {
    requireFields(req.body, ["username", "email", "password"]);

    const username = assertUsername(req.body.username);
    const email = assertEmail(req.body.email);
    const password = assertPassword(req.body.password);

    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      throw conflict(
        existing.email === email ? "That email is already registered" : "That username is taken"
      );
    }

    const user = new User({ username, email, displayName: username });
    await user.setPassword(password);
    user.lastLoginAt = new Date();
    await user.save();

    res.status(201).json({ token: signAccessToken(user), user: user.toPublicJSON() });
  })
);

router.post(
  "/login",
  asyncRoute(async (req, res) => {
    requireFields(req.body, ["email", "password"]);

    const email = String(req.body.email).trim().toLowerCase();
    const user = await User.findOne({ email }).select("+passwordHash");

    if (!user || !(await user.comparePassword(String(req.body.password)))) {
      throw unauthorized("Email or password is incorrect");
    }

    user.lastLoginAt = new Date();
    await user.save();

    res.json({ token: signAccessToken(user), user: user.toPublicJSON() });
  })
);

router.get(
  "/me",
  requireAuth,
  asyncRoute(async (req, res) => {
    res.json({ user: req.user.toPublicJSON() });
  })
);

router.get("/github", (req, res, next) => {
  if (!env.github.enabled) {
    return next(badRequest("GitHub sign-in is not configured on this server"));
  }
  res.redirect(buildAuthorizeUrl(callbackUrlFor(req), "signin"));
});

router.get(
  "/github/callback",
  asyncRoute(async (req, res) => {
    if (!env.github.enabled) throw badRequest("GitHub sign-in is not configured on this server");

    if (req.query.error) {
      return redirectToWeb(res, { error: String(req.query.error_description || req.query.error) });
    }

    requireFields(req.query, ["code", "state"]);
    readState(String(req.query.state));

    const accessToken = await exchangeCodeForToken(String(req.query.code), callbackUrlFor(req));
    const profile = await fetchGithubProfile(accessToken);

    let user = await User.findOne({ githubId: profile.githubId });

    if (!user) {
      user = await User.findOne({ email: profile.email });
    }

    if (user) {
      user.githubId = profile.githubId;
      user.githubLogin = profile.githubLogin;
      if (!user.avatarUrl) user.avatarUrl = profile.avatarUrl;
      if (!user.displayName) user.displayName = profile.displayName;
    } else {
      user = new User({
        username: await uniqueUsernameFrom(profile.githubLogin),
        email: profile.email,
        displayName: profile.displayName,
        avatarUrl: profile.avatarUrl,
        githubId: profile.githubId,
        githubLogin: profile.githubLogin,
      });
    }

    user.lastLoginAt = new Date();
    await user.save();

    return redirectToWeb(res, { token: signAccessToken(user) });
  })
);

const uniqueUsernameFrom = async (login) => {
  const base = String(login).replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 28) || "developer";
  let candidate = base.length >= 3 ? base : `${base}dev`;
  let suffix = 1;

  while (await User.exists({ username: candidate })) {
    candidate = `${base}-${suffix}`;
    suffix += 1;
  }

  return candidate;
};

module.exports = router;
