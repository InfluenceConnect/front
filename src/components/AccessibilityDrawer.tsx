import * as React from "react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { ButtonGroup, Button, Container, Box, Drawer, Switch} from "@mui/material";

export default function AccessibilityDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerContent = (
    <Container>
      <Box
        sx={{ height: 150, p: 1 }}
        role="presentation"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
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
          <Button variant="contained"><strong>-A</strong></Button>
          <Button>+A</Button>
        </ButtonGroup>
      <Box>
      <label htmlFor="">
        <Switch></Switch> Moldura
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
        anchor="bottom"
      >
        {DrawerContent}
      </Drawer>
    </div>
  );
}
