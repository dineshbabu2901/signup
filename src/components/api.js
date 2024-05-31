import axios from "axios";

export const baseURL = "http://localhost:9005/";

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  (config) => {
    console.log(localStorage.getItem("authToken"), "fkjads;fkdf;lkj");
    if (localStorage.getItem("authToken")) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        "authToken"
      )}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
