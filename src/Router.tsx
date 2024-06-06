import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import LoginPage from "./pages/login/Login";
import Footer from "./components/Footer";
import AccessibilityBar from "./components/AccessibilityBar";
import RegisterNicheCompany from "./pages/company/register/RegisterNiche";
import AccessibilityDrawer from "./components/AccessibilityDrawer";

import { Container, CssBaseline } from "@mui/material";
import Register from "./pages/company/register/Register";
import RegisterNicheInfluencer from "./pages/influencer/register/RegisterNiche";
import AccountStatus from './pages/login/AccountStatus';

const Router = () => {
  return (
    <BrowserRouter>
      <CssBaseline /> {/* O CSS RESET DO MUI */}
      <AccessibilityBar />
      <Header />
      <AccessibilityDrawer />
      <Container maxWidth = 'xl' sx={{minHeight: "69vh"}}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/registerNicheCompany"
            element={<RegisterNicheCompany />}
          />
           <Route
            path="/registerNicheInfluence"
            element={<RegisterNicheInfluencer />}
          />
          <Route path="/accountStatus" element={<AccountStatus />} />
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
