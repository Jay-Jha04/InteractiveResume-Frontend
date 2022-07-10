import http from "./http";

export async function getExperiences() {
  const experiences = await http.get(`/experiences`);

  return experiences.data;
}

export async function postExperience(experience) {
  try {
    const experiences = await http.post(`/experiences`, experience);

    return experiences.data;
  } catch (error) {
    throw error;
  }
}
