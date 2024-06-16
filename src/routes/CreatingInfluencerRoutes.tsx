import { Routes, Route } from "react-router-dom";

import RegisterNicheInfluencer from "../pages/influencer/register/RegisterNiche";
import RegisterSocialMedia from "../pages/influencer/register/RegisterSocialMedia";
import NotFound from "../pages/not_found";
import LoginPage from "../pages/login/Login";
import Register from "../pages/register/Register";

const CreatingInfluencerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/:mode" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/registerNicheInfluencer" element={<RegisterNicheInfluencer />} />
      <Route path="/registerSocialMedia" element={<RegisterSocialMedia />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CreatingInfluencerRoutes;
