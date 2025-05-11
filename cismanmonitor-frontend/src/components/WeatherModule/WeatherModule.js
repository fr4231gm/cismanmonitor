import React from 'react';
import './WeatherModule.css';

function WeatherModule() {
  const datos = {
    temperatura: '22.4°C',
    humedad: '68%',
    viento: '13 km/h',
    presion: '1012 hPa',
    lluvia: '0 mm',
    fecha: '11/05/2025 - 13:00'
  };

  return (
    <div className="weather-container">
      <h2>Módulo de Meteorología</h2>
      <p className="weather-timestamp">Última actualización: {datos.fecha}</p>
      <div className="weather-grid">
        <div className="weather-card">
          <h3>Temperatura</h3>
          <p>{datos.temperatura}</p>
        </div>
        <div className="weather-card">
          <h3>Humedad</h3>
          <p>{datos.humedad}</p>
        </div>
        <div className="weather-card">
          <h3>Viento</h3>
          <p>{datos.viento}</p>
        </div>
        <div className="weather-card">
          <h3>Presión</h3>
          <p>{datos.presion}</p>
        </div>
        <div className="weather-card">
          <h3>Lluvia</h3>
          <p>{datos.lluvia}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherModule;
