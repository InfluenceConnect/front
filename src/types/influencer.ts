import Campaign from "./campaign";

interface Influencer {
  name: string;
  id: number;
  image: string;
  profilePhoto?: string;
  status: string;
  influencerCampaigns?: Campaign[];
}


export default Influencer;
