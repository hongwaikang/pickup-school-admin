import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/global.css';

export default function Home() {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <h2>Welcome to School PickUp App!</h2>
        {/* Additional content can be added here */}
      </div>
    </div>
  );
}
