import {
  Typography,
  Link,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HelpIcon from "@mui/icons-material/Help";

function Copyright() {
  return (
    <Typography variant="body2" mt={1}>
      {"Copyright © "}
      <Link href="https://mui.com/">Influnece Connect&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "dark.main", color: "dark.contrastText", p: 2 }}
    >
      <Container maxWidth="lg">
        <Box display={"flex"} flexWrap={"wrap"} gap={1}>
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
            <Typography variant="body2" textAlign={"justify"}>
              Conecta empresas e influenciadores, otimiza campanhas em mídias
              sociais, oferece eficiência e controle total.
            </Typography>
          </Box>

          <Box display={"flex"} flexDirection={"column"}
          sx={{margin: "auto", minWidth: "12rem"}}>
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
            <List sx={{ width: "100%", p: 0 }}>
              <Link sx={{ textDecoration: "none" }}>
                <ListItem
                  disablePadding
                  sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <ListItemText primary="Sobre" />
                </ListItem>
              </Link>
              <Link>
                <ListItem
                  disablePadding
                  sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <ListItemText primary="Política de Privacidade"/>
                </ListItem>
              </Link>
              <Link>
                <ListItem
                  disablePadding
                  sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >

                  <ListItemText primary="Whatsapp" />
                </ListItem>
              </Link>
            </List>
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
            <List sx={{ width: "10%", maxWidth: 360, p: 0 }}>
              <Link sx={{ textDecoration: "none" }}>
                <ListItem
                  disablePadding
                  sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <HelpIcon />
                  <ListItemText primary="Suporte" />
                </ListItem>
              </Link>
              <Link>
                <ListItem
                  disablePadding
                  sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <FacebookIcon />
                  <ListItemText primary="Facebook" />
                </ListItem>
              </Link>
              <Link>
                <ListItem
                  disablePadding
                  sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <WhatsAppIcon />

                  <ListItemText primary="Whatsapp" />
                </ListItem>
              </Link>
            </List>
          </Box>
        </Box>

        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} marginTop={"2rem"}>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
