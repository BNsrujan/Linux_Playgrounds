import axios from "axios";

const configuredBase = import.meta.env.VITE_API_URL;
const API_BASE = configuredBase || window.location.origin;
const TOKEN_KEY = "lp.token";

export const readToken = () => localStorage.getItem(TOKEN_KEY);
export const writeToken = (token) => localStorage.setItem(TOKEN_KEY, token);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

export const apiBaseUrl = API_BASE;

export const socketUrl = (sessionId) => {
  const base = new URL(API_BASE);
  base.protocol = base.protocol === "https:" ? "wss:" : "ws:";
  base.pathname = "/ws/terminal";
  base.searchParams.set("session", sessionId);
  base.searchParams.set("token", readToken() || "");
  return base.toString();
};

export const githubSignInUrl = () => `${API_BASE}/api/auth/github`;

const client = axios.create({ baseURL: `${API_BASE}/api`, timeout: 30000 });

client.interceptors.request.use((config) => {
  const token = readToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && readToken()) {
      clearToken();
      window.dispatchEvent(new Event("lp:signed-out"));
    }
    return Promise.reject(error);
  }
);

export const errorMessage = (error, fallback = "Something went wrong") =>
  error?.response?.data?.error || error?.message || fallback;

export const api = {
  register: (payload) => client.post("/auth/register", payload).then((r) => r.data),
  login: (payload) => client.post("/auth/login", payload).then((r) => r.data),
  me: () => client.get("/auth/me").then((r) => r.data),
  health: () => client.get("/health").then((r) => r.data),
  distros: () => client.get("/distros").then((r) => r.data.distros),
  sessions: () => client.get("/sessions").then((r) => r.data),
  session: (id) => client.get(`/sessions/${id}`).then((r) => r.data.session),
  createSession: (distroSlug) => client.post("/sessions", { distroSlug }).then((r) => r.data),
  stopSession: (id) => client.delete(`/sessions/${id}`).then((r) => r.data.session),
  history: () => client.get("/sessions/history").then((r) => r.data.commands),
};

export default client;
