import {
  MYSKILLS,
  SKILLSSECTIONDESCRIPTION,
} from "../../../../resources/homePage";
import ProgressBarSection from "../../../helpers/progressBarSection";
import BadgeSection from "../../../helpers/badgeSection";
import captilizeString from "../../../../utills/captilizeString";

const SkillsSection = ({ skills }) => {
  return (
    <section id="skills-section" className="card card-body py-5">
      <h3>{MYSKILLS}</h3>
      <p>{SKILLSSECTIONDESCRIPTION}</p>
      <hr />
      {skills.map(({ _id, skill, ...rest }) => {
        return (
          <div key={_id} className="mb-5">
            <div>
              <h4 className="d-inline">{captilizeString(skill)}</h4>
              <BadgeSection {...rest} />
            </div>
            <ProgressBarSection {...rest} />
          </div>
        );
      })}
    </section>
  );
};

export default SkillsSection;
