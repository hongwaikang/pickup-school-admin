import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SchAdSidebar from '../components/SchAdSidebar';
import '../styles/global.css';

const SchAdManageTeachers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const teachersData = [
    { id: 1, name: 'John Doe', staffId: 'T001', class: '1E4' },
    { id: 2, name: 'Jane Smith', staffId: 'T002', class: '2E5' },
    { id: 3, name: 'Michael Johnson', staffId: 'T003', class: '3F6' },
    { id: 4, name: 'Emily Brown', staffId: 'T004', class: '4G7' },
    { id: 5, name: 'David Miller', staffId: 'T005', class: '5H8' },
    { id: 6, name: 'Sophia Anderson', staffId: 'T006', class: '6I9' },
    { id: 7, name: 'William Lee', staffId: 'T007', class: '7J10' },
    { id: 8, name: 'Olivia Garcia', staffId: 'T008', class: '8K11' },
    { id: 9, name: 'Emma Wilson', staffId: 'T009', class: '9L12' },
    { id: 10, name: 'Daniel Smith', staffId: 'T010', class: '10M13' },
    // Add more teachers as needed
  ];
  
  const filteredTeachers = teachersData.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTeacherClick = () => {
    // Redirect to AddTeacher.js when "Add Teacher" is clicked
    navigate('/add-teacher');
  };

  return (
    <div className="page-container">
      <SchAdSidebar />
      <div className="page-content">
        <h2>Manage Teachers</h2>
        {/* Search bar */}
        <div className="search-bar">
          Search:
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* "Add Teacher" button */}
        <button className="add-teacher-button" onClick={handleAddTeacherClick}>
          Add Teacher
        </button>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Staff ID</th>
                <th>Class</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.name}</td>
                  <td>{teacher.staffId}</td>
                  <td>{teacher.class}</td>
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

export default SchAdManageTeachers;
