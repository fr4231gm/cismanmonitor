import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminSettings.css';

function AdminSettings() {
  const usuario = 'Francisco';
  const navigate = useNavigate();


  return (
    <div className="admin-wrapper">
      <div className="sensor-bar">
        <span>Accediendo como: <strong>{usuario}</strong></span>
        <span>Estado del riego: Desactivado</span>
        <span>Tiempo: Despejado</span>
        <span>Temperatura actual: 23°C</span>
        <span>Humedad relativa: 27%</span>
      </div>

      <div className="admin-content">
        <div className="admin-box" onClick={() => navigate('/admin/usuarios')}>
          <h4>Administración de usuarios</h4>
          <p>Accede a la lista de usuarios para editarlos, darlos de baja o otorgar nuevos accesos</p>
        </div>

        <div className="admin-box" onClick={() => alert('Ir a envío de correos')}>
          <h4>Envío de correos</h4>
          <p>Sistema de correos para enviar avisos a los usuarios de la plataforma</p>
        </div>

        <div className="admin-box" onClick={() => alert('Ir a administración de accesos')}>
          <h4>Administración de accesos</h4>
          <p>Accede a la lista de accesos y acciones realizadas en el sistema por los diferentes usuarios</p>
        </div>

        <div className="admin-box" onClick={() => alert('Ir a modificación de contraseña maestra')}>
          <h4>Modificación de contraseña maestra</h4>
          <p>Permite modificar la contraseña maestra para el acceso físico a la centralita del microcontrolador</p>
        </div>
      </div>

      <div className="volver">
        <button onClick={() => navigate('/menu')}>← Volver al menú</button>
      </div>
    </div>
  );
}

export default AdminSettings;
