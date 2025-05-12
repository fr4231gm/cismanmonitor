import React, { useState } from 'react';
import './NotificationSettings.css';

function NotificationSettings() {
  const usuario = 'Francisco';

  const [notificaciones, setNotificaciones] = useState([
    {
      id: 1,
      nombre: 'Hora del riego',
      descripcion: 'Notificación para avisarme cuando el sistema de riego se ha activado',
      activa: true,
    },
    {
      id: 2,
      nombre: 'Intrusiones',
      descripcion: 'Notificación para avisarme en caso de que se detecte una intrusión',
      activa: false,
    },
    {
      id: 3,
      nombre: 'Humedad alta',
      descripcion: 'Notificación que me avise cuando la humedad crezca demasiado en el suelo',
      activa: true,
    },
  ]);

  const toggleActiva = (id) => {
    setNotificaciones(notificaciones.map(n =>
      n.id === id ? { ...n, activa: !n.activa } : n
    ));
  };

  const editar = (id) => {
    alert(`Editar notificación con ID: ${id}`);
  };

  const eliminar = (id) => {
    const confirmar = window.confirm('¿Deseas eliminar esta notificación?');
    if (confirmar) {
      setNotificaciones(notificaciones.filter(n => n.id !== id));
    }
  };

  const nueva = () => {
    alert('Crear nueva notificación');
  };

  return (
    <div className="notifications-wrapper">
      <div className="sensor-bar">
        <span>Accediendo como: <strong>{usuario}</strong></span>
        <span>Estado del riego: Desactivado</span>
        <span>Tiempo: Despejado</span>
        <span>Temperatura actual: 23°C</span>
        <span>Humedad relativa: 27%</span>
      </div>

      <div className="notificaciones-box">
        <div className="notificaciones-header">
          <h3>Notificaciones del usuario</h3>
          <button className="crear" onClick={nueva}>Crear nueva notificación</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Nombre de notificación</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {notificaciones.map(n => (
              <tr key={n.id}>
                <td>{n.nombre}</td>
                <td>{n.descripcion}</td>
                <td className="acciones">
                  <button title={n.activa ? 'Desactivar' : 'Activar'} onClick={() => toggleActiva(n.id)}>
                    {n.activa ? '✅' : '❌'}
                  </button>
                  <button title="Editar" onClick={() => editar(n.id)}>✏️</button>
                  <button title="Eliminar" onClick={() => eliminar(n.id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="volver">
        <button onClick={() => alert('Volver al menú')}>← Volver al menú</button>
      </div>
    </div>
  );
}

export default NotificationSettings;
