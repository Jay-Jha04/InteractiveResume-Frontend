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
        className="navbar-brand port-item position-absolute"
        style={{ textDecoration: "none", color: "white", left: "7rem" }}
      >
        Dashboard
      </Link>
      <Link
        to="/logout"
        className="navbar-brand port-item position-absolute"
        style={{
          textDecoration: "none",
          color: "white",
          right: "2rem",
        }}
      >
        Logout
      </Link>
    </nav>
  );
};

export default TopNavbar;
