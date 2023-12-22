import React from 'react';
import SchAdSidebar from '../components/SchAdSidebar';
import '../styles/global.css';


export default function SchAdHome() {
  return (
    <div className="page-container">
      <SchAdSidebar />
      <div className="page-content">
        <h2>Welcome to School PickUp App!</h2>
        {/* Additional content can be added here */}
      </div>
    </div>
  );
}
