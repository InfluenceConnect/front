import React from "react";
import {
  Modal,
  Box,
  Typography,
  CardMedia,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Company from "../../types/company";
import { useSessionContext } from "../../contexts/SessionContext";

interface CompanyDetailModalProps {
  company: Company | null;
  open: boolean;
  onClose: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const CompanyDetailModal: React.FC<CompanyDetailModalProps> = ({
  company,
  open,
  onClose,
}) => {
  if (!company) return null;

  const { userType } = useSessionContext();

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="company-modal-title"
      aria-describedby="company-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <CardMedia
          component="img"
          alt={company.name}
          height="200"
          image={company.profileLogo || company.image}
        />
        <Typography id="company-modal-title" variant="h5" component="div">
          {company.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" id="company-modal-description">
          {company.status}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <IconButton href={`https://facebook.com/${company.id}`} target="_blank">
            <FacebookIcon />
          </IconButton>
          <IconButton href={`https://instagram.com/${company.id}`} target="_blank">
            <InstagramIcon />
          </IconButton>
          <IconButton href={`https://twitter.com/${company.id}`} target="_blank">
            <TwitterIcon />
          </IconButton>
        </Box>

        <Stack spacing={1} direction={"row"}>
          {company.status == "ACTIVE" ? (
            <Button variant="outlined"> Desativar </Button>
          ) : (
            <Button variant="outlined"> Ativar </Button>
          )}
          {userType == "adm" ? <Button variant="contained">Editar</Button> : <></>}
        </Stack>
      </Box>
    </Modal>
  );
};

export default CompanyDetailModal;
