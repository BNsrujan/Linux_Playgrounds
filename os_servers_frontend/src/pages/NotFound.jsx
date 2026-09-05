import { Link } from "react-router-dom";
import { AuthShell } from "../components/AppShell";
import { Button } from "../components/Primitives";

const NotFound = () => (
  <AuthShell title="404" subtitle="That route does not exist in this playground.">
    <Link to="/distros">
      <Button className="w-full">Back to the catalog</Button>
    </Link>
  </AuthShell>
);

export default NotFound;
