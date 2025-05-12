import React, { useState } from 'react';
import './UserManagement.css';

const usuariosIniciales = [
  { id: 'ml8923fl', nombre: 'María', apellidos: 'López Fernández', email: 'maria.lopez@example.com', telefono: '601234567', acceso: 'Otorgado' },
  { id: 'cr5618rd', nombre: 'Carlos', apellidos: 'Rodríguez Díaz', email: 'carlos.rodriguez@example.com', telefono: '602345678', acceso: 'Pendiente' },
  { id: 'ls7342sm', nombre: 'Laura', apellidos: 'Sánchez Martín', email: 'laura.sanchez@example.com', telefono: '603456789', acceso: 'Otorgado' },
  { id: 'pf2109fr', nombre: 'Pedro', apellidos: 'Fernández Ruiz', email: 'pedro.fernandez@example.com', telefono: '604567890', acceso: 'Otorgado' },
  { id: 'ag7854gt', nombre: 'Ana', apellidos: 'Gómez Torres', email: 'ana.gomez@example.com', telefono: '605678901', acceso: 'No vigente' },
  { id: 'jj3647jc', nombre: 'José', apellidos: 'Jiménez Castro', email: 'jose.jimenez@example.com', telefono: '606789012', acceso: 'Pendiente' },
  { id: 'mm5296mv', nombre: 'Marta', apellidos: 'Molina Vargas', email: 'marta.molina@example.com', telefono: '607890123', acceso: 'Pendiente' },
  { id: 'lr6182rh', nombre: 'Luis', apellidos: 'Romero Herrera', email: 'luis.romero@example.com', telefono: '608901234', acceso: 'Pendiente' },
  { id: 'en4532ns', nombre: 'Elena', apellidos: 'Navarro Sánchez', email: 'elena.navarro@example.com', telefono: '609012345', acceso: 'Pendiente' },
];

function UserManagement() {
  const [usuarios, setUsuarios] = useState(usuariosIniciales);
  const [editando, setEditando] = useState(null); // usuario en edición
  const [form, setForm] = useState({});

  const cambiarAcceso = (id) => {
    setUsuarios(usuarios.map(user => {
      if (user.id !== id) return user;
      const nuevoEstado =
        user.acceso === 'Otorgado' ? 'No vigente'
        : user.acceso === 'Pendiente' ? 'Otorgado'
        : 'Otorgado';
      return { ...user, acceso: nuevoEstado };
    }));
  };

  const eliminarUsuario = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      setUsuarios(usuarios.filter(user => user.id !== id));
    }
  };

  const abrirEditor = (user) => {
    setEditando(user.id);
    setForm({ ...user });
  };

  const cerrarEditor = () => {
    setEditando(null);
    setForm({});
  };

  const guardarCambios = () => {
    setUsuarios(usuarios.map(u => (u.id === form.id ? form : u)));
    cerrarEditor();
  };

  return (
    <div className="admin-users-wrapper">
      <div className="sensor-bar">
        <span>Accediendo como: <strong>Francisco</strong></span>
        <span>Estado del riego: Desactivado</span>
        <span>Tiempo: Despejado</span>
        <span>Temperatura actual: 23°C</span>
        <span>Humedad relativa: 27%</span>
      </div>

      <h2>Usuarios</h2>
      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Acceso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.apellidos}</td>
              <td>{user.email}</td>
              <td>{user.telefono}</td>
              <td>{user.acceso}</td>
              <td>
                <button title="Cambiar acceso" onClick={() => cambiarAcceso(user.id)}>✔</button>
                <button title="Editar usuario" onClick={() => abrirEditor(user)}>✏️</button>
                <button title="Eliminar usuario" onClick={() => eliminarUsuario(user.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="volver">
        <button onClick={() => alert('Volver al menú de administración')}>← Volver al menú de administración</button>
      </div>

      {editando && (
        <div className="modal">
          <div className="modal-content">
            <h3>Editar usuario</h3>
            <label>Código:<input value={form.id} disabled /></label>
            <label>Nombre:<input value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} /></label>
            <label>Apellidos:<input value={form.apellidos} onChange={e => setForm({ ...form, apellidos: e.target.value })} /></label>
            <label>Correo electrónico:<input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></label>
            <label>Número de teléfono:<input value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} /></label>
            <div className="modal-actions">
              <button onClick={cerrarEditor}>Cancelar</button>
              <button onClick={guardarCambios}>Aceptar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserManagement;
