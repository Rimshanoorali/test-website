import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

const StudentsTable = ({ students, deleteStudent, editStudent }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Phone Number</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((student, index) => (
          <TableRow key={index}>
            <TableCell>{student.id}</TableCell>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.phoneNumber}</TableCell>
            <TableCell>{student.email}</TableCell>
            <TableCell>
              <Button onClick={() => editStudent(index)} variant="contained" color="primary">
                Edit
              </Button>
              <Button onClick={() => deleteStudent(index)} variant="contained" color="secondary">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentsTable;
