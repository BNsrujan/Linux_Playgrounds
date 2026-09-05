import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthShell } from "../components/AppShell";
import { Button, Field, Notice } from "../components/Primitives";
import { useAuth } from "../auth/authContext";
import { errorMessage, githubSignInUrl } from "../api/client";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const update = (key) => (event) => setForm({ ...form, [key]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      await signIn(form);
      navigate("/distros", { replace: true });
    } catch (submitError) {
      setError(errorMessage(submitError, "Could not sign in"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <AuthShell
      title="Sign in"
      subtitle="Pick a distro and get a real shell in seconds."
      footer={
        <>
          No account yet?{" "}
          <Link to="/register" className="text-accent hover:underline">
            Create one
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Field
          label="Email"
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
        <Field
          label="Password"
          type="password"
          value={form.password}
          onChange={update("password")}
          placeholder="••••••••"
          autoComplete="current-password"
          required
        />
        <Notice>{error}</Notice>
        <Button type="submit" disabled={busy}>
          {busy ? "Signing in…" : "Sign in"}
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3 text-[10px] uppercase tracking-label text-ink-faint">
        <span className="h-px flex-1 bg-hairline" />
        or
        <span className="h-px flex-1 bg-hairline" />
      </div>

      <Button
        variant="ghost"
        className="w-full"
        onClick={() => {
          window.location.href = githubSignInUrl();
        }}
      >
        Continue with GitHub
      </Button>
    </AuthShell>
  );
};

export default Login;
