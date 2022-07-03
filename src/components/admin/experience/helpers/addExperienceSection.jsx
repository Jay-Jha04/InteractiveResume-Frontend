import Checkbox from "../../../common/checkbox";
import Input from "../../../common/input";
import TextArea from "../../../common/textArea";
import MonthYearSelectSection from "../../helpers/monthYearSelectSection";
import Select from "../../../common/select";

const AddExperienceSection = ({ payload, errors, onChange }) => {
  const jobTypes = [
    { value: "Job Type" },
    { id: "Full-time", value: "Full-time" },
    { id: "Part-time", value: "Part-time" },
    { id: "Self-employed", value: "Self-employed" },
    { id: "Freelance", value: "Freelance" },
    { id: "Internship", value: "Internship" },
    { id: "Trainee", value: "Trainee" },
  ];
  const pointerEventAndOpacity = payload["isCurrentlyWorking"]
    ? "pe-none opacity-50"
    : "";

  return (
    <>
      <Input
        label="Title"
        name="title"
        type="text"
        value={payload["title"]}
        error={errors["title"]}
        onChange={onChange}
      />
      <Input
        label="Profile Headline"
        name="profileHeadline"
        type="text"
        value={payload["profileHeadline"]}
        error={errors["profileHeadline"]}
        onChange={onChange}
      />
      <TextArea
        name="description"
        label="Description"
        rows="3"
        value={payload["description"]}
        error={errors["description"]}
        onChange={onChange}
      />
      <Input
        label={"Company Name"}
        name="companyName"
        type="text"
        value={payload["companyName"]}
        error={errors["companyName"]}
        onChange={onChange}
      />
      <div className="form-group">
        <label htmlFor="">Job Type</label>
        <Select
          options={jobTypes}
          name="jobType"
          value={payload["jobType"]}
          error={errors["jobType"]}
          onChange={onChange}
        />
      </div>
      <Checkbox
        label="I am currently working"
        name="isCurrentlyWorking"
        checked={payload["isCurrentlyWorking"]}
        value={payload["isCurrentlyWorking"]}
        onChange={onChange}
      />
      <MonthYearSelectSection
        label="Start Date"
        monthName="startMonth"
        yearName="startYear"
        monthValue={payload["startMonth"]}
        yearValue={payload["startYear"]}
        error={errors["startMonth"] || errors["startYear"]}
        onChange={onChange}
      />
      <MonthYearSelectSection
        label="End Date"
        pointerEventAndOpacity={pointerEventAndOpacity}
        error={
          !payload["isCurrentlyWorking"] &&
          (errors["endMonth"] || errors["endYear"])
        }
        monthName="endMonth"
        yearName="endYear"
        monthValue={
          payload["isCurrentlyWorking"] ? "Month" : payload["endMonth"]
        }
        yearValue={payload["isCurrentlyWorking"] ? "Year" : payload["endYear"]}
        onChange={onChange}
      />
      <Input
        label="Company Location"
        name="companyLocation"
        type="text"
        value={payload["companyLocation"]}
        error={errors["companyLocation"]}
        onChange={onChange}
      />
    </>
  );
};

export default AddExperienceSection;
