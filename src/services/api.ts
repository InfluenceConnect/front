
import axios from "axios";
// Cria uma instância do axios com uma configuração base, onde o baseURL é definido para o endpoint do backend
const api = axios.create({ baseURL: "http://localhost:8001/influenceconnect" });

export default api;
