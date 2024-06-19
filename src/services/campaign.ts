import api from "./api";
import Campaign from "../types/campaign";

// Função para criar uma nova campanha
const createCampaign = async (campaign: Campaign) => {
  try {
    const res = await api.post("/campaigns", campaign);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Função para obter todas as campanhas
const getAllCampaign = async () => {
  try {
    const res = await api.get("/campaigns");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Função para obter todas as campanhas com paginação
const getAllCampaignPageable = async (page: number, pageSize: number) => {
  try {
    const res = await api.get(`/campaigns/pageable?page=${page}&pageSize=${pageSize}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Função para adicionar um influenciador a uma campanha
const addInfluencerToCampaign = async (idCampaign: number, idInfluencer: number) => {
  try {
    const url = `campaigns/addInfluencer?idCampaign=${idCampaign}&influencerId=${idInfluencer}`;
    const res = await api.patch(url);
    console.log(res);
  } catch (error) {
    console.log("Error on addInfluencerToCampaign: " + error);
  }
};

export {
  getAllCampaign,
  getAllCampaignPageable,
  createCampaign,
  addInfluencerToCampaign,
};
