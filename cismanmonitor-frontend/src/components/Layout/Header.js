import React from 'react';
import './Header.css';

function Header({ usuario }) {
  return (
    <header className="header">
      <div className="logo-section">
        <img src="/assets/chip-icon.svg" alt="Chip" className="icon" />
        <h1 className="logo-text">CismanMonitor</h1>
      </div>
    </header>
  );
}

export default Header;
