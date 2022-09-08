import axios from "axios";
const URL = 'http://ec2-18-132-64-241.eu-west-2.compute.amazonaws.com:5000/';
const API = axios.create({ baseURL: URL });

export const login = (logData) => API.post("/auth/login", logData);

export const register = (formData) => API.post("/auth/register", formData);
