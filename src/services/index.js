import axios from "axios";
const BASE_URL = 'http://18.168.179.193:3000';

const setHeadersWithAccessToken = ({ token }) => {
  axios.defaults.headers.common["Authorization"] = token;
};

const handleError = error => new Promise(() => {});

export const loginApiHandler = params => {
  return axios
    .post(`${BASE_URL}/login`, params)
    .then(e => e.data)
    .catch(handleError);
};

export const getUserProfileHandler = (params, token) => {
  setHeadersWithAccessToken(token);
  return axios
    .post(`${BASE_URL}users/profile`, params)
    .then(e => e.data)
    .catch(handleError);
};
