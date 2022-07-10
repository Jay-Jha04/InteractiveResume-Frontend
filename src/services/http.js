import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_INTERACTIVERESUME_BASEURL,
  timeout: 1000,
});

export const setTokenHeader = (token) => {
  instance.defaults.headers.common["x-auth-token"] = token;
};

export default instance;
