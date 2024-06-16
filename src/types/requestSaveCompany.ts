export interface companyMarketingChannels {
  marketingChannelId: Number;
  link: string;
}

export default interface RequestSaveCompany {
  cnpj: string;
  profileLogo: string;
  name: string;
  email: string;
  password: string;
  nicheIds: Number[];
  companyMarketingChannels: companyMarketingChannels[];
}


