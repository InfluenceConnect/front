import * as React from "react";
import { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import img from "../../assets/socialmedia-icons.png";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertColor } from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { RegisterContext } from "../../contexts/registerContext";
import { login } from "../../services/login";

export default function SignInSide() {
  const navigate = useNavigate();

  const [changeLogin, setChangeLogin] = React.useState("influencer");
  const [loading, setLoading] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [alertSeverity, setAlertSeverity] =
    React.useState<AlertColor>("success");
  const [alertMessage, setAlertMessage] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const { setTypeUser } = useContext(RegisterContext);

  const { mode } = useParams();

  React.useEffect(() => {
    if (mode == "registered") {
      setAlertMessage("😎 Cadastrado com sucesso");
      setOpenSnackbar(true);
    } else if (mode == "registerError") {
      setAlertMessage("☹️ Erro ao cadastrar, tente mais tarde!");
      setAlertSeverity("error");
      setOpenSnackbar(true);
    }
  }, []);

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    console.log(event)
    setOpenSnackbar(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    if (!email.includes("@")) {
      setAlertSeverity("error");
      setAlertMessage("O email deve conter o caractere '@'.");
      setOpenSnackbar(true);
      return;
    }

    if (password.length < 8) {
      setAlertSeverity("error");
      setAlertMessage("A senha deve ter no mínimo 8 caracteres.");
      setOpenSnackbar(true);
      return;
    }

    const resLogin = await login(email, password);
    console.log(resLogin);

    setAlertSeverity(resLogin.sucess == "true" ? "success" : "error");
    setAlertMessage(resLogin.message);
    setOpenSnackbar(true);

    setLoading(false);

    if (resLogin.sucess == "true") {
      navigate("/accountStatus");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTypeUser = () => {
    setTypeUser(changeLogin);
    navigate("/Register");
  };

  return (
    <Grid
      container
      component="main"
      sx={{
        minHeight: "calc(100vh - 65px)",
        padding: {
          sx: "0",
          sm: "1rem 0",
          md: "2rem 0",
        },
      }}
    >
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        display={"flex"}
        sx={{
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <ButtonGroup variant="contained">
            <Button
              variant={changeLogin === "influencer" ? "contained" : "outlined"}
              onClick={() => setChangeLogin("influencer")}
              aria-label="selecionar influenciador"
            >
              Influencer
            </Button>
            <Button
              variant={changeLogin === "company" ? "contained" : "outlined"}
              onClick={() => setChangeLogin("company")}
              aria-label="selecionar empresa"
            >
              Empresa
            </Button>
          </ButtonGroup>

          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5" fontWeight={"bold"}>
            Login {changeLogin}
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Digite seu email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Digite sua senha"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? "Esconder senha" : "Mostrar senha"
                      }
                      aria-pressed={showPassword ? "true" : "false"}
                      onClick={handleClickShowPassword}
                      edge="end"
                      sx={{ color: "primary.main" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  inputProps={{
                    "aria-label": "Lembrar-me",
                  }}
                />
              }
              label="Lembrar me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
              aria-label="Fazer login"
            >
              {loading && (
                <CircularProgress size={24} sx={{ position: "absolute" }} />
              )}
              Login
            </Button>

            <Grid container>
              <Grid item xs>
                <Link
                  variant="body2"
                  aria-label="Esqueceu sua senha?"
                  tabIndex={0}
                >
                  Esqueceu sua senha?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  onClick={handleTypeUser}
                  variant="body2"
                  aria-label="Criar uma nova conta"
                  tabIndex={0}
                >
                  {"Não tem uma conta? Inscreva-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={alertSeverity}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
}
