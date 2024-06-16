import { Route, Routes } from "react-router-dom";
import HomePageCompany from "../pages/company/HomePageCompany";
import NotFound from "../pages/not_found";

const CompanyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageCompany />} />
      <Route path="/homeCompany" element={<HomePageCompany />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CompanyRoutes;
