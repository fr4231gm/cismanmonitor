import React from 'react';
import './IrrigationSystem.css';

function IrrigationSystem() {
  const zonas = [
    {
      nombre: 'Zona 1 - Cultivo A',
      humedadActual: '43%',
      automatizado: true,
      ultimoRiego: '10/05/2025 08:00',
      estado: 'Activo',
    },
    {
      nombre: 'Zona 2 - Cultivo B',
      humedadActual: '65%',
      automatizado: false,
      ultimoRiego: '09/05/2025 18:45',
      estado: 'Inactivo',
    },
  ];

  return (
    <div className="irrigation-container">
      <h2>Sistema de Regadío</h2>
      <table className="irrigation-table">
        <thead>
          <tr>
            <th>Zona</th>
            <th>Humedad Actual</th>
            <th>Automático</th>
            <th>Último Riego</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {zonas.map((zona, index) => (
            <tr key={index}>
              <td>{zona.nombre}</td>
              <td>{zona.humedadActual}</td>
              <td>{zona.automatizado ? 'Sí' : 'No'}</td>
              <td>{zona.ultimoRiego}</td>
              <td className={zona.estado === 'Activo' ? 'activo' : 'inactivo'}>
                {zona.estado}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IrrigationSystem;
