import axios from "axios";

const baseUrl = process.env.REACT_APP_INTERACTIVERESUME_BASEURL;

export async function getSkills() {
  const skills = await axios.get(`${baseUrl}/skills`);

  return skills.data;
}
