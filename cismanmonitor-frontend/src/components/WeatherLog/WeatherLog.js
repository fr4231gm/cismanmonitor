import React from 'react';
import './WeatherLog.css';

function WeatherLog() {
  const registros = [
    { fecha: '11/05/2025 13:00', temp: '22.4°C', humedad: '68%', viento: '13 km/h', lluvia: '0 mm' },
    { fecha: '11/05/2025 12:00', temp: '23.1°C', humedad: '66%', viento: '10 km/h', lluvia: '0 mm' },
    { fecha: '11/05/2025 11:00', temp: '21.9°C', humedad: '70%', viento: '9 km/h', lluvia: '0.2 mm' },
    // Añade más si quieres
  ];

  return (
    <div className="weather-log-container">
      <h2>Registro Meteorológico</h2>
      <table className="weather-log-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Temperatura</th>
            <th>Humedad</th>
            <th>Viento</th>
            <th>Lluvia</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((r, index) => (
            <tr key={index}>
              <td>{r.fecha}</td>
              <td>{r.temp}</td>
              <td>{r.humedad}</td>
              <td>{r.viento}</td>
              <td>{r.lluvia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WeatherLog;
