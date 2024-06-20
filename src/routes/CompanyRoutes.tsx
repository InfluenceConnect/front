import { Route, Routes } from "react-router-dom";
import HomePageCompany from "../pages/company/HomePageCompany";
import NotFound from "../pages/not_found";
import RegisterCampaign from "../pages/company/register/RegisterCampaign";
import Campaigns from "../pages/company/Campaigns";
import PrivacyPolicy from "../pages/policyPrivacy";


const CompanyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageCompany />} />
      <Route path="/homeCompany" element={<HomePageCompany />} />
      <Route path="/registerCampaign" element={<RegisterCampaign />} />
      <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/policy-privacy" element={<PrivacyPolicy/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CompanyRoutes;
