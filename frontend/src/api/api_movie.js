import axiosInstance from '../config/api_config';

const getAllMovie = () => {
  return axiosInstance.get('/movie/all');
};
const createMovie = (data) => {
  return axiosInstance.post('/movie/create', data);
};
export default { getAllMovie, createMovie };
