import React from 'react';
import './HourlyDetail.css';

function HourlyDetail() {
  const registrosHora = [
    { hora: '00:00', temp: '18.2°C', humedad: '75%', viento: '5 km/h', lluvia: '0 mm' },
    { hora: '01:00', temp: '17.9°C', humedad: '77%', viento: '4 km/h', lluvia: '0 mm' },
    { hora: '02:00', temp: '17.5°C', humedad: '78%', viento: '3 km/h', lluvia: '0.1 mm' },
    // Puedes añadir más registros por hora
  ];

  return (
    <div className="hourly-detail-container">
      <h2>Detalle en horas - 11/05/2025</h2>
      <table className="hourly-detail-table">
        <thead>
          <tr>
            <th>Hora</th>
            <th>Temperatura</th>
            <th>Humedad</th>
            <th>Viento</th>
            <th>Lluvia</th>
          </tr>
        </thead>
        <tbody>
          {registrosHora.map((r, index) => (
            <tr key={index}>
              <td>{r.hora}</td>
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

export default HourlyDetail;
