import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthShell } from "../components/AppShell";
import { Button, Field, Notice, Spinner } from "../components/Primitives";
import GithubButton from "../components/GithubButton";
import Divider from "../components/Divider";
import { useAuth } from "../auth/authContext";
import { errorMessage } from "../api/client";

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
      title="Welcome back"
      subtitle="Pick a distro and get a real shell in seconds."
      footer={
        <>
          No account yet?{" "}
          <Link to="/register" className="font-medium text-accent hover:underline">
            Create one
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Field
          id="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
        <Field
          id="password"
          label="Password"
          type="password"
          value={form.password}
          onChange={update("password")}
          placeholder="••••••••"
          autoComplete="current-password"
          required
        />
        <Notice>{error}</Notice>
        <Button type="submit" size="lg" disabled={busy} className="mt-1 w-full">
          {busy ? <Spinner /> : null}
          {busy ? "Signing in" : "Sign in"}
        </Button>
      </form>

      <Divider>or</Divider>
      <GithubButton />
    </AuthShell>
  );
};

export default Login;
