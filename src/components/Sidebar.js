import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>School Admin Dashboard</h2>
      <h3>School Name</h3>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/manage-classes">Manage Classes</Link></li>
        <li><Link to="/manage-teachers">Manage Teachers</Link></li>
        <li><Link to="/manage-students">Manage Students</Link></li>
        <li><Link to="/manage-parents">Manage Parents</Link></li>
        <li><Link to="/login">Logout</Link></li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
