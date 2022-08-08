import axiosInstance from '../config/api_config';

const getAllUser = () => {
  return axiosInstance.get('/users/allUser');
};
const register = (dataUser) => {
  return axiosInstance.post('/users/register', dataUser);
};
const login = (dataUser) => {
  return axiosInstance.post('/users/login', dataUser);
};

const getProfile = () => {
  return axiosInstance.get('/users/profile');
};

export default { register, login, getAllUser, getProfile };
