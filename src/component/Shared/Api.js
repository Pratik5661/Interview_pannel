import axios from "axios";

export const axiosObject = axios.create({ baseURL: 'http://localhost:3004/api/' });

export const api = {
    serverBaseUrl: ' https://interview-panel-backend.onrender.com'
}


axiosObject.interceptors.request.use(req => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers['x-access-token'] = token;
    }

    return req;
})