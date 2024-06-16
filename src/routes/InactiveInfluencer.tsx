import { Route, Routes } from "react-router-dom";
import AccountStatus from "../pages/influencer/AccountStatus";
import NotFound from "../pages/not_found";

const InactiveInfluencerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AccountStatus />} />
      <Route path="/accountStatus" element={<AccountStatus />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default InactiveInfluencerRoutes;