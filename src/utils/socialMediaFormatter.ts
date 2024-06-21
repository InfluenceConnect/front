import { InfluencerSocialMedia } from "../types/requestSaveInfluencer";
import socialMediaOrder from "./socialMediaOrder";

export interface FormatedSocialMediaObj{
  facebook: string;
  instagram: string;
  youtube: string;
  tiktok: string;
  twitter: string;
}

function formatSocialMedia (arr: InfluencerSocialMedia[]){
  const socialMediaLinksObj = {
    "facebook": "",
    "instagram": "",
    "youtube": "",
    "tiktok" :"",
    "twitter": "",
  }
  
  arr.forEach(sm=>{
    // @ts-ignore
    const whichSM = socialMediaOrder[sm.socialMediaId]

    // @ts-ignore
    socialMediaLinksObj[whichSM] = sm.link
  })

  return socialMediaLinksObj;
}

export default formatSocialMedia;