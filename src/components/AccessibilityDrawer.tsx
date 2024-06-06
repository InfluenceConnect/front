import { useState, useContext } from "react";

import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { ButtonGroup, Button, Container, Box, Drawer, Switch} from "@mui/material";
import DarkModeSwitch from "./DarkModeSwitch"
import {ThemeContext} from "../contexts/themeContext.tsx"

export default function AccessibilityDrawer() {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1);

  const {changeFontSizeByFactor, toggleTheme, themeName, setThemeName} = useContext(ThemeContext);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerContent = (
    <Container>
      <Box
        sx={{ width: '150px', p: 1 }}
        role="presentation"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={2}
      >
        <Button
          color="error"
          variant="contained"
          onClick={toggleDrawer(false)}
          sx={{
            minWidth: "0",
            borderRadius: "100%",
            width: "2rem",
            height: "2rem",
            p: 0,
            fontSize: "1.2rem",
            fontWeight: "bold",
            alignSelf: "flex-end",
          }}
        >
          X
        </Button>
        
        <ButtonGroup>
          <Button variant="contained"
            onClick={()=>changeFontSizeByFactor(-1)}
          ><strong>-A</strong></Button>
          <Button
            onClick={()=>changeFontSizeByFactor(1)}
          >+A</Button>
        </ButtonGroup>
        
        <Box>
          <label>
            <Switch edge="start" /> Moldura
          </label>
        </Box>

        <Box>
          <label>
            <DarkModeSwitch
              edge="start"
              checked={themeName=="light"?false:true}
              onClick={()=>
                  setThemeName((prevValue)=>prevValue=="light"?"dark":"light")
              }
            />
            Modo
          </label>
        </Box>
      </Box>
    </Container>
  );

  return (
    <div style={{ position: "absolute", top: "40%", left: "1%" }}>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          backgroundColor: "#14C0DE",
          border: "0.15rem solid #343a40",
          borderRadius: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "2rem",
          height: "2rem",
          minWidth: "0px",
        }}
      >
        <AccessibilityIcon sx={{ color: "white" }} />
      </Button>
      <Drawer
        open={open}
        onClose={() => toggleDrawer(false)}
        hideBackdrop={false}
        variant="temporary"
        anchor="left"
        onClick={(evt)=>{
          if(evt.clientX > 180){
            setOpen(false);
          }
        }}
      >
        {DrawerContent}
      </Drawer>
    </div>
  );
}
