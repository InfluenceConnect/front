import { Route, Routes } from "react-router-dom";
import AccountStatus from "../pages/influencer/AccountStatus";
import NotFound from "../pages/not_found";
import PrivacyPolicy from "../pages/policyPrivacy";

const InactiveInfluencerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AccountStatus />} />
      <Route path="/accountStatus" element={<AccountStatus />} />
      <Route path="/policy-privacy" element={<PrivacyPolicy/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default InactiveInfluencerRoutes;