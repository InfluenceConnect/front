import { InfluencerSocialMedia } from "../types/requestSaveInfluencer";
import socialMediaOrder from "./socialMediaOrder";

const socialMediaLinksObj = {
  "facebook": "",
  "instagram": "",
  "youtube": "",
  "tiktok" :"",
  "twitter": "",
}

function formatSocialMedia (arr: InfluencerSocialMedia[]){
  arr.forEach(sm=>{
    // @ts-ignore
    const whichSM = socialMediaOrder[sm.socialMediaId]

    // @ts-ignore
    socialMediaLinksObj[whichSM] = sm.link
  })

  return socialMediaLinksObj;
}

export default formatSocialMedia;