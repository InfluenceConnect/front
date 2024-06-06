import { createTheme } from "@mui/material";
import { create } from "@mui/material/styles/createTransitions";

declare module '@mui/material/styles' {
  interface Theme {
    dark?: {
      main?: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    dark?: {
      main?: string;
    };
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    dark: Palette['primary'];
  }

  interface PaletteOptions {
    dark?: PaletteOptions['primary'];
  }
}

const lightTheme = createTheme({
  palette:{
    primary: {
      main: "#14C0DE",
      contrastText: "#fff"
    },
    dark: {
      main: "#343a40",
      contrastText: "#fff"
    }
  },
  typography: {
    fontSize: 12
  }
})

const darkTheme = createTheme({
  palette:{
    mode: "dark"
  }
})

const old_lightTheme = createTheme({
  palette:{
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
    },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
  },
})

const old_darkTheme = createTheme({
  palette: {
    primary: {
      main: "#14C0DE",
      contrastText: "#fff"
    },
    secondary: {
      main: "#828282",
      contrastText: "#fff"
    },
    background:{
      paper: "#aaa",
      default: "#343a40",
    },
    dark:{
      main: "#343a40",
      contrastText: "#fff"
    }
  }
})

export {lightTheme, darkTheme}
