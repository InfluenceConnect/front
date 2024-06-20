import { Route, Routes } from "react-router-dom";

import LoginPage from "../pages/login/Login";
import Register from "../pages/register/Register";
import NotFound from "../pages/not_found";
import PolicyPrivacy from "../pages/policyPrivacy";
import About from "../pages/ about";

const PublicRoutes = () => {


  return (
    <Routes>
    
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/:mode" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/policy-privacy" element={<PolicyPrivacy/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PublicRoutes;
