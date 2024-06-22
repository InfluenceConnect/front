import api from "./api";
import Company from "../types/company";

// Função para obter todas as empresas
const getAllCompanies = async () => {
  try {
    const res = await api.get("/companies");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Função para obter empresas em formato paginável
const getAllCompaniesPageable = async (page: number, pageSize: number) => {
  try {
    const res = await api.get(`/companies/pageable?page=${page}&pageSize=${pageSize}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Função para obter uma empresa pelo seu ID
const getCompanyById = async (id: number) => {
  try {
    const res = await api.get(`/companies/${id}`);
    if (res.status === 204) {
      return null;
    }
    return res.data;
  } catch (error) {
    console.log("Erro ao obter empresa pelo ID: " + error);
  }
};

// Função para obter o número de empresas
const getNumbersOfCompanies = async () => {
  try {
    const res = await api.get("/companies/count");
    return res.data;
  } catch (error) {
    console.log("Erro ao obter número de empresas: " + error);
  }
};



// Função para atualizar uma empresa existente
const updateCompany = async (id: number, company: Company) => {
  try {
    const res = await api.put(`/companies/${id}`, company);
    return res.data;
  } catch (error) {
    console.log("Erro ao atualizar empresa: " + error);
  }
};

// Função para deletar uma empresa pelo seu ID
const deleteCompany = async (id: number) => {
  try {
    await api.delete(`/companies/${id}`);
    return true;
  } catch (error) {
    console.log("Erro ao deletar empresa: " + error);
    return false;
  }
};

export {
 
  getCompanyById,
  getAllCompanies,
  getAllCompaniesPageable,
  getNumbersOfCompanies,
  updateCompany,
  deleteCompany
};
