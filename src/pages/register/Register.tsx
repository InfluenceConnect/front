import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

export default function SignUp() {
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const [changeLogin, setChangeLogin] = useState("Influencer");

  const handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setProfilePicture(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(undefined);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append("profilePicture", profilePicture as Blob);
    if (changeLogin === "Influencer") {
      console.log({
        profilePicture: data.get("profilePicture"),
        name: data.get("name"),
        cpf: data.get("cpf"),
        state: data.get("state"),
        email: data.get("email"),
        birthdate: data.get("birthdate"),
        password: data.get("password"),
      });
    } else {
      console.log({
        logo: data.get("profilePicture"),
        companyName: data.get("companyName"),
        email: data.get("email"),
        cnpj: data.get("cnpj"),
        password: data.get("password"),
      });
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ p: "2rem 0", /*minHeight: "calc(100vh - 80px)"*/ }}
    >
      <CssBaseline />
      <Box
        component={Paper}
        elevation={0}
        p={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography component="h1" variant="h4" fontWeight="bold">
          Influence Connect
        </Typography>
        <ButtonGroup
          variant="contained"
          aria-label="Basic button group"
          sx={{ mb: 3, mt: 2 }}
        >
          <Button
            variant={changeLogin === "Influencer" ? "contained" : "outlined"}
            onClick={() => setChangeLogin("Influencer")}
          >
            Influencer
          </Button>
          <Button
            variant={changeLogin === "Empresa" ? "contained" : "outlined"}
            onClick={() => setChangeLogin("Empresa")}
          >
            Empresa
          </Button>
        </ButtonGroup>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="profilePicture"
                type="file"
                onChange={handlePictureChange}
              />
              <label htmlFor="profilePicture">
                <Avatar
                  src={preview}
                  sx={{ width: 100, height: 100, cursor: "pointer" }}
                />
              </label>
            </Grid>
            {changeLogin === "Influencer" ? (
              <>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Nome"
                    name="name"
                    autoComplete="name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="cpf"
                    label="CPF"
                    name="cpf"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="state"
                    label="Estado"
                    name="state"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="birthdate"
                    label="Data de nascimento"
                    name="birthdate"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="companyName"
                    label="Nome da Empresa"
                    name="companyName"
                    autoComplete="companyName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="cnpj"
                    label="CNPJ"
                    name="cnpj"
                  />
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="primary"
            onClick={()=>navigate(`/registerNiche${changeLogin=="Empresa"?'Company':"Influencer"}`)}
          >
            Registrar
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link onClick={() => navigate(`/`)} variant="body2">
                Já tem uma conta? Entrar
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
