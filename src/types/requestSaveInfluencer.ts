// Definição da interface InfluencerSocialMedia para representar informações de redes sociais do influenciador
export interface InfluencerSocialMedia {
  socialMediaId: number;
  link: string; 
}

// Interface RequestSaveInfluencer representa os dados necessários para salvar um influenciador
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
