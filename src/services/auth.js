import http, { setTokenHeader } from "./http";

const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  if (getToken()) {
    localStorage.removeItem("token");
  }
};

export const authenticate = async (payload) => {
  try {
    const response = await http.post(`/auth`, payload);
    setToken(response.headers["x-auth-token"]);
    return response;
  } catch (error) {
    throw error;
  }
};

//setting http header with token for authorization
setTokenHeader(getToken());
