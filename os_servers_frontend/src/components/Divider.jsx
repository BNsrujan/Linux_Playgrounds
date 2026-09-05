import PropTypes from "prop-types";

const Divider = ({ children }) => (
  <div className="my-5 flex items-center gap-3">
    <span className="h-px flex-1 bg-border" />
    <span className="text-[11px] uppercase tracking-wide text-text-faint">{children}</span>
    <span className="h-px flex-1 bg-border" />
  </div>
);

Divider.propTypes = { children: PropTypes.node };

export default Divider;
