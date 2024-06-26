import { Route, Routes } from "react-router-dom";
import AccountStatus from "../pages/influencer/AccountStatus";
import HomePageInfluencer from "../pages/influencer/HomePageInfluencer";
import NotFound from "../pages/not_found";
import PrivacyPolicy from "../pages/policyPrivacy";
import About from "../pages/ about";
import Campaigns from "../pages/company/Campaigns";

const InfluencerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageInfluencer />} />
      <Route path="/homeInfluencer" element={<HomePageInfluencer />} />
      <Route path="/accountStatus" element={<AccountStatus />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/policy-privacy" element={<PrivacyPolicy />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default InfluencerRoutes;
