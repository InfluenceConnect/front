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
import {
  getAllInfluencersPageable,
  getNumbersOfInfluencers,
} from "../../services/influence";
import numberOfPages from "../../utils/numbersOfPages";
import InfluencerDetailModal from "./InfluencerDetailModal"; 
import Influencer from "../../types/influencer";


const mockDefaultInfluencers: Influencer[] = [
  {
    id: 1,
    name: "Influenciador 1",
    description: "Descrição do Influenciador 1",
    image: "/static/images/cards/image1.jpg",
    status: "",
  },
  {
    id: 2,
    name: "Influenciador 2",
    description: "Descrição do Influenciador 2",
    image: "/static/images/cards/image2.jpg",
    status: "",
  },
  {
    id: 3,
    name: "Influenciador 3",
    description: "Descrição do Influenciador 3",
    image: "/static/images/cards/image3.jpg",
    status: "",
  },
  {
    id: 4,
    name: "Influenciador 4",
    description: "Descrição do Influenciador 4",
    image: "/static/images/cards/image4.jpg",
    status: "",
  },
  {
    id: 5,
    name: "Influenciador 5",
    description: "Descrição do Influenciador 5",
    image: "/static/images/cards/image5.jpg",
    status: "",
  },
  {
    id: 6,
    name: "Influenciador 6",
    description: "Descrição do Influenciador 6",
    image: "/static/images/cards/image6.jpg",
    status: "",
  },
  {
    id: 7,
    name: "Influenciador 7",
    description: "Descrição do Influenciador 7",
    image: "/static/images/cards/image7.jpg",
    status: "",
  },
  {
    id: 8,
    name: "Influenciador 8",
    description: "Descrição do Influenciador 8",
    image: "/static/images/cards/image8.jpg",
    status: "",
  },
  {
    id: 9,
    name: "Influenciador 9",
    description: "Descrição do Influenciador 9",
    image: "/static/images/cards/image9.jpg",
    status: "",
  },
];

const InfluencerCard: React.FC<{ influencer: Influencer; onViewDetails: (influencer: Influencer) => void }> = ({ influencer, onViewDetails }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia component="img" alt={influencer.name} height="140" image={influencer.profilePhoto || influencer.image} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {influencer.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Status: {influencer.status}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => onViewDetails(influencer)}>Ver Influenciador</Button>
    </CardActions>
  </Card>
);

const HomePageCompany: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mockInfluencers, setMockInfluencers] = useState(mockDefaultInfluencers);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [countOfPages, setCountOfPages] = useState(10);
  const [selectedInfluencer, setSelectedInfluencer] = useState<Influencer | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  useEffect(() => {
    async function setInfluencersFromDB() {
      const influencers = await getAllInfluencersPageable(page, pageSize);
      const count = await getNumbersOfInfluencers();
      if (influencers) {
        setMockInfluencers(influencers);
        setCountOfPages(numberOfPages(count, pageSize));
      }
    }
    setInfluencersFromDB();
  }, [page, pageSize]);

  const handleViewDetails = (influencer: Influencer) => {
    setSelectedInfluencer(influencer);
    setDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setSelectedInfluencer(null);
    setDetailModalOpen(false);
  };

  const filteredInfluencers = mockInfluencers.filter(
    (influencer) =>
      influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      influencer.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Lista de Influenciadores
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <TextField
            label="Buscar Influenciador"
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
              name: "nº de influencers",
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
          {filteredInfluencers.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <InfluencerCard influencer={item} onViewDetails={handleViewDetails} />
            </Grid>
          ))}
        </Grid>
        <InfluencerDetailModal
          influencer={selectedInfluencer}
          open={detailModalOpen}
          onClose={handleCloseDetailModal}
        />
      </Box>
    </Container>
  );
};

export default HomePageCompany;
