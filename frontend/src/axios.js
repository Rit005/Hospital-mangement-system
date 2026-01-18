import axios from "axios";

const api = axios.create({
  baseURL: "https://hospital-mangement-system-58iq.onrender.com",
  withCredentials: true, // 🔥 REQUIRED
});

export default api;
