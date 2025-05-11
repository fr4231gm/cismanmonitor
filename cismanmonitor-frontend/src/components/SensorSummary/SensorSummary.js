import React from 'react';
import './SensorSummary.css';

function SensorSummary() {
  const sensores = [
    { nombre: 'Sensor de humedad 1', tipo: 'Humedad', valor: '45%', estado: 'Activo' },
    { nombre: 'Sensor de temperatura', tipo: 'Temperatura', valor: '23°C', estado: 'Activo' },
    { nombre: 'Sensor de luz', tipo: 'Luminosidad', valor: '650 lux', estado: 'Inactivo' },
    // Puedes añadir más sensores aquí
  ];

  return (
    <div className="sensor-summary-container">
      <h2>Resumen de Sensores</h2>
      <table className="sensor-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {sensores.map((sensor, index) => (
            <tr key={index}>
              <td>{sensor.nombre}</td>
              <td>{sensor.tipo}</td>
              <td>{sensor.valor}</td>
              <td className={sensor.estado === 'Activo' ? 'activo' : 'inactivo'}>
                {sensor.estado}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SensorSummary;
