import axios from 'axios';

const axiosconfig = axios.create({
    baseURL: 'http://localhost:8000/',
})

export default axiosconfig;