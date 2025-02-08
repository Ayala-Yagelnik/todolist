import React from 'react';
import { Container, Box, Typography, Button, Grid, Paper } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

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
        backgroundColor: '#f5f5f5',
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        mb:10
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
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
            <Button variant="contained" color="primary" onClick={() => navigate('/toDoList')}>
              Get Started
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary" onClick={() => navigate('/about')}>
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;


// import React from 'react';
// import { Container, Box, Typography, Button } from '@mui/material';
// import TaskIcon from '@mui/icons-material/Task';

// const Home = () => {
//   return (
//     <Container
//       maxWidth="lg"
//       sx={{
//         height: '80vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign: 'center',
//       }}
//     >
//       <Box>
//         <TaskIcon sx={{ fontSize: 100, color: 'primary.main' }} />
//         <Typography variant="h3" gutterBottom>
//           Welcome to Your Task Manager
//         </Typography>
//         <Typography variant="h5" gutterBottom>
//           Organize your tasks and boost your productivity!
//         </Typography>
//         <Button variant="contained" color="primary" sx={{ mt: 3 }}>
//           Get Started
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default Home;
