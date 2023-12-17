import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/global.css';

const ManageStudents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const studentData = [
    { id: 1, studentID: 'S001', firstName: 'John', lastName: 'Doe', class: '1E4', gender: 'Male', age: 16, parent1: 'Doe', parent2: 'Doe' },
    { id: 2, studentID: 'S002', firstName: 'Jane', lastName: 'Smith', class: '2E5', gender: 'Female', age: 17, parent1: 'Smith', parent2: 'Smith' },
    { id: 3, studentID: 'S003', firstName: 'David', lastName: 'Johnson', class: '3F6', gender: 'Male', age: 15, parent1: 'Johnson', parent2: 'Johnson' },
    { id: 4, studentID: 'S004', firstName: 'Emily', lastName: 'Brown', class: '4G7', gender: 'Female', age: 16, parent1: 'Brown', parent2: 'Brown' },
    { id: 5, studentID: 'S005', firstName: 'Daniel', lastName: 'Miller', class: '5H8', gender: 'Male', age: 15, parent1: 'Miller', parent2: 'Miller' },
    { id: 6, studentID: 'S006', firstName: 'Sophia', lastName: 'Anderson', class: '6I9', gender: 'Female', age: 17, parent1: 'Anderson', parent2: 'Anderson' },
    { id: 7, studentID: 'S007', firstName: 'William', lastName: 'Lee', class: '7J10', gender: 'Male', age: 16, parent1: 'Lee', parent2: 'Lee' },
    { id: 8, studentID: 'S008', firstName: 'Olivia', lastName: 'Garcia', class: '8K11', gender: 'Female', age: 17, parent1: 'Garcia', parent2: 'Garcia' },
    { id: 9, studentID: 'S009', firstName: 'Emma', lastName: 'Wilson', class: '9L12', gender: 'Female', age: 15, parent1: 'Wilson', parent2: 'Wilson' },
    { id: 10, studentID: 'S010', firstName: 'Daniel', lastName: 'Smith', class: '10M13', gender: 'Male', age: 16, parent1: 'Smith', parent2: 'Smith' },
    // Add more students as needed
  ];
  

  const filteredStudents = studentData.filter((student) =>
    `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddStudentClick = () => {
    // Navigate to the AddStudent page
    navigate('/add-student');
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <h2>Manage Students</h2>
        <div className="search-bar">
          Search:
          <input
            type="text"
            placeholder="Search by student name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="add-student-button" onClick={handleAddStudentClick}>
          Add Student
        </button>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Class</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Parent 1</th>
                <th>Parent 2</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.studentID}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.class}</td>
                  <td>{student.gender}</td>
                  <td>{student.age}</td>
                  <td>{student.parent1}</td>
                  <td>{student.parent2}</td>
                  <td>
                    <button>
                      Edit
                    </button>
                    {' | '}
                    <button>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageStudents;
