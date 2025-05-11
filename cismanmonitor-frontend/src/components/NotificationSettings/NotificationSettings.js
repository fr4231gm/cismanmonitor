import React from 'react';
import './NotificationSettings.css';

function NotificationSettings() {
  const notificaciones = [
    {
      tipo: 'Humedad baja',
      condicion: 'Humedad < 30%',
      canal: 'Correo electrónico',
      estado: 'Activo'
    },
    {
      tipo: 'Temperatura alta',
      condicion: 'Temp > 35°C',
      canal: 'Correo electrónico',
      estado: 'Inactivo'
    },
    // Más notificaciones si quieres
  ];

  return (
    <div className="notifications-container">
      <h2>Configuración de Notificaciones</h2>
      <table className="notifications-table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Condición</th>
            <th>Canal</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {notificaciones.map((n, index) => (
            <tr key={index}>
              <td>{n.tipo}</td>
              <td>{n.condicion}</td>
              <td>{n.canal}</td>
              <td className={n.estado === 'Activo' ? 'activo' : 'inactivo'}>
                {n.estado}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NotificationSettings;
