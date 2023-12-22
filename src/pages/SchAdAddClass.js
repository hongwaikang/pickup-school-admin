// AddClass.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import SchAdSidebar from '../components/SchAdSidebar';
import '../styles/global.css';

const SchAdAddClass = () => {
  const [className, setClassName] = useState('');
  const [grade, setGrade] = useState('');
  const [teacherInCharge, setTeacherInCharge] = useState('');

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleClassNameChange = (e) => {
    setClassName(e.target.value);
  };

  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  };

  const handleTeacherChange = (e) => {
    setTeacherInCharge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform logic to add class (e.g., API call, state update, etc.)
    console.log('Class Name:', className);
    console.log('Grade:', grade);
    console.log('Teacher-in-Charge:', teacherInCharge);

    // Reset the form fields (optional)
    setClassName('');
    setGrade('');
    setTeacherInCharge('');

    // Navigate back to ManageClasses
    navigate('/manage-classes');
  };

  const handleCancel = () => {
    // Perform logic for cancel (e.g., navigate back or clear form)
    console.log('Add class canceled');
    // Reset the form fields (optional)
    setClassName('');
    setGrade('');
    setTeacherInCharge('');

    // Navigate back to ManageClasses
    navigate('/manage-classes');
  };

  return (
    <div className="page-container">
      <SchAdSidebar />
      <div className="page-content">
        <h2>Add Class</h2>
        <form className="stacked-form" onSubmit={handleSubmit}>
          <label>
            Class Name:
            <input type="text" value={className} onChange={handleClassNameChange} required />
          </label>
          <label>
            Grade:
            <input type="text" value={grade} onChange={handleGradeChange} required />
          </label>
          <label>
            Teacher-in-Charge:
            <input type="text" value={teacherInCharge} onChange={handleTeacherChange} required />
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

export default SchAdAddClass;
