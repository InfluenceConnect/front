import api from "./api";

const getAllCompanies = async () => {
  try {
    const res = await api.get("/companies");
    console.log(res.data)
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getAllCompaniesPageable = async (page: number, pageSize: number) => {
  try {
    const res = await api.get(`/companies/pageable?page=${page}&pageSize=${pageSize}`);
    //console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getNumbersOfCompanies = async () => {
  try {
    const res = await api.get("/companies/count");
    return res.data;
  } catch (error) {
    console.log("Error getting numbers of companies: " + error);
  }
}; 

export { getAllCompanies, getAllCompaniesPageable, getNumbersOfCompanies };
