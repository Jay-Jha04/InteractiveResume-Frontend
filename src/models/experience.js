import Joi from "joi";

export const experienceViewModel = {
  title: "",
  profileHeadline: "",
  description: "",
  companyName: "",
  isCurrentlyWorking: false,
  companyLocation: "",
  jobType: "",
  startMonth: "",
  startYear: "",
  endMonth: "",
  endYear: "",
};

const experienceSchema = {
  title: Joi.string().required().label("Title"),
  profileHeadline: Joi.string().required().label("Profile Headline"),
  description: Joi.string().required().label("Description"),
  companyName: Joi.string().required().label("Company Name"),
  companyLocation: Joi.string().required().label("Company Location"),
  jobType: Joi.string().required().label("Job Type"),
  startMonth: Joi.string().required().label("Start Date"),
  startYear: Joi.string().required().label("Start Date"),
  endMonth: Joi.string().required().label("End Date"),
  endYear: Joi.string().required().label("End Date"),
};

export const validateProperty = (name, value) => {
  if (name === "isCurrentlyWorking") return { error: null };
  const field = { [name]: value };
  const fieldSchema = Joi.object({ [name]: experienceSchema[name] });
  return fieldSchema.validate(field);
};

export const validateExperience = (experience) => {
  const expSchema = { ...experienceSchema };
  const exp = { ...experience };
  if (exp["isCurrentlyWorking"]) {
    delete expSchema["endMonth"];
    delete expSchema["endYear"];
    delete exp["endMonth"];
    delete exp["endYear"];
  }
  delete exp["isCurrentlyWorking"];
  const schema = Joi.object(expSchema);
  return schema.validate(exp, { abortEarly: false });
};
