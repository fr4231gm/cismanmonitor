import React, { useState } from 'react';
import './SensorSummary.css';

function SensorSummary() {
  const usuario = 'Francisco';
  const estado = {
    riego: 'Desactivado',
    tiempo: 'Despejado',
    temperatura: '23°C',
    humedad: '27%',
  };

  const sensores = [
    { nombre: 'Temperatura ambiente', valor: '24 °C' },
    { nombre: 'Humedad del suelo', valor: '56%' },
    { nombre: 'Conductividad', valor: '0.9 mS/cm' },
    { nombre: 'Temperatura del suelo', valor: '27 °C' },
    { nombre: 'Acidez del agua(PH)', valor: '7.5' },
    { nombre: 'Reserva de agua', valor: '76%' },
    { nombre: 'Helada detectada', valor: 'NO' },
  ];

  const historicoSimulado = {
    'Temperatura ambiente': [
      { hora: '13:00', valor: '30 °C', max: '44 °C', min: '16 °C' },
      { hora: '13:10', valor: '31 °C', max: '44 °C', min: '16 °C' },
      { hora: '13:20', valor: '32 °C', max: '44 °C', min: '16 °C' },
      { hora: '13:30', valor: '33 °C', max: '44 °C', min: '16 °C' },
      { hora: '13:40', valor: '34 °C', max: '44 °C', min: '16 °C' },
      { hora: '13:50', valor: '35 °C', max: '44 °C', min: '16 °C' },
      { hora: '14:00', valor: '36 °C', max: '45 °C', min: '16 °C' },
    ],
  };

  const [sensorActivo, setSensorActivo] = useState('Temperatura ambiente');
  const [desde, setDesde] = useState('');
  const [hasta, setHasta] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const registrosPorPagina = 5;

  const datosOriginales = historicoSimulado[sensorActivo] || [];

  const filtrarPorHora = (hora) => {
    const toMins = (str) => {
      const [h, m] = str.split(':').map(Number);
      return h * 60 + m;
    };
    const horaMin = desde ? toMins(desde) : 0;
    const horaMax = hasta ? toMins(hasta) : 1440;
    const actual = toMins(hora);
    return actual >= horaMin && actual <= horaMax;
  };

  const datosFiltrados = datosOriginales.filter(d => filtrarPorHora(d.hora));
  const totalPaginas = Math.ceil(datosFiltrados.length / registrosPorPagina);
  const indiceInicio = (paginaActual - 1) * registrosPorPagina;
  const datosPagina = datosFiltrados.slice(indiceInicio, indiceInicio + registrosPorPagina);

  const cambiarPagina = (nueva) => {
    if (nueva >= 1 && nueva <= totalPaginas) {
      setPaginaActual(nueva);
    }
  };

  const cambiarSensor = (nombre) => {
    setSensorActivo(nombre);
    setDesde('');
    setHasta('');
    setPaginaActual(1);
  };

  return (
    <div className="sensor-summary-wrapper">
      <div className="sensor-bar">
        <span>Accediendo como: <strong>{usuario}</strong></span>
        <span>Estado del riego: {estado.riego}</span>
        <span>Tiempo: {estado.tiempo}</span>
        <span>Temperatura actual: {estado.temperatura}</span>
        <span>Humedad relativa: {estado.humedad}</span>
      </div>

      <div className="sensor-content">
        <fieldset className="sensor-list">
          <legend>Valores de los sensores</legend>
          {sensores.map((sensor, i) => (
            <div className="sensor-item" key={i}>
              <span>{sensor.nombre}: {sensor.valor}</span>
              <button onClick={() => cambiarSensor(sensor.nombre)}>Ver histórico</button>
            </div>
          ))}
        </fieldset>

        <div className="sensor-history">
          <h3>Histórico de {sensorActivo}</h3>

          <div className="busqueda-horas">
            <label>
              Desde:
              <input type="time" value={desde} onChange={e => setDesde(e.target.value)} />
            </label>
            <label>
              Hasta:
              <input type="time" value={hasta} onChange={e => setHasta(e.target.value)} />
            </label>
          </div>

          <table>
            <thead>
              <tr>
                <th>Hora del registro</th>
                <th>Valor</th>
                <th>Valor máximo 24h</th>
                <th>Valor mínimo 24h</th>
              </tr>
            </thead>
            <tbody>
              {datosPagina.map((dato, i) => (
                <tr key={i}>
                  <td>{dato.hora}</td>
                  <td>{dato.valor}</td>
                  <td>{dato.max}</td>
                  <td>{dato.min}</td>
                </tr>
              ))}
              {datosPagina.length === 0 && (
                <tr><td colSpan="4">No hay datos para el rango indicado.</td></tr>
              )}
            </tbody>
          </table>

          <div className="paginacion">
            <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>Anterior</button>
            <span>Página {paginaActual} de {totalPaginas || 1}</span>
            <button onClick={() => cambiarPagina(paginaActual + 1)} disabled={paginaActual === totalPaginas}>Siguiente</button>
          </div>
        </div>
      </div>

      <div className="sensor-volver">
        <button onClick={() => alert('Volver al menú')}>← Volver al menú</button>
      </div>
    </div>
  );
}

export default SensorSummary;
