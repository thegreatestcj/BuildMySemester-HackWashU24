import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import '../assets/css/index.css';  // Import the CSS file
import customFetch from '../utils/customFetch';

const DashboardLayout = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h4" sx={{ color: 'var(--primary-color)' }}>
          Welcome to your Dashboard
        </Typography>
        <Typography variant="body1" sx={{ color: 'var(--secondary-color)', marginBottom: '20px' }}>
          This is where you can manage your semester's courses and track progress.
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: 'var(--primary-color)', color: 'var(--white-color)' }}
        >
          Start Building Your Semester
        </Button>
      </Box>
    </Container>
  );
};

export default DashboardLayout;
