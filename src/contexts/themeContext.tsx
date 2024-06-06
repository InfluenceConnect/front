import { createContext, useCallback, useMemo, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/system";
import { lightTheme, darkTheme } from "../themes/themes";

interface ThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
  changeFontSizeByFactor: ()=>void;
  setThemeName: (str:"string")=>void;
}

const ThemeContext = createContext({} as ThemeContextData);

const ThemeContextProvider: React.FC<any> = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");
  
  const [fontSize, setFontSize] = useState(12); //Tamanho padrão do MUI
  const [oldFontSize, setOldFontSize] = useState(12);

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const changeFontSizeByFactor = useCallback((factor: number)=>{
    setOldFontSize(fontSize);
    setFontSize((prevValue)=>prevValue+factor);
  });
  
  const theme = useMemo(() => {
    const adaptedLightTheme= lightTheme; //ISSO ESTÁ CAUSANDO O BUG DE MUDAR LOCALMENTE A FONTE
    adaptedLightTheme.typography.fontSize = `${fontSize}rem` ;

    const typographyTags = ['body1','body2','button','caption','h1','h2','h3','h4',
    'h5','h6','subtitle1','subtitle2']

    typographyTags.map((tag)=> {
      const oldTagFontSize = adaptedLightTheme.typography[tag].fontSize
      const number_oldTagFontSize = Number(oldTagFontSize.slice(0, oldTagFontSize.indexOf("rem")))
      const newFactor = (fontSize/oldFontSize)*number_oldTagFontSize
      adaptedLightTheme.typography[tag].fontSize = `${newFactor}rem`
      console.log(adaptedLightTheme.typography[tag].fontSize);
    });
    
    if (themeName === "light") return adaptedLightTheme;

    return darkTheme;
  }, [themeName, fontSize]);

  const valueProps = {
    themeName: themeName,
    toggleTheme: toggleTheme,
    changeFontSizeByFactor: changeFontSizeByFactor,
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
