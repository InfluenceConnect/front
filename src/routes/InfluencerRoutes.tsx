import { Route, Routes } from "react-router-dom";
import AccountStatus from "../pages/influencer/AccountStatus";
import HomePageInfluencer from "../pages/influencer/HomePageInfluencer";
import NotFound from "../pages/not_found";
import PrivacyPolicy from "../pages/policyPrivacy";

const InfluencerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageInfluencer />} />
      <Route path="/homeInfluencer" element={<HomePageInfluencer />} />
      <Route path="/accountStatus" element={<AccountStatus />} />
      <Route path="/policy-privacy" element={<PrivacyPolicy/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default InfluencerRoutes;
