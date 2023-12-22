// SysAdAddAdmin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SysAdSidebar from '../components/SysAdSidebar';
import '../styles/global.css';

const SysAdAddAdmin = () => {
  const [adminID, setAdminID] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [school, setSchool] = useState('');

  const navigate = useNavigate();

  const handleAdminIDChange = (e) => {
    setAdminID(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform logic to add admin (e.g., API call, state update, etc.)
    console.log('Admin ID:', adminID);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Mobile:', mobile);
    console.log('School:', school);

    // Reset the form fields (optional)
    setAdminID('');
    setName('');
    setEmail('');
    setMobile('');
    setSchool('');

    // Navigate back to ManageAdmins
    navigate('/manage-admins');
  };

  const handleCancel = () => {
    // Perform logic for cancel (e.g., navigate back or clear form)
    console.log('Add admin canceled');
    // Reset the form fields (optional)
    setAdminID('');
    setName('');
    setEmail('');
    setMobile('');
    setSchool('');

    // Navigate back to ManageAdmins
    navigate('/manage-admins');
  };

  return (
    <div className="page-container">
      <SysAdSidebar />
      <div className="page-content">
        <h2>Add Admin</h2>
        <form className="stacked-form" onSubmit={handleSubmit}>
          <label>
            Admin ID:
            <input type="text" value={adminID} onChange={handleAdminIDChange} required />
          </label>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} required />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} required />
          </label>
          <label>
            Mobile:
            <input type="text" value={mobile} onChange={handleMobileChange} required />
          </label>
          <label>
            School:
            <input type="text" value={school} onChange={handleSchoolChange} required />
          </label>
          <div className="button-container">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SysAdAddAdmin;
