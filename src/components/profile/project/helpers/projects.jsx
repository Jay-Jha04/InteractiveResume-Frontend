import { useState } from "react";
import {
  INTRODUCTIONPAGE,
  OVERVIEWPAGE,
} from "../../../../resources/projectPage";
import ProjectPages from "./projectPages";

const Projects = ({ project }) => {
  const [page, setPage] = useState(INTRODUCTIONPAGE);

  const handleClick = (e) => {
    e.preventDefault();
    const { target } = e;
    setPage(target.innerText);
  };

  const getProjectButtonClasses = (_page) => {
    if (page === _page) {
      return "nav-link active";
    }

    return "nav-link";
  };

  const getProjectButtonAttributes = (_page) => {
    if (page === _page) {
      return "true";
    }

    return "false";
  };

  return (
    <div className="col-md-6 mb-3">
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <button
                onClick={(e) => handleClick(e)}
                className={getProjectButtonClasses(INTRODUCTIONPAGE)}
                aria-current={getProjectButtonAttributes(INTRODUCTIONPAGE)}
              >
                <span className="text-success">{INTRODUCTIONPAGE}</span>
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={(e) => handleClick(e)}
                className={getProjectButtonClasses(OVERVIEWPAGE)}
                aria-current={getProjectButtonAttributes(OVERVIEWPAGE)}
              >
                <span className="text-success">{OVERVIEWPAGE}</span>
              </button>
            </li>
          </ul>
        </div>
        <ProjectPages project={project} page={page} />
      </div>
    </div>
  );
};

export default Projects;
