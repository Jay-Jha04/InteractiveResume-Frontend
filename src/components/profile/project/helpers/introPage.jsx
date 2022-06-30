import { useState } from "react";
import { PROJECTSCREENS } from "../../../../resources/projectPage";
import ProjectImages from "./projectImages";
import { CSSTransition } from "react-transition-group";

const IntroPage = ({ project }) => {
  const { _id, title, project_profile, github_url } = project;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="card-body py-3"
        style={{ height: "16em", overflowY: "auto" }}
      >
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{project_profile}</p>
        <p>
          <a href={github_url} target="_blank" rel="noreferrer">
            {github_url}
          </a>
        </p>
        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          {PROJECTSCREENS}
        </button>
      </div>
      <CSSTransition
        in={showModal}
        timeout={500}
        classNames="modal"
        unmountOnExit
        onEnter={() => (document.body.style.overflow = "hidden")}
        onExited={() => (document.body.style.overflow = "auto")}
      >
        <ProjectImages projectId={_id} setShowModal={setShowModal} />
      </CSSTransition>
    </>
  );
};

export default IntroPage;
