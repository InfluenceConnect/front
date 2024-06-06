import { createContext, useCallback, useMemo, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/system";
import { lightTheme, darkTheme } from "../themes/themes";

interface ThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
  changeFontSize: ()=>void;
  setThemeName: (str:"string")=>void;
}

const ThemeContext = createContext({} as ThemeContextData);

const ThemeContextProvider: React.FC<any> = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");
  const [fontSize, setFontSize] = useState(12); //Tamanho padrão do MUI

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const changeFontSize = useCallback((newFontSize: number)=>{
    setFontSize(newFontSize);
  });
  
  const theme = useMemo(() => {
    lightTheme.typography.fontSize = fontSize;
    darkTheme.typography.fontSize = fontSize;
    
    if (themeName === "light") return lightTheme;

    return darkTheme;
  }, [themeName, fontSize]);

  const valueProps = {
    themeName: themeName,
    toggleTheme: toggleTheme,
    changeFontSize: changeFontSize,
    setThemeName: setThemeName,
  }

  return (
    <ThemeContext.Provider value={valueProps}>
      <ThemeProvider theme={theme}>
        <Box bgcolor={theme.palette.background.default}>{children}</Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
