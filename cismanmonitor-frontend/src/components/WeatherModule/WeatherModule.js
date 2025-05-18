import React from 'react';
import './WeatherModule.css';

function WeatherModule() {
  const usuario = 'Francisco';

  // Datos de sensores simulados
  const datosSensor = {
    temperatura: '23 °C',
    temperaturaSuelo: '27 °C',
    humedadRelativa: '27%',
    humedadSuelo: '45%',
    direccionViento: 'SUR-ESTE',
    velocidadViento: '5 KM/H',
    presion: '1099 mbar',
    lluviaAcumulada: '2 mm',
  };

  return (
    <div className="weather-wrapper">
      <div className="sensor-bar">
        <span>Accediendo como: <strong>{usuario}</strong></span>
        <span>Estado del riego: Desactivado</span>
        <span>Tiempo: Despejado</span>
        <span>Temperatura actual: 23°C</span>
        <span>Humedad relativa: 27%</span>
      </div>

      <div className="weather-content">
        <fieldset className="prevision-box">
          <legend>Previsión meteorológica</legend>
          <iframe
            title="Previsión del tiempo"
            src="https://www.eltiempo.es/sevilla.html"
            width="100%"
            height="400"
            style={{ border: '1px solid #ccc', borderRadius: '8px' }}
          ></iframe>
        </fieldset>

        <fieldset className="datos-reales-box">
          <legend>Datos en tiempo real</legend>
          <ul>
            <li>Temperatura: {datosSensor.temperatura}</li>
            <li>Temperatura del suelo: {datosSensor.temperaturaSuelo}</li>
            <li>Humedad relativa: {datosSensor.humedadRelativa}</li>
            <li>Humedad del suelo: {datosSensor.humedadSuelo}</li>
            <li>Dirección del viento: {datosSensor.direccionViento}</li>
            <li>Velocidad del viento: {datosSensor.velocidadViento}</li>
            <li>Presión barométrica: {datosSensor.presion}</li>
            <li>Lluvia acumulada (24h): {datosSensor.lluviaAcumulada}</li>
          </ul>
        </fieldset>
      </div>

      <div className="weather-actions">
        <button onClick={() => alert('Volver al menú')}>← Volver al menú</button>
        <button onClick={() => alert('Ir al registro meteorológico')}>Registro meteorológico</button>
      </div>
    </div>
  );
}

export default WeatherModule;
