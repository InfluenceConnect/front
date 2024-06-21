import React from "react";
import { usersType } from "../types/users";
import { useLocation, useNavigate } from "react-router-dom";
import { useSessionContext } from "../contexts/SessionContext";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Link,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutButton from "./LogoutButton";

interface Page {
  name: string;
  path: string;
}

const admPages: Page[] = [
  {
    name: "Influencers",
    path: "/homeCompany",
  },
  {
    name: "Empresas",
    path: "/homeInfluencer",
  },
  {
    name: "Campanhas",
    path: "/campaigns",
  },
  {
    name: "Nova Campanha",
    path: "/registerCampaign",
  },
];

const companyPages: Page[] = [
  {
    name: "Influenciadores",
    path: "/homeCompany",
  },
  {
    name: "Campanhas",
    path: "/campaigns",
  },
  {
    name: "Nova Campanha",
    path: "/registerCampaign",
  },
];

const influencerPages: Page[] = [
  {
    name: "Empresas",
    path: "/homeInfluencer",
  },
  {
    name: "Campanhas",
    path: "/campaigns",
  },
  {
    name: "Conta",
    path: "/accountStatus",
  },
];

const handleChangePages = (userType: usersType) => {
  if (userType == "adm") return admPages;
  if (userType == "influencer") return influencerPages;
  if (userType == "company") return companyPages;

  return [{ name: "", path: "" }];
};

const Navbar = () => {
  const navigate = useNavigate();
  const { userType } = useSessionContext();
  // console.log("userType: " + userType)
  const [pages, setPages] = React.useState<Page[]>(() => handleChangePages(userType));
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { pathname } = useLocation();

  React.useEffect(() => {
    setPages(handleChangePages(userType));
    console.log(pathname);
  }, [userType]);

  return (
    <>
      {/* Telas grande md=flex  */}
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "flex-end",
        }}
      >
        {pages.map((page, index) => (
          <Stack key={index} onClick={() => navigate(page.path)}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link
                color="inherit"
                underline={page.path == pathname ? "always" : "hover"}
              >
                {page.name}
              </Link>
            </Button>
          </Stack>
        ))}
        <LogoutButton />
      </Box>
      {/* Telas pequenas xs=flex */}
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page, index) => (
            <div key={index} onClick={() => navigate(page.path)}>
              {index != 0 ? <hr /> : <></>}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    color="inherit"
                    underline={page.path == pathname ? "always" : "hover"}
                  >
                    {page.name}
                  </Link>
                </Typography>
              </MenuItem>
            </div>
          ))}
          <LogoutButton />
        </Menu>
      </Box>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default Navbar;
