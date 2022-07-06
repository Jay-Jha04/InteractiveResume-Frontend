import Input from "../../common/input";
import RadioButton from "../../common/radioButton";
import Select from "../../common/select";

const AddSkillSection = ({ payload, errors, onChange }) => {
  const ratings = [
    { value: "Rate your skill between 1 to 10" },
    { id: "1", value: "1" },
    { id: "2", value: "2" },
    { id: "3", value: "3" },
    { id: "4", value: "4" },
    { id: "5", value: "5" },
    { id: "6", value: "6" },
    { id: "7", value: "7" },
    { id: "8", value: "8" },
    { id: "9", value: "9" },
    { id: "10", value: "10" },
  ];
  const skillTypes = [
    { id: "language", value: "language", label: "Language" },
    { id: "framework", value: "framework", label: "Framework" },
    { id: "database", value: "database", label: "Database" },
  ];

  return (
    <>
      <RadioButton
        options={skillTypes}
        name="skillType"
        error={errors["skillType"]}
        onChange={onChange}
      />
      <div className="my-2 mt-3">
        <Input
          label="Skill"
          name="skill"
          type="text"
          error={errors["skill"]}
          value={payload["skill"]}
          onChange={onChange}
        />
      </div>
      <div className="row my-2">
        <div className="col-sm-6">
          <label>Rating</label>
          <Select
            options={ratings}
            name="rating"
            error={errors["rating"]}
            value={payload["rating"]}
            onChange={onChange}
          />
        </div>
        <div className="col-sm-6">
          <Input
            label="Experience"
            name="experience"
            type="number"
            min="0"
            error={errors["experience"]}
            value={payload["experience"]}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default AddSkillSection;
