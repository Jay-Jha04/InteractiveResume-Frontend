import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm"
      style={{ backgroundColor: "#141532" }}
    >
      <Link
        to="/profile/home"
        className="navbar-brand mx-4 port-item"
        style={{ textDecoration: "none", color: "white" }}
      >
        Profile
      </Link>
      <Link
        to="/admin-dashboard/projects"
        className="navbar-brand mx-1 port-item"
        style={{ textDecoration: "none", color: "white" }}
      >
        Dashboard
      </Link>
    </nav>
  );
};

export default TopNavbar;
