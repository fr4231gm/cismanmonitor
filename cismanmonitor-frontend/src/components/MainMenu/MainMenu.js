import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenu.css';

// Función para decodificar el payload de un token JWT
function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
}

function MainMenu() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('Usuario');
  const [esAdmin, setEsAdmin] = useState(false); // por defecto false

  const estadoRiego = 'Desactivado';
  const tiempo = 'Despejado';
  const temperatura = '23°C';
  const humedad = '27%';

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }

    const payload = parseJwt(token);
    if (payload) {
      setUsuario(payload.sub); // el identificador va como 'sub' por convención JWT
      setEsAdmin(payload.rol === 'administrador'); // si añades rol en el token, opcional
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="mainmenu-wrapper">
      <div className="mainmenu-bar">
        <span>Accediendo como: <strong>{usuario}</strong></span>
        <span>Estado del riego: {estadoRiego}</span>
        <span>Tiempo: {tiempo}</span>
        <span>Temperatura actual: {temperatura}</span>
        <span>Humedad relativa: {humedad}</span>
      </div>

      <div className="mainmenu-grid">
        <div className="menu-card" onClick={() => alert('Ir a Sensores')}>
          <h3>Sensores</h3>
          <p>Accede al detalle de los valores de los sensores del sistema</p>
        </div>

        <div className="menu-card" onClick={() => alert('Ir a Regadío')}>
          <h3>Sistema de regadío</h3>
          <p>Ver el estado actual del sistema de regadío, así como configurarlo</p>
        </div>

        <div className="menu-card" onClick={() => alert('Ir a Vigilancia')}>
          <h3>Sistema de vigilancia</h3>
          <p>Acceder a las cámaras en tiempo real y ver los avisos de intrusión</p>
        </div>

        <div className="menu-card" onClick={() => alert('Ir a Notificaciones')}>
          <h3>Notificaciones</h3>
          <p>Configura las notificaciones que deseas recibir del sistema</p>
        </div>

        <div className="menu-card" onClick={() => alert('Ir a Meteorología')}>
          <h3>Módulo de meteorología</h3>
          <p>Accede a información meteorológica actual y en tiempo real del cultivo</p>
        </div>

        <div className="menu-card" onClick={handleLogout}>
          <h3>Cerrar sesión</h3>
        </div>
      </div>

      {esAdmin && (
        <div className="admin-button-wrapper">
          <button className="admin-button" onClick={() => navigate('/admin')}>
            Configuración de administración
          </button>
        </div>
      )}
    </div>
  );
}

export default MainMenu;