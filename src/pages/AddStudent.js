// AddStudent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/global.css';

const AddStudent = () => {
  const [studentId, setStudentId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [parent1, setParent1] = useState('');
  const [parent2, setParent2] = useState('');

  const navigate = useNavigate();

  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleStudentClassChange = (e) => {
    setStudentClass(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleParent1Change = (e) => {
    setParent1(e.target.value);
  };

  const handleParent2Change = (e) => {
    setParent2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform logic to add student (e.g., API call, state update, etc.)
    console.log('Student ID:', studentId);
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Class:', studentClass);
    console.log('Gender:', gender);
    console.log('Age:', age);
    console.log('Parent 1:', parent1);
    console.log('Parent 2:', parent2);

    // Reset the form fields (optional)
    setStudentId('');
    setFirstName('');
    setLastName('');
    setStudentClass('');
    setGender('');
    setAge('');
    setParent1('');
    setParent2('');

    // Navigate back to ManageStudents
    navigate('/manage-students');
  };

  const handleCancel = () => {
    // Perform logic for cancel (e.g., navigate back or clear form)
    console.log('Add student canceled');
    // Reset the form fields (optional)
    setStudentId('');
    setFirstName('');
    setLastName('');
    setStudentClass('');
    setGender('');
    setAge('');
    setParent1('');
    setParent2('');

    // Navigate back to ManageStudents
    navigate('/manage-students');
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <h2>Add Student</h2>
        <form className="stacked-form" onSubmit={handleSubmit}>
          <label>
            Student ID:
            <input type="text" value={studentId} onChange={handleStudentIdChange} required />
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
            Class:
            <input type="text" value={studentClass} onChange={handleStudentClassChange} required />
          </label>
          <label>
            Gender:
            <input type="text" value={gender} onChange={handleGenderChange} required />
          </label>
          <label>
            Age:
            <input type="text" value={age} onChange={handleAgeChange} required />
          </label>
          <label>
            Parent 1:
            <input type="text" value={parent1} onChange={handleParent1Change} required />
          </label>
          <label>
            Parent 2 (optional):
            <input type="text" value={parent2} onChange={handleParent2Change} />
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

export default AddStudent;
