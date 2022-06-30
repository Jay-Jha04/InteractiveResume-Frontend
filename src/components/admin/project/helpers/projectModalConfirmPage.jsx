import captilizeString from "../../../../utills/captilizeString";
import Badge from "../../../common/badge";

const ProjectModalConfirmPage = ({ payload, skills }) => {
  const endDate = payload["Information"]["isCurrentlyWorking"]
    ? "present"
    : `${payload["Information"]["endYear"]} ${payload["Information"]["endMonth"]}`;
  const imageSection =
    payload["Information"]["images"].length <= 1 ? (
      <Badge
        text={`${payload["Information"]["images"].length} image`}
        color="success"
      />
    ) : (
      <Badge
        text={`${payload["Information"]["images"].length} images`}
        color="success"
      />
    );
  return (
    <div className="row">
      <div className="col-sm-12">
        {imageSection}
        <p className="h4">{payload["Information"]["title"]}</p>
        <p className="font-monospace text-muted">
          {`${payload["Information"]["startYear"]} ${payload["Information"]["startMonth"]} to ${endDate}`}
        </p>
        <li>
          Github Url -{" "}
          <a href={payload["Information"]["githubUrl"]}>
            {payload["Information"]["githubUrl"]}
          </a>
        </li>
        <li>
          Project Url -{" "}
          <a href={payload["Information"]["githubUrl"]}>
            {payload["Information"]["githubUrl"]}
          </a>
        </li>
        <li>
          Techstack -{" "}
          {payload["Skills"]["techStack"].map((tech) => {
            const skill = skills.find((skill) =>
              skill.framework
                ? skill.framework._id === tech
                : skill.language._id === tech
            );
            const name = skill.framework
              ? captilizeString(skill.framework["name"])
              : captilizeString(skill.language["name"]);

            return (
              <span key={tech} className="me-1">
                <Badge
                  text={name}
                  color="secondary"
                  float="none"
                  opacity="75"
                />
              </span>
            );
          })}
        </li>
        <hr className="border border-success border-opacity-10" />
        <p className="fs-4 mt-3">Introduction</p>
        <p>{payload["Information"]["introduction"]}</p>
        <hr className="border border-success border-opacity-10" />
        <p className="fs-4 mt-3">Overview</p>
        <p>{payload["Information"]["description"]}</p>
      </div>
    </div>
  );
};

export default ProjectModalConfirmPage;
