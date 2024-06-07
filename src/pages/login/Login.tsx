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
import ButtonGroup from "@mui/material/ButtonGroup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import img from "../../assets/socialmedia-icons.png"

// function Copyright(props: any) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();
  const [changeLogin, setchangeLogin] = React.useState("Influencer");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    // <ThemeProvider theme={defaultTheme}>
    <Grid container component="main" sx={{ height: "calc(100vh - 65px)" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square display={'flex'} sx={{alignItems: "center"}}>
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
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button
              variant={changeLogin === "Influencer" ? "contained" : "outlined"}
              onClick={() => setchangeLogin("Influencer")}
            >
              Influencer
            </Button>
            <Button
              variant={changeLogin == "Empresa" ? "contained" : "outlined"}
              onClick={() => setchangeLogin("Empresa")}
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
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link variant="body2">Esqueceu sua senha?</Link>
              </Grid>
              <Grid item>
                <Link
                  onClick={() =>
                    navigate(
                      `/register${
                        changeLogin == "Influencer" ? "Influencer" : "Company"
                      }`
                    )
                  }
                  variant="body2"
                >
                  {"Não tem uma conta? Inscreva-se"}
                </Link>
              </Grid>
            </Grid>
            {/* <Copyright sx={{ mt: 5 }} /> */}
          </Box>
        </Box>
      </Grid>
    </Grid>
    // </ThemeProvider>
  );
}
