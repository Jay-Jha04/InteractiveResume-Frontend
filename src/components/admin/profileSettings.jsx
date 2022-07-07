import { useState, useEffect } from "react";
import { ProfileOutlined } from "@ant-design/icons";
import Input from "../common/input";
import FileInput from "../common/fileInput";
import TextArea from "../common/textArea";
import {
  mapModelToView,
  ProfileViewModel,
  validateProfile,
  validateProfilePic,
  validateProperty,
} from "../../models/profile";
import {
  getProfile,
  postProfileImage,
  updateProfile,
} from "../../services/profile";

const ProfileSettings = () => {
  const [payload, setPayload] = useState(ProfileViewModel);
  const [profilePic, setProfilePic] = useState([]);
  const [errors, setErrors] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);
  const [profile, setProfile] = useState({});

  const handleChange = (e) => {
    e.stopPropagation();
    setIsUpdated(false);

    let { name, value, files } = e.target;
    const { error } = validateProperty(name, value);

    if (error) {
      setErrors((prevState) => {
        return { ...prevState, [name]: error.details[0].message };
      });
    } else {
      errors[name] && delete errors[name];
    }

    if (name === "profilePic") {
      payload[name] = [];
      return setProfilePic(files);
    }

    return setPayload((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setIsUpdated(false);

    const { name } = e.target;
    switch (name) {
      case "upload":
        const { error } = validateProfilePic(name, profilePic);

        if (error) {
          return setErrors((prevState) => {
            return { ...prevState, profilePic: error.details[0].message };
          });
        }

        const profilePicId = await postProfileImage(profilePic);

        return setPayload((prevState) => {
          return { ...prevState, profilePic: [profilePicId] };
        });

      case "update":
        const { error: profileErrors } = validateProfile(payload);
        if (profileErrors) {
          const err = { ...errors };
          profileErrors.details.map(
            (detail) => (err[detail.path[0]] = detail.message)
          );
          return setErrors(err);
        }

        const res = await updateProfile(profile?._id, payload);

        setPayload(ProfileViewModel);
        setErrors({});
        setProfilePic([]);
        setProfile(res);
        return setIsUpdated(true);

      default:
        setPayload(ProfileViewModel);
        setErrors({});
        setProfilePic([]);
        return setIsUpdated(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await getProfile();
      setProfile(res);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const mapProfile = mapModelToView(profile);
    setPayload(mapProfile);
  }, [profile]);

  return (
    <div className="row justify-content-center">
      {isUpdated && (
        <div className="col-8 alert alert-primary w-50 my-3">
          <ProfileOutlined style={{ fontSize: "2em", marginRight: "0.2em" }} />
          Profile Updated successfully...
        </div>
      )}

      <div className="row">
        <div className="col-sm-5 g-0" style={{ marginRight: "9.3em" }}>
          <Input
            label="First Name"
            name="firstName"
            type="text"
            error={errors["firstName"]}
            value={payload["firstName"]}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col-sm-5 g-0">
          <Input
            label="Last Name"
            name="lastName"
            type="text"
            value={payload["lastName"]}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <Input
        label="Location"
        name="location"
        type="text"
        error={errors["location"]}
        value={payload["location"]}
        onChange={(e) => handleChange(e)}
      />
      <label>Update Profile Picture</label>
      <FileInput
        btnName="upload"
        name="profilePic"
        color="primary"
        imageIds={payload["profilePic"]}
        error={errors["profilePic"]}
        onChange={(e) => handleChange(e)}
        onClick={(e) => handleClick(e)}
      />
      <TextArea
        name="aboutYourself"
        label="About Yourself"
        rows="3"
        error={errors["aboutYourself"]}
        value={payload["aboutYourself"]}
        onChange={(e) => handleChange(e)}
      />
      <div className="row justify-content-center">
        <button
          type="button"
          className="btn btn-outline-primary w-50"
          name="update"
          onClick={(e) => handleClick(e)}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
