import React from "react";
import {
  Modal,
  Box,
  Typography,
  CardMedia,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useSessionContext } from "../../contexts/SessionContext";
import Influencer from "../../types/influencer";

interface InfluencerDetailModalProps {
  influencer: Influencer | null;
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

const InfluencerDetailModal: React.FC<InfluencerDetailModalProps> = ({
  influencer,
  open,
  onClose,
}) => {
  if (!influencer) return null;

  const { userType } = useSessionContext();

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="influencer-modal-title"
      aria-describedby="influencer-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <CardMedia
          component="img"
          alt={influencer.name}
          height="200"
          image={influencer.profilePhoto || influencer.image}
        />
        <Typography id="influencer-modal-title" variant="h5" component="div">
          {influencer.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          id="influencer-modal-description"
        >
          {influencer.description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <IconButton href={`https://facebook.com/${influencer.id}`} target="_blank">
            <FacebookIcon />
          </IconButton>
          <IconButton href={`https://instagram.com/${influencer.id}`} target="_blank">
            <InstagramIcon />
          </IconButton>
          <IconButton href={`https://twitter.com/${influencer.id}`} target="_blank">
            <TwitterIcon />
          </IconButton>
        </Box>

        <Stack spacing={1} direction={"row"}>
          <Button variant="outlined">Convidar para campanha</Button>
          {influencer.status == "ACTIVE" ? (
            <Button variant="outlined" color="error">
              {" "}
              Desativar{" "}
            </Button>
          ) : (
            <Button variant="outlined"> Ativar </Button>
          )}
          {userType == "adm" ? <Button variant="contained">Editar</Button> : <></>}
        </Stack>
      </Box>
    </Modal>
  );
};

export default InfluencerDetailModal;
