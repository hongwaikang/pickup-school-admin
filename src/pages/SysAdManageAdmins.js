// SysAdManageAdmins.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SysAdSidebar from '../components/SysAdSidebar';
import '../styles/global.css';

const SysAdManageAdmins = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const adminData = [
    { id: 1, adminID: 'A001', name: "John Doe", email: "johndoe@school.com", mobile: "765-432-1234", school: "Treetop Primary School" },
    { id: 2, adminID: 'A002', name: "Jane Smith", email: "janesmith@school.com", mobile: "765-432-5678", school: "Meadow High School" },
    { id: 3, adminID: 'A003', name: "Bob Johnson", email: "bobjohnson@school.com", mobile: "765-432-9876", school: "Riverbank Elementary" },
    // Add more admins as needed
    { id: 4, adminID: 'A004', name: "Alice Brown", email: "alicebrown@school.com", mobile: "765-432-5432", school: "Mountainview Academy" },
    { id: 5, adminID: 'A005', name: "Charlie Wilson", email: "charliewilson@school.com", mobile: "765-432-8765", school: "Sunset Middle School" },
    { id: 6, adminID: 'A006', name: "Eva Martinez", email: "evamartinez@school.com", mobile: "765-432-2345", school: "Harbor High School" },
    { id: 7, adminID: 'A007', name: "David Lee", email: "davidlee@school.com", mobile: "765-432-6543", school: "Green Valley Elementary" },
    { id: 8, adminID: 'A008', name: "Grace Chen", email: "gracechen@school.com", mobile: "765-432-8765", school: "Silverlake Middle School" },
    { id: 9, adminID: 'A009', name: "Frank Miller", email: "frankmiller@school.com", mobile: "765-432-3456", school: "Oceanview Primary School" },
    { id: 10, adminID: 'A010', name: "Hannah Taylor", email: "hannahtaylor@school.com", mobile: "765-432-7890", school: "Maplewood High School" },
  ];  

  const filteredAdmins = adminData.filter((admin) =>
    admin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle "Add Admin" button click
  const handleAddAdminClick = () => {
    // Navigate to the AddAdmin page (update the route as needed)
    navigate('/add-admin');
  };

  return (
    <div className="page-container">
      <SysAdSidebar />
      <div className="page-content">
        <h2>Manage School Admins</h2>
        {/* Search bar */}
        <div className="search-bar">
          Search:
          <input
            type="text"
            placeholder="Search by admin name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* "Add Admin" button */}
        <button className="add-admin-button" onClick={handleAddAdminClick}>
          Add Admin
        </button>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Admin ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>School</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAdmins.map((admin) => (
                <tr key={admin.id}>
                  <td>{admin.adminID}</td>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                  <td>{admin.mobile}</td>
                  <td>{admin.school}</td>
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

export default SysAdManageAdmins;
