import React from 'react';
import './SurveillanceSystem.css';

function SurveillanceSystem() {
  const camaras = [
    { nombre: 'Zona 1 - Entrada', estado: 'Activo', imagen: 'https://via.placeholder.com/300x180?text=Cam+1' },
    { nombre: 'Zona 2 - Cultivo', estado: 'Inactivo', imagen: 'https://via.placeholder.com/300x180?text=Cam+2' },
    { nombre: 'Zona 3 - Perímetro', estado: 'Activo', imagen: 'https://via.placeholder.com/300x180?text=Cam+3' },
  ];

  return (
    <div className="surveillance-container">
      <h2>Sistema de Vigilancia</h2>
      <div className="camera-grid">
        {camaras.map((cam, index) => (
          <div className="camera-card" key={index}>
            <img src={cam.imagen} alt={`Vista de ${cam.nombre}`} />
            <div className="camera-info">
              <h3>{cam.nombre}</h3>
              <p className={cam.estado === 'Activo' ? 'activo' : 'inactivo'}>{cam.estado}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SurveillanceSystem;
