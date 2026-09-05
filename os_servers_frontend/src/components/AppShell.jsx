import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { api } from "../api/client";

const NAV_ITEMS = [
  {
    to: "/distros",
    label: "Distros",
    icon: (
      <>
        <rect x="2.5" y="2.5" width="6" height="6" rx="1.5" />
        <rect x="11.5" y="2.5" width="6" height="6" rx="1.5" />
        <rect x="2.5" y="11.5" width="6" height="6" rx="1.5" />
        <rect x="11.5" y="11.5" width="6" height="6" rx="1.5" />
      </>
    ),
  },
  {
    to: "/sessions",
    label: "Sessions",
    icon: (
      <>
        <rect x="2.5" y="3.5" width="15" height="13" rx="2" />
        <path d="m6 8 2.5 2.5L6 13" />
        <path d="M11 13h3.5" />
      </>
    ),
  },
];

const NavIcon = ({ children }) => (
  <svg
    viewBox="0 0 20 20"
    className="h-[18px] w-[18px] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

NavIcon.propTypes = { children: PropTypes.node };

const LiveCounter = () => {
  const [count, setCount] = useState(null);
  const location = useLocation();

  useEffect(() => {
    let active = true;

    const load = () =>
      api
        .sessions()
        .then(({ sessions }) => {
          if (!active) return;
          setCount(
            sessions.filter((item) => item.status === "running" || item.status === "starting").length
          );
        })
        .catch(() => {});

    load();
    const timer = setInterval(load, 20000);
    return () => {
      active = false;
      clearInterval(timer);
    };
  }, [location.pathname]);

  return (
    <div className="surface-flat flex items-center gap-2 rounded-lg px-3 py-2.5">
      <span
        className={`h-1.5 w-1.5 rounded-full ${count ? "bg-accent animate-breathe" : "bg-text-faint"}`}
      />
      <span className="text-[12px] text-text-muted">
        {count === null ? "checking…" : `${count} sandbox${count === 1 ? "" : "es"} live`}
      </span>
    </div>
  );
};

const Sidebar = ({ open, onClose }) => (
  <>
    <div
      onClick={onClose}
      className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden="true"
    />
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex w-60 shrink-0 flex-col border-r border-border bg-surface transition-transform duration-200 lg:static lg:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-16 items-center px-4">
        <Logo />
      </div>

      <nav className="flex flex-col gap-1 px-3">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onClose}
            className={({ isActive }) =>
              `relative flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] font-medium transition-colors ${
                isActive
                  ? "bg-accent/10 text-accent"
                  : "text-text-muted hover:bg-surface-3 hover:text-text"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <span className="absolute inset-y-1.5 -left-3 w-0.5 rounded-r bg-accent" />
                ) : null}
                <NavIcon>{item.icon}</NavIcon>
                {item.label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto space-y-3 p-3">
        <LiveCounter />
        <p className="px-1 text-[11px] leading-relaxed text-text-faint">
          Sandboxes are capped, offline and deleted when stopped.
        </p>
      </div>
    </aside>
  </>
);

Sidebar.propTypes = { open: PropTypes.bool, onClose: PropTypes.func };

export const AppShell = ({ title, subtitle, actions, children, bleed = false }) => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setNavOpen(false), [location.pathname]);

  return (
    <div className="flex min-h-full">
      <Sidebar open={navOpen} onClose={() => setNavOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 border-b border-border bg-bg/85 backdrop-blur-md">
          <div className="flex min-h-16 items-center gap-4 px-5 py-3 sm:px-8">
            <button
              onClick={() => setNavOpen(true)}
              aria-label="Open navigation"
              className="-ml-1 rounded-md p-2 text-text-muted transition-colors hover:bg-surface-3 hover:text-text lg:hidden"
            >
              <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                <path d="M3 5.5h14M3 10h14M3 14.5h14" />
              </svg>
            </button>

            <div className="min-w-0 flex-1">
              <h1 className="truncate text-[17px] font-semibold tracking-tight text-text">{title}</h1>
              {subtitle ? (
                <p className="truncate text-[13px] text-text-muted">{subtitle}</p>
              ) : null}
            </div>

            {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
            <UserMenu />
          </div>
        </header>

        <main className={bleed ? "flex-1 px-5 py-6 sm:px-8" : "flex-1 px-5 py-7 sm:px-8"}>
          <div className={bleed ? "" : "mx-auto w-full max-w-content"}>{children}</div>
        </main>
      </div>
    </div>
  );
};

AppShell.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  actions: PropTypes.node,
  children: PropTypes.node,
  bleed: PropTypes.bool,
};

export const AuthShell = ({ title, subtitle, children, footer }) => (
  <div className="aurora relative flex min-h-full items-center justify-center px-5 py-12">
    <div className="w-full max-w-[400px] animate-fade-up">
      <div className="mb-7 flex justify-center">
        <Logo />
      </div>

      <div className="surface-card rounded-2xl p-7">
        <h1 className="text-lg font-semibold tracking-tight text-text">{title}</h1>
        {subtitle ? <p className="mt-1 text-[13px] text-text-muted">{subtitle}</p> : null}
        <div className="mt-6">{children}</div>
      </div>

      {footer ? (
        <div className="mt-5 text-center text-[13px] text-text-muted">{footer}</div>
      ) : null}
    </div>
  </div>
);

AuthShell.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node,
};
