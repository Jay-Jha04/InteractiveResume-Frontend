import axios from "axios";

const baseUrl = process.env.REACT_APP_INTERACTIVERESUME_BASEURL;

export async function getExperiences() {
  const experiences = await axios.get(`${baseUrl}/experiences`);

  return experiences.data;
}

export async function postExperience(experience) {
  const experiences = await axios.post(`${baseUrl}/experiences`, experience);

  return experiences.data;
}
