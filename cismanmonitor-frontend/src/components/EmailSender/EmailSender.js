import React, { useState } from 'react';
import './EmailSender.css';

function EmailSender() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [correo, setCorreo] = useState({
    asunto: '',
    destinatario: 'Personalizado',
    nombre: '',
    emails: '',
    cuerpo: ''
  });

  const correos = [
    {
      asunto: 'Mantenimiento programado del sistema',
      fecha: '03/02/2025 16:24',
      destinatarios: 'Todos'
    },
    {
      asunto: 'Corte de suministro de agua',
      fecha: '07/02/2025 12:22',
      destinatarios: 'Todos'
    },
    {
      asunto: 'Aviso de mal riego',
      fecha: '20/02/2025 14:55',
      destinatarios: 'Personalizado'
    },
    {
      asunto: 'Reseetame la contraseña por favor',
      fecha: '28/02/2025 20:01',
      destinatarios: 'Administración'
    }
  ];

  return (
    <div className="admin-mails-wrapper">
      <div className="sensor-bar">
        <span>Accediendo como: <strong>Francisco</strong></span>
        <span>Estado del riego: Desactivado</span>
        <span>Tiempo: Despejado</span>
        <span>Temperatura actual: 23°C</span>
        <span>Humedad relativa: 27%</span>
      </div>

      {!mostrarFormulario ? (
        <>
          <div className="admin-mails-filtros">
            <input type="text" placeholder="Asunto" />
            <input type="date" />
            <input type="date" />
          </div>

          <div className="admin-mails-crear-btn">
            <button onClick={() => setMostrarFormulario(true)}>Crear nuevo</button>
          </div>

          <table className="admin-mails-tabla">
            <thead>
              <tr>
                <th>Asunto</th>
                <th>Fecha</th>
                <th>Destinatarios</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {correos.map((c, i) => (
                <tr key={i}>
                  <td>{c.asunto}</td>
                  <td>{c.fecha}</td>
                  <td>{c.destinatarios}</td>
                  <td><button className="ver-link">Ver</button></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="admin-mails-volver">
            <button className="volver">← Volver al menú de administración</button>
          </div>
        </>
      ) : (
        <div className="admin-mails-formulario">
          <h3>Nuevo correo</h3>

          <label>Asunto:</label>
          <input
            type="text"
            value={correo.asunto}
            onChange={(e) => setCorreo({ ...correo, asunto: e.target.value })}
          />

          <label>Destinatarios:</label>
          <select
            value={correo.destinatario}
            onChange={(e) => setCorreo({ ...correo, destinatario: e.target.value })}
          >
            <option>Todos</option>
            <option>Administración</option>
            <option>Personalizado</option>
          </select>

          {correo.destinatario === 'Personalizado' && (
            <input
              type="text"
              placeholder="Nombre"
              value={correo.nombre}
              onChange={(e) => setCorreo({ ...correo, nombre: e.target.value })}
            />
          )}

          <input
            type="text"
            placeholder="frangomez@cisman.es;pedroalberto@gmail.com"
            value={correo.emails}
            onChange={(e) => setCorreo({ ...correo, emails: e.target.value })}
          />

          <label>Cuerpo:</label>
          <textarea
            rows="5"
            value={correo.cuerpo}
            onChange={(e) => setCorreo({ ...correo, cuerpo: e.target.value })}
          />

          <div className="admin-mails-botones-form">
            <button onClick={() => setMostrarFormulario(false)}>Cancelar</button>
            <button onClick={() => alert('Correo enviado')}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmailSender;
