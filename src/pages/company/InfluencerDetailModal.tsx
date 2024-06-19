import React, { useEffect, useState } from "react";
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
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useSessionContext } from "../../contexts/SessionContext";
import Influencer from "../../types/influencer";
import { activeInfluencer, desactiveInfluencer } from "../../services/influence";
import { getAllCampaign } from "../../services/campaign";
import Campaign from "../../types/campaign";

interface InfluencerDetailModalProps {
  influencer: Influencer | null;
  open: boolean;
  onClose: () => void;
  refresh: React.Dispatch<React.SetStateAction<number>>;
  campaigns: Campaign[]
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Influencer1",
  "Influencer2",
  "Influencer3",
  "Influencer4",
  "Influencer5",
  "Influencer6",
  "Influencer7",
];



const InfluencerDetailModal: React.FC<InfluencerDetailModalProps> = ({
  influencer,
  open,
  onClose,
  refresh,
  campaigns
}) => {
  if (!influencer) return null;

  const { userType } = useSessionContext();
  const [selectedCampaignId, setSelectedCampaignId] = useState<string[]>([]);

  const handleCampaignChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setSelectedCampaignId(typeof value === "string" ? value.split(",") : value);
  };

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
          {influencer.status}
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

        <Stack spacing={2} marginTop={1}>
          <FormControl fullWidth  sx={{display: "flex", flexDirection: "row" ,gap: 1}}>
            <InputLabel id="demo-simple-select-label">Campanha</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCampaignId}
              label="Campanha"
              onChange={handleCampaignChange}
              fullWidth
            >
              {campaigns.map((c)=> <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>)}
            </Select>
            <Button variant="outlined" onClick={()=>console.log(selectedCampaignId)}>Adicionar a Campanha</Button>
          </FormControl>
          <Stack spacing={1} direction={"row"}>
            {userType == "adm" ? (
              <>
                <Button variant="contained">Editar</Button>{" "}
                {influencer.status == "ACTIVE" ? (
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={async () => {
                      await desactiveInfluencer(influencer.id);
                      influencer.status = "INACTIVE";
                      refresh((prevV) => prevV + 1);
                    }}
                  >
                    {" "}
                    Desativar{" "}
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={async () => {
                      await activeInfluencer(influencer.id);
                      influencer.status = "ACTIVE";
                      refresh((prevV) => prevV + 1);
                    }}
                  >
                    {" "}
                    Ativar{" "}
                  </Button>
                )}
              </>
            ) : (
              <></>
            )}
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default InfluencerDetailModal;
