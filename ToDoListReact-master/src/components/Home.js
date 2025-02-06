import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { AddCircle as AddCircleIcon, ListAlt as ListAltIcon, CheckCircle as CheckCircleIcon } from '@mui/icons-material';

function Home() {
  return (
    <Container maxWidth="lg" >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          ברוכים הבאים לאתר ניהול המשימות
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          נהל את המשימות שלך בקלות וביעילות
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <AddCircleIcon color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h6" component="h3" gutterBottom>
                הוסף משימה חדשה
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <ListAltIcon color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h6" component="h3" gutterBottom>
                רשימת המשימות שלך
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <CheckCircleIcon color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h6" component="h3" gutterBottom>
                משימות שהושלמו
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;