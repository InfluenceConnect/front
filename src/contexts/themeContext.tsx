import { createContext, useCallback, useMemo, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/system";
import { lightTheme, darkTheme } from "../themes/themes";
import { useMediaQuery } from "@mui/material";

interface ThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
  increaseFontSizeFactor: ()=>void;
  descreaseFontSizeFactor: ()=>void;
  setThemeName: (str:"light" | "dark")=>void;
}


const ThemeContext = createContext({} as ThemeContextData);

const ThemeContextProvider: React.FC<any> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [themeName, setThemeName] = useState<"light" | "dark">(prefersDarkMode?"dark":"light");
  const [fontSizeFactor,setFontSizeFactor] = useState(0.0);
  const [changedToMemo, setChangedToMemo] = useState(0);
  
  const toggleTheme = useCallback(() => {
    setFontSizeFactor(0);
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const increaseFontSizeFactor =()=>{
    setChangedToMemo(p=>p+1)
    setFontSizeFactor((prevValue)=>{
      if(prevValue == 0) return 0.1;
      if(prevValue > 0) return prevValue;
      
      return - prevValue ;
    });
  };
  const descreaseFontSizeFactor =()=>{
    setChangedToMemo(p=>p+1)
    setFontSizeFactor((prevValue)=>{
      if(prevValue == 0) return -0.1;
      if(prevValue < 0) return prevValue;
      
      return - prevValue ;
    });
  };
  
  const theme = useMemo(() => {
    const n = (themeName=="light"?lightTheme:darkTheme);
    const newTheme = {...n}

    const typographyTags = ['body1','body2','button','caption','h1','h2','h3','h4','h5','h6','subtitle1','subtitle2']

    typographyTags.map((tag)=> {
      const tagFont = String(newTheme.typography[tag].fontSize);
      const number_tagFont = Number(tagFont.slice(0, tagFont.indexOf("rem")==0?10: tagFont.indexOf("rem")))

      console.log(number_tagFont, fontSizeFactor)
      const factor = number_tagFont + fontSizeFactor;

      newTheme.typography[tag].fontSize = factor +"rem";
    });


   return newTheme;
  }, [themeName, fontSizeFactor, changedToMemo]);


  const valueProps = {
    themeName: themeName,
    toggleTheme: toggleTheme,
    increaseFontSizeFactor: increaseFontSizeFactor,
    descreaseFontSizeFactor:descreaseFontSizeFactor,
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
