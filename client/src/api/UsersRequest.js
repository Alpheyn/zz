import axios from "axios";
const URL = 'http://ec2-18-132-64-241.eu-west-2.compute.amazonaws.com:5000/';
const API = axios.create({ baseURL: URL });

const config = {
  headers: {
    Authorization:
      "Fayzullo " + JSON.parse(localStorage.getItem("userInfo"))?.token,
  },
};

export const getUsers = () => API.get("/all_users", config);

export const searchUsers = (search) =>
  API.get(`/all_users?search=${search}`, config);

export const userProfile = (userId) => API.get(`/user/${userId}`, config);

export const updateProfile = (updateInfo) =>
  API.put("/profile", updateInfo, config);

export const getOrderedApi = () => API.get("/profile", config);
