import axios from "axios";

const baseUrl = process.env.REACT_APP_INTERACTIVERESUME_BASEURL;

export async function getProfile() {
  const profile = await axios.get(`${baseUrl}/profiles`);

  return profile.data;
}

export async function getProfileImage(imageId) {
  const profileImage = await axios.get(
    `${baseUrl}/upload-images/profile-image/${imageId}`
  );

  return profileImage.data;
}

export async function postProfileImage(payload) {
  const formData = new FormData();
  formData.append("image", payload[0]);

  const imageId = await axios.post(
    `${baseUrl}/upload-images/profile-image/`,
    formData
  );

  return imageId.data;
}

export async function deleteProfilePic(profilePicId) {
  const res = await axios.delete(
    `${baseUrl}/upload-images/profile-image/${profilePicId}`
  );

  return res.status;
}

export async function postProfile(payload) {
  const profile = await axios.post(`${baseUrl}/profiles`, payload);

  return profile.data;
}

export async function updateProfile(payload) {
  const res = await axios.put(`${baseUrl}/profiles/${payload._id}`, payload);

  return res.data;
}
