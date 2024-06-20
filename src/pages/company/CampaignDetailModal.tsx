import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  CardMedia,
  IconButton,
  Stack,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSessionContext } from "../../contexts/SessionContext";
import Campaign from "../../types/campaign";
import Influencer from "../../types/influencer";
import { addInfluencerToCampaign } from "../../services/campaign";
import { getAllInfluencers } from "../../services/influence";

interface CampaignDetailModalProps {
  campaign: Campaign | null;
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

const CampaignDetailModal: React.FC<CampaignDetailModalProps> = ({
  campaign,
  open,
  onClose,
}) => {
  const { userType } = useSessionContext();
  const [selectedInfluencerId, setSelectedInfluencerId] = useState<string>("");
  const [influencers, setInfluencers] = useState<Influencer[]>([]);

  useEffect(() => {
    if (open) {
      fetchInfluencers();
    }
  }, [open]);

  const fetchInfluencers = async () => {
    const influencers = await getAllInfluencers();
    setInfluencers(influencers);
  };

  const handleInfluencerChange = (event: SelectChangeEvent<string>) => {
    setSelectedInfluencerId(event.target.value);
  };

  if (!campaign) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="campaign-modal-title"
      aria-describedby="campaign-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <CardMedia
          component="img"
          alt={campaign.name}
          height="200"
          image={campaign.image}
        />
        <Typography id="campaign-modal-title" variant="h5" component="div">
          {campaign.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" id="campaign-modal-description">
          {campaign.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {campaign.status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Data de Início: {campaign.startDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Data de Término: {campaign.endDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Orçamento: R$ {campaign.budget.toFixed(2)}
        </Typography>
        {userType === "adm" && (
          <Stack spacing={2} direction={"row"} marginTop={1}>
            {/* <Button variant="contained">Editar</Button> */}
            <Button variant="outlined" color="error">
              Desativar
            </Button>
          </Stack>
        )}
      </Box>
    </Modal>
  );
};

export default CampaignDetailModal;
