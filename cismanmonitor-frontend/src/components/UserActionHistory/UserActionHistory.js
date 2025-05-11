import React from 'react';
import './UserActionHistory.css';

function UserActionHistory() {
  const historial = [
    { usuario: 'Francisco Gómez', accion: 'Inicio de sesión', fecha: '11/05/2025 09:01' },
    { usuario: 'Laura Pérez', accion: 'Modificó una notificación', fecha: '10/05/2025 18:12' },
    { usuario: 'Mario López', accion: 'Ejecutó riego manual', fecha: '10/05/2025 16:43' },
    // Añade más registros si lo deseas
  ];

  return (
    <div className="user-history-container">
      <h2>Histórico de Acciones de Usuarios</h2>
      <table className="user-history-table">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Acción</th>
            <th>Fecha y Hora</th>
          </tr>
        </thead>
        <tbody>
          {historial.map((registro, index) => (
            <tr key={index}>
              <td>{registro.usuario}</td>
              <td>{registro.accion}</td>
              <td>{registro.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserActionHistory;
