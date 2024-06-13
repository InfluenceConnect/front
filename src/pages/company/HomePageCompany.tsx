import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';

interface Influencer {
  name: string;
  description: string;
}

const mockInfluencers: Influencer[] = [
  { name: 'Influenciador 1', description: 'Descrição do Influenciador 1' },
  { name: 'Influenciador 2', description: 'Descrição do Influenciador 2' },
  { name: 'Influenciador 3', description: 'Descrição do Influenciador 3' },
  { name: 'Influenciador 4', description: 'Descrição do Influenciador 4' },
  { name: 'Influenciador 5', description: 'Descrição do Influenciador 5' },
  { name: 'Influenciador 6', description: 'Descrição do Influenciador 6' },
  
];

const HomePageCompany: React.FC = () => {
  return (
    <Container maxWidth="lg">
      {/* Inicio do ListComponent */}
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h4" gutterBottom>Lista de Influenciadores</Typography>
        <Grid container spacing={2}>
          {mockInfluencers.map((item, index) => (
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

export default HomePageCompany;
