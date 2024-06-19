import api from "./api";

interface Campaign {
  name: string;
  description: string;
  startDate: string; 
  endDate: string; 
  budget: number;
  expecLikes: number;
  expecComments: number;
  expecSaves: number;
}

const createCampaign = async (campaign:Campaign) => {
  try {
    const res = await api.post("/campaigns", campaign);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getAllCampaign = async () => {
  try {
    const res = await api.get("/campaigns");
    console.log(res.data)
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getAllCampaignPageable = async (page: number, pageSize: number) => {
  try {
    const res = await api.get(`/campaigns/pageable?page=${page}&pageSize=${pageSize}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export {getAllCampaign,getAllCampaignPageable,createCampaign}