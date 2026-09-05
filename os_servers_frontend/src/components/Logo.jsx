import PropTypes from "prop-types";

const Logo = ({ compact = false }) => (
  <span className="flex items-center gap-2.5">
    <span className="accent-gradient flex h-8 w-8 shrink-0 items-center justify-center rounded-lg shadow-[0_4px_14px_-6px_rgba(52,211,153,0.8)]">
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="var(--accent-ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5.5 8 10l-4 4.5" />
        <path d="M10.5 14.5h5.5" />
      </svg>
    </span>
    {compact ? null : (
      <span className="flex flex-col leading-none">
        <span className="text-[13px] font-semibold tracking-tight text-text">Playgrounds</span>
        <span className="text-[11px] text-text-faint">linux sandboxes</span>
      </span>
    )}
  </span>
);

Logo.propTypes = { compact: PropTypes.bool };

export default Logo;
