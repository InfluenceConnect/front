
import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';

interface Company {
  name: string;
  description: string;
}

const mockCompanies: Company[] = [
  { name: 'Empresa 1', description: 'Descrição da Empresa 1' },
  { name: 'Empresa 2', description: 'Descrição da Empresa 2' },
  { name: 'Empresa 3', description: 'Descrição da Empresa 3' },
  { name: 'Empresa 4', description: 'Descrição da Empresa 4' },
  { name: 'Empresa 5', description: 'Descrição da Empresa 5' },
  { name: 'Empresa 6', description: 'Descrição da Empresa 6' },
];

const HomePageInfluencer: React.FC = () => {
  return (
    <Container maxWidth="lg">
      {/* Inicio do ListComponent */}
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h4" gutterBottom>Lista de Empresas</Typography>
        <Grid container spacing={2}>
          {mockCompanies.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Fim do ListComponent */}
    </Container>
  );
};

export default HomePageInfluencer;
