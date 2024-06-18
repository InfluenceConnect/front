import { Route, Routes } from "react-router-dom";
import AccountStatus from "../pages/influencer/AccountStatus";
import HomePageInfluencer from "../pages/influencer/HomePageInfluencer";
import NotFound from "../pages/not_found";
import HomePageCompany from "../pages/company/HomePageCompany";
import LoginPage from "../pages/login/Login"
import Register from "../pages/register/Register";
import RegisterNicheCompany from "../pages/company/register/RegisterNiche";
import RegisterMarketing from "../pages/company/register/RegisterMarketing";
import UpdateInfluencer from "../pages/influencer/UpdateInfluencer";
import AdminPage from "../pages/adm/AdminPage";
import UserDetail from "../pages/adm/UserDetails";
import RegisterCampaign from "../pages/company/register/RegisterCampaign";

const AdmRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<>Página do adm</>} />
      <Route path="/homeInfluencer" element={<HomePageInfluencer />} />
      <Route path="/homeCompany" element={<HomePageCompany />} />
      <Route path="/accountStatus" element={<AccountStatus />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/user/:id" element={<UserDetail />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/:mode" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/updateInfluencer" element={<UpdateInfluencer />} />
      <Route path="/registerCampaign" element={<RegisterCampaign />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AdmRoutes;