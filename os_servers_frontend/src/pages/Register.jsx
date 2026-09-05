import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthShell } from "../components/AppShell";
import { Button, Field, Notice, Spinner } from "../components/Primitives";
import GithubButton from "../components/GithubButton";
import Divider from "../components/Divider";
import { useAuth } from "../auth/authContext";
import { errorMessage } from "../api/client";

const Register = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const update = (key) => (event) => setForm({ ...form, [key]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      await signUp(form);
      navigate("/distros", { replace: true });
    } catch (submitError) {
      setError(errorMessage(submitError, "Could not create the account"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <AuthShell
      title="Create your account"
      subtitle="Five distributions, one throwaway container each."
      footer={
        <>
          Already registered?{" "}
          <Link to="/login" className="font-medium text-accent hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Field
          id="username"
          label="Username"
          value={form.username}
          onChange={update("username")}
          placeholder="ada"
          hint="3–32 characters: letters, numbers, hyphen or underscore"
          autoComplete="username"
          required
        />
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
          hint="At least 8 characters"
          autoComplete="new-password"
          required
        />
        <Notice>{error}</Notice>
        <Button type="submit" size="lg" disabled={busy} className="mt-1 w-full">
          {busy ? <Spinner /> : null}
          {busy ? "Creating account" : "Create account"}
        </Button>
      </form>

      <Divider>or</Divider>
      <GithubButton label="Sign up with GitHub" />
    </AuthShell>
  );
};

export default Register;
