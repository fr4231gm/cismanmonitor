import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserManagement.css';

function UserManagement() {
  const [usuarios, setUsuarios] = useState([]);
  const [editando, setEditando] = useState(null);
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  // Cargar usuarios al iniciar
  useEffect(() => {
    fetch('http://localhost:8080/api/admin/usuarios', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        const usuariosMapeados = data.map(u => ({
          id: u.codigoUsuario,
          nombre: u.nombre,
          apellidos: u.apellidos,
          email: u.correo,
          telefono: u.numeroTelefono,
          acceso: traducirTipoUsuario(u.tipoUsuario)
        }));
        setUsuarios(usuariosMapeados);
      })
      .catch(err => console.error('Error al cargar usuarios:', err));
  }, [token]);

  const traducirTipoUsuario = (tipo) => {
    switch (tipo) {
      case 'comun_autorizado': return 'Otorgado';
      case 'comun_pendiente': return 'Pendiente';
      case 'comun_baneado': return 'No vigente';
      default: return tipo;
    }
  };

  const accesoAEnum = (acceso) => {
    switch (acceso) {
      case 'Otorgado': return 'comun_autorizado';
      case 'Pendiente': return 'comun_pendiente';
      case 'No vigente': return 'comun_baneado';
      default: return acceso;
    }
  };

  const cambiarAcceso = (id) => {
    fetch(`http://localhost:8080/api/admin/usuarios/${id}/acceso`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(usuarioActualizado => {
        setUsuarios(usuarios.map(u =>
          u.id === id
            ? { ...u, acceso: traducirTipoUsuario(usuarioActualizado.tipoUsuario) }
            : u
        ));
      })
      .catch(err => console.error('Error al cambiar acceso:', err));
  };

  const eliminarUsuario = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      fetch(`http://localhost:8080/api/admin/usuarios/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(() => setUsuarios(usuarios.filter(u => u.id !== id)))
        .catch(err => console.error('Error al eliminar usuario:', err));
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
    const payload = {
      codigoUsuario: form.id,
      nombre: form.nombre,
      apellidos: form.apellidos,
      correo: form.email,
      numeroTelefono: form.telefono,
      tipoUsuario: accesoAEnum(form.acceso)
    };

    fetch(`http://localhost:8080/api/admin/usuarios/${form.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(usuarioActualizado => {
        setUsuarios(usuarios.map(u =>
          u.id === form.id
            ? {
                id: usuarioActualizado.codigoUsuario,
                nombre: usuarioActualizado.nombre,
                apellidos: usuarioActualizado.apellidos,
                email: usuarioActualizado.correo,
                telefono: usuarioActualizado.numeroTelefono,
                acceso: traducirTipoUsuario(usuarioActualizado.tipoUsuario)
              }
            : u
        ));
        cerrarEditor();
      })
      .catch(err => console.error('Error al guardar cambios:', err));
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
        <button onClick={() => navigate('/admin')}>← Volver al menú de administración</button>
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
