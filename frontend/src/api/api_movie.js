import axiosInstance from "../config/api_config";

const getAllMovie = () => {
  return axiosInstance.get("/movie/all");
};

export default { getAllMovie };
