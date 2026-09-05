import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";

const PublicOnlyRoute = ({ children }) => {
  const { status } = useAuth();

  if (status === "loading") {
    return (
      <div className="flex min-h-full items-center justify-center text-xs text-ink-faint">
        Checking your session…
      </div>
    );
  }

  if (status === "authenticated") return <Navigate to="/distros" replace />;

  return children;
};

PublicOnlyRoute.propTypes = { children: PropTypes.node };

export default PublicOnlyRoute;
