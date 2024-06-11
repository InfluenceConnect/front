import React from 'react';
import { Typography, Grid, IconButton } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { useTheme } from '@mui/material/styles';

const NotFound: React.FC = () => {
  const theme = useTheme();

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" style={{ height: '100vh' }}>
      <IconButton aria-label="Error" size="large" color="error"> 
        <ErrorIcon style={{ width: 50, height:50 }} />
      </IconButton>
      <Typography variant="h1" style={{ color: theme.palette.primary.main }}>
       Algo deu errado! 
      </Typography>
          <Typography variant="h6" style={{ color: theme.palette.error.main }}>
        A página solicitada não pôde ser encontrada.(err.404)
      </Typography>
    </Grid>
  );
};

export default NotFound;
