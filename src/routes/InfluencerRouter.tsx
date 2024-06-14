import { Route, Routes } from "react-router-dom";
import RegisterNicheInfluencer from "../pages/influencer/register/RegisterNiche";
import RegisterSocialMedia from "../pages/influencer/register/RegisterSocialMedia";
import AccountStatus from "../pages/login/AccountStatus";
import HomePageInfluencer from "../pages/influencer/HomePageInfluencer";

const InfluencerRouter = () => {
  return (
    <>
      <Route
        path="/registerNicheInfluencer"
        element={<RegisterNicheInfluencer />}
      />
      <Route path="/registerSocialMedia" element={<RegisterSocialMedia />} />
      <Route path="/accountStatus" element={<AccountStatus />} />
      <Route path="/homeInfluencer" element={<HomePageInfluencer />} />
    </>
  );
};

export default InfluencerRouter;
