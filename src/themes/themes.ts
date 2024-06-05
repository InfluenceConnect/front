import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette:{
    primary: {
      main: "#14C0DE",
      contrastText: "#fff"
    },
    background: {
      paper: "#fff",
      default: "#fff"
    }
  }
})

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#14C0DE",
    },
    secondary: {
      main: "#828282"
    },
    background:{
      paper: "#000",
      default: "#343a40"
    }
  }
})

export {lightTheme, darkTheme}