import http from "./http";

export async function getProfile() {
  const profile = await http.get(`/profiles`);

  return profile.data;
}

export async function getProfileImage(imageId) {
  const profileImage = await http.get(
    `/upload-images/profile-image/${imageId}`
  );

  return profileImage.data;
}

export async function postProfileImage(payload) {
  const formData = new FormData();
  formData.append("image", payload[0]);

  const imageId = await http.post(`/upload-images/profile-image/`, formData);

  return imageId.data;
}

export async function deleteProfilePic(profilePicId) {
  const res = await http.delete(`/upload-images/profile-image/${profilePicId}`);

  return res.status;
}

export async function postProfile(payload) {
  const profile = await http.post(`/profiles`, payload);

  return profile.data;
}

export async function updateProfile(payload) {
  const res = await http.put(`/profiles/${payload._id}`, payload);

  return res.data;
}
