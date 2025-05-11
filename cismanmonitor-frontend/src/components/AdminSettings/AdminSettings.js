import React, { useState } from 'react';
import './AdminSettings.css';

function AdminSettings() {
  const [config, setConfig] = useState({
    correoSistema: 'admin@sistema.com',
    intentosMaximos: 5,
    tiempoBloqueo: 15,
    mantenimiento: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig({
      ...config,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Configuración guardada:', config);
  };

  return (
    <div className="admin-settings-container">
      <h2>Configuración de Administración</h2>
      <form onSubmit={handleSubmit} className="admin-settings-form">
        <label>
          Correo del sistema:
          <input
            type="email"
            name="correoSistema"
            value={config.correoSistema}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Intentos máximos de inicio de sesión:
          <input
            type="number"
            name="intentosMaximos"
            value={config.intentosMaximos}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Tiempo de bloqueo tras intentos fallidos (min):
          <input
            type="number"
            name="tiempoBloqueo"
            value={config.tiempoBloqueo}
            onChange={handleChange}
            required
          />
        </label>

        <label className="checkbox-block">
          <input
            type="checkbox"
            name="mantenimiento"
            checked={config.mantenimiento}
            onChange={handleChange}
          />
          Activar modo mantenimiento
        </label>

        <button type="submit">Guardar configuración</button>
      </form>
    </div>
  );
}

export default AdminSettings;
