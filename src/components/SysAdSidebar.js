import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const SysAdSidebar = () => {
  return (
    <div className="sidebar">
      <h2>System Admin Dashboard</h2>
      <ul>
        <li><Link to="/sys-admin-home">Home</Link></li>
        <li><Link to="/manage-schools">Manage Schools</Link></li>
        <li><Link to="/manage-admins">Manage Admins</Link></li>
        <li><Link to="/login">Logout</Link></li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default SysAdSidebar;
