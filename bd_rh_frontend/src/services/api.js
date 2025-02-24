import axios from "axios";

const api = axios.create({
//baseURL: "http://localhost:3000/api", // URL do backend Local
  baseURL: "http://52.172.207.146:3000/api", // URL do backend na VM AZURE
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
