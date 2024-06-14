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

  const isValidURL = (url: string): boolean => {
    const pattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,}([/?].*)?$/;
    return pattern.test(url);
  };

  const validateMarketingLinks = (links: MarketingLinks): Errors => {
    let formErrors: Errors = {};

    Object.entries(links).forEach(([key, value]) => {
      if (value && !isValidURL(value)) {
        formErrors[key] = `Informe um ${key} válido.`;
      }
    });

    if (Object.values(links).every((value) => value === "")) {
      formErrors.general = "Preencha pelo menos um dos campos para prosseguir.";
    }

    return formErrors;
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

    const formErrors = validateMarketingLinks(newMarketing);

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
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 5,
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
            {Object.keys(marketing).map((key) => (
              <Box display="flex" alignItems="center" mb={2} key={key}>
                {key === "facebook" && <Facebook style={iconStyle} />}
                {key === "instagram" && <Instagram style={iconStyle} />}
                {key === "youtube" && <YouTube style={iconStyle} />}
                {key === "tiktok" && <i className="bi bi-tiktok" style={iconStyle}></i>}
                {key === "twitter" && <Twitter style={iconStyle} />}
                {key === "website" && <Language style={iconStyle} />}
                <TextField
                  id={key}
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  name={key}
                  fullWidth
                  multiline
                  maxRows={4}
                  sx={{ ml: 1 }}
                  value={marketing[key as keyof MarketingLinks]}
                  onChange={handleChange}
                  error={!!errors[key]}
                  helperText={errors[key]}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AddLink />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            ))}
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
