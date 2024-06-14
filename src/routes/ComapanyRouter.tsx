import { Route, Routes } from "react-router-dom";
import RegisterNicheCompany from "../pages/company/register/RegisterNiche";
import RegisterMarketing from "../pages/company/register/RegisterSocialMedia";
import HomePageCompany from "../pages/company/HomePageCompany";

const CompanyRouter = () => {
  return (
    <>
      <Route path="/registerNicheCompany" element={<RegisterNicheCompany />} />
      <Route path="/registerMarketing" element={<RegisterMarketing />} />
      <Route path="/homeCompany" element={<HomePageCompany />} />
    </>
  );
};

export default CompanyRouter;
