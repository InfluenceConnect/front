import api from "./api";

// Função assíncrona para login do usuário
const login = async (email: string, password: string) => {
  try {
    const req = { email: email, password: password };
    const res = await api.post("/users/login", req);

    console.log(res);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { login };
