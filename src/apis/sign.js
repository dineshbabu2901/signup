import api from "../components/api";

const baseURL = "/post";

export const signin = (email, password) => {
  console.log(email, password, "jackj");
  return api.post(`${baseURL}/signin`, { email, password });
};

export const signup = (email, password, confirmPassword) => {
  console.log(email, password, confirmPassword, "jackj");
  return api.post(`${baseURL}/signup`, { email, password, confirmPassword });
};


