import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import Container from "@mui/material/Container";

import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


function HeaderBar() {
  const navigate = useNavigate();
  

  return (
    <AppBar position="static" sx={{ backgroundColor: "dark.main" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <ConnectingAirportsIcon
            sx={{ display: { xs: "flex", md: "flex" }, mr: 1, fontSize: "1.7rem" }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            tabIndex={0}
            sx={{
              fontWeight: 500,
              fontFamily: "serif",
              letterSpacing: ".1rem",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Influence Connect
          </Typography>

          <Navbar />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeaderBar;
