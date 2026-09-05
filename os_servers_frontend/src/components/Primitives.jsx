import PropTypes from "prop-types";

const BUTTON_BASE =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-55";

const BUTTON_VARIANTS = {
  primary:
    "accent-gradient text-accent-ink font-semibold shadow-[0_6px_18px_-8px_rgba(52,211,153,0.65)] hover:brightness-110 active:brightness-95",
  secondary:
    "bg-surface-3 text-text border border-border-strong hover:bg-[#212a3a] hover:border-[#3a4759]",
  ghost: "bg-transparent text-text-muted hover:bg-surface-3 hover:text-text",
  danger:
    "bg-danger/10 text-danger border border-danger/30 hover:bg-danger/20 hover:border-danger/50",
};

const BUTTON_SIZES = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-9 px-4",
  lg: "h-11 px-5",
};

export const Button = ({ variant = "primary", size = "md", className = "", ...props }) => (
  <button
    className={`${BUTTON_BASE} ${BUTTON_VARIANTS[variant]} ${BUTTON_SIZES[size]} ${className}`}
    {...props}
  />
);

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "ghost", "danger"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

export const Card = ({ children, className = "", interactive = false }) => (
  <div
    className={`surface-card rounded-xl ${
      interactive ? "transition-colors duration-200 hover:border-border-strong" : ""
    } ${className}`}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  interactive: PropTypes.bool,
};

export const Field = ({ label, hint, id, ...props }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-[13px] font-medium text-text-muted">
      {label}
    </label>
    <input
      id={id}
      className="h-10 rounded-md border border-border bg-bg px-3 text-sm text-text placeholder:text-text-faint transition-colors focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/15"
      {...props}
    />
    {hint ? <span className="text-xs text-text-faint">{hint}</span> : null}
  </div>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  id: PropTypes.string,
};

export const Notice = ({ tone = "error", children }) => {
  if (!children) return null;

  const tones = {
    error: "border-danger/30 bg-danger/10 text-danger",
    info: "border-border bg-surface-2 text-text-muted",
  };

  return (
    <div
      role={tone === "error" ? "alert" : undefined}
      className={`flex items-start gap-2 rounded-md border px-3 py-2.5 text-[13px] ${tones[tone]}`}
    >
      <span aria-hidden="true" className="mt-[3px] block h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
      <span>{children}</span>
    </div>
  );
};

Notice.propTypes = { tone: PropTypes.oneOf(["error", "info"]), children: PropTypes.node };

const STATUS_STYLES = {
  running: "border-accent/30 bg-accent/10 text-accent",
  starting: "border-warn/30 bg-warn/10 text-warn",
  stopped: "border-border-strong bg-surface-3 text-text-muted",
  failed: "border-danger/30 bg-danger/10 text-danger",
};

const STATUS_DOTS = {
  running: "bg-accent animate-breathe",
  starting: "bg-warn animate-breathe",
  stopped: "bg-text-faint",
  failed: "bg-danger",
};

export const StatusPill = ({ status, label }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${
      STATUS_STYLES[status] || STATUS_STYLES.stopped
    }`}
  >
    <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOTS[status] || STATUS_DOTS.stopped}`} />
    {label || status}
  </span>
);

StatusPill.propTypes = { status: PropTypes.string.isRequired, label: PropTypes.string };

export const Tag = ({ children }) => (
  <span className="mono rounded border border-border bg-bg/60 px-1.5 py-0.5 text-[11px] text-text-muted">
    {children}
  </span>
);

Tag.propTypes = { children: PropTypes.node };

export const DistroMark = ({ name, accent, size = "md" }) => {
  const dimensions = {
    sm: "h-8 w-8 text-[11px] rounded-md",
    md: "h-11 w-11 text-sm rounded-lg",
    lg: "h-12 w-12 text-base rounded-lg",
  }[size];

  return (
    <span
      className={`mono flex ${dimensions} shrink-0 items-center justify-center font-semibold uppercase`}
      style={{
        color: accent,
        backgroundColor: `${accent}1F`,
        boxShadow: `inset 0 0 0 1px ${accent}55`,
      }}
      aria-hidden="true"
    >
      {name.slice(0, 2)}
    </span>
  );
};

DistroMark.propTypes = {
  name: PropTypes.string.isRequired,
  accent: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export const Stat = ({ label, value, accent = false }) => (
  <div className="px-4 py-3">
    <div className="text-[11px] font-medium uppercase tracking-wide text-text-faint">{label}</div>
    <div className={`mono mt-1 text-sm ${accent ? "text-accent" : "text-text"}`}>{value}</div>
  </div>
);

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  accent: PropTypes.bool,
};

export const Spinner = ({ className = "" }) => (
  <span
    className={`inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent ${className}`}
    aria-hidden="true"
  />
);

Spinner.propTypes = { className: PropTypes.string };

export const EmptyState = ({ title, children }) => (
  <div className="flex flex-col items-center gap-2 px-6 py-16 text-center">
    <p className="text-sm font-medium text-text">{title}</p>
    <div className="text-[13px] text-text-muted">{children}</div>
  </div>
);

EmptyState.propTypes = { title: PropTypes.string.isRequired, children: PropTypes.node };
