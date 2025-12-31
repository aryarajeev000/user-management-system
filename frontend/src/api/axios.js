import axios from "axios";

const api = axios.create({
  baseURL: "https://user-management-system-it6g.onrender.com/",
  withCredentials: true // ⭐ VERY IMPORTANT
});

export default api;
