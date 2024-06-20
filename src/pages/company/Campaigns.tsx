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

// Mock de campanhas para uso inicial
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
  // ... outros mocks de campanhas
];

// Componente de card de campanha
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

// Componente principal da página de campanhas
const Campaigns: React.FC = () => {
  // Estado de controle
  const [searchTerm, setSearchTerm] = useState("");
  const [mockCampaigns, setMockCampaigns] = useState(mockDefaultCampaigns);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [countOfPages, setCountOfPages] = useState(10);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  // Carrega as campanhas da base de dados
  useEffect(() => {
    async function setCampaignsFromDB() {
      const pageCampaigns = await getAllCampaignPageable(page, pageSize);
      if (pageCampaigns) {
        setMockCampaigns(pageCampaigns.content);
        setCountOfPages(pageCampaigns.totalPages);
      }
    }
    setCampaignsFromDB();
  }, [page, pageSize]);

  // Manipula a exibição dos detalhes da campanha
  const handleViewDetails = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setDetailModalOpen(true);
  };

  // Fecha o modal de detalhes da campanha
  const handleCloseDetailModal = () => {
    setSelectedCampaign(null);
    setDetailModalOpen(false);
  };

  // Filtra as campanhas com base no termo de busca
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
