import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import InputAdornment from "@mui/material/InputAdornment";
import {
  Facebook,
  Instagram,
  YouTube,
  Twitter,
  AddLink,
} from "@mui/icons-material";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

export default function RegisterSocialMedia() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      facebook: data.get("facebook"),
      instagram: data.get("instagram"),
      youtube: data.get("youtube"),
      tiktok: data.get("tiktok"),
      twitter: data.get("twitter"),
    });
  };

  const iconStyle = {
    fontSize: "1.5rem", // Ajuste do tamanho do ícone do TikTok para alinhar corretamente
  };

    const handleNext = () => {
     setLoading(true)
    
    //COLOQUEI SOMENTE PRA NÃO FICAR E LOADING INFINITO !!!!!!
    setTimeout(() => { 
      setLoading(false);
      navigate("/accountStatus")
  }, 2000);
    
  }

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        p: { xs: 0 },
      }}
    >
      <CssBaseline />
      <Box
        component={Paper}
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "100vw" },
          p: { xs: 2, sm: 4 },
        }}
      >
        <Typography component="h1" variant="h5">
          Vincule suas Redes Sociais:
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            mt: 1,
            p: 2,
            borderRadius: "8px",
            width: "100%",
          }}
        >
          <Box display="flex" alignItems="center" mb={2}>
            <Facebook style={iconStyle} />
            <TextField
              id="outlined-multiline-flexible"
              label="Facebook"
              name="facebook"
              fullWidth
              required
              multiline
              maxRows={4}
              sx={{ ml: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddLink />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <Instagram style={iconStyle} />
            <TextField
              id="outlined-multiline-flexible"
              label="Instagram"
              name="instagram"
              fullWidth
              required
              multiline
              maxRows={4}
              sx={{ ml: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddLink />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <YouTube style={iconStyle} />
            <TextField
              id="outlined-multiline-flexible"
              label="YouTube"
              name="youtube"
              fullWidth
              required
              multiline
              maxRows={4}
              sx={{ ml: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddLink />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <i className="bi bi-tiktok" style={iconStyle}></i>{" "}
            {/* Ícone do Bootstrap Icons */}
            <TextField
              id="outlined-multiline-flexible"
              label="TikTok"
              name="tiktok"
              fullWidth
              required
              multiline
              maxRows={4}
              sx={{ ml: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddLink />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <Twitter style={iconStyle} />
            <TextField
              id="outlined-multiline-flexible"
              label="Twitter"
              name="twitter"
              fullWidth
              required
              multiline
              maxRows={4}
              sx={{ ml: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddLink />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
            onClick={handleNext}
          >
            {loading && (<CircularProgress sx={{ position: 'absolute' }} />)}
            Avançar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
