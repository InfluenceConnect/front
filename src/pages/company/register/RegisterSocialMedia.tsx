import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { Facebook, Instagram, YouTube, Twitter, Language, AddLink } from '@mui/icons-material';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/themeContext'; 
import { lightTheme, darkTheme } from '../../../themes/themes'; 
import CircularProgress from '@mui/material/CircularProgress';

type MarketingLinks = {
  facebook: string;
  instagram: string;
  youtube: string;
  tiktok: string;
  twitter: string;
  website: string;
};

type Errors = {
  [key: string]: string;
};

export default function RegisterMarketing() {
  const [loading, setLoading] = React.useState(false);
  const { themeName } = useContext(ThemeContext);
  const currentTheme = themeName === "light" ? lightTheme : darkTheme;
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState<Errors>({});
  const [marketing, setMarketing] = React.useState<MarketingLinks>({
    facebook: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    twitter: "",
    website: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMarketing((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newMarketing: MarketingLinks = {
      facebook: data.get("facebook") as string,
      instagram: data.get("instagram") as string,
      youtube: data.get("youtube") as string,
      tiktok: data.get("tiktok") as string,
      twitter: data.get("twitter") as string,
      website: data.get("website") as string
    };
    setMarketing(newMarketing);

    const formErrors: Errors = {};
    const isValid = Object.values(newMarketing).some((value) => value !== "");

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
    color: themeName === "light" ? 'black' : 'white', 
    fontSize: '1.5rem', 
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 3, 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ color: themeName === "light" ? 'black' : 'white' }}>
            Cadastre seus Canais de Marketing:
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              p: 2,
              borderRadius: '8px',
              backgroundColor: themeName === "light" ? '#fff' : '#424242',
              boxShadow: 3,
              width: '100%', 
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
                value={marketing.facebook}
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
                value={marketing.instagram}
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
                value={marketing.youtube}
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
              <i className="bi bi-tiktok" style={iconStyle}></i> {/* Ícone do Bootstrap Icons */}
              <TextField
                id="tiktok"
                label="TikTok"
                name="tiktok"
                fullWidth
                multiline
                maxRows={4}
                sx={{ ml: 1 }}
                value={marketing.tiktok}
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
                value={marketing.twitter}
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
            <Box display="flex" alignItems="center" mb={2}>
              <Language style={iconStyle} />
              <TextField
                id="website"
                label="Website"
                name="website"
                fullWidth
                multiline
                maxRows={4}
                sx={{ ml: 1 }}
                value={marketing.website}
                onChange={handleChange}
                error={!!errors.website}
                helperText={errors.website}
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
    </ThemeProvider>
  );
}
