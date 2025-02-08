import React from 'react';
import { Container, Box, Typography, Button, Grid, Paper, Card, CardContent, CardMedia } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="lg"
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '70vh' }}
    >
        <TaskIcon sx={{ fontSize: 80, color: 'primary.main' }} />
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to ToDo List
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Organize your tasks efficiently and boost your productivity.
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Create, manage, and track your tasks with ease. Stay on top of your to-do list and never miss a deadline.
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          <Grid item>
            <Button variant="outlined" color="secondary" onClick={() => navigate('/toDoList')}>
              Get Started
            </Button>
          </Grid>
        </Grid>
   
     
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CheckCircleIcon sx={{ fontSize: 60, color:"secondary.main" }} />
              <Typography variant="h6" component="h3" gutterBottom>
                Easy to Use
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Our app is designed to be user-friendly and easy to navigate.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <AccessTimeIcon sx={{ fontSize: 60, color: 'secondary.main' }} />
              <Typography variant="h6" component="h3" gutterBottom>
                Time Management
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Keep track of your time and manage your tasks efficiently.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TaskIcon sx={{ fontSize: 60, color: 'secondary.main' }} />
              <Typography variant="h6" component="h3" gutterBottom>
                Task Tracking
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Track your tasks and stay on top of your to-do list.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;