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
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import CircularProgress from '@mui/material/CircularProgress';

const states = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
  "Fora do País",
];

const Register: React.FC = () => {
  const [loadingImage, setLoadingImage] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const [registerInfo, setRegisterInfo] = useState<any>({
    profilePicture: undefined,
    preview: undefined,
    role: "influencer",
    geoState: undefined,
  });
  

  const handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setRegisterInfo({ ...registerInfo, profilePicture: file });
    if (file) {
      setLoadingImage(true)
      const reader = new FileReader();
      reader.onloadend = () => {
        setRegisterInfo({ ...registerInfo, preview: reader.result as string });
      };
      reader.readAsDataURL(file);
    } else {
      setRegisterInfo({ ...registerInfo, preview: undefined });
    }
    
      setLoadingImage(false);
      
  
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
 

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append("profilePicture64", registerInfo.preview);

    if (registerInfo.role === "influencer") {
      console.log({
        profilePicture: data.get("profilePicture64"),
        name: data.get("name"),
        cpf: data.get("cpf"),
        state: data.get("state"),
        email: data.get("email"),
        birthdate: data.get("birthdate"),
        password: data.get("password"),
      });
    } 

    else {
      console.log({
        logo: data.get("profilePicture"),
        companyName: data.get("companyName"),
        email: data.get("email"),
        cnpj: data.get("cnpj"),
        password: data.get("password"),
      });
    }

    navigate(`/registerNiche${registerInfo.role}`)
  };
  const handleNext = () => {
     setLoading(true)
    
    //COLOQUEI SOMENTE PRA NÃO FICAR E LOADING INFINITO !!!!!!
    setTimeout(() => { 
      setLoading(false);
      
  }, 2000);
    
  }
  
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ minHeight: "calc(100vh - 65px)", paddingBlock: 5 }}
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            variant={
              registerInfo.role === "influencer" ? "contained" : "outlined"
            }
            onClick={() =>
              setRegisterInfo({ ...registerInfo, role: "influencer" })
            }
          >
            Influencer
          </Button>
          <Button
            variant={registerInfo.role === "company" ? "contained" : "outlined"}
            onClick={() =>
              setRegisterInfo({ ...registerInfo, role: "company" })
            }
          >
            Empresa
          </Button>
        </ButtonGroup>

        {/* ESSA É A BOX DO FORMULÁRIO */}
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
              <label  htmlFor="profilePicture"   >
                
                  <Avatar
                  src={registerInfo.preview}
                  sx={{ width: 100, height: 100, cursor: "pointer" }}
                  
                />
               {loadingImage && (<CircularProgress sx={{ position: 'absolute' }} />)}
              </label>
            </Grid>

            {/* AQUI COMEÇA OS INPUTS CADSATRO */}
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
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            {registerInfo.role === "influencer" ? (
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
                  <FormControl fullWidth required>
                    <InputLabel id="state-label">Estado</InputLabel>
                    <Select
                      labelId="state-label"
                      id="state"
                      name="state"
                      value={registerInfo.geoState}
                      onChange={(e) =>
                        setRegisterInfo({
                          ...registerInfo,
                          geoState: e.target.value,
                        })
                      }
                      label="Estado"
                    >
                      {states.map((state) => (
                        <MenuItem key={state} value={state}>
                          {state}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="birthdate"
                    label="Data de Nascimento"
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
                    id="cnpj"
                    label="CNPJ"
                    name="cnpj"
                  />
                </Grid>
              </>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="primary"
            disabled={loading}
            onClick={handleNext}
          >
            {loading && (<CircularProgress sx={{ position: 'absolute' }} />)}
            Cadastrar
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link variant="body2">Já tem uma conta? Entrar</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
