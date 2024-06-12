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

// Definição dos tipos para o estado e os erros
type SocialMediaLinks = {
  facebook: string;
  instagram: string;
  youtube: string;
  tiktok: string;
  twitter: string;
};

type Errors = {
  [key: string]: string;
};

export default function RegisterSocialMedia() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<Errors>({});
  const [socialMedia, setSocialMedia] = React.useState<SocialMediaLinks>({
    facebook: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    twitter: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSocialMedia((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newSocialMedia: SocialMediaLinks = {
      facebook: data.get("facebook") as string,
      instagram: data.get("instagram") as string,
      youtube: data.get("youtube") as string,
      tiktok: data.get("tiktok") as string,
      twitter: data.get("twitter") as string
    };
    setSocialMedia(newSocialMedia);

    const formErrors: Errors = {};
    const isValid = Object.values(newSocialMedia).some((value) => value !== "");

    if (!isValid) {
      formErrors.general = "Preencha pelo menos 1 dos campos para prosseguir.";
    }

    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/accountStatus");
      }, 2000);
    } else {
      setErrors(formErrors);
    }
  };

  const iconStyle = {
    fontSize: "1.5rem",
  };

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
          {errors.general && (
            <Typography color="error" sx={{ mb: 2, textAlign: "center" }}>
              {errors.general}
            </Typography>
          )}
          <Box display="flex" alignItems="center" mb={2}>
            <Facebook style={iconStyle} />
            <TextField
              id="facebook"
              label="Facebook"
              name="facebook"
              fullWidth
              multiline
              maxRows={4}
              sx={{ ml: 1 }}
              value={socialMedia.facebook}
              onChange={handleChange}
              error={!!errors.facebook}
              helperText={errors.facebook}
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
              id="instagram"
              label="Instagram"
              name="instagram"
              fullWidth
              multiline
              maxRows={4}
              sx={{ ml: 1 }}
              value={socialMedia.instagram}
              onChange={handleChange}
              error={!!errors.instagram}
              helperText={errors.instagram}
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
              id="youtube"
              label="YouTube"
              name="youtube"
              fullWidth
              multiline
              maxRows={4}
              sx={{ ml: 1 }}
              value={socialMedia.youtube}
              onChange={handleChange}
              error={!!errors.youtube}
              helperText={errors.youtube}
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
            <i className="bi bi-tiktok" style={iconStyle}></i>
            <TextField
              id="tiktok"
              label="TikTok"
              name="tiktok"
              fullWidth
              multiline
              maxRows={4}
              sx={{ ml: 1 }}
              value={socialMedia.tiktok}
              onChange={handleChange}
              error={!!errors.tiktok}
              helperText={errors.tiktok}
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
              id="twitter"
              label="Twitter"
              name="twitter"
              fullWidth
              multiline
              maxRows={4}
              sx={{ ml: 1 }}
              value={socialMedia.twitter}
              onChange={handleChange}
              error={!!errors.twitter}
              helperText={errors.twitter}
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
          >
            {loading && (<CircularProgress sx={{ position: 'absolute' }} />)}
            Avançar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
