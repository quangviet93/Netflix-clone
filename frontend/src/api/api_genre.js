import axiosInstance from "../config/api_config";

const getAll = () => {
  return axiosInstance.get("/genre/all");
};

export default { getAll };
