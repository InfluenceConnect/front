import { Route, Routes } from "react-router-dom";
import PolicyPrivacy from "../pages/policyPrivacy";
import About from "../pages/ about";

const PublicRoutes = () => {


  return (
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/policy-privacy" element={<PolicyPrivacy/>}/>
    </Routes>
  );
};

export default PublicRoutes;
