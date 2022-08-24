import axios from 'axios';

const axiosconfig = axios.create({
    baseURL: 'http://localhost:8000/',
})
export const setToken = (token) => {
    const auth = `Bearer ${token}`;
    axiosconfig.defaults.headers.common['Authorization'] = auth;
};

export default axiosconfig;