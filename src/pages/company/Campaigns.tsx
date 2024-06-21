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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { getAllCampaignPageable } from "../../services/campaign";
import CampaignDetailModal from "./CampaignDetailModal";
import Campaign from "../../types/campaign";

// Dados mockados de campanhas
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
];

// Componente para exibir uma campanha
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
  // Estados do componente
  const [searchTerm, setSearchTerm] = useState("");
  const [mockCampaigns, setMockCampaigns] = useState(mockDefaultCampaigns);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [countOfPages, setCountOfPages] = useState(1);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  // Efeito para buscar campanhas do backend quando a página ou o tamanho da página mudar
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

  // Função para visualizar detalhes da campanha
  const handleViewDetails = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setDetailModalOpen(true);
  };

  // Função para fechar o modal de detalhes da campanha
  const handleCloseDetailModal = () => {
    setSelectedCampaign(null);
    setDetailModalOpen(false);
  };

  // Filtra as campanhas com base no termo de busca
  const filteredCampaigns = mockCampaigns.filter((campaign) =>
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Função para mudar a página e rolar até o topo
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Lista de Campanhas
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4, gap: 2 }}>
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
          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel id="select-page-size-label">Quantidade</InputLabel>
            <Select
              labelId="select-page-size-label"
              id="select-page-size"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              label="Quantidade"
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Pagination
            count={countOfPages}
            color="primary"
            onChange={handlePageChange}
          />
        </Box>
        <Grid container spacing={2}>
          {filteredCampaigns.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <CampaignCard campaign={item} onViewDetails={handleViewDetails} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination
            count={countOfPages}
            color="primary"
            onChange={handlePageChange}
          />
        </Box>
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
