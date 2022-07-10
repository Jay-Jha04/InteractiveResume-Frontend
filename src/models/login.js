import Joi from "joi";

export const loginViewModel = {
  username: "",
  password: "",
};

const loginSchema = {
  username: Joi.string().messages({ "string.empty": "Password is required" }),
  password: Joi.string().messages({ "string.empty": "Password is required" }),
};

export const validateProperty = (name, value) => {
  const field = { [name]: value };
  const fieldSchema = Joi.object({ [name]: loginSchema[name] });
  return fieldSchema.validate(field);
};

export const validateLogin = (login) => {
  const schema = Joi.object(loginSchema);

  return schema.validate(login, { abortEarly: false });
};
