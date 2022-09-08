import axios from "axios";
const URL = 'http://ec2-18-132-64-241.eu-west-2.compute.amazonaws.com:5000/';
const API = axios.create({ baseURL: URL });

const config = {
  headers: {
    Authorization:
      "Fayzullo " + JSON.parse(localStorage.getItem("userInfo"))?.token,
  },
};

export const getOrdersApi = () => API.get("/orders/get", config);

export const postOrdersApi = () => API.get("/orders/post", config);
