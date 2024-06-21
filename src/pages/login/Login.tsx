import * as React from "react";
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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import img from "../../assets/socialmedia-icons.png";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertColor } from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { login } from "../../services/login";
import { useSessionContext } from "../../contexts/SessionContext";
import { setUserLocalStorage, setUserSessionStorage } from "../../utils/storage";
import UserData from "../../types/userData";
import { usersType } from "../../types/users";
export default function LoginPage() {
  const navigate = useNavigate();
  const sessionCtx = useSessionContext(); // Hook de acesso ao contexto do login como usuario

  //States locais
  const [loading, setLoading] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [alertSeverity, setAlertSeverity] = React.useState<AlertColor>("success");
  const [alertMessage, setAlertMessage] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberCheckboxChecked, setRememberCheckboxChecked] = React.useState(false);

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  // Função para manipular o submit do formulário de login
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    //Validação do email
    if (!email.includes("@")) {
      setAlertSeverity("error");
      setAlertMessage("O email deve conter o caractere '@'.");
      setOpenSnackbar(true);
      setLoading(false);
      return;
    }

    //Validação de senha
    if (password.length < 8) {
      setAlertSeverity("error");
      setAlertMessage("A senha deve ter no mínimo 8 caracteres.");
      setOpenSnackbar(true);
      setLoading(false);
      return;
    }

    //Chamada para a função do login
    const resLogin = await login(email, password);

    // Configuração da mensagem de alerta baseada na resposta do login
    setAlertSeverity(resLogin.sucess == "true" ? "success" : "error");
    setAlertMessage(resLogin.message);
    setOpenSnackbar(true);

    // Se o login for bem-sucedido, muda o tipo de usuário e navega para a página principal
    if (resLogin.sucess == "true") {
      const userLoginType = resLogin.user.role.type.toLowerCase() as
        | "influencer"
        | "company"
        | "adm";
      const actualUserType = sessionCtx.handleChangeUserType(
        userLoginType,
        resLogin.user.influencer?.status ?? ""
      );

      const photo =
        userLoginType == "influencer"
          ? resLogin.user.influencer.profilePhoto
          : resLogin.user.company.profileLogo ?? "";
      const status =
        userLoginType == "influencer"
          ? resLogin.user.influencer.status
          : resLogin.user.company.status;

      const userData: UserData = {
        id: Number(resLogin.user.id),
        name: resLogin.user.name,
        userType: actualUserType as usersType,
        profilePhoto: photo,
        status: status,
      };

      sessionCtx.setUserData(userData)
      if (rememberCheckboxChecked) setUserLocalStorage(userData);
      else setUserSessionStorage(userData);

      navigate("/");
    }

    setLoading(false);
  };

  //Função do olho mágico de visible on e off da senha
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // Função para navegar para a página de registro
  const handleTypeUser = () => {
    navigate("/Register");
  };
  //Renderizando o componente
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
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5" fontWeight={"bold"}>
            Faça o Login
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                      aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
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
                  checked={rememberCheckboxChecked}
                  onChange={(e) => setRememberCheckboxChecked(e.target.checked)}
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
              {loading && <CircularProgress size={24} sx={{ position: "absolute" }} />}
              Login
            </Button>

            <Grid container>
              <Grid item xs>
                <Link variant="body2" aria-label="Esqueceu sua senha?" tabIndex={0}>
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