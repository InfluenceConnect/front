import RequestSaveCompany from "../types/requestSaveCompany";
import api from "./api";
import RequestSaveInfluencer from "../types/requestSaveInfluencer";

// Função para verificar se o email está disponível
const verifyEmailIsAvailable = async (email: string) => {
  try {
    const req = { email: email };
    let { data } = await api.post("/users/is-email-available", req);

    console.log(data.isAvailable);
    return data.isAvailable;
  } catch (error) {
    console.log(error);
    return new Promise(() => {});
  }
};

// Função para registrar um influenciador
const registerInfluencer = async (infData: RequestSaveInfluencer) => {
  try {
    let res = await api.post("/influencers", infData);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// Função para registrar uma empresa
const registerCompany = async (compData: RequestSaveCompany) => {
  try {
    let res = await api.post("/companies", compData);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export {
  verifyEmailIsAvailable,
  registerInfluencer,
  registerCompany
};
