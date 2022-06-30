import Checkbox from "../../../common/checkbox";
import FileInput from "../../../common/fileInput";
import Input from "../../../common/input";
import TextArea from "../../../common/textArea";
import MonthYearSelectSection from "../../helpers/monthYearSelectSection";

const ProjectModalInformationPage = ({
  payload,
  onChange,
  onClick,
  errors,
}) => {
  const pointerEventAndOpacity = payload["isCurrentlyWorking"]
    ? "pe-none opacity-50"
    : "";
  return (
    <>
      <Input
        label="Title"
        name="title"
        error={errors["title"]}
        value={payload["title"]}
        type="text"
        onChange={onChange}
      />
      <Input
        label={"Introduction"}
        name={"introduction"}
        error={errors["introduction"]}
        type="text"
        value={payload["introduction"]}
        onChange={onChange}
      />
      <Checkbox
        label="I am currently working on this project"
        name="isCurrentlyWorking"
        checked={payload["isCurrentlyWorking"]}
        onChange={onChange}
      />
      <MonthYearSelectSection
        label="Start Date"
        monthName="startMonth"
        yearName="startYear"
        error={errors["startMonth"] || errors["startYear"]}
        monthValue={payload["startMonth"]}
        yearValue={payload["startYear"]}
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
        label="Project Url"
        name="projectUrl"
        error={errors["projectUrl"]}
        value={payload["projectUrl"]}
        type="text"
        onChange={onChange}
      />
      <Input
        label="Github Url"
        name="githubUrl"
        error={errors["githubUrl"]}
        value={payload["githubUrl"]}
        type="text"
        onChange={onChange}
      />
      <FileInput
        name="upload"
        error={errors["images"]}
        imageIds={payload["images"]}
        onClick={onClick}
        onChange={onChange}
      />
      <TextArea
        name="description"
        label="Description"
        rows="3"
        error={errors["description"]}
        value={payload["description"]}
        onChange={onChange}
      />
    </>
  );
};

export default ProjectModalInformationPage;
