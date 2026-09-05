import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthShell } from "../components/AppShell";
import { Button, Notice } from "../components/Primitives";
import { useAuth } from "../auth/authContext";

const OAuthCallback = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { adoptToken } = useAuth();
  const handled = useRef(false);
  const [error, setError] = useState(params.get("error") || "");

  useEffect(() => {
    if (handled.current) return;
    handled.current = true;

    const token = params.get("token");
    if (!token) {
      setError((current) => current || "GitHub did not return a session token");
      return;
    }

    adoptToken(token)
      .then(() => navigate("/distros", { replace: true }))
      .catch(() => setError("Could not complete GitHub sign-in"));
  }, [adoptToken, navigate, params]);

  return (
    <AuthShell
      title={error ? "Sign-in failed" : "Completing sign-in"}
      subtitle={error ? "GitHub could not finish authenticating you." : "Exchanging your GitHub session…"}
    >
      <Notice>{error}</Notice>
      {error ? (
        <Button className="mt-6 w-full" onClick={() => navigate("/login", { replace: true })}>
          Back to sign in
        </Button>
      ) : (
        <p className="text-xs text-ink-faint">One moment.</p>
      )}
    </AuthShell>
  );
};

export default OAuthCallback;
