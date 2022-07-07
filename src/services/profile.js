import axios from "axios";

const baseUrl = process.env.REACT_APP_INTERACTIVERESUME_BASEURL;

export async function getProfile() {
  const profile = await axios.get(`${baseUrl}/profiles`);

  return profile.data;
}

export async function getProfileImage(profileId) {
  const profileImage = await axios.get(
    `${baseUrl}/upload-images/profile-image/${profileId}`
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

export async function postProfile(payload) {
  const profile = await axios.post(`${baseUrl}/profiles`, payload);

  return profile.data;
}

export async function updateProfile(profileId, payload) {
  const res = await axios.put(`${baseUrl}/profiles/${profileId}`, payload);

  return res.data;
}
