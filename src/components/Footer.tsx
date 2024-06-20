import {
  Typography,
  Link,
  Container,
  Box,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HelpIcon from "@mui/icons-material/Help";
import { useNavigate } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" mt={1}>
      {"Copyright © "}
      <Link tabIndex={-1} href="https://mui.com/">Influence Connect&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const Footer = () => {

  const navigate = useNavigate()
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "dark.main", color: "dark.contrastText", p: 2 }}
    >
      <Container maxWidth="lg">
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"} maxWidth={"50rem"}>
          <Box display={"flex"} flexDirection={"column"} maxWidth={"18rem"}>
            <Typography
              sx={{
                fontSize: "1.1rem",
                borderBottom: "1px solid #fff9",
                width: "fit-content",
                marginBottom: "0.3rem",
              }}
            >
              Influence Connect
            </Typography>
            <Typography variant="body2" textAlign={"justify"} >
              Conecta empresas e influenciadores, otimiza campanhas em mídias
              sociais, oferece eficiência e controle total.
            </Typography>
          </Box>

          <Box display={"flex"} flexDirection={"column"} sx={{ minWidth: "12rem" }}>
            <Typography
              sx={{
                fontSize: "1.1rem",
                borderBottom: "1px solid #fff9",
                width: "fit-content",
                marginBottom: "0.3rem",
              }}
            >
              Links
            </Typography>
            <Link tabIndex={0} sx={{ textDecoration: "none", display: "block", marginBottom: "0.5rem" }}>
              Sobre
            </Link>
            <Link tabIndex={0} sx={{ textDecoration: "none", display: "block", marginBottom: "0.5rem"  }} onClick={()=>navigate('/policy-privacy')}>
              Política de Privacidade
            </Link>
            
          </Box>

          <Box display={"flex"} flexDirection={"column"}>
            <Typography
              sx={{
                fontSize: "1.1rem",
                borderBottom: "1px solid #fff9",
                width: "fit-content",
                marginBottom: "0.3rem",
              }}
            >
              Contatos
            </Typography>
            <Link tabIndex={0} sx={{ textDecoration: "none", display: "flex", alignItems: "center", marginBottom: "0.5rem", gap: "0.5rem" }}>
              <HelpIcon />
              Suporte
            </Link>
            <Link tabIndex={0} sx={{ textDecoration: "none", display: "flex", alignItems: "center", marginBottom: "0.5rem", gap: "0.5rem" }}>
              <FacebookIcon />
              Facebook
            </Link>
            <Link tabIndex={0} sx={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <WhatsAppIcon />
              Whatsapp
            </Link>
          </Box>
        </Box>

        <Box  display={"flex"} alignItems={"center"} justifyContent={"center"} marginTop={"2rem"} >
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
