import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // ajuste conforme sua URL do backend
});

// Interceptor para adicionar o token no header Authorization (formato Bearer)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
