import { ProjectOutlined, PlusOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import ProjectModalSection from "./helpers/projectModalSection";
import { CSSTransition } from "react-transition-group";
import { getProjects } from "../../../services/project";

const ProjectSettings = () => {
  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchDate() {
      const res = await getProjects();
      setProjects(res);
    }
    fetchDate();
  }, []);

  return (
    <>
      <div className="row mt-3">
        <div className="row">
          <div className="col-sm-4">
            <div className="input-group">
              <span className="input-group-text fs-3">
                <PlusOutlined />
              </span>
              <button
                className="btn btn-success w-50"
                onClick={() => setShowModal(true)}
              >
                Add Projects
              </button>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="alert alert-success">
              <ProjectOutlined style={{ fontSize: "2em" }} /> Total number of
              projects is {projects.length}
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Project Title</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th></th>
                </tr>
              </thead>
              {projects.length > 0 && (
                <tbody>
                  {projects.map((proj, index) => (
                    <tr key={proj._id}>
                      <td>{index + 1}</td>
                      <td>{proj["title"]}</td>
                      <td>{proj["start_date"]}</td>
                      <td>{proj["end_date"]}</td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
      <CSSTransition
        in={showModal}
        timeout={500}
        classNames="modal"
        unmountOnExit
        onEnter={() => (document.body.style.overflow = "hidden")}
        onExited={() => (document.body.style.overflow = "auto")}
      >
        <ProjectModalSection
          setShowModal={setShowModal}
          setProjects={setProjects}
        />
      </CSSTransition>
    </>
  );
};

export default ProjectSettings;
