import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_SERVER,
});
console.log("axiosInstance", axiosInstance);
axiosInstance.interceptors.request.use(
  (config) => {
    const user_token = localStorage.getItem("TOKEN");
    if (user_token) {
      config.headers["Authorization"] = "Bearer " + user_token;
    }
    config.headers["Content-type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
export default axiosInstance;
