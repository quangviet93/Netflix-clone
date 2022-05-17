import axios from 'axios';

const getAllUser = () => {
  const res = axios.get('http://localhost:3001/users/allUser');
  return res;
};
const register = (dataUser) => {
  const res = axios.post('http://localhost:3001/users/register', dataUser);
  return res;
};
const login = (dataUser) => {
  const res = axios.post('http://localhost:3001/users/login', dataUser);
  return res;
};
export default { register, login, getAllUser };
