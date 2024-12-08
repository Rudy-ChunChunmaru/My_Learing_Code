import axios from "axios";

export const urlBase = import.meta.env.VITE_API_URL;
export const accessKey = process.env.ACCESS_KEY;

const api = axios.create({
  baseURL: urlBase,
});

api.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
