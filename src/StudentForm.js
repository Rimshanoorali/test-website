import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const StudentForm = ({ addStudent, editingIndex, students }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id && name && phoneNumber && email) {
      addStudent({ id, name, phoneNumber, email });
      setId('');
      setName('');
      setPhoneNumber('');
      setEmail('');
    }
    else {
      window.alert('Please enter all the given data')
  }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 30,
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          label="ID"
          variant="outlined"
          value={id}
          onChange={(e) => setId(e.target.value)}
          sx={{ marginBottom: 16, width: 300 }}
        />
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: 16, width: 300 }}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          sx={{ marginBottom: 16, width: 300 }}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 16, width: 300 }}
        />
        <Button variant="contained" type="submit" sx={{ width: 300 }}>
          {editingIndex !== null ? 'Save' : 'Add Student'}
        </Button>
      </form>
    </Box>
  );
};

export default StudentForm;
