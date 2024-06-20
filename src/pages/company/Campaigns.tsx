import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  TextField,
  InputAdornment,
  NativeSelect,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { getAllCampaignPageable } from "../../services/campaign";

import CampaignDetailModal from "./CampaignDetailModal";
import Campaign from "../../types/campaign";

const mockDefaultCampaigns: Campaign[] = [
  {
    id: 1,
    name: "Campanha 1",
    description: "Descrição da Campanha 1",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    budget: 10000,
    expecLikes: 500,
    expecComments: 100,
    expecSaves: 50,
    status: "active",
    image: "/static/images/cards/campaign1.jpg",
    logo: "/static/images/cards/campaign1-logo.jpg",
  },
  {
    id: 2,
    name: "Campanha 2",
    description: "Descrição da Campanha 2",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    budget: 20000,
    expecLikes: 600,
    expecComments: 120,
    expecSaves: 60,
    status: "active",
    image: "/static/images/cards/campaign2.jpg",
    logo: "/static/images/cards/campaign2-logo.jpg",
  },
  {
    id: 3,
    name: "Campanha 3",
    description: "Descrição da Campanha 3",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    budget: 30000,
    expecLikes: 700,
    expecComments: 140,
    expecSaves: 70,
    status: "active",
    image: "/static/images/cards/campaign3.jpg",
    logo: "/static/images/cards/campaign3-logo.jpg",
  },
  {
    id: 4,
    name: "Campanha 4",
    description: "Descrição da Campanha 4",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    budget: 40000,
    expecLikes: 800,
    expecComments: 160,
    expecSaves: 80,
    status: "active",
    image: "/static/images/cards/campaign4.jpg",
    logo: "/static/images/cards/campaign4-logo.jpg",
  },
  {
    id: 5,
    name: "Campanha 5",
    description: "Descrição da Campanha 5",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    budget: 50000,
    expecLikes: 900,
    expecComments: 180,
    expecSaves: 90,
    status: "active",
    image: "/static/images/cards/campaign5.jpg",
    logo: "/static/images/cards/campaign5-logo.jpg",
  },
  {
    id: 6,
    name: "Campanha 6",
    description: "Descrição da Campanha 6",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    budget: 60000,
    expecLikes: 1000,
    expecComments: 200,
    expecSaves: 100,
    status: "active",
    image: "/static/images/cards/campaign6.jpg",
    logo: "/static/images/cards/campaign6-logo.jpg",
  },
  {
    id: 7,
    name: "Campanha 7",
    description: "Descrição da Campanha 7",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    budget: 70000,
    expecLikes: 1100,
    expecComments: 220,
    expecSaves: 110,
    status: "active",
    image: "/static/images/cards/campaign7.jpg",
    logo: "/static/images/cards/campaign7-logo.jpg",
  },
  {
    id: 8,
    name: "Campanha 8",
    description: "Descrição da Campanha 8",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    budget: 80000,
    expecLikes: 1200,
    expecComments: 240,
    expecSaves: 120,
    status: "active",
    image: "/static/images/cards/campaign8.jpg",
    logo: "/static/images/cards/campaign8-logo.jpg",
  },
  {
    id: 9,
    name: "Campanha 9",
    description: "Descrição da Campanha 9",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    budget: 90000,
    expecLikes: 1300,
    expecComments: 260,
    expecSaves: 130,
    status: "active",
    image: "/static/images/cards/campaign9.jpg",
    logo: "/static/images/cards/campaign9-logo.jpg",
  },
];

const CampaignCard: React.FC<{
  campaign: Campaign;
  onViewDetails: (campaign: Campaign) => void;
}> = ({ campaign, onViewDetails }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt={campaign.name}
      height="140"
      image={campaign.logo || campaign.image}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {campaign.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {campaign.status}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => onViewDetails(campaign)}>
        Ver Campanha
      </Button>
    </CardActions>
  </Card>
);

const Campaigns: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mockCampaigns, setMockCampaigns] = useState(mockDefaultCampaigns);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [countOfPages, setCountOfPages] = useState(10);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  useEffect(() => {
    async function setCampaignsFromDB() {
      const pageCampaigns = await getAllCampaignPageable(page, pageSize);
      if (pageCampaigns) {
        setMockCampaigns(pageCampaigns.content);
        console.log(pageCampaigns);
        setCountOfPages(pageCampaigns.totalPages);
      }
    }
    setCampaignsFromDB();
  }, [page, pageSize]);

  const handleViewDetails = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setSelectedCampaign(null);
    setDetailModalOpen(false);
  };

  const filteredCampaigns = mockCampaigns.filter((campaign) =>
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Lista de Campanhas
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <TextField
            label="Buscar Campanha"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            sx={{ maxWidth: 500 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", marginBlock: 2 }}>
          <NativeSelect
            defaultValue={pageSize}
            inputProps={{
              name: "nº de campanhas",
              id: "uncontrolled-native",
            }}
            onChange={(evt) => setPageSize(Number(evt.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </NativeSelect>
          <Pagination
            count={countOfPages}
            color="primary"
            onChange={(_, i) => setPage(i - 1)}
          />
        </Box>
        <Grid container spacing={2}>
          {filteredCampaigns.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <CampaignCard campaign={item} onViewDetails={handleViewDetails} />
            </Grid>
          ))}
        </Grid>
        <CampaignDetailModal
          campaign={selectedCampaign}
          open={detailModalOpen}
          onClose={handleCloseDetailModal}
        />
      </Box>
    </Container>
  );
};

export default Campaigns;
