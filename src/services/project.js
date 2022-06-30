import axios from "axios";
import FormData from "form-data";

const baseUrl = process.env.REACT_APP_INTERACTIVERESUME_BASEURL;

export async function getProjects() {
  const projects = await axios.get(`${baseUrl}/projects`);

  return projects.data;
}

export async function postProject(payload) {
  const projects = await axios.post(`${baseUrl}/projects`, payload);

  return projects.data;
}

export async function getImagesByProjectId(projectId) {
  const images = await axios.get(`${baseUrl}/upload-images/${projectId}`);

  return images.data;
}

export async function uploadProjectImages(uploadImages) {
  const formData = new FormData();
  const images = [...uploadImages];

  images.map((image) => formData.append("images", image));

  const imageIds = await axios.post(`${baseUrl}/upload-images`, formData);

  return imageIds.data;
}
