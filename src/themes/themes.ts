import { createTheme } from "@mui/material";

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
