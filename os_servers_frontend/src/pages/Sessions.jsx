import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { AppShell } from "../components/AppShell";
import { Button, Label, Notice, Panel, StatusTag } from "../components/Primitives";
import { api, errorMessage } from "../api/client";

const formatWhen = (value) => {
  if (!value) return "—";
  const elapsed = Date.now() - new Date(value).getTime();
  const minutes = Math.round(elapsed / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
};

const LimitsBar = ({ limits }) => (
  <dl className="grid grid-cols-2 gap-px border border-hairline bg-hairline sm:grid-cols-5">
    {[
      ["Memory", `${limits.memoryMb} MB`],
      ["CPU", `${limits.cpus} core`],
      ["Network", limits.network],
      ["Idle cutoff", `${limits.idleTimeoutMinutes} min`],
      ["Max active", limits.maxSessionsPerUser],
    ].map(([label, value]) => (
      <div key={label} className="bg-panel px-4 py-3">
        <Label>{label}</Label>
        <dd className="mt-1 text-xs text-ink">{value}</dd>
      </div>
    ))}
  </dl>
);

LimitsBar.propTypes = { limits: PropTypes.object.isRequired };

const SessionRow = ({ session, onStop, onResume, busy }) => {
  const active = session.status === "running" || session.status === "starting";

  return (
    <tr className="border-t border-hairline">
      <td className="px-4 py-3">
        <div className="text-xs font-medium uppercase">{session.distroSlug}</div>
        <div className="text-[11px] text-ink-faint">{session.id.slice(-8)}</div>
      </td>
      <td className="px-4 py-3">
        <StatusTag status={session.status} />
        {session.errorMessage ? (
          <div className="mt-1 text-[11px] text-danger">{session.errorMessage}</div>
        ) : null}
      </td>
      <td className="px-4 py-3 text-xs text-ink-muted">{session.commandCount}</td>
      <td className="px-4 py-3 text-xs text-ink-muted">{formatWhen(session.createdAt)}</td>
      <td className="px-4 py-3 text-xs text-ink-muted">{formatWhen(session.lastActiveAt)}</td>
      <td className="px-4 py-3 text-right">
        {active ? (
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => onResume(session.id)}>
              Attach
            </Button>
            <Button variant="danger" onClick={() => onStop(session.id)} disabled={busy}>
              Stop
            </Button>
          </div>
        ) : (
          <Button variant="ghost" onClick={() => onResume(session.distroSlug, true)}>
            Relaunch
          </Button>
        )}
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
      setError(errorMessage(loadError, "Could not load sessions"));
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

  const activeCount = sessions.filter((s) => s.status === "running" || s.status === "starting").length;

  return (
    <AppShell>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-6">
        <div>
          <Label>Control</Label>
          <h1 className="mt-2 text-2xl font-bold">Your sandboxes</h1>
          <p className="prose-ui mt-2 max-w-xl text-xs text-ink-muted">
            Containers stay alive between commands and are reaped once they go idle. Stopping one
            deletes its filesystem for good.
          </p>
        </div>
        <div className="text-right">
          <Label>Active now</Label>
          <div className="text-2xl font-bold text-accent">{activeCount}</div>
        </div>
      </div>

      <Notice>{error}</Notice>

      {limits ? <LimitsBar limits={limits} /> : null}

      <Panel className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left">
          <thead>
            <tr className="bg-raised">
              {["Distro", "Status", "Commands", "Started", "Last active", ""].map((heading) => (
                <th key={heading} className="px-4 py-3 text-[10px] uppercase tracking-label text-ink-faint">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="px-4 py-12 text-center text-xs text-ink-faint">
                  Loading sessions…
                </td>
              </tr>
            ) : sessions.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-12 text-center text-xs text-ink-faint">
                  No sandboxes yet.{" "}
                  <Link to="/distros" className="text-accent hover:underline">
                    Launch one
                  </Link>
                  .
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
      </Panel>

      <div className="mt-10">
        <Label>Recent commands</Label>
        <Panel className="mt-3">
          {history.length === 0 ? (
            <p className="px-4 py-8 text-center text-xs text-ink-faint">
              Commands you run show up here.
            </p>
          ) : (
            <ul>
              {history.map((entry) => (
                <li
                  key={entry.id}
                  className="flex items-center gap-4 border-b border-hairline px-4 py-2 last:border-b-0"
                >
                  <span className="w-16 shrink-0 text-[10px] uppercase tracking-label text-ink-faint">
                    {entry.distroSlug}
                  </span>
                  <code className="min-w-0 flex-1 truncate text-xs text-ink">
                    <span className="text-accent">$ </span>
                    {entry.command}
                  </code>
                  <span className="shrink-0 text-[11px] text-ink-faint">
                    {formatWhen(entry.createdAt)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Panel>
      </div>
    </AppShell>
  );
};

export default Sessions;
