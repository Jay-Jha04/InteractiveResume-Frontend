import { useState, useEffect } from "react";
import MultipageModal from "./multipageModal";
import ProjectModalInformationPage from "./projectModalInformationPage";
import ProjectModalSkillsPage from "./projectModalSkillsPage";
import { getSkills } from "../../../../services/skill";
import {
  projectViewModel,
  validateProperty,
  validateProject,
} from "../../../../models/project";
import { postProject, uploadProjectImages } from "../../../../services/project";
import ProjectModalConfirmPage from "./projectModalConfirmPage";

const ProjectModalSection = ({ setShowModal, setProjects }) => {
  const [skills, setSkills] = useState([]);
  const [payload, setPayload] = useState(projectViewModel);
  const [errors, setErrors] = useState({});
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState([]);

  const pages = [
    {
      id: "Information",
      title: "Please provide project information",
      component: (
        <ProjectModalInformationPage
          onChange={(e) => handleChange(e)}
          onClick={(e) => handleClick(e)}
          payload={payload["Information"]}
          errors={errors}
        />
      ),
    },
    {
      id: "Skills",
      title: "Please select technologies used in project",
      component: skills && (
        <ProjectModalSkillsPage
          onChange={(e) => handleChange(e)}
          payload={payload["Skills"]}
          skills={skills}
          error={errors["Skills"]}
        />
      ),
    },
    {
      id: "Confirm",
      title: "Please confirm all the details of project",
      component: <ProjectModalConfirmPage payload={payload} skills={skills} />,
    },
  ];

  const handleChange = (e) => {
    e.stopPropagation();
    const pageId = pages[page - 1]["id"];
    const { name, value, checked, files, id } = e.target;
    const { error } = validateProperty(name, files, value, pageId);

    if (error) {
      setErrors((prevState) => {
        return { ...prevState, [name]: error.details[0].message };
      });
    } else {
      errors[name] && delete errors[name];
      setErrors(errors);
    }

    let pagePayload = null;
    switch (name) {
      case "isCurrentlyWorking":
        pagePayload = { ...payload[pageId], [name]: checked };
        if (checked) {
          errors["endYear"] && delete errors["endYear"];
          errors["endMonth"] && delete errors["endMonth"];
          setErrors(errors);
        } else {
          const { error: endYear } = validateProperty(
            "endYear",
            "",
            payload[pageId]["endYear"],
            pageId
          );
          const { error: endMonth } = validateProperty(
            "endMonth",
            "",
            payload[pageId]["endMonth"],
            pageId
          );
          if (endMonth) {
            setErrors((prevState) => {
              return { ...prevState, endMonth: endMonth.details[0].message };
            });
          }
          if (endYear) {
            setErrors((prevState) => {
              return { ...prevState, endYear: endYear.details[0].message };
            });
          }
        }
        return setPayload((prevState) => {
          return { ...prevState, [pageId]: pagePayload };
        });

      case "techstack":
        errors[pageId] && delete errors[pageId];
        pagePayload = { ...payload[pageId], [id]: checked };
        return setPayload((prevState) => {
          return { ...prevState, [pageId]: pagePayload };
        });

      case "images":
        return setSelectedImage(files);
      default:
        pagePayload = { ...payload[pageId], [name]: value };
        return setPayload((prevState) => {
          return { ...prevState, [pageId]: pagePayload };
        });
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { name } = e.target;
    const pageId = pages[page - 1]["id"];
    switch (name) {
      case "next":
        const { error } = validateProject(payload, pageId);
        if (error) {
          const err = { ...errors };
          error.details.map((detail) => (err[detail.path[0]] = detail.message));
          return setErrors(err);
        }
        return setPage((prevState) => prevState + 1);
      case "back":
        setErrors({});
        return setPage((prevState) => prevState - 1);
      case "save":
        const res = await postProject(payload);
        setProjects((prevState) => {
          return [...prevState, res];
        });
        return setShowModal(false);
      case "upload":
        const { error: uploadImagesError } = validateProperty(
          "images",
          selectedImage,
          "",
          pageId
        );
        if (uploadImagesError) {
          const err = { ...errors };
          uploadImagesError.details.map(
            (detail) => (err[detail.path[0]] = detail.message)
          );
          return setErrors(err);
        }
        const imageIds = await uploadProjectImages(selectedImage);
        const pagePayload = { ...payload[pageId], images: [...imageIds] };
        return setPayload((prevState) => {
          return { ...prevState, [pageId]: pagePayload };
        });
      case "close":
        return setShowModal(false);
      default:
        return;
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await getSkills();
      setSkills(res);
    }
    fetchData();
  }, []);

  return (
    <MultipageModal
      title="Add Project"
      height="25rem"
      backdrop="static"
      errors={errors}
      onClick={(e) => handleClick(e)}
      page={page}
      pages={pages}
    />
  );
};

export default ProjectModalSection;
