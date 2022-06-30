import { useState, useEffect } from "react";
import { DESCRIPTION, HEADING } from "../../../resources/projectPage";
import { getProjects } from "../../../services/project";
import Projects from "./helpers/projects";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getProjects();
      setProjects(res);
    }
    fetchData();
  }, []);

  return (
    <>
      {projects.length > 0 && (
        <>
          <div className="card card-body bg-success text-white py-5">
            <h2>{HEADING}</h2>
            <p className="lead">{DESCRIPTION}</p>
          </div>

          <div className="card card-body py-5">
            <div className="row">
              {projects.map((project) => (
                <Projects key={project._id} project={project} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Project;
