import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardActions, CardContent, CardMedia, Button, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { getAllCompanies } from '../../services/company';

interface Company {
  name: string;
  description: string;
  id: number;
  profileLogo: string;
}

const mockDefaultCompanies: Company[] = [
  { id: 1, name: 'Empresa 1', description: 'Descrição da Empresa 1', profileLogo: '/static/images/cards/image1.jpg' },
  { id: 2, name: 'Empresa 2', description: 'Descrição da Empresa 2', profileLogo: '/static/images/cards/image2.jpg' },
  { id: 3, name: 'Empresa 3', description: 'Descrição da Empresa 3', profileLogo: '/static/images/cards/image3.jpg' },
  { id: 4, name: 'Empresa 4', description: 'Descrição da Empresa 4', profileLogo: '/static/images/cards/image4.jpg' },
  { id: 5, name: 'Empresa 5', description: 'Descrição da Empresa 5', profileLogo: '/static/images/cards/image5.jpg' },
  { id: 6, name: 'Empresa 6', description: 'Descrição da Empresa 6', profileLogo: '/static/images/cards/image6.jpg' },
  { id: 7, name: 'Empresa 7', description: 'Descrição da Empresa 7', profileLogo: '/static/images/cards/image7.jpg' },
  { id: 8, name: 'Empresa 8', description: 'Descrição da Empresa 8', profileLogo: '/static/images/cards/image8.jpg' },
  { id: 9, name: 'Empresa 9', description: 'Descrição da Empresa 9', profileLogo: '/static/images/cards/image9.jpg' },
];

const CompanyCard: React.FC<Company> = ({ name, description, profileLogo }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt={name}
      height="140"
      image={profileLogo}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Ver detalhes</Button>
      {/* <Button size="small">Learn More</Button> */}
    </CardActions>
  </Card>
);

const HomePageInfluencer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mockCompanies, setMockCompanies] = useState(mockDefaultCompanies);

  useEffect(()=>{
    async function setCompaniesFromDB(){
      const companies = await getAllCompanies();

      if(companies)
        setMockCompanies(companies);
    }

    setCompaniesFromDB();
  },[])

  const filteredCompanies = mockCompanies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h4" gutterBottom>Lista de Empresas</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
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
        </Box>
        <Grid container spacing={2}>
          {filteredCompanies.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <CompanyCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePageInfluencer;
