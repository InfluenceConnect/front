import * as React from "react";
import { useContext, useState, ForwardRefRenderFunction } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ButtonGroup,
  CircularProgress,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IMaskInput } from "react-imask";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { RegisterContext } from "../../contexts/registerContext";
import { verifyEmailIsAvailable } from "../../services/register";
import { states } from "../../data/states";

interface TextMaskCustomProps {
  mask: string;
  inputRef: (ref: HTMLInputElement | null) => void;
}

const TextMaskCustom: ForwardRefRenderFunction<
  HTMLDivElement,
  TextMaskCustomProps
> = (props) => {
  const { mask, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask={mask}
      definitions={{
        "#": /[0-9]/,
      }}
    />
  );
};

const Register: React.FC = () => {
  const { typeUser, setTypeUser } = useContext(RegisterContext);
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [state, setState] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const registerInfCtx = useContext(RegisterContext);

  const handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setProfilePicture(file);
    if (file) {
      setLoadingImage(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setLoadingImage(false);
    } else {
      setPreview(null);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
  };

  const validateCPF = (cpf: string) => {
    const re = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    return re.test(cpf);
  };

  const validateCNPJ = (cnpj: string) => {
    const re = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    return re.test(cnpj);
  };

  const validatePassword = (password: string) => {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append("profilePicture", profilePicture as Blob);

    let formErrors: { [key: string]: string } = {};

    const email = data.get("email") as string;
    const password = data.get("password") as string;

    const isAvailableEmailAtAPI = await verifyEmailIsAvailable(email);

    if (!validateEmail(email)) {
      formErrors.email = "E-mail inválido";
    } else if (!isAvailableEmailAtAPI)
      formErrors.email = "E-mail já está cadastrado.";

    if (!validatePassword(password)) {
      formErrors.password =
        "A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.";
    }

    if (typeUser === "influencer") {
      const cpf = data.get("cpf") as string;
      if (!validateCPF(cpf)) {
        formErrors.cpf = "CPF inválido";
      }
    } else {
      const cnpj = data.get("cnpj") as string;
      if (!validateCNPJ(cnpj)) {
        formErrors.cnpj = "CNPJ inválido";
      }
    }

    setLoading(false);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      if (typeUser === "influencer") {
        console.log({
          profilePicture: data.get("profilePicture"),
          name: data.get("name"),
          cpf: data.get("cpf"),
          state: data.get("state"),
          email: data.get("email"),
          birthdate: data.get("birthdate"),
          password: data.get("password"),
        });

        registerInfCtx.setInfluencerData(() => {
          const newInfluencerData = {
            ...registerInfCtx.influencerData,
            email: email,
            password: password,
            cpf: data.get("cpf") as string,
            profilePhoto: preview ?? "",
            stateId: states.indexOf(state) + 1, //+1 porque os id's no banco começam de 0
            birthdate: data.get("birthdate")?.toString() ?? "",
          };

          console.log(newInfluencerData);
          return newInfluencerData;
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

      console.log(registerInfCtx.typeUser);
      navigate("/registerNicheInfluencer");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4" fontWeight="bold">
          Influence Connect
        </Typography>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button
            variant={typeUser === "influencer" ? "contained" : "outlined"}
            onClick={() => setTypeUser("influencer")}
          >
            Influencer
          </Button>
          <Button
            variant={typeUser === "company" ? "contained" : "outlined"}
            onClick={() => setTypeUser("company")}
          >
            Empresa
          </Button>
        </ButtonGroup>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="profilePicture"
                type="file"
                onChange={handlePictureChange}
                disabled={loadingImage}
              />
              <label
                aria-disabled={loadingImage}
                htmlFor="profilePicture"
                style={{ textAlign: "center" }}
              >
                {loadingImage ? (
                  <div style={{ width: 100, height: 100, textAlign: "center" }}>
                    {loadingImage && (
                      <CircularProgress style={{ justifyContent: "center" }} />
                    )}
                  </div>
                ) : (
                  <Avatar
                    src={preview || undefined}
                    sx={{ width: 100, height: 100, cursor: "pointer" }}
                  />
                )}
              </label>
            </Grid>
            {typeUser === "influencer" ? (
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
                    name="cpf"
                    label="CPF"
                    InputProps={{
                      inputComponent: TextMaskCustom as any,
                      inputProps: { mask: "000.000.000-00" },
                    }}
                  />
                  {errors.cpf && (
                    <Typography color="error">{errors.cpf}</Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel id="state-label">Estado</InputLabel>
                    <Select
                      labelId="state-label"
                      id="state"
                      name="state"
                      value={state}
                      onChange={(e) => setState(e.target.value as string)}
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
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    error={!!errors.email}
                    helperText={errors.email}
                  />
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
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="cnpj"
                    name="cnpj"
                    label="CNPJ"
                    InputProps={{
                      inputComponent: TextMaskCustom as any,
                      inputProps: { mask: "00.000.000/0000-00" },
                    }}
                  />
                  {errors.cnpj && (
                    <Typography color="error">{errors.cnpj}</Typography>
                  )}
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Senha"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="new-password"
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword ? "Esconder senha" : "Mostrar senha"
                        }
                        onClick={handleClickShowPassword}
                        edge="end"
                        sx={{ color: "primary.main" }}
                      >
                        {showPassword ? (
                          <VisibilityOff sx={{ color: "primary.main" }} />
                        ) : (
                          <Visibility sx={{ color: "primary.main" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="primary"
            disabled={loading}
          >
            {loading && <CircularProgress sx={{ position: "absolute" }} />}
            Cadastrar
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
};

export default Register;
