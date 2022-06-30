import captilizeString from "../../../../utills/captilizeString";
import { InfoCircleFilled } from "@ant-design/icons";

const ProjectModalSkillsPage = ({ skills, onChange, payload, error }) => {
  console.log("Skill section", payload);
  return (
    <>
      {error && (
        <p className="text-danger text-center">
          <InfoCircleFilled
            style={{
              fontSize: "1.3rem",
              marginRight: "0.3rem",
              verticalAlign: "middle",
            }}
          />
          <span>{error}</span>
        </p>
      )}
      {skills.map(({ _id, framework, language }, index) => {
        const skill = framework
          ? captilizeString(framework.name)
          : captilizeString(language.name);
        const skillId = framework ? framework._id : language._id;
        return (
          <div key={_id} className="form-check">
            <input
              className="form-check-input fs-5"
              type="checkbox"
              name="techStack"
              value={skillId}
              onChange={onChange}
              checked={
                payload["techStack"].find((stack) => stack === skillId) !==
                undefined
              }
            />
            <label className="form-check-label ms-2 fs-5">{skill}</label>
          </div>
        );
      })}
    </>
  );
};

export default ProjectModalSkillsPage;
