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
  deleteProfilePic,
  getProfile,
  getProfileImage,
  postProfileImage,
  updateProfile,
} from "../../services/profile";

const ProfileSettings = () => {
  const [payload, setPayload] = useState(ProfileViewModel);
  const [errors, setErrors] = useState({});
  const [currentProfilePic, setCurrentProfilePic] = useState({});
  const [updatedProfilePic, setUpdatedProfilePic] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [didUploaded, setDidUploaded] = useState(false);

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
      return setUpdatedProfilePic(files);
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
        const { error } = validateProfilePic(name, updatedProfilePic);

        if (error) {
          return setErrors((prevState) => {
            return { ...prevState, profilePic: error.details[0].message };
          });
        }

        const profilePic = await postProfileImage(updatedProfilePic);

        if (profilePic) {
          setPayload((prevState) => {
            return { ...prevState, profilePic: [profilePic._id] };
          });
        }

        setCurrentProfilePic(profilePic);
        setUpdatedProfilePic([]);
        return setDidUploaded(true);

      case "update":
        const { error: profileErrors } = validateProfile(payload);

        if (profileErrors) {
          const err = { ...errors };
          profileErrors.details.map(
            (detail) => (err[detail.path[0]] = detail.message)
          );
          return setErrors(err);
        }

        const res = await updateProfile(payload);

        if (res) {
          const mapProfile = mapModelToView(res);
          setPayload(mapProfile);
        }

        setErrors({});
        setUpdatedProfilePic([]);
        setDidUploaded(false);
        setIsUploading(false);
        return setIsUpdated(true);

      case "updateProfilePic":
        return setIsUploading(true);

      case "removeProfilePic":
        setUpdatedProfilePic([]);
        const resStatus = await deleteProfilePic(currentProfilePic._id);

        if (resStatus === 204) {
          setCurrentProfilePic({});
        }
        setPayload((prevState) => {
          return { ...prevState, profilePic: [] };
        });
        return setIsUploading(false);

      default:
        setErrors({});
        setUpdatedProfilePic([]);
        setDidUploaded(false);
        setIsUploading(false);
        return setIsUpdated(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await getProfile();
      const mapProfile = mapModelToView(res);

      if (res["profile_image"]) {
        const pic = await getProfileImage(res["profile_image"]);
        setCurrentProfilePic(pic);
      }

      setPayload(mapProfile);
    }
    fetchData();
  }, []);

  return (
    <div className="row ">
      {isUpdated && (
        <div className="row justify-content-center">
          <div className="col-8 alert alert-primary w-50 my-3">
            <ProfileOutlined
              style={{ fontSize: "2em", marginRight: "0.2em" }}
            />
            Profile Updated successfully...
          </div>
        </div>
      )}

      <div className="row ms-1">
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

      <div
        className="card my-1 mb-3"
        style={{ width: "18rem", marginLeft: "0.8rem" }}
      >
        {Object.keys(currentProfilePic).length > 0 && (
          <img
            src={`data:${currentProfilePic.contentType};base64,${currentProfilePic.imageBase64}`}
          />
        )}
        {Object.keys(currentProfilePic).length === 0 && (
          <img src="/NoUserImagePlaceholder.png" />
        )}
        <div className="card-body">
          <button
            className="btn btn-primary me-3"
            name="updateProfilePic"
            onClick={(e) => handleClick(e)}
          >
            Update
          </button>
          <button
            className="btn btn-primary"
            name="removeProfilePic"
            onClick={(e) => handleClick(e)}
          >
            Remove
          </button>
        </div>
      </div>

      {isUploading && (
        <>
          <label>Update Profile Picture</label>
          <FileInput
            btnName="upload"
            name="profilePic"
            color="primary"
            success={didUploaded}
            imageIds={payload["profilePic"]}
            error={errors["profilePic"]}
            onChange={(e) => handleChange(e)}
            onClick={(e) => handleClick(e)}
          />
        </>
      )}
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
