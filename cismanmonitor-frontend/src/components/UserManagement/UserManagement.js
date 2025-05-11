import React from 'react';
import './UserManagement.css';

function UserManagement() {
  const usuarios = [
    { nombre: 'Francisco Gómez', email: 'fran@example.com', rol: 'Administrador', estado: 'Activo' },
    { nombre: 'Laura Pérez', email: 'laura@example.com', rol: 'Usuario', estado: 'Inactivo' },
    { nombre: 'Mario López', email: 'mario@example.com', rol: 'Usuario', estado: 'Activo' },
    // Más usuarios...
  ];

  return (
    <div className="user-management-container">
      <h2>Gestión de Usuarios</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u, index) => (
            <tr key={index}>
              <td>{u.nombre}</td>
              <td>{u.email}</td>
              <td>{u.rol}</td>
              <td className={u.estado === 'Activo' ? 'activo' : 'inactivo'}>{u.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
