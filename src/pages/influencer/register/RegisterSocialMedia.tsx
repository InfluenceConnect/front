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
import CircularProgress from "@mui/material/CircularProgress";
import { RegisterContext } from "../../../contexts/registerContext";
import { registerInfluencer } from "../../../services/register";
import { InfluencerSocialMedia } from "../../../types/requestSaveInfluencer";

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
  const registerInfCtx = React.useContext(RegisterContext);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<Errors>({});
  const [socialMedia, setSocialMedia] = React.useState<SocialMediaLinks>({
    facebook: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    twitter: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSocialMedia((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isValidURL = (url: string): boolean => {
    const pattern =
      /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,}([/?].*)?$/;
    return pattern.test(url);
  };

  const validateSocialMediaLinks = (links: SocialMediaLinks): Errors => {
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newSocialMedia: SocialMediaLinks = {
      facebook: data.get("facebook") as string,
      instagram: data.get("instagram") as string,
      youtube: data.get("youtube") as string,
      tiktok: data.get("tiktok") as string,
      twitter: data.get("twitter") as string,
    };
    setSocialMedia(newSocialMedia);

    const formErrors = validateSocialMediaLinks(newSocialMedia);

    if (Object.keys(formErrors).length === 0) {
      setLoading(true);

      const socialMediaInfluencer = Object.entries(newSocialMedia)
        .map((sm, index) => {
          if (sm[1] != "" && sm[1] != null && sm[1] != undefined)
            return { socialMediaId: index + 1, link: sm[1] };
          else return undefined;
        })
        .filter((e) => e !== undefined) as InfluencerSocialMedia[];

      const newInfData = {
        ...registerInfCtx.influencerData,
        influencerSocialMedia: socialMediaInfluencer,
      };
      registerInfCtx.setInfluencerData(newInfData);

      setLoading(false);

      const res = await registerInfluencer(newInfData);

      if(!!res){
        navigate("/login/registered");
      }else{
        navigate("/login/registerError")
      }
      
      

    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mt: 5,
          mb: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Cadastrar Redes Sociais
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, width: "100%" }}
        >
          {errors.general && (
            <Typography color="error" sx={{ mb: 2, textAlign: "center" }}>
              {errors.general}
            </Typography>
          )}
          {Object.keys(socialMedia).map((key) => (
            <Box display="flex" alignItems="center" mb={2} key={key}>
              {key === "facebook" && <Facebook sx={{ fontSize: 30 }} />}
              {key === "instagram" && <Instagram sx={{ fontSize: 30 }} />}
              {key === "youtube" && <YouTube sx={{ fontSize: 30 }} />}
              {key === "tiktok" && (
                <i className="bi bi-tiktok" style={{ fontSize: 30 }}></i>
              )}
              {key === "twitter" && <Twitter sx={{ fontSize: 30 }} />}
              <TextField
                id={key}
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                name={key}
                fullWidth
                multiline
                maxRows={4}
                sx={{ ml: 1 }}
                value={socialMedia[key as keyof SocialMediaLinks]}
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
            {loading && <CircularProgress sx={{ position: "absolute" }} />}
            Avançar
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
