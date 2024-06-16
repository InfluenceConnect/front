import { Route, Routes } from "react-router-dom";

import LoginPage from "../pages/login/Login";
import Register from "../pages/register/Register";
import NotFound from "../pages/not_found";

const PublicRoutes = () => {


  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/:mode" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PublicRoutes;
