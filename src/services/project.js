import FormData from "form-data";
import http from "./http";

export async function getProjects() {
  const projects = await http.get(`/projects`);

  return projects.data;
}

export async function postProject(payload) {
  const projects = await http.post(`/projects`, payload);

  return projects.data;
}

export async function getImagesByProjectId(projectId) {
  const images = await http.get(`/upload-images/${projectId}`);

  return images.data;
}

export async function uploadProjectImages(uploadImages) {
  const formData = new FormData();
  const images = [...uploadImages];

  images.map((image) => formData.append("images", image));

  const imageIds = await http.post(`/upload-images`, formData);

  return imageIds.data;
}
