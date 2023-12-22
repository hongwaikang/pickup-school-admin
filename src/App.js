import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import SchAdHome from './pages/SchAdHome';
import SysAdHome from './pages/SysAdHome';
import Login from './pages/Login';

import SchAdManageTeachers from './pages/SchAdManageTeachers';
import SchAdManageClasses from './pages/SchAdManageClasses';
import SchAdManageStudents from './pages/SchAdManageStudents';
import SchAdManageParents from './pages/SchAdManageParents';

import SchAdAddTeacher from './pages/SchAdAddTeacher'
import SchAdAddClass from './pages/SchAdAddClass'
import SchAdAddStudent from './pages/SchAdAddStudent'
import SchAdAddParent from './pages/SchAdAddParent'

import SysAdManageAdmins from './pages/SysAdManageAdmins';
import SysAdManageSchools from './pages/SysAdManageSchools';
import SysAdAddAdmin from './pages/SysAdAddAdmin';
import SysAdAddSchool from './pages/SysAdAddSChool';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/school-admin-home" element={<SchAdHome />} />
          <Route path="/sys-admin-home" element={<SysAdHome />} />

          <Route path="/manage-teachers" element={<SchAdManageTeachers />} />
          <Route path="/manage-classes" element={<SchAdManageClasses />} />
          <Route path="/manage-students" element={<SchAdManageStudents />} />
          <Route path="/manage-parents" element={<SchAdManageParents />} />
          <Route path="/add-teacher" element={<SchAdAddTeacher />} />
          <Route path="/add-class" element={<SchAdAddClass />} />
          <Route path="/add-student" element={<SchAdAddStudent />} />
          <Route path="/add-parent" element={<SchAdAddParent />} />

          <Route path="/manage-admins" element={<SysAdManageAdmins />} />
          <Route path="/manage-schools" element={<SysAdManageSchools />} />
          <Route path="/add-admin" element={<SysAdAddAdmin />} />
          <Route path="/add-school" element={<SysAdAddSchool />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
