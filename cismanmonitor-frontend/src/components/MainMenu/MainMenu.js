import React from 'react';
import './MainMenu.css';

function MainMenu() {
  const usuario = 'Francisco';
  const esAdmin = true;

  const estadoRiego = 'Desactivado';
  const tiempo = 'Despejado';
  const temperatura = '23°C';
  const humedad = '27%';

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

        <div className="menu-card" onClick={() => alert('Cerrar sesión')}>
          <h3>Cerrar sesión</h3>
        </div>
      </div>

      {esAdmin && (
        <div className="admin-button-wrapper">
          <button className="admin-button" onClick={() => alert('Ir a Configuración de administración')}>
            Configuración de administración
          </button>
        </div>
      )}
    </div>
  );
}

export default MainMenu;
