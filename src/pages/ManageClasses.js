// ManageClasses.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import
import Sidebar from '../components/Sidebar';
import '../styles/global.css';

const ManageClasses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Correct hook

  const classData = [
    { id: 1, className: '1E4', level: 'secondary', teacherInCharge: 'John Doe' },
    { id: 2, className: '2E5', level: 'secondary', teacherInCharge: 'Jane Smith' },
    { id: 3, className: '3F6', level: 'secondary', teacherInCharge: 'Michael Johnson' },
    { id: 4, className: '4G7', level: 'secondary', teacherInCharge: 'Emily Brown' },
    { id: 5, className: '5H8', level: 'secondary', teacherInCharge: 'David Miller' },
    { id: 6, className: '6I9', level: 'secondary', teacherInCharge: 'Sophia Anderson' },
    { id: 7, className: '7J10', level: 'secondary', teacherInCharge: 'William Lee' },
    { id: 8, className: '8K11', level: 'secondary', teacherInCharge: 'Olivia Garcia' },
    { id: 9, className: '9L12', level: 'secondary', teacherInCharge: 'Daniel Brown' },
    { id: 10, className: '10M13', level: 'secondary', teacherInCharge: 'Emma Wilson' },
    // Add more classes as needed
  ];

  const filteredClasses = classData.filter((classItem) =>
    classItem.className.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle "Add Class" button click
  const handleAddClassClick = () => {
    // Navigate to the AddClass page
    navigate('/add-class');
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <h2>Manage Classes</h2>
        {/* Search bar */}
        <div className="search-bar">
          Search:
          <input
            type="text"
            placeholder="Search by class name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* "Add Class" button */}
        <button className="add-class-button" onClick={handleAddClassClick}>
          Add Class
        </button>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Class Name</th>
                <th>Grade</th>
                <th>Teacher-in-Charge</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClasses.map((classItem) => (
                <tr key={classItem.id}>
                  <td>{classItem.className}</td>
                  <td>{classItem.level}</td>
                  <td>{classItem.teacherInCharge}</td>
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

export default ManageClasses;
