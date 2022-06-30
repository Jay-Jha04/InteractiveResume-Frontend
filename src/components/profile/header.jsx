import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  TwitterOutlined,
  GithubOutlined,
  InstagramOutlined,
  HomeOutlined,
  ContactsOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import {
  CONTACT,
  HEADERTITLE,
  HOME,
  PROJECTS,
  RENDERFULLNAME,
} from "../../resources/headerPage";

const Header = ({ data, profileImage }) => {
  const { first_name, last_name } = data;
  const { contentType, imageBase64 } = profileImage;

  return (
    <header id="main-header">
      <div className="row g-0">
        <div className="col-lg-4 col-md-5">
          <img src={`data:${contentType};base64,${imageBase64}`} alt="..." />
        </div>
        <div className="col-lg-8 col-md-7">
          <div className="flex flex-column">
            <div className="p-5 bg-dark text-white">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <h1 className="display-4">
                  {RENDERFULLNAME(first_name, last_name)}
                </h1>
                <div className="d-none d-md-block">
                  <a href="http://twitter.com" className="text-white fs-3">
                    <TwitterOutlined />
                  </a>
                </div>
                <div>
                  <a href="http://facebook.com" className="text-white fs-3">
                    <FacebookOutlined />
                  </a>
                </div>
                <div>
                  <a href="http://instagram.com" className="text-white fs-3">
                    <InstagramOutlined />
                  </a>
                </div>
                <div>
                  <a href="http://github.com" className="text-white fs-3">
                    <GithubOutlined />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 bg-black">{HEADERTITLE}</div>
          <div className="row g-0 text-white text-center">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/profile/home"
              className="col-4 p-5 bg-primary port-item"
            >
              <span className="d-none d-sm-block">
                <HomeOutlined />
              </span>
              <span>{HOME}</span>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/profile/projects"
              className="col-4 p-5 bg-success port-item"
            >
              <span className="d-none d-sm-block">
                <ProfileOutlined />
              </span>
              <span>{PROJECTS}</span>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/profile/contact"
              className="col-4 p-5 bg-warning port-item"
            >
              <span className="d-none d-sm-block">
                <ContactsOutlined />
              </span>
              <span>{CONTACT}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
