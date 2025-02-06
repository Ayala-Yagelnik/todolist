import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the ToDo App
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/register" sx={{ mr: 2 }}>
          Register
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/login" sx={{ mr: 2 }}>
          Login
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/todos">
          View Todos
        </Button>
      </Box>
    </Container>
  );
}

export default Home;