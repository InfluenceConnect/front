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

export default function RegisterMarketing() {
  const { themeName } = useContext(ThemeContext);
  const currentTheme = themeName === "light" ? lightTheme : darkTheme;
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      facebook: data.get('facebook'),
      instagram: data.get('instagram'),
      youtube: data.get('youtube'),
      tiktok: data.get('tiktok'),
      twitter: data.get('twitter'),
      website: data.get('website'),
    });
  };

  const inputStyle = {
    marginBottom: '1rem',
    backgroundColor: currentTheme.palette.background.paper, 
    borderRadius: '4px',
  };

  const iconStyle = {
    color: themeName === "light" ? 'black' : 'white', 
    fontSize: '1.5rem', // Ajuste do tamanho do ícone do TikTok para alinhar corretamente
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
              <i className="bi bi-tiktok" style={iconStyle}></i> {/* Ícone do Bootstrap Icons */}
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
            <Box display="flex" alignItems="center" mb={2}>
              <Language style={iconStyle} />
              <TextField
                id="outlined-multiline-flexible"
                label="Website"
                name="website"
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
              onClick={() => {
                navigate("/registerNicheInfluencer");
              }}
            >
              Avançar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
