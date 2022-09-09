import axios from "axios";
const URL = 'https://sub.doston.me/';
const API = axios.create({ baseURL: URL });

export const login = (logData) => API.post("/auth/login", logData);

export const register = (formData) => API.post("/auth/register", formData);
