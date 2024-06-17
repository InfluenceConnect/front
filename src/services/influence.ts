import api from "./api";

const getAllInfluencers = async () => {
  try {
    const res = await api.get("/influencers");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getAllInfluencersPageable = async (page: number, pageSize: number) => {
  try {
    const res = await api.get(`/influencers/pageable?page=${page}&pageSize=${pageSize}`);
    //console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getNumbersOfInfluencers = async () => {
  try {
    const res = await api.get("/influencers/count");
    console.log(res);
    return res.data;
  } catch (error) {
    console.log("Error getting numbers of influencers: " + error);
  }
};

export { getAllInfluencers, getAllInfluencersPageable, getNumbersOfInfluencers };
