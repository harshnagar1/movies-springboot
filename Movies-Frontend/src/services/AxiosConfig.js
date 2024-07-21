import axios from "axios";

const server_url = import.meta.env.VITE_SERVER_URL;

const api = axios.create({
  baseURL: server_url,
  headers: { "Content-Type": "application/json" },
});

export default api;
