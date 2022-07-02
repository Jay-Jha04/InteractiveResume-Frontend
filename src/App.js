import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/admin/dashboard";
import TopNavbar from "./components/navbar";
import Home from "./components/profile/home/home";
import Project from "./components/profile/project/project";
import Contact from "./components/profile/contact";
import Profile from "./components/profile/profile";
import ProjectSettings from "./components/admin/project/projectSettings";
import ExperienceSettings from "./components/admin/experienceSettings";
import SkillSettings from "./components/admin/skillSettings";
import ProfileSettings from "./components/admin/profileSettings";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "antd/dist/antd.less";
import "./App.css";

function App() {
  return (
    <div className="container">
      {true && <TopNavbar />}
      <Routes>
        <Route path="/admin-dashboard" element={<Dashboard />}>
          <Route path="projects" element={<ProjectSettings />} />
          <Route path="experiences" element={<ExperienceSettings />} />
          <Route path="skills" element={<SkillSettings />} />
          <Route path="profile" element={<ProfileSettings />} />
          <Route
            path="*"
            element={<Navigate to="/admin-dashboard/projects" replace />}
          />
        </Route>
        <Route path="/profile" element={<Profile />}>
          <Route path="projects" element={<Project />} />
          <Route path="contact" element={<Contact />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Navigate to="/profile/home" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/profile/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;
