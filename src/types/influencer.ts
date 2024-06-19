import Campaign from "./campaign";

interface Influencer {
  name: string;
  id: number;
  image: string;
  profilePhoto?: string;
  status: string;
  influencerCampaigns?: Campaign[];
  influencerSocialMedia?: SocialMedia[];
}

interface SocialMedia {
  socialMediaId: number,
  link: string
}


export default Influencer;
