import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUsersPageable } from './AdmDataMock';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import CircularProgress from "@mui/material/CircularProgress";
import './AdminPage.css';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [userType, setUserType] = useState('influencer');

  const fetchUsers = async () => {
    setIsLoading(true);
    setError('');
    try {
      const data = getUsersPageable(page, 50, searchTerm, userType);
      setUsers((prev) => page === 0 ? data : [...prev, ...data]);
    } catch (e) {
      setError('Error fetching users');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setPage(0); // Reset page to 0 on search term or user type change
  }, [searchTerm, userType]);

  useEffect(() => {
    fetchUsers();
  }, [page, userType, searchTerm]); // Trigger fetchUsers when page, userType, or searchTerm changes

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setUsers([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <Grid container component="main" sx={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <ButtonGroup variant="contained" sx={{ mb: 2 }}>
            <Button
              variant={userType === 'influencer' ? 'contained' : 'outlined'}
              onClick={() => handleUserTypeChange('influencer')}
            >
              Influencer
            </Button>
            <Button
              variant={userType === 'company' ? 'contained' : 'outlined'}
              onClick={() => handleUserTypeChange('company')}
            >
              Company
            </Button>
          </ButtonGroup>

          <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="search"
              label="Search users"
              name="search"
              autoComplete="search"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Box>
          
          {error && <Typography color="error">{error}</Typography>}
          
          <div className="user-cards-container">
            {users.map((user) => (
              <Link to={`/user/${user.id}`} key={user.id} className="user-card">
                <div className="card-content">
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                </div>
              </Link>
            ))}
          </div>
          
          {isLoading && <CircularProgress />}
          
          {!isLoading && (
            <Button
              onClick={handleLoadMore}
              variant="contained"
              sx={{ mt: 3 }}
            >
              Load More
            </Button>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AdminPage;
