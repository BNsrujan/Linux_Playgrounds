import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";

const PublicOnlyRoute = ({ children }) => {
  const { status } = useAuth();

  if (status === "loading") {
    return (
      <div className="flex min-h-full items-center justify-center gap-2 text-[13px] text-text-muted">
        <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
        Checking your session
      </div>
    );
  }

  if (status === "authenticated") return <Navigate to="/distros" replace />;

  return children;
};

PublicOnlyRoute.propTypes = { children: PropTypes.node };

export default PublicOnlyRoute;
