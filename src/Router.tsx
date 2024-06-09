import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import LoginPage from "./pages/login/Login";
import Footer from "./components/Footer";
import RegisterNicheCompany from "./pages/company/register/RegisterNiche";
import AccessibilityDrawer from "./components/AccessibilityDrawer";
import RegisterSocialMedia from "./pages/influencer/register/RegisterSocialMedia"
import RegisterMarketing from "./pages/company/register/RegisterSocialMedia"

import { Container, CssBaseline } from "@mui/material";
import Register from "./pages/Register/Register";
import RegisterNicheInfluencer from "./pages/influencer/register/RegisterNiche";
import AccountStatus from './pages/login/AccountStatus';

const Router = () => {
  return (
    <BrowserRouter>
      <CssBaseline /> {/* O CSS RESET DO MUI */}
      <AccessibilityDrawer />
      <Header />
      <Container maxWidth = 'xl' sx={{minHeight: "69vh"}}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerNicheCompany"element={<RegisterNicheCompany />}/>
          <Route path="/registerNicheInfluencer"element={<RegisterNicheInfluencer />}/>
          <Route path="/registerSocialMedia" element={<RegisterSocialMedia/>} />
          <Route path="/registerMarketing" element={<RegisterMarketing />} />
          <Route path="/accountStatus" element={<AccountStatus />} />
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
