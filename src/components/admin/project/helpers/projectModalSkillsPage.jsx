import captilizeString from "../../../../utills/captilizeString";
import { InfoCircleFilled } from "@ant-design/icons";

const ProjectModalSkillsPage = ({ skills, onChange, payload, error }) => {
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
      {skills.map(({ _id, skill }) => {
        return (
          <div key={_id} className="form-check">
            <input
              className="form-check-input fs-5"
              type="checkbox"
              name="techstack"
              id={skill}
              value={payload[skill]}
              onChange={onChange}
              checked={payload[skill]}
            />
            <label className="form-check-label ms-2 fs-5">
              {captilizeString(skill)}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default ProjectModalSkillsPage;
