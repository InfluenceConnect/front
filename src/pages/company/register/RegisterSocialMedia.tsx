
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import { Facebook, Instagram, YouTube, Twitter,Language } from '@mui/icons-material';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importando os estilos dos ícones Bootstrap
import { createTheme, ThemeProvider } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#14C0DE",
      contrastText: "#fff"
    },
    background: {
      paper: "#fff",
      default: "#fff"
    },
    dark: {
      main: "#343a40",
      contrastText: "#fff"
    }
  }
});

export default function RegisterMarketing() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      facebook: data.get('facebook'),
      instagram: data.get('instagram'),
      youtube: data.get('youtube'),
      tiktok: data.get('tiktok'),
      twitter: data.get('twitter'),
    });
  };

  const inputStyle = {
    marginBottom: '1rem',
    backgroundColor: '#fff', // Fundo branco
    borderRadius: '4px',
  };

  const iconStyle = {
    color: 'black', // Cor preta para os ícones
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
          <Typography component="h1" variant="h5">
              Cadastre seus Canais de Marketing:
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="facebook"
              label="Facebook"
              name="facebook"
              autoComplete="facebook"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Facebook style={iconStyle} />
                  </InputAdornment>
                ),
              }}
              sx={inputStyle}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="instagram"
              label="Instagram"
              name="instagram"
              autoComplete="instagram"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Instagram style={iconStyle} />
                  </InputAdornment>
                ),
              }}
              sx={inputStyle}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="youtube"
              label="YouTube"
              name="youtube"
              autoComplete="youtube"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <YouTube style={iconStyle} />
                  </InputAdornment>
                ),
              }}
              sx={inputStyle}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="tiktok"
              label="TikTok"
              name="tiktok"
              autoComplete="tiktok"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <i className="bi bi-tiktok" style={iconStyle}></i> {/* Ícone do Bootstrap Icons */}
                  </InputAdornment>
                ),
              }}
              sx={inputStyle}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="twitter"
              label="Twitter"
              name="twitter"
              autoComplete="twitter"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Twitter style={iconStyle} />
                  </InputAdornment>
                ),
              }}
              sx={inputStyle}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="Website"
              label="Website"
              name="Website"
              autoComplete="Website"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Language style={iconStyle} />
                  </InputAdornment>
                ),
              }}
              sx={inputStyle}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Avançar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}