import React from 'react';
import './MainMenu.css';

function MainMenu() {
  const sections = [
    { name: 'Resumen de Sensores', path: '/sensores' },
    { name: 'Sistema de Regadío', path: '/regadio' },
    { name: 'Sistema de Vigilancia', path: '/vigilancia' },
    { name: 'Módulo de Meteorología', path: '/meteorologia' },
    { name: 'Configuración', path: '/configuracion' },
    { name: 'Cerrar sesión', path: '/logout' }
  ];

  return (
    <div className="menu-container">
      <h2>Menú principal</h2>
      <div className="menu-grid">
        {sections.map((section, index) => (
          <div key={index} className="menu-card">
            <a href={section.path}>{section.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainMenu;
