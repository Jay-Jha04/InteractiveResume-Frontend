import Joi from "joi";

export const ProfileViewModel = {
  _id: "",
  firstName: "",
  lastName: "",
  location: "",
  profilePic: [],
  aboutYourself: "",
};

export const mapModelToView = (source) => {
  return {
    _id: source?._id,
    firstName: source?.first_name,
    lastName: source?.last_name,
    location: source?.location,
    profilePic: source?.profile_image ? [source?.profile_image] : [],
    aboutYourself: source?.about_yourself,
  };
};

const profileSchema = {
  firstName: Joi.string().label("Name"),
  location: Joi.string().label("Location"),
  aboutYourself: Joi.string()
    .required()
    .messages({ "string.empty": "Please write something about yourself..." }),
};

export const validateProperty = (name, value) => {
  if (name === "profilePic" || name === "lastName") return { error: null };

  const fieldSchema = Joi.object({ [name]: profileSchema[name] });
  const field = { [name]: value };

  return fieldSchema.validate(field);
};

export const validateProfilePic = (name, image) => {
  const schema = Joi.object({
    [name]: Joi.array()
      .min(1)
      .messages({ "array.min": "please choose a image" }),
  });
  const field = { [name]: [...image] };

  return schema.validate(field);
};

export const validateProfile = (payload) => {
  const schema = Joi.object(profileSchema);
  let profile = { ...payload };

  delete profile["_id"];
  delete profile["profilePic"];
  delete profile["lastName"];
  return schema.validate(profile, { abortEarly: false });
};
