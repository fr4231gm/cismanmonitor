import React, { useState } from 'react';
import './SurveillanceSystem.css';

function SurveillanceSystem() {
  const usuario = 'Francisco';

  const [antiplagasActivo, setAntiplagasActivo] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const intrusiones = [
    { fecha: '10/12/2024 11:37', antiplagas: true, imagen: '📸 Imagen 1' },
    { fecha: '11/12/2024 04:22', antiplagas: true, imagen: '📸 Imagen 2' },
    { fecha: '12/12/2024 02:45', antiplagas: false, imagen: '📸 Imagen 3' },
  ];

  const verImagen = (imagen) => {
    setImagenSeleccionada(imagen);
  };

  const cerrarModal = () => {
    setImagenSeleccionada(null);
  };

  return (
    <div className="watchdog-wrapper">
      <div className="sensor-bar">
        <span>Accediendo como: <strong>{usuario}</strong></span>
        <span>Estado del riego: Desactivado</span>
        <span>Tiempo: Despejado</span>
        <span>Temperatura actual: 23°C</span>
        <span>Humedad relativa: 27%</span>
      </div>

      <div className="watchdog-content">
        <fieldset className="camaras-box">
          <legend>Cámaras disponibles</legend>
          <div className="cam-grid">
            {[1, 2, 3, 4].map((cam, i) => (
              <div className="camara" key={i}>
                <div className="video-simulado">📷 Cámara {cam}</div>
                <div className="controles">
                  ▶️ <span className="barra"></span> 🔊 ⛶
                </div>
              </div>
            ))}
          </div>
        </fieldset>

        <div className="intrusiones-box">
          <h3>Registro de intrusiones</h3>
          <table>
            <thead>
              <tr>
                <th>Día y hora</th>
                <th>Sistema antiplagas activado</th>
                <th>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {intrusiones.map((entry, i) => (
                <tr key={i}>
                  <td>{entry.fecha}</td>
                  <td>{entry.antiplagas ? 'SI' : 'NO'}</td>
                  <td>
                    <button className="ver-btn" onClick={() => verImagen(entry.imagen)}>Ver</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <label className="checkbox">
            <input
              type="checkbox"
              checked={antiplagasActivo}
              onChange={() => setAntiplagasActivo(!antiplagasActivo)}
            />
            Sistema para repeler plagas activo
          </label>
        </div>
      </div>

      <div className="volver">
        <button onClick={() => alert('Volver al menú')}>← Volver al menú</button>
      </div>

      {imagenSeleccionada && (
        <div className="modal">
          <div className="modal-contenido">
            <span className="cerrar" onClick={cerrarModal}>✖</span>
            <h4>{imagenSeleccionada}</h4>
            <div className="imagen-simulada">🖼️ [Aquí iría la imagen real]</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SurveillanceSystem;
