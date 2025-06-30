import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <img src="/assets/sun-icon.svg" alt="Sol" />
        <img src="/assets/thermometer-icon.svg" alt="Temperatura" />
        <img src="/assets/plant-icon.svg" alt="Planta" />
      </div>
      <p className="footer-text">
        © 2025 CismanMonitor · Proyecto de Fran Gómez
      </p>
    </footer>
  );
}

export default Footer;
