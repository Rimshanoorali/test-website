import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const AdminSignUp = ({ handleSignUp }) => {
  const [adminName, setAdminName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminName && adminPassword) {
      handleSignUp(adminName, adminPassword);
      setAdminName('');
      setAdminPassword('');
    }
    else {
        window.alert('Please enter both admin name and password')
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          label="Admin Name"
          variant="outlined"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
          sx={{ marginBottom: 16, width: 300 }}
        />
        <TextField
          label="Admin Password"
          type="password"
          variant="outlined"
          value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
          sx={{ marginBottom: 16, width: 300 }}
        />
        <Button variant="contained" type="submit" sx={{ width: 300 }}>
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default AdminSignUp;
