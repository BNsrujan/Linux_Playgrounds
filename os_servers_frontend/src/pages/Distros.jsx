import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { AppShell } from "../components/AppShell";
import { Button, Card, DistroMark, Notice, Spinner, Tag } from "../components/Primitives";
import { api, errorMessage } from "../api/client";

const DistroCard = ({ distro, onLaunch, launching }) => {
  const isLaunching = launching === distro.slug;

  return (
    <Card interactive className="group flex flex-col overflow-hidden">
      <div
        className="h-0.5 w-full opacity-70 transition-opacity group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, ${distro.accent}, transparent)` }}
      />

      <div className="flex items-start gap-3.5 p-5 pb-4">
        <DistroMark name={distro.name} accent={distro.accent} />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <h2 className="truncate text-[15px] font-semibold tracking-tight text-text">
              {distro.name}
            </h2>
            <span className="mono shrink-0 text-[11px] text-text-faint">{distro.release}</span>
          </div>
          <p className="mt-0.5 text-[13px] text-text-muted">{distro.tagline}</p>
        </div>
      </div>

      <p className="flex-1 px-5 text-[13px] leading-relaxed text-text-muted">
        {distro.description}
      </p>

      <div className="mt-4 flex items-center gap-4 border-y border-border px-5 py-2.5 text-[12px]">
        <span className="text-text-faint">
          Family <span className="ml-1 text-text-muted">{distro.family}</span>
        </span>
        <span className="text-text-faint">
          Packages <span className="mono ml-1 text-text-muted">{distro.packageManager}</span>
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5 px-5 py-4">
        {distro.tools.map((tool) => (
          <Tag key={tool}>{tool}</Tag>
        ))}
      </div>

      <div className="px-5 pb-5">
        <Button
          variant="accent"
          className="w-full"
          onClick={() => onLaunch(distro.slug)}
          disabled={Boolean(launching)}
        >
          {isLaunching ? <Spinner /> : null}
          {isLaunching ? "Starting sandbox" : "Launch sandbox"}
        </Button>
      </div>
    </Card>
  );
};

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

const SkeletonCard = () => (
  <Card className="h-[340px] animate-pulse opacity-50">
    <div className="flex items-start gap-3.5 p-5">
      <div className="h-11 w-11 rounded-lg bg-surface-3" />
      <div className="flex-1 space-y-2">
        <div className="h-3.5 w-24 rounded bg-surface-3" />
        <div className="h-3 w-40 rounded bg-surface-3" />
      </div>
    </div>
    <div className="space-y-2 px-5">
      <div className="h-3 w-full rounded bg-surface-3" />
      <div className="h-3 w-11/12 rounded bg-surface-3" />
      <div className="h-3 w-4/6 rounded bg-surface-3" />
    </div>
  </Card>
);

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
      .catch((loadError) => setError(errorMessage(loadError, "Could not load the catalog")))
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
    <AppShell title="Distributions" subtitle="Pick a sandbox to launch">
      {error ? (
        <div className="mb-5">
          <Notice>{error}</Notice>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {loading
          ? [0, 1, 2, 3, 4, 5].map((key) => <SkeletonCard key={key} />)
          : distros.map((distro) => (
              <DistroCard
                key={distro.slug}
                distro={distro}
                onLaunch={handleLaunch}
                launching={launching}
              />
            ))}
      </div>
    </AppShell>
  );
};

export default Distros;
