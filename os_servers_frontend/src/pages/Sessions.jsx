import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { AppShell } from "../components/AppShell";
import {
  Button,
  Card,
  DistroMark,
  EmptyState,
  Notice,
  Spinner,
  Stat,
  StatusPill,
} from "../components/Primitives";
import { api, errorMessage } from "../api/client";

const ACCENTS = {
  ubuntu: "#E95420",
  debian: "#A81D33",
  alpine: "#0D597F",
  fedora: "#3C6EB4",
  arch: "#1793D1",
};

const formatWhen = (value) => {
  if (!value) return "—";
  const minutes = Math.round((Date.now() - new Date(value).getTime()) / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
};

const SessionRow = ({ session, onStop, onResume, busy }) => {
  const active = session.status === "running" || session.status === "starting";

  return (
    <tr className="border-t border-border transition-colors hover:bg-surface-2/60">
      <td className="px-5 py-3.5">
        <div className="flex items-center gap-3">
          <DistroMark
            name={session.distroSlug}
            accent={ACCENTS[session.distroSlug] || "#64748B"}
            size="sm"
          />
          <div className="min-w-0">
            <div className="text-[13px] font-medium capitalize text-text">
              {session.distroSlug}
            </div>
            <div className="mono text-[11px] text-text-faint">{session.id.slice(-8)}</div>
          </div>
        </div>
      </td>
      <td className="px-5 py-3.5">
        <StatusPill status={session.status} />
        {session.errorMessage ? (
          <div className="mt-1 max-w-[220px] text-[11px] text-danger">{session.errorMessage}</div>
        ) : null}
      </td>
      <td className="mono px-5 py-3.5 text-[13px] text-text-muted">{session.commandCount}</td>
      <td className="px-5 py-3.5 text-[13px] text-text-muted">{formatWhen(session.createdAt)}</td>
      <td className="px-5 py-3.5 text-[13px] text-text-muted">{formatWhen(session.lastActiveAt)}</td>
      <td className="px-5 py-3.5">
        <div className="flex justify-end gap-2">
          {active ? (
            <>
              <Button size="sm" variant="secondary" onClick={() => onResume(session.id)}>
                Attach
              </Button>
              <Button size="sm" variant="danger" onClick={() => onStop(session.id)} disabled={busy}>
                Stop
              </Button>
            </>
          ) : (
            <Button
              size="sm"
              variant="ghost"
              disabled={busy}
              onClick={() => onResume(session.distroSlug, true)}
            >
              Relaunch
            </Button>
          )}
        </div>
      </td>
    </tr>
  );
};

SessionRow.propTypes = {
  session: PropTypes.object.isRequired,
  onStop: PropTypes.func.isRequired,
  onResume: PropTypes.func.isRequired,
  busy: PropTypes.bool,
};

const Sessions = () => {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState([]);
  const [limits, setLimits] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const refresh = useCallback(async () => {
    try {
      const [sessionData, commands] = await Promise.all([api.sessions(), api.history()]);
      setSessions(sessionData.sessions);
      setLimits(sessionData.limits);
      setHistory(commands);
    } catch (loadError) {
      setError(errorMessage(loadError, "Could not load your sessions"));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
    const timer = setInterval(refresh, 15000);
    return () => clearInterval(timer);
  }, [refresh]);

  const handleStop = async (id) => {
    setBusy(true);
    setError("");
    try {
      await api.stopSession(id);
      await refresh();
    } catch (stopError) {
      setError(errorMessage(stopError, "Could not stop the sandbox"));
    } finally {
      setBusy(false);
    }
  };

  const handleResume = async (idOrSlug, relaunch = false) => {
    if (!relaunch) return navigate(`/terminal/${idOrSlug}`);

    setBusy(true);
    setError("");
    try {
      const { session } = await api.createSession(idOrSlug);
      navigate(`/terminal/${session.id}`);
    } catch (launchError) {
      setError(errorMessage(launchError, "Could not relaunch the sandbox"));
      setBusy(false);
    }
  };

  return (
    <AppShell
      title="Sessions"
      subtitle="Containers stay alive between commands and are reaped once idle"
      actions={
        <Link to="/distros">
          <Button size="sm">New sandbox</Button>
        </Link>
      }
    >
      {error ? (
        <div className="mb-5">
          <Notice>{error}</Notice>
        </div>
      ) : null}

      {limits ? (
        <Card className="mb-5 grid grid-cols-2 divide-x divide-y divide-border sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-5">
          <Stat label="Memory" value={`${limits.memoryMb} MB`} />
          <Stat label="CPU" value={`${limits.cpus} core`} />
          <Stat label="Network" value={limits.network} />
          <Stat label="Idle cutoff" value={`${limits.idleTimeoutMinutes} min`} />
          <Stat label="Max active" value={limits.maxSessionsPerUser} accent />
        </Card>
      ) : null}

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left">
            <thead>
              <tr className="bg-surface-2/70">
                {["Sandbox", "Status", "Commands", "Started", "Last active", ""].map((heading) => (
                  <th
                    key={heading}
                    className="px-5 py-2.5 text-[11px] font-medium uppercase tracking-wide text-text-faint"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6}>
                    <div className="flex items-center justify-center gap-2 py-14 text-[13px] text-text-faint">
                      <Spinner />
                      Loading sessions
                    </div>
                  </td>
                </tr>
              ) : sessions.length === 0 ? (
                <tr>
                  <td colSpan={6}>
                    <EmptyState title="No sandboxes yet">
                      <Link to="/distros" className="text-accent hover:underline">
                        Launch your first one
                      </Link>{" "}
                      from the catalog.
                    </EmptyState>
                  </td>
                </tr>
              ) : (
                sessions.map((session) => (
                  <SessionRow
                    key={session.id}
                    session={session}
                    onStop={handleStop}
                    onResume={handleResume}
                    busy={busy}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      <section className="mt-8">
        <h2 className="mb-3 text-[13px] font-semibold tracking-tight text-text">Recent commands</h2>
        <Card className="overflow-hidden">
          {history.length === 0 ? (
            <EmptyState title="Nothing run yet">
              Commands you type in a sandbox show up here.
            </EmptyState>
          ) : (
            <ul className="divide-y divide-border">
              {history.map((entry) => (
                <li key={entry.id} className="flex items-center gap-4 px-5 py-2.5">
                  <span className="w-16 shrink-0 text-[11px] capitalize text-text-faint">
                    {entry.distroSlug}
                  </span>
                  <code className="mono min-w-0 flex-1 truncate text-[12.5px] text-text">
                    <span className="text-accent">$ </span>
                    {entry.command}
                  </code>
                  <span className="shrink-0 text-[11px] text-text-faint">
                    {formatWhen(entry.createdAt)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </section>
    </AppShell>
  );
};

export default Sessions;
