import { Container, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import AccessibilityDrawer from "./components/AccessibilityDrawer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useSessionContext } from "./contexts/SessionContext";
import { RegisterContextProvider } from "./contexts/registerContext";
import CompanyRoutes from "./routes/CompanyRoutes";
import CreatingCompanyRoutes from "./routes/CreatingCompanyRoutes";
import CreatingInfluencerRoutes from "./routes/CreatingInfluencerRoutes";
import InfluencerRoutes from "./routes/InfluencerRoutes";
import InactiveInfluencerRoutes from "./routes/InactiveInfluencer";

const Router = () => {
  const {userType} = useSessionContext();

  return (
    <BrowserRouter>
      <CssBaseline /> {/* O CSS RESET DO MUI */}
      <AccessibilityDrawer />
      <Header />
      <Container
        maxWidth="xl"
        sx={{ minHeight: "69vh", paddingLeft: "0", paddingRight: "0" }}
      >
        {userType == "influencer"? <InfluencerRoutes />:<></> }
        {userType == "company" ? <CompanyRoutes /> : <></>}
        {userType == "inactiveInfluencer" ? <InactiveInfluencerRoutes />: <></>}

        <RegisterContextProvider>
          {userType == "creatingInfluencer"? <CreatingInfluencerRoutes /> :<></> }
          {userType == "creatingCompany"? <CreatingCompanyRoutes />: <></>}
        </RegisterContextProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
