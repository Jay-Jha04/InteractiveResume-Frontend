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
