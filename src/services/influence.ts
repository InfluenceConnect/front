import api from "./api";

const getAllInfluencers = async () => {
  try {
    const res = await api.get("/influencers");
    console.log(res.data)
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllInfluencers };
