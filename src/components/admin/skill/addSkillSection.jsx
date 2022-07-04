import Input from "../../common/input";
import Select from "../../common/select";

const AddSkillSection = () => {
  return (
    <>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label className="form-check-label" for="inlineRadio1">
          Framework
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
        />
        <label className="form-check-label" for="inlineRadio2">
          Language
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
        />
        <label className="form-check-label" for="inlineRadio2">
          Database
        </label>
      </div>
      <Input label="Skill" name="skill" type="text" />
      <div className="row">
        <div className="col-sm-6">
          <label>Rate</label>
          <Select options={[1, 2, 3, 4, 5]} />
        </div>
        <div className="col-sm-6">
          <Input label="Experience" name="experience" type="number" min="0" />
        </div>
      </div>
    </>
  );
};

export default AddSkillSection;
