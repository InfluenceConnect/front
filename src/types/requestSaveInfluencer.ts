export interface InfluencerSocialMedia {
  socialMediaId: number;
  link: string;
}

interface RequestSaveInfluencer {
  email: string;
  password: string;
  name: string;
  birthdate: string;
  status: string;
  cpf: string;
  profilePhoto: string;
  stateId: number;
  nicheIds: number[];
  influencerSocialMedia: InfluencerSocialMedia[];
}

export default RequestSaveInfluencer;
