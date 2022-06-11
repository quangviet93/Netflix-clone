import axiosInstance from "../config/api_config";

const getAll = () => {
  return axiosInstance.get("/actor/all");
};

export default { getAll };
