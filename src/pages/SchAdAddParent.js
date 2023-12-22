// AddParent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SchAdSidebar from '../components/SchAdSidebar';
import '../styles/global.css';

const SchAdAddParent = () => {
  const [parentID, setParentID] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [childName, setChildName] = useState('');
  const [studentID, setStudentID] = useState('');

  const navigate = useNavigate();

  const handleParentIDChange = (e) => {
    setParentID(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleChildNameChange = (e) => {
    setChildName(e.target.value);
  };

  const handleStudentIDChange = (e) => {
    setStudentID(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform logic to add parent (e.g., API call, state update, etc.)
    console.log('Parent ID:', parentID);
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Phone:', phone);
    console.log('Child Name:', childName);
    console.log('Student ID:', studentID);

    // Reset the form fields (optional)
    setParentID('');
    setFirstName('');
    setLastName('');
    setPhone('');
    setChildName('');
    setStudentID('');

    // Navigate back to ManageParents
    navigate('/manage-parents');
  };

  const handleCancel = () => {
    // Perform logic for cancel (e.g., navigate back or clear form)
    console.log('Add parent canceled');
    // Reset the form fields (optional)
    setParentID('');
    setFirstName('');
    setLastName('');
    setPhone('');
    setChildName('');
    setStudentID('');

    // Navigate back to ManageParents
    navigate('/manage-parents');
  };

  return (
    <div className="page-container">
      <SchAdSidebar />
      <div className="page-content">
        <h2>Add Parent</h2>
        <form className="stacked-form" onSubmit={handleSubmit}>
          <label>
            Parent ID:
            <input type="text" value={parentID} onChange={handleParentIDChange} required />
          </label>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={handleFirstNameChange} required />
          </label>
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={handleLastNameChange} required />
          </label>
          <label>
            Phone:
            <input type="text" value={phone} onChange={handlePhoneChange} required />
          </label>
          <label>
            Child Name:
            <input type="text" value={childName} onChange={handleChildNameChange} required />
          </label>
          <label>
            Student ID:
            <input type="text" value={studentID} onChange={handleStudentIDChange} required />
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

export default SchAdAddParent;
