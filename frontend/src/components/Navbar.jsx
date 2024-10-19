import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../assets/css/index.css';  // Import the CSS file

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'var(--primary-color)' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'var(--white-color)' }}>
          BuildMySemester
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/login" sx={{ color: 'var(--white-color)' }}>
            Login
          </Button>
          <Button color="inherit" component={Link} to="/register" sx={{ color: 'var(--white-color)' }}>
            Register
          </Button>
          <Button color="inherit" component={Link} to="/dashboard" sx={{ color: 'var(--white-color)' }}>
            Dashboard
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
