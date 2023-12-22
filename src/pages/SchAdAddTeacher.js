// AddTeacher.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SchAdSidebar from '../components/SchAdSidebar';
import '../styles/global.css';

const SchAdAddTeacher = () => {
  const [name, setName] = useState('');
  const [staffId, setStaffId] = useState('');
  const [teacherClass, setTeacherClass] = useState('');

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleStaffIdChange = (e) => {
    setStaffId(e.target.value);
  };

  const handleTeacherClassChange = (e) => {
    setTeacherClass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform logic to add teacher (e.g., API call, state update, etc.)
    console.log('Name:', name);
    console.log('Staff ID:', staffId);
    console.log('Class:', teacherClass);

    // Reset the form fields (optional)
    setName('');
    setStaffId('');
    setTeacherClass('');

    // Navigate back to ManageTeachers
    navigate('/manage-teachers');
  };

  const handleCancel = () => {
    // Perform logic for cancel (e.g., navigate back or clear form)
    console.log('Add teacher canceled');
    // Reset the form fields (optional)
    setName('');
    setStaffId('');
    setTeacherClass('');

    // Navigate back to ManageTeachers
    navigate('/manage-teachers');
  };

  return (
    <div className="page-container">
      <SchAdSidebar />
      <div className="page-content">
        <h2>Add Teacher</h2>
        <form className="stacked-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} required />
          </label>
          <label>
            Staff ID:
            <input type="text" value={staffId} onChange={handleStaffIdChange} required />
          </label>
          <label>
            Class:
            <input type="text" value={teacherClass} onChange={handleTeacherClassChange} required />
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

export default SchAdAddTeacher;
