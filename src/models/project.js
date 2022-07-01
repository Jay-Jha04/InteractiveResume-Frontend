import Joi from "joi";

const projectImageValidation = (value, helper) => {
  if (value.length < 1 || value.length > 12) {
    throw new Error();
  }
  return value;
};

const projectSkillsValidation = (value, helper) => {
  const selectedSkills = Object.values(value).filter((v) => v === true);
  if (selectedSkills.length < 2) {
    throw new Error();
  }
  return value;
};

const projectSchema = {
  Information: {
    title: Joi.string().required().label("Title"),
    introduction: Joi.string().required().label("Introduction"),
    projectUrl: Joi.string().required().label("Project Url"),
    githubUrl: Joi.string().required().label("Github Url"),
    description: Joi.string().required().label("Description"),
    images: Joi.array().custom(projectImageValidation).messages({
      "any.custom": "No. of images are in between range 1 to 12",
    }),
    startMonth: Joi.string().required().label("Start date"),
    startYear: Joi.string().required().label("Start date"),
    endMonth: Joi.string().required().label("End date"),
    endYear: Joi.string().required().label("End date"),
  },

  Skills: Joi.object().custom(projectSkillsValidation).messages({
    "any.custom": "Select atleast 2 skills used in projects",
  }),
};

export const projectViewModel = {
  Information: {
    title: "",
    introduction: "",
    projectUrl: "",
    isCurrentlyWorking: false,
    githubUrl: "",
    description: "",
    images: [],
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
  },
  Skills: {},
};

export const validateProperty = (name, files, value, page) => {
  if (page === "Information") {
    if (name === "isCurrentlyWorking") return { error: null };
    if (name === "images") {
      const field = { [name]: [...files] };
      const fieldSchema = Joi.object({ [name]: projectSchema[page][name] });
      return fieldSchema.validate(field);
    }
    const field = { [name]: value };
    const fieldSchema = Joi.object({ [name]: projectSchema[page][name] });

    return fieldSchema.validate(field);
  }
  return { error: null };
};

export const validateProject = (project, page) => {
  let proj = null;
  let projSchema = null;

  if (page === "Information") {
    proj = { ...project[page] };
    projSchema = { ...projectSchema[page] };
    if (proj["isCurrentlyWorking"]) {
      delete proj["endYear"];
      delete proj["endMonth"];
      delete projSchema["endMonth"];
      delete projSchema["endYear"];
    }
    delete proj["isCurrentlyWorking"];
    delete proj["images"];
  } else {
    proj = { [page]: project[page] };
    projSchema = { [page]: projectSchema[page] };
  }

  const schema = Joi.object(projSchema);
  return schema.validate(proj, { abortEarly: false });
};
