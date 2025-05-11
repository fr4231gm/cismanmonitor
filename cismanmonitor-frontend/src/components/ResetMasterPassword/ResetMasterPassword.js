import React, { useState } from 'react';
import './ResetMasterPassword.css';

function ResetMasterPassword() {
  const [formData, setFormData] = useState({
    nueva: '',
    confirmar: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nueva !== formData.confirmar) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Contraseña maestra actualizada:', formData.nueva);
    // Aquí irá la llamada segura al backend
  };

  return (
    <div className="reset-password-container">
      <h2>Resetear Contraseña Maestra</h2>
      <form onSubmit={handleSubmit} className="reset-password-form">
        <label>
          Nueva contraseña:
          <input
            type="password"
            name="nueva"
            value={formData.nueva}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Confirmar nueva contraseña:
          <input
            type="password"
            name="confirmar"
            value={formData.confirmar}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Actualizar contraseña</button>
      </form>
    </div>
  );
}

export default ResetMasterPassword;
