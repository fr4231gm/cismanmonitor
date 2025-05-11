import React, { useState } from 'react';
import './NotificationForm.css';

function NotificationForm() {
  const [formData, setFormData] = useState({
    tipo: '',
    condicion: '',
    canal: 'Correo electrónico',
    activo: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Notificación guardada:', formData);
    // Aquí iría la llamada al backend
  };

  return (
    <div className="notification-form-container">
      <h2>Crear/Editar Notificación</h2>
      <form onSubmit={handleSubmit} className="notification-form">
        <label>
          Tipo de notificación:
          <input
            type="text"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Condición (ej. Humedad &lt; 30%):
          <input
            type="text"
            name="condicion"
            value={formData.condicion}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Canal de envío:
          <select name="canal" value={formData.canal} onChange={handleChange}>
            <option value="Correo electrónico">Correo electrónico</option>
            <option value="SMS">SMS</option>
            <option value="Push">Notificación push</option>
          </select>
        </label>

        <label className="checkbox-block">
          <input
            type="checkbox"
            name="activo"
            checked={formData.activo}
            onChange={handleChange}
          />
          Notificación activa
        </label>

        <button type="submit">Guardar notificación</button>
      </form>
    </div>
  );
}

export default NotificationForm;
