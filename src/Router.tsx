import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Container, CssBaseline } from "@mui/material";

import Header from "./components/Header";
import LoginPage from "./pages/login/Login";
import Footer from "./components/Footer";
import RegisterNicheCompany from "./pages/company/register/RegisterNiche";
import AccessibilityDrawer from "./components/AccessibilityDrawer";
import RegisterSocialMedia from "./pages/influencer/register/RegisterSocialMedia";
import RegisterMarketing from "./pages/company/register/RegisterMarketing";
import Register from "./pages/register/Register";
import RegisterNicheInfluencer from "./pages/influencer/register/RegisterNiche";
import AccountStatus from "./pages/login/AccountStatus";
import NotFound from "./pages/not_found";
import HomePageInfluencer from "./pages/influencer/HomePageInfluencer";
import HomePageCompany from "./pages/company/HomePageCompany";
import { RegisterContext } from "./contexts/registerContext";

const Router = () => {
  const { typeUser } = useContext(RegisterContext);

  return (
    <BrowserRouter>
      <CssBaseline /> {/* O CSS RESET DO MUI */}
      <AccessibilityDrawer />
      <Header />
      <Container
        maxWidth="xl"
        sx={{ minHeight: "69vh", paddingLeft: "0", paddingRight: "0" }}
      >
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />

          {/* Rotas de cadastro de Influencer */}
          {typeUser == "influencer" ? (
            <>
              <Route
                path="/registerNicheInfluencer"
                element={<RegisterNicheInfluencer />}
              />
              <Route
                path="/registerSocialMedia"
                element={<RegisterSocialMedia />}
              />
              <Route path="/accountStatus" element={<AccountStatus />} />
              <Route path="/homeInfluencer" element={<HomePageInfluencer />} />
            </>
          ) : (
            <></>
          )}

          {/* Rotas de cadastro de empresa */}
          {typeUser == "company" ? (
            <>
              <Route
                path="/registerNicheCompany"
                element={<RegisterNicheCompany />}
              />
              <Route
                path="/registerMarketing"
                element={<RegisterMarketing />}
              />
            </>
          ) : (
            <></>
          )}

          {/* Rotas de Influencer */}
          <Route path="/accountStatus" element={<AccountStatus />} />
          <Route path="/homeInfluencer" element={<HomePageInfluencer />} />

          {/* Rotas de empresa */}
          <Route path="/homeCompany" element={<HomePageCompany />} />

          {/* Rota notfound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
