// SysAdManageSchools.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SysAdSidebar from '../components/SysAdSidebar';
import '../styles/global.css';

const SysAdManageSchools = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const schoolData = [
    { id: 1, schoolID: 'S001', name: 'Treetop Primary School', address: '123 Main St', postalCode: '12345', admin: 'John Doe' },
    { id: 2, schoolID: 'S002', name: 'Meadow High School', address: '456 Oak Ave', postalCode: '67890', admin: 'Jane Smith' },
    { id: 3, schoolID: 'S003', name: 'Riverbank Elementary', address: '789 Elm St', postalCode: '34567', admin: 'Bob Johnson' },
    { id: 4, schoolID: 'S004', name: 'Mountainview Academy', address: '101 Pine Rd', postalCode: '54321', admin: 'Alice Brown' },
    { id: 5, schoolID: 'S005', name: 'Sunset Middle School', address: '202 Cedar Ln', postalCode: '87654', admin: 'Charlie Wilson' },
    { id: 6, schoolID: 'S006', name: 'Harbor High School', address: '303 Birch Blvd', postalCode: '23456', admin: 'Eva Martinez' },
    { id: 7, schoolID: 'S007', name: 'Green Valley Elementary', address: '404 Willow Dr', postalCode: '65432', admin: 'David Lee' },
    { id: 8, schoolID: 'S008', name: 'Silverlake Middle School', address: '505 Redwood Ln', postalCode: '87654', admin: 'Grace Chen' },
    { id: 9, schoolID: 'S009', name: 'Oceanview Primary School', address: '606 Magnolia Ave', postalCode: '34567', admin: 'Frank Miller' },
    { id: 10, schoolID: 'S010', name: 'Maplewood High School', address: '707 Spruce Ct', postalCode: '78901', admin: 'Hannah Taylor' },
  ];
  

  const filteredSchools = schoolData.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle "Add School" button click
  const handleAddSchoolClick = () => {
    // Navigate to the AddSchool page (update the route as needed)
    navigate('/add-school');
  };

  return (
    <div className="page-container">
      <SysAdSidebar />
      <div className="page-content">
        <h2>Manage Schools</h2>
        {/* Search bar */}
        <div className="search-bar">
          Search:
          <input
            type="text"
            placeholder="Search by school name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* "Add School" button */}
        <button className="add-school-button" onClick={handleAddSchoolClick}>
          Add School
        </button>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>School ID</th>
                <th>School Name</th>
                <th>Address</th>
                <th>Postal Code</th>
                <th>School Admin</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSchools.map((school) => (
                <tr key={school.id}>
                  <td>{school.schoolID}</td>
                  <td>{school.name}</td>
                  <td>{school.address}</td>
                  <td>{school.postalCode}</td>
                  <td>{school.admin}</td>
                  <td>
                    <button>Edit</button>
                    {' | '}
                    <button>Delete</button>
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

export default SysAdManageSchools;
