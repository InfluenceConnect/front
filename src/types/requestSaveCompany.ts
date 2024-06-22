// Interface para definir os canais de marketing da empresa
export interface companyMarketingChannels {
  marketingChannelId: number; 
  link: string; 
}

// Interface principal para estruturar os dados necessários para salvar uma empresa
export default interface RequestSaveCompany {
  cnpj: string; 
  profileLogo: string; 
  name: string; 
  email: string; 
  password: string; 
  nicheIds: number[]; 
  companyMarketingChannels: companyMarketingChannels[]; 
}

