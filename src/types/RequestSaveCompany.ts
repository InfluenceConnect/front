interface companyMarketingChannels{
  marketingChannelId: number,
  link: string
}

interface RequestSaveCompany {
  
  cnpj: string,
  profileLogo: string,
  name: string,
  email: string,
  password: string,
  nicheIds: [ 0 ],
  companyMarketingChannels: companyMarketingChannels,   
  
}

export default RequestSaveCompany;

