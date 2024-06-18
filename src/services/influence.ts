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

const desactiveInfluencer = async (id: number) => {
  changeInfluencerStatus(id, "INACTIVE");
};

const activeInfluencer = async (id: number) => {
  changeInfluencerStatus(id, "ACTIVE");
};

const changeInfluencerStatus = async (id: number, status: string) => {
  try {
    const res = await api.patch(`/influencers/status/${id}`, { statusType: status });
    console.log(res);
  } catch (error) {
    console.log(`Error updating influencer ${id} status: ${error}`);
  }
};

export {
  getAllInfluencers,
  getAllInfluencersPageable,
  getNumbersOfInfluencers,
  desactiveInfluencer,
  activeInfluencer,
};
