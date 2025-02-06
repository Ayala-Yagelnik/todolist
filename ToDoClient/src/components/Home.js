import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';

const Home = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box>
        <TaskIcon sx={{ fontSize: 100, color: 'primary.main' }} />
        <Typography variant="h3" gutterBottom>
          Welcome to Your Task Manager
        </Typography>
        <Typography variant="h5" gutterBottom>
          Organize your tasks and boost your productivity!
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
