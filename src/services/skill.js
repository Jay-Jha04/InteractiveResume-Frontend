import http from "./http";

export async function getSkills() {
  const skills = await http.get(`/skills`);

  return skills.data;
}

export async function postSkill(payload) {
  const skill = await http.post(`/skills`, payload);

  return skill.data;
}
