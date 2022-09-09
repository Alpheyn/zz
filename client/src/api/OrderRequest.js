import axios from "axios";
const URL = 'https://sub.doston.me/';
const API = axios.create({ baseURL: URL });

const config = {
  headers: {
    Authorization:
      "Fayzullo " + JSON.parse(localStorage.getItem("userInfo"))?.token,
  },
};

export const getOrdersApi = () => API.get("/orders/get", config);

export const postOrdersApi = () => API.get("/orders/post", config);
