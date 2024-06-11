import { useState, useContext } from "react";

import AccessibilityIcon from "@mui/icons-material/Accessibility";
import {
  ButtonGroup,
  Button,
  Container,
  Box,
  Drawer,
  Switch,
} from "@mui/material";
import DarkModeSwitch from "./DarkModeSwitch";
import { ThemeContext } from "../contexts/themeContext.tsx";

export default function AccessibilityDrawer() {
  const [open, setOpen] = useState(false);

  const {
    increaseFontSizeFactor,
    descreaseFontSizeFactor,
    toggleTheme,
    themeName,
    outlineIsActive,
    toggleOutline,
  } = useContext(ThemeContext);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerContent = (
    <Container>
      <Box
        sx={{ width: "150px", p: 1 }}
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
          <Button variant="contained" onClick={() => descreaseFontSizeFactor()}>
            <strong>-A</strong>
          </Button>
          <Button onClick={() => increaseFontSizeFactor()}>+A</Button>
        </ButtonGroup>

        <Box>
          <label>
            <Switch
              edge="start"
              checked={outlineIsActive}
              onClick={() => toggleOutline()}
            />{" "}
            Moldura
          </label>
        </Box>

        <Box>
          <label>
            <DarkModeSwitch
              edge="start"
              checked={themeName == "light" ? false : true}
              onClick={() => toggleTheme()}
            />
            Modo
          </label>
        </Box>
      </Box>
    </Container>
  );

  return (
    <div style={{ position: "fixed", top: "50%", transform: "translateY(-50%)", left: "1%", zIndex: "1" }} >
      <Button
        onClick={toggleDrawer(true)}
        variant="contained"
        disableElevation
        sx={{
          bgcolor: "#2c7ce7",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          minWidth: "0px",
          p: 0,
        }}
      >
        <AccessibilityIcon sx={{fontSize: "28px"}} />
      </Button>
      <Drawer
        open={open}
        onClose={() => toggleDrawer(false)}
        hideBackdrop={false}
        variant="temporary"
        anchor="left"
        onClick={(evt) => {
          if (evt.clientX > 180) {
            setOpen(false);
          }
        }}
      >
        {DrawerContent}
      </Drawer>
    </div>
  );
}
