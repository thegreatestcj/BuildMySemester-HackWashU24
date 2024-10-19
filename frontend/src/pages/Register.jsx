import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import '../assets/css/index.css';  // Import the CSS file
import customFetch from '../utils/customFetch';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Handle registration logic here
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h4" sx={{ color: 'var(--primary-color)' }}>
          Register for BuildMySemester
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: 'var(--primary-color)', color: 'var(--white-color)' }}
          onClick={handleRegister}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
