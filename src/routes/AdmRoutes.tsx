import { Route, Routes } from "react-router-dom";
import AccountStatus from "../pages/influencer/AccountStatus";
import HomePageInfluencer from "../pages/influencer/HomePageInfluencer";
import NotFound from "../pages/not_found";
import HomePageCompany from "../pages/company/HomePageCompany";
import LoginPage from "../pages/login/Login"
import Register from "../pages/register/Register";
import RegisterNicheCompany from "../pages/company/register/RegisterNiche";
import RegisterMarketing from "../pages/company/register/RegisterMarketing";

const AdmRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<>Página do adm</>} />
      <Route path="/homeInfluencer" element={<HomePageInfluencer />} />
      <Route path="/homeCompany" element={<HomePageCompany />} />
      <Route path="/accountStatus" element={<AccountStatus />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/:mode" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/registerNicheCompany" element={<RegisterNicheCompany />} />
      <Route path="/registerMarketing" element={<RegisterMarketing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AdmRoutes;