import axios, { AxiosRequestConfig } from "axios";
import store from "../state/store";
import { logout } from "../state/slices/account";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 30 * 1000,
});

Axios.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
      const state = store.getState();
      const { token: jwtToken } = state.account.data;

    if (jwtToken) {
      config.headers.Authorization = `Bearer ${jwtToken}`;
    }

    return config;
  },

  (error) => {
      if (error.response && error.response.status === 401) {
          store.dispatch(logout());
          sessionStorage.removeItem("persist:root");
      }

    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => response,

  async (error) => {
    return Promise.reject(error);
  }
);

export default Axios;
