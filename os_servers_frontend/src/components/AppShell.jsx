import { useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import { Label } from "./Primitives";

const NAV_ITEMS = [
  { to: "/distros", label: "Distros" },
  { to: "/sessions", label: "Sessions" },
];

const TopBar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [avatarBroken, setAvatarBroken] = useState(false);

  const handleSignOut = () => {
    signOut();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-20 border-b border-hairline bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-shell items-center justify-between gap-6 px-6">
        <Link to="/distros" className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center border border-accent text-accent">
            <span className="text-xs font-bold">$_</span>
          </span>
          <span className="text-sm font-bold tracking-label">LINUX PLAYGROUNDS</span>
        </Link>

        <nav className="ml-auto flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `border px-3 py-1.5 text-[10px] uppercase tracking-label transition-colors ${
                  isActive
                    ? "border-accent text-accent"
                    : "border-transparent text-ink-muted hover:text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3 border-l border-hairline pl-4">
          <div className="hidden text-right sm:block">
            <div className="text-xs text-ink">{user?.displayName || user?.username}</div>
            <Label>{user?.linkedGithub ? `gh:${user.githubLogin}` : "local account"}</Label>
          </div>
          {user?.avatarUrl && !avatarBroken ? (
            <img
              src={user.avatarUrl}
              alt=""
              onError={() => setAvatarBroken(true)}
              className="h-8 w-8 border border-hairline object-cover"
            />
          ) : (
            <span className="flex h-8 w-8 items-center justify-center border border-hairline text-xs uppercase text-ink-muted">
              {(user?.username || "?").slice(0, 2)}
            </span>
          )}
          <button
            onClick={handleSignOut}
            className="text-[10px] uppercase tracking-label text-ink-faint transition-colors hover:text-danger"
          >
            Exit
          </button>
        </div>
      </div>
    </header>
  );
};

export const AppShell = ({ children, wide = false }) => (
  <div className="flex min-h-full flex-col">
    <TopBar />
    <main className={`mx-auto w-full flex-1 px-6 py-8 ${wide ? "max-w-none" : "max-w-shell"}`}>
      {children}
    </main>
  </div>
);

AppShell.propTypes = { children: PropTypes.node, wide: PropTypes.bool };

export const AuthShell = ({ title, subtitle, children, footer }) => (
  <div className="relative flex min-h-full items-center justify-center px-6 py-12">
    <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
    <div className="relative w-full max-w-[380px]">
      <div className="mb-8 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center border border-accent text-accent">
          <span className="text-xs font-bold">$_</span>
        </span>
        <span className="text-sm font-bold tracking-label">LINUX PLAYGROUNDS</span>
      </div>
      <div className="border border-hairline bg-panel">
        <div className="scan-accent h-px w-full" />
        <div className="p-8">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="prose-ui mt-1 text-xs text-ink-muted">{subtitle}</p>
          <div className="mt-7">{children}</div>
        </div>
      </div>
      {footer ? <div className="mt-5 text-center text-xs text-ink-muted">{footer}</div> : null}
    </div>
  </div>
);

AuthShell.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node,
};
