import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/global.css';

const ManageParents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Correct hook

  const parentData = [
    { id: 1, parentID: 'P001', firstName: 'John', lastName: 'Doe', phone: '123-456-7890', childName: 'Jane Smith', studentID: 'S002' },
    { id: 2, parentID: 'P002', firstName: 'Jane', lastName: 'Smith', phone: '987-654-3210', childName: 'John Doe', studentID: 'S001' },
    { id: 3, parentID: 'P003', firstName: 'Michael', lastName: 'Johnson', phone: '555-123-4567', childName: 'Emily Johnson', studentID: 'S003' },
    { id: 4, parentID: 'P004', firstName: 'Emily', lastName: 'Brown', phone: '777-888-9999', childName: 'Andrew Brown', studentID: 'S004' },
    { id: 5, parentID: 'P005', firstName: 'David', lastName: 'Miller', phone: '111-222-3333', childName: 'Sophia Miller', studentID: 'S005' },
    { id: 6, parentID: 'P006', firstName: 'Sophia', lastName: 'Anderson', phone: '444-555-6666', childName: 'William Anderson', studentID: 'S006' },
    { id: 7, parentID: 'P007', firstName: 'William', lastName: 'Lee', phone: '999-888-7777', childName: 'Olivia Lee', studentID: 'S007' },
    { id: 8, parentID: 'P008', firstName: 'Olivia', lastName: 'Garcia', phone: '123-987-6543', childName: 'Daniel Garcia', studentID: 'S008' },
    { id: 9, parentID: 'P009', firstName: 'Daniel', lastName: 'Brown', phone: '765-432-1234', childName: 'Emma Brown', studentID: 'S009' },
    { id: 10, parentID: 'P010', firstName: 'Emma', lastName: 'Wilson', phone: '876-543-2109', childName: 'Alexander Wilson', studentID: 'S010' },
    { id: 11, parentID: 'P011', firstName: 'Alexander', lastName: 'Smith', phone: '111-222-3333', childName: 'Ava Smith', studentID: 'S011' },
    { id: 12, parentID: 'P012', firstName: 'Ava', lastName: 'Johnson', phone: '444-555-6666', childName: 'James Johnson', studentID: 'S012' },
    { id: 13, parentID: 'P013', firstName: 'James', lastName: 'Anderson', phone: '999-888-7777', childName: 'Sophie Anderson', studentID: 'S013' },
    { id: 14, parentID: 'P014', firstName: 'Sophie', lastName: 'Garcia', phone: '123-987-6543', childName: 'Benjamin Garcia', studentID: 'S014' },
    { id: 15, parentID: 'P015', firstName: 'Benjamin', lastName: 'Brown', phone: '765-432-1234', childName: 'Lily Brown', studentID: 'S015' },
    { id: 16, parentID: 'P016', firstName: 'Lily', lastName: 'Wilson', phone: '876-543-2109', childName: 'Lucas Wilson', studentID: 'S016' },
    { id: 17, parentID: 'P017', firstName: 'Lucas', lastName: 'Smith', phone: '111-222-3333', childName: 'Ella Smith', studentID: 'S017' },
    { id: 18, parentID: 'P018', firstName: 'Ella', lastName: 'Johnson', phone: '444-555-6666', childName: 'Logan Johnson', studentID: 'S018' },
    { id: 19, parentID: 'P019', firstName: 'Logan', lastName: 'Anderson', phone: '999-888-7777', childName: 'Avery Anderson', studentID: 'S019' },
    { id: 20, parentID: 'P020', firstName: 'Avery', lastName: 'Garcia', phone: '123-987-6543', childName: 'Ethan Garcia', studentID: 'S020' },
    // Add more parents as needed
  ];
  

  const filteredParents = parentData.filter((parent) =>
    `${parent.firstName} ${parent.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle "Add Parent" button click
  const handleAddParentClick = () => {
    // Navigate to the AddParent page
    navigate('/add-parent');
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <h2>Manage Parents</h2>
        {/* Search bar */}
        <div className="search-bar">
          Search:
          <input
            type="text"
            placeholder="Search by parent name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* "Add Parent" button */}
        <button className="add-parent-button" onClick={handleAddParentClick}>
          Add Parent
        </button>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Parent ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Child Name</th>
                <th>Student ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredParents.map((parent) => (
                <tr key={parent.id}>
                  <td>{parent.parentID}</td>
                  <td>{parent.firstName}</td>
                  <td>{parent.lastName}</td>
                  <td>{parent.phone}</td>
                  <td>{parent.childName}</td>
                  <td>{parent.studentID}</td>
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

export default ManageParents;
