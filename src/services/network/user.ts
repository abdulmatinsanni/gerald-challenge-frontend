import axios from '../api'

export const login = (data: object) => {
    return axios.post("/user/login", data);
};

export const register = (data: object) => {
    return axios.post("/user", data);
};
