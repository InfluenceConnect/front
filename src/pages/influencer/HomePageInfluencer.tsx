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
import { getAllCompaniesPageable, getNumbersOfCompanies } from "../../services/company";
import numberOfPages from "../../utils/numbersOfPages";
import CompanyDetailModal from "./CompanyDetailModal";
import Company from "../../types/company";

// Mock de empresas para exibição inicial
const mockDefaultCompanies: Company[] = [
  {
    id: 1,
    name: "Empresa 1",
    image: "/static/images/cards/image1.jpg",
    status: "active",
  },
  {
    id: 2,
    name: "Empresa 2",
    image: "/static/images/cards/image2.jpg",
    status: "active",
  },
  {
    id: 3,
    name: "Empresa 3",
    image: "/static/images/cards/image3.jpg",
    status: "active",
  },
  {
    id: 4,
    name: "Empresa 4",
    image: "/static/images/cards/image4.jpg",
    status: "active",
  },
  {
    id: 5,
    name: "Empresa 5",
    image: "/static/images/cards/image5.jpg",
    status: "active",
  },
  {
    id: 6,
    name: "Empresa 6",
    image: "/static/images/cards/image6.jpg",
    status: "active",
  },
  {
    id: 7,
    name: "Empresa 7",
    image: "/static/images/cards/image7.jpg",
    status: "active",
  },
  {
    id: 8,
    name: "Empresa 8",
    image: "/static/images/cards/image8.jpg",
    status: "active",
  },
  {
    id: 9,
    name: "Empresa 9",
    image: "/static/images/cards/image9.jpg",
    status: "active",
  },
];

// Componente para exibir o card da empresa
const CompanyCard: React.FC<{
  company: Company;
  onViewDetails: (company: Company) => void;
}> = ({ company, onViewDetails }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt={company.name}
      height="140"
      image={company.profileLogo || company.image}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {company.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {company.status}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => onViewDetails(company)}>
        Ver Empresa
      </Button>
    </CardActions>
  </Card>
);

const HomePageCompany: React.FC = () => {
  // Estados locais
  const [searchTerm, setSearchTerm] = useState("");
  const [mockCompanies, setMockCompanies] = useState(mockDefaultCompanies);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [countOfPages, setCountOfPages] = useState(10);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  // useEffect para buscar empresas do banco de dados
  useEffect(() => {
    async function setCompaniesFromDB() {
      const companies = await getAllCompaniesPageable(page, pageSize);
      const count = await getNumbersOfCompanies();
      if (companies) {
        setMockCompanies(companies);
        console.log(companies);
        setCountOfPages(numberOfPages(count, pageSize));
      }
    }
    setCompaniesFromDB();
  }, [page, pageSize]);

  // Função para exibir detalhes da empresa
  const handleViewDetails = (company: Company) => {
    setSelectedCompany(company);
    setDetailModalOpen(true);
  };

  // Função para fechar o modal de detalhes da empresa
  const handleCloseDetailModal = () => {
    setSelectedCompany(null);
    setDetailModalOpen(false);
  };

  // Filtra empresas com base no termo de busca
  const filteredCompanies = mockCompanies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Manipula a mudança de página e rola a tela para o topo
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Lista de Empresas
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4, gap: 2 }}>
          <TextField
            label="Buscar Empresa"
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
          {filteredCompanies.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <CompanyCard company={item} onViewDetails={handleViewDetails} />
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
        <CompanyDetailModal
          company={selectedCompany}
          open={detailModalOpen}
          onClose={handleCloseDetailModal}
        />
      </Box>
    </Container>
  );
};

export default HomePageCompany;
