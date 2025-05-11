import React, { useState } from 'react';
import './EmailSender.css';

function EmailSender() {
  const [formData, setFormData] = useState({
    destinatario: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando correo:', formData);
    // Aquí puedes integrar con el backend
  };

  return (
    <div className="email-sender-container">
      <h2>Envío de Correos</h2>
      <form onSubmit={handleSubmit} className="email-sender-form">
        <label>
          Para:
          <input
            type="email"
            name="destinatario"
            value={formData.destinatario}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Asunto:
          <input
            type="text"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mensaje:
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="6"
            required
          ></textarea>
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default EmailSender;
