import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Terminal as XTerm } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import "@xterm/xterm/css/xterm.css";
import { AppShell } from "../components/AppShell";
import { Button, Card, DistroMark, Notice, Spinner } from "../components/Primitives";
import { api, errorMessage } from "../api/client";
import { connectTerminal } from "../lib/terminalSocket";

const THEME = {
  background: "#0e131c",
  foreground: "#e8edf5",
  cursor: "#34d399",
  cursorAccent: "#0e131c",
  selectionBackground: "rgba(52,211,153,0.25)",
  black: "#080b12",
  red: "#f43f5e",
  green: "#34d399",
  yellow: "#f59e0b",
  blue: "#60a5fa",
  magenta: "#c084fc",
  cyan: "#22d3ee",
  white: "#cbd5e1",
  brightBlack: "#64748b",
  brightRed: "#fb7185",
  brightGreen: "#6ee7b7",
  brightYellow: "#fcd34d",
  brightBlue: "#93c5fd",
  brightMagenta: "#d8b4fe",
  brightCyan: "#67e8f9",
  brightWhite: "#f8fafc",
};

const SOCKET_STATES = {
  connecting: { label: "Connecting", dot: "bg-warn animate-breathe", text: "text-warn" },
  connected: { label: "Live", dot: "bg-accent animate-breathe", text: "text-accent" },
  closed: { label: "Detached", dot: "bg-text-faint", text: "text-text-muted" },
  failed: { label: "Error", dot: "bg-danger", text: "text-danger" },
};

const TerminalPage = () => {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const mountRef = useRef(null);
  const linkRef = useRef(null);

  const [session, setSession] = useState(null);
  const [distro, setDistro] = useState(null);
  const [connection, setConnection] = useState("connecting");
  const [error, setError] = useState("");
  const [stopping, setStopping] = useState(false);

  useEffect(() => {
    let cancelled = false;

    api
      .session(sessionId)
      .then(async (loaded) => {
        if (cancelled) return;
        setSession(loaded);
        const catalog = await api.distros().catch(() => []);
        if (!cancelled) setDistro(catalog.find((item) => item.slug === loaded.distroSlug) || null);
      })
      .catch((loadError) => {
        if (!cancelled) setError(errorMessage(loadError, "Session not found"));
      });

    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  useEffect(() => {
    if (!session || session.status !== "running" || !mountRef.current) return undefined;

    const term = new XTerm({
      cursorBlink: true,
      cursorStyle: "bar",
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 13,
      lineHeight: 1.4,
      theme: THEME,
      scrollback: 5000,
      allowProposedApi: true,
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(mountRef.current);
    fitAddon.fit();
    term.focus();

    const link = connectTerminal(sessionId, {
      onReady: () => {
        setConnection("connected");
        link.sendResize(term.cols, term.rows);
      },
      onOutput: (data) => term.write(data),
      onExit: (reason) => {
        setConnection("closed");
        term.writeln(`\r\n\x1b[38;5;244m── ${reason} ──\x1b[0m`);
      },
      onError: (message) => {
        setConnection("failed");
        setError(message);
      },
      onClose: () => setConnection((current) => (current === "failed" ? current : "closed")),
    });

    linkRef.current = link;

    const inputHandler = term.onData((data) => link.sendInput(data));

    const observer = new ResizeObserver(() => {
      fitAddon.fit();
      link.sendResize(term.cols, term.rows);
    });
    observer.observe(mountRef.current);

    return () => {
      observer.disconnect();
      inputHandler.dispose();
      link.close();
      term.dispose();
      linkRef.current = null;
    };
  }, [session, sessionId]);

  const handleStop = useCallback(async () => {
    setStopping(true);
    try {
      linkRef.current?.close();
      await api.stopSession(sessionId);
      navigate("/sessions");
    } catch (stopError) {
      setError(errorMessage(stopError, "Could not stop the sandbox"));
      setStopping(false);
    }
  }, [navigate, sessionId]);

  const socket = SOCKET_STATES[connection];

  return (
    <AppShell
      bleed
      title={distro ? `${distro.name} ${distro.release}` : session?.distroSlug || "Terminal"}
      subtitle={`Sandbox ${sessionId.slice(-8)} · files persist until you stop it`}
      actions={
        <>
          <Link to="/sessions" className="hidden sm:block">
            <Button size="sm" variant="ghost">
              All sessions
            </Button>
          </Link>
          <Button size="sm" variant="danger" onClick={handleStop} disabled={stopping}>
            {stopping ? <Spinner /> : null}
            {stopping ? "Stopping" : "Destroy"}
          </Button>
        </>
      }
    >
      {error ? (
        <div className="mb-4">
          <Notice>{error}</Notice>
        </div>
      ) : null}

      {session && session.status !== "running" ? (
        <Card className="px-6 py-16 text-center">
          <p className="text-sm text-text-muted">
            This sandbox is {session.status}
            {session.endReason ? ` (${session.endReason})` : ""}.
          </p>
          <Link to="/distros">
            <Button className="mt-5">Launch a new one</Button>
          </Link>
        </Card>
      ) : (
        <Card className="overflow-hidden">
          <div className="flex items-center justify-between gap-4 border-b border-border bg-surface-2/70 px-4 py-2.5">
            <div className="flex min-w-0 items-center gap-2.5">
              {distro ? (
                <DistroMark name={distro.name} accent={distro.accent} size="sm" />
              ) : null}
              <span className="mono truncate text-[12px] text-text-muted">
                playground@{session?.distroSlug || "sandbox"}
              </span>
            </div>

            <div className="flex shrink-0 items-center gap-4">
              <span className="hidden text-[11px] text-text-faint md:block">
                no network · discarded on stop
              </span>
              <span className={`flex items-center gap-1.5 text-[12px] font-medium ${socket.text}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${socket.dot}`} />
                {socket.label}
              </span>
            </div>
          </div>

          <div
            ref={mountRef}
            className="h-[calc(100vh-230px)] min-h-[380px] w-full bg-surface p-3"
          />
        </Card>
      )}
    </AppShell>
  );
};

export default TerminalPage;
