import React from 'react';
import SysAdSidebar from '../components/SysAdSidebar';
import '../styles/global.css';


export default function SysAdHome() {
  return (
    <div className="page-container">
      <SysAdSidebar />
      <div className="page-content">
        <h2>Welcome to School PickUp App!</h2>
        {/* Additional content can be added here */}
      </div>
    </div>
  );
}
