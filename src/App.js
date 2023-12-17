import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import ManageTeachers from './pages/ManageTeachers';
import ManageClasses from './pages/ManageClasses';
import ManageStudents from './pages/ManageStudents';
import ManageParents from './pages/ManageParents';
import Login from './pages/Login';
import AddTeacher from './pages/AddTeacher'
import AddClass from './pages/AddClass'
import AddStudent from './pages/AddStudent'
import AddParent from './pages/AddParent'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/manage-teachers" element={<ManageTeachers />} />
          <Route path="/manage-classes" element={<ManageClasses />} />
          <Route path="/manage-students" element={<ManageStudents />} />
          <Route path="/manage-parents" element={<ManageParents />} />
          <Route path="/add-teacher" element={<AddTeacher />} />
          <Route path="/add-class" element={<AddClass />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/add-parent" element={<AddParent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
