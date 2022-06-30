import IntroPage from "./introPage";
import OverviewPage from "./overviewPage";
import { INTRODUCTIONPAGE } from "../../../../resources/projectPage";

const ProjectPages = ({ project, page }) => {
  if (page === INTRODUCTIONPAGE) {
    return <IntroPage project={project} />;
  }

  return <OverviewPage project={project} />;
};

export default ProjectPages;
