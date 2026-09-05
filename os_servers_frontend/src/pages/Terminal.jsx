import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Terminal as XTerm } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import "@xterm/xterm/css/xterm.css";
import { AppShell } from "../components/AppShell";
import { Button, DistroMark, Label, Notice } from "../components/Primitives";
import { api, errorMessage } from "../api/client";
import { connectTerminal } from "../lib/terminalSocket";

const THEME = {
  background: "#101314",
  foreground: "#e6e9ea",
  cursor: "#ffb020",
  cursorAccent: "#101314",
  selectionBackground: "#ffb02040",
  black: "#0b0d0e",
  red: "#ff5c5c",
  green: "#9ece6a",
  yellow: "#ffb020",
  blue: "#7aa2f7",
  magenta: "#bb9af7",
  cyan: "#7dcfff",
  white: "#c0caf5",
  brightBlack: "#5a6164",
  brightRed: "#ff7a7a",
  brightGreen: "#b9f27c",
  brightYellow: "#ffc85c",
  brightBlue: "#a4c4ff",
  brightMagenta: "#d0b4ff",
  brightCyan: "#a8e3ff",
  brightWhite: "#ffffff",
};

const TerminalPage = () => {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const mountRef = useRef(null);
  const termRef = useRef(null);
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
      lineHeight: 1.35,
      letterSpacing: 0.2,
      theme: THEME,
      scrollback: 5000,
      convertEol: false,
      allowProposedApi: true,
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(mountRef.current);
    fitAddon.fit();
    term.focus();
    termRef.current = term;

    const link = connectTerminal(sessionId, {
      onReady: () => {
        setConnection("connected");
        link.sendResize(term.cols, term.rows);
      },
      onOutput: (data) => term.write(data),
      onExit: (reason) => {
        setConnection("closed");
        term.writeln(`\r\n\x1b[38;5;244m-- ${reason} --\x1b[0m`);
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
      termRef.current = null;
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

  const socketState = {
    connecting: { label: "connecting", dot: "bg-ink-faint animate-pulse", text: "text-ink-muted" },
    connected: { label: "live", dot: "bg-accent animate-pulse", text: "text-accent" },
    closed: { label: "detached", dot: "bg-ink-faint", text: "text-ink-muted" },
    failed: { label: "error", dot: "bg-danger", text: "text-danger" },
  }[connection];

  return (
    <AppShell wide>
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-5">
          <div className="flex items-center gap-4">
            {distro ? <DistroMark name={distro.name} accent={distro.accent} size="lg" /> : null}
            <div>
              <Label>Sandbox {sessionId.slice(-8)}</Label>
              <h1 className="mt-1 text-xl font-bold">
                {distro ? `${distro.name} ${distro.release}` : session?.distroSlug || "Terminal"}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div>
              <Label>Socket</Label>
              <div
                className={`mt-1 inline-flex items-center gap-2 text-[10px] uppercase tracking-label ${socketState.text}`}
              >
                <span className={`h-1.5 w-1.5 ${socketState.dot}`} />
                {socketState.label}
              </div>
            </div>
            <Link to="/sessions">
              <Button variant="ghost">All sessions</Button>
            </Link>
            <Button variant="danger" onClick={handleStop} disabled={stopping}>
              {stopping ? "Stopping…" : "Destroy sandbox"}
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <Notice>{error}</Notice>
        </div>

        {session && session.status !== "running" ? (
          <div className="mt-6 border border-hairline bg-panel px-6 py-16 text-center">
            <p className="text-sm text-ink-muted">
              This sandbox is {session.status}
              {session.endReason ? ` (${session.endReason})` : ""}.
            </p>
            <Link to="/distros">
              <Button className="mt-6">Launch a new one</Button>
            </Link>
          </div>
        ) : (
          <div className="mt-6 border border-hairline bg-panel">
            <div className="flex items-center justify-between border-b border-hairline px-4 py-2">
              <div className="flex items-center gap-2">
                {["#ff5c5c", "#ffb020", "#5a6164"].map((color) => (
                  <span key={color} className="h-2 w-2 rounded-full" style={{ background: color }} />
                ))}
                <span className="ml-2 text-[10px] uppercase tracking-label text-ink-faint">
                  playground@{session?.distroSlug || "sandbox"}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-label text-ink-faint">
                no network · discarded on stop
              </span>
            </div>
            <div ref={mountRef} className="h-[calc(100vh-320px)] min-h-[420px] w-full p-3" />
          </div>
        )}

        <p className="prose-ui mt-4 text-[11px] text-ink-faint">
          Your files persist for the life of this sandbox. Stopping it, or leaving it idle, deletes
          everything inside.
        </p>
      </div>
    </AppShell>
  );
};

export default TerminalPage;
