import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { AppShell } from "../components/AppShell";
import { Button, DistroMark, Label, Notice, Panel } from "../components/Primitives";
import { api, errorMessage } from "../api/client";

const DistroCard = ({ distro, onLaunch, launching }) => (
  <Panel className="flex flex-col transition-colors hover:border-hairline-strong">
    <div className="flex items-start gap-4 p-5">
      <DistroMark name={distro.name} accent={distro.accent} size="lg" />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <h2 className="truncate text-base font-bold">{distro.name}</h2>
          <span className="text-[11px] text-ink-faint">{distro.release}</span>
        </div>
        <p className="prose-ui mt-1 text-xs text-ink-muted">{distro.tagline}</p>
      </div>
    </div>

    <p className="prose-ui flex-1 px-5 text-xs leading-relaxed text-ink-muted">
      {distro.description}
    </p>

    <dl className="mt-5 grid grid-cols-2 gap-px border-y border-hairline bg-hairline">
      <div className="bg-panel px-5 py-3">
        <Label>Family</Label>
        <dd className="mt-1 text-xs">{distro.family}</dd>
      </div>
      <div className="bg-panel px-5 py-3">
        <Label>Packages</Label>
        <dd className="mt-1 text-xs">{distro.packageManager}</dd>
      </div>
    </dl>

    <div className="flex flex-wrap gap-1.5 p-5">
      {distro.tools.map((tool) => (
        <span key={tool} className="border border-hairline px-2 py-0.5 text-[10px] text-ink-muted">
          {tool}
        </span>
      ))}
    </div>

    <div className="border-t border-hairline p-4">
      <Button className="w-full" onClick={() => onLaunch(distro.slug)} disabled={Boolean(launching)}>
        {launching === distro.slug ? "Starting sandbox…" : "Launch sandbox"}
      </Button>
    </div>
  </Panel>
);

DistroCard.propTypes = {
  distro: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    release: PropTypes.string,
    family: PropTypes.string,
    accent: PropTypes.string.isRequired,
    packageManager: PropTypes.string,
    tagline: PropTypes.string,
    description: PropTypes.string,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onLaunch: PropTypes.func.isRequired,
  launching: PropTypes.string,
};

const Distros = () => {
  const navigate = useNavigate();
  const [distros, setDistros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [launching, setLaunching] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .distros()
      .then(setDistros)
      .catch((loadError) => setError(errorMessage(loadError, "Could not load distros")))
      .finally(() => setLoading(false));
  }, []);

  const handleLaunch = async (slug) => {
    setLaunching(slug);
    setError("");
    try {
      const { session } = await api.createSession(slug);
      navigate(`/terminal/${session.id}`);
    } catch (launchError) {
      setError(errorMessage(launchError, "Could not start the sandbox"));
      setLaunching("");
    }
  };

  return (
    <AppShell>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-6">
        <div>
          <Label>Catalog</Label>
          <h1 className="mt-2 text-2xl font-bold">Pick a distribution</h1>
          <p className="prose-ui mt-2 max-w-xl text-xs text-ink-muted">
            Each launch gives you an isolated container with a real shell. Nothing you do inside
            reaches the host, and the sandbox is discarded when you stop it.
          </p>
        </div>
        <div className="text-right">
          <Label>Available</Label>
          <div className="text-2xl font-bold text-accent">{distros.length || "—"}</div>
        </div>
      </div>

      <Notice>{error}</Notice>

      {loading ? (
        <p className="py-16 text-center text-xs text-ink-faint">Loading catalog…</p>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {distros.map((distro) => (
            <DistroCard
              key={distro.slug}
              distro={distro}
              onLaunch={handleLaunch}
              launching={launching}
            />
          ))}
        </div>
      )}
    </AppShell>
  );
};

export default Distros;
