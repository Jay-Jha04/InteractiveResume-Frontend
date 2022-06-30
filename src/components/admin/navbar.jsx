import { NavLink } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="">
          <MenuOutlined />
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink
            className="mx-3 fs-5 fw-bold port-item"
            to="/admin-dashboard/projects"
            style={{ textDecoration: "none", color: "#111317" }}
          >
            Projects
          </NavLink>
          <NavLink
            className="mx-3 fs-5 fw-bold port-item"
            to="/admin-dashboard/experiences"
            style={{ textDecoration: "none", color: "#111317" }}
          >
            Experiences
          </NavLink>
          <NavLink
            className="mx-3 fs-5 fw-bold port-item"
            to="/admin-dashboard/skills"
            style={{ textDecoration: "none", color: "#111317" }}
          >
            Skills
          </NavLink>
          <NavLink
            className="mx-3 fs-5 fw-bold port-item"
            to="/admin-dashboard/profile"
            style={{ textDecoration: "none", color: "#111317" }}
          >
            Profile
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
