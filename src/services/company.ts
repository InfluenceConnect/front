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

export { getAllCompanies };
