import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Theme {
    dark?: {
      main?: string;
    };
  }
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
  palette: {
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
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#14C0DE",
      contrastText: "#fff"
    },
    background: {
      paper: "#424242",
      default: "#121212"
    },
    dark: {
      main: "#343a40",
      contrastText: "#fff"
    }
  },
  typography: {
    fontSize: 12,
  }
});

export { lightTheme, darkTheme };
