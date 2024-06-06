import { createContext, useCallback, useMemo, useState, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/system";
import { lightTheme, darkTheme } from "../themes/themes";

interface ThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
  changeFontSizeByFactor: (factor: number)=>void;
  setThemeName: (str:"light" | "dark")=>void;
}

const ThemeContext = createContext({} as ThemeContextData);

const ThemeContextProvider: React.FC<any> = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");
  const [adaptedTheme, setAdaptedTheme] = useState(lightTheme);
  const [fontSize, setFontSize] = useState(12); //Tamanho padrão do MUI
  const [oldFontSize, setOldFontSize] = useState(fontSize);

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const changeFontSizeByFactor =(factor: number)=>{
    setOldFontSize(fontSize);
    setFontSize((prevValue)=>prevValue+factor);
  };
  
  const theme = useMemo(() => {
    const newTheme = {...adaptedTheme};

    const typographyTags = ['body1','body2','button','caption','h1','h2','h3','h4','h5','h6','subtitle1','subtitle2']
    newTheme.typography.fontSize = fontSize;  

    typographyTags.map((tag)=> {
      const tagFont = String(newTheme.typography[tag].fontSize);
      const number_tagFont = Number(tagFont.slice(0, tagFont.indexOf("rem")==0?10: tagFont.indexOf("rem")))
      const factor = number_tagFont + ((fontSize-oldFontSize)/10)

      newTheme.typography[tag].fontSize = factor +"rem";
    });

    if (themeName == "light"){
      return newTheme;
    } 

    setAdaptedTheme(newTheme);

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
