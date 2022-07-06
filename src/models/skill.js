import Joi from "joi";

export const skillViewModel = {
  skillType: "",
  skill: "",
  rating: "",
  experience: 0,
};

const skillSchema = {
  skillType: Joi.string().required().label("Skill Type"),
  skill: Joi.string().required().label("Skill"),
  rating: Joi.number().required("Rating"),
  experience: Joi.number()
    .required()
    .min(0)
    .rule({ message: "must be a positive whole number" })
    .label("Experience"),
};

export const validateProperty = (name, value) => {
  const field = { [name]: value };
  const fieldSchema = Joi.object({ [name]: skillSchema[name] });
  return fieldSchema.validate(field);
};

export const validateSkill = (skill) => {
  const schema = Joi.object(skillSchema);
  return schema.validate(skill, { abortEarly: false });
};
