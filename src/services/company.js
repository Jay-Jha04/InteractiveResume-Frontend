import axios from "axios";

const baseUrl = process.env.REACT_APP_INTERACTIVERESUME_BASEURL;

export async function getProfile() {
  const profile = await axios.get(`${baseUrl}/experiences`);

  return profile.data;
}
