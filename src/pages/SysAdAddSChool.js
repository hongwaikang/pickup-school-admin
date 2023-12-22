// SysAdAddSchool.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SysAdSidebar from '../components/SysAdSidebar';
import '../styles/global.css';

const SysAdAddSchool = () => {
  const [schoolID, setSchoolID] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [schoolAdmin, setSchoolAdmin] = useState('');

  const navigate = useNavigate();

  const handleSchoolIDChange = (e) => {
    setSchoolID(e.target.value);
  };

  const handleSchoolNameChange = (e) => {
    setSchoolName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };

  const handleSchoolAdminChange = (e) => {
    setSchoolAdmin(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform logic to add school (e.g., API call, state update, etc.)
    console.log('School ID:', schoolID);
    console.log('School Name:', schoolName);
    console.log('Address:', address);
    console.log('Postal Code:', postalCode);
    console.log('School Admin:', schoolAdmin);

    // Reset the form fields (optional)
    setSchoolID('');
    setSchoolName('');
    setAddress('');
    setPostalCode('');
    setSchoolAdmin('');

    // Navigate back to ManageSchools
    navigate('/manage-schools');
  };

  const handleCancel = () => {
    // Perform logic for cancel (e.g., navigate back or clear form)
    console.log('Add school canceled');
    // Reset the form fields (optional)
    setSchoolID('');
    setSchoolName('');
    setAddress('');
    setPostalCode('');
    setSchoolAdmin('');

    // Navigate back to ManageSchools
    navigate('/manage-schools');
  };

  return (
    <div className="page-container">
      <SysAdSidebar />
      <div className="page-content">
        <h2>Add School</h2>
        <form className="stacked-form" onSubmit={handleSubmit}>
          <label>
            School ID:
            <input type="text" value={schoolID} onChange={handleSchoolIDChange} required />
          </label>
          <label>
            School Name:
            <input type="text" value={schoolName} onChange={handleSchoolNameChange} required />
          </label>
          <label>
            Address:
            <input type="text" value={address} onChange={handleAddressChange} required />
          </label>
          <label>
            Postal Code:
            <input type="text" value={postalCode} onChange={handlePostalCodeChange} required />
          </label>
          <label>
            School Admin:
            <input type="text" value={schoolAdmin} onChange={handleSchoolAdminChange} required />
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

export default SysAdAddSchool;
