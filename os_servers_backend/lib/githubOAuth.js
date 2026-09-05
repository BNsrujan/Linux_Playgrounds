const jwt = require("jsonwebtoken");
const env = require("../config/env");
const { badRequest, serviceUnavailable } = require("./httpError");

const AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
const TOKEN_URL = "https://github.com/login/oauth/access_token";
const API_BASE = "https://api.github.com";

const createState = (intent) =>
  jwt.sign({ intent }, env.jwtSecret, { expiresIn: "10m", audience: "github-oauth" });

const readState = (state) => {
  try {
    return jwt.verify(state, env.jwtSecret, { audience: "github-oauth" });
  } catch {
    throw badRequest("OAuth state is invalid or expired. Start the sign-in again.");
  }
};

const buildAuthorizeUrl = (redirectUri, intent) => {
  const params = new URLSearchParams({
    client_id: env.github.clientId,
    redirect_uri: redirectUri,
    scope: "read:user user:email",
    state: createState(intent),
    allow_signup: "true",
  });
  return `${AUTHORIZE_URL}?${params.toString()}`;
};

const exchangeCodeForToken = async (code, redirectUri) => {
  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: env.github.clientId,
      client_secret: env.github.clientSecret,
      code,
      redirect_uri: redirectUri,
    }),
  });

  if (!response.ok) {
    throw serviceUnavailable(`GitHub token exchange failed with status ${response.status}`);
  }

  const payload = await response.json();
  if (payload.error || !payload.access_token) {
    throw badRequest(payload.error_description || "GitHub did not return an access token");
  }

  return payload.access_token;
};

const githubRequest = async (accessToken, endpoint) => {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "linux-playgrounds",
    },
  });

  if (!response.ok) {
    throw serviceUnavailable(`GitHub API ${endpoint} failed with status ${response.status}`);
  }

  return response.json();
};

const fetchGithubProfile = async (accessToken) => {
  const profile = await githubRequest(accessToken, "/user");

  let email = profile.email;
  if (!email) {
    const emails = await githubRequest(accessToken, "/user/emails").catch(() => []);
    const primary = emails.find((entry) => entry.primary && entry.verified) || emails[0];
    email = primary ? primary.email : `${profile.login}@users.noreply.github.com`;
  }

  return {
    githubId: String(profile.id),
    githubLogin: profile.login,
    displayName: profile.name || profile.login,
    avatarUrl: profile.avatar_url || "",
    email: email.toLowerCase(),
  };
};

module.exports = { buildAuthorizeUrl, readState, exchangeCodeForToken, fetchGithubProfile };
