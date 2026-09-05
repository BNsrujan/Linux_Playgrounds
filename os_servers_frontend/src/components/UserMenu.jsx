import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";

const UserMenu = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [avatarBroken, setAvatarBroken] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) setOpen(false);
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSignOut = () => {
    signOut();
    navigate("/login", { replace: true });
  };

  const initials = (user?.displayName || user?.username || "?").slice(0, 2);

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-md border border-transparent py-1 pl-1 pr-2 transition-colors hover:border-border hover:bg-surface-2"
      >
        {user?.avatarUrl && !avatarBroken ? (
          <img
            src={user.avatarUrl}
            alt=""
            onError={() => setAvatarBroken(true)}
            className="h-7 w-7 rounded-full border border-border object-cover"
          />
        ) : (
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface-3 text-[11px] font-semibold uppercase text-text-muted">
            {initials}
          </span>
        )}
        <span className="hidden text-[13px] font-medium text-text sm:block">
          {user?.displayName || user?.username}
        </span>
        <svg viewBox="0 0 12 12" className="h-3 w-3 text-text-faint" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 4.5 3 3 3-3" />
        </svg>
      </button>

      {open ? (
        <div
          role="menu"
          className="surface-card absolute right-0 top-[calc(100%+8px)] z-40 w-60 animate-fade-up overflow-hidden rounded-lg"
        >
          <div className="border-b border-border px-3.5 py-3">
            <div className="truncate text-[13px] font-medium text-text">
              {user?.displayName || user?.username}
            </div>
            <div className="mono truncate text-[11px] text-text-faint">{user?.email}</div>
          </div>
          <div className="px-3.5 py-2.5 text-[12px] text-text-muted">
            {user?.linkedGithub ? (
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                GitHub linked as {user.githubLogin}
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-text-faint" />
                Password account
              </span>
            )}
          </div>
          <button
            role="menuitem"
            onClick={handleSignOut}
            className="w-full border-t border-border px-3.5 py-2.5 text-left text-[13px] text-text-muted transition-colors hover:bg-danger/10 hover:text-danger"
          >
            Sign out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default UserMenu;
