import React, { useState } from 'react';
import AdminSignUp from './AdminSignUp';
import StudentForm from './StudentForm';
import StudentsTable from './StudentsTable';

const App = () => {
  const [adminSignedUp, setAdminSignedUp] = useState(false);
  const [students, setStudents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSignUp = (adminName, adminPassword) => {
    // Perform admin sign-up logic here
    setAdminSignedUp(true);
  };

  const addStudent = (student) => {
    if (editingIndex !== null) {
      // Editing existing student
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = student;
      setStudents(updatedStudents);
      setEditingIndex(null);
    } else {
      // Adding new student
      setStudents([...students, student]);
    }
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  const editStudent = (index) => {
    setEditingIndex(index);
  };

  return (
    <div>
      {!adminSignedUp ? (
        <AdminSignUp handleSignUp={handleSignUp} />
      ) : (
        <div>
          <h1>Student Data</h1>
          <StudentForm addStudent={addStudent} editingIndex={editingIndex} students={students} />
          <StudentsTable students={students} deleteStudent={deleteStudent} editStudent={editStudent} />
        </div>
      )}
    </div>
  );
};

export default App;

