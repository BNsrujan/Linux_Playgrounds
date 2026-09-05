import { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { api, readToken, writeToken, clearToken } from "../api/client";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("loading");

  const loadProfile = useCallback(async () => {
    if (!readToken()) {
      setUser(null);
      setStatus("anonymous");
      return;
    }

    try {
      const { user: profile } = await api.me();
      setUser(profile);
      setStatus("authenticated");
    } catch {
      clearToken();
      setUser(null);
      setStatus("anonymous");
    }
  }, []);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  useEffect(() => {
    const handleSignedOut = () => {
      setUser(null);
      setStatus("anonymous");
    };
    window.addEventListener("lp:signed-out", handleSignedOut);
    return () => window.removeEventListener("lp:signed-out", handleSignedOut);
  }, []);

  const adoptToken = useCallback(
    async (token) => {
      writeToken(token);
      await loadProfile();
    },
    [loadProfile]
  );

  const signIn = useCallback(async (credentials) => {
    const { token, user: profile } = await api.login(credentials);
    writeToken(token);
    setUser(profile);
    setStatus("authenticated");
    return profile;
  }, []);

  const signUp = useCallback(async (details) => {
    const { token, user: profile } = await api.register(details);
    writeToken(token);
    setUser(profile);
    setStatus("authenticated");
    return profile;
  }, []);

  const signOut = useCallback(() => {
    clearToken();
    setUser(null);
    setStatus("anonymous");
  }, []);

  const value = useMemo(
    () => ({ user, status, signIn, signUp, signOut, adoptToken }),
    [user, status, signIn, signUp, signOut, adoptToken]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = { children: PropTypes.node };
