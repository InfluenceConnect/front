import { Route, Routes } from "react-router-dom";

import RegisterNicheCompany from "../pages/company/register/RegisterNiche";
import RegisterMarketing from "../pages/company/register/RegisterMarketing";
import NotFound from "../pages/not_found";
import LoginPage from "../pages/login/Login"
import Register from "../pages/register/Register";
import PrivacyPolicy from "../pages/policyPrivacy";
import About from "../pages/ about";

const CreatingCompanyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/:mode" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/registerNicheCompany" element={<RegisterNicheCompany />} />
      <Route path="/registerMarketing" element={<RegisterMarketing />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/policy-privacy" element={<PrivacyPolicy/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CreatingCompanyRoutes;
