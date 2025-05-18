import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    codigo: '',
    nombre: '',
    apellidos: '',
    correo: '',
    telefono: '',
    password: '',
    confirmarPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Registro enviado:', formData);
  };

  return (
    <div className="register-wrapper">
      <div className="register-form-container">
        <h2>Introduzca sus datos</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <label>
            Código:
            <input type="text" name="codigo" value={formData.codigo} onChange={handleChange} required />
          </label>

          <div className="double-input">
            <label>
              Nombre:
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </label>
            <label>
              Apellidos:
              <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
            </label>
          </div>

          <label>
            Correo electrónico:
            <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
          </label>

          <label>
            Número de teléfono:
            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
          </label>

          <label>
            Contraseña:
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </label>

          <label>
            Confirmar contraseña:
            <input type="password" name="confirmarPassword" value={formData.confirmarPassword} onChange={handleChange} required />
          </label>

          <button type="submit">Registrarse</button>
        </form>
      </div>

      <div className="register-info-box">
        <h3>Detalles del proceso de registro</h3>
        <p>
          Una vez usted inicie el proceso de registro, se le enviará un aviso al administrador del sistema para que contemple su petición.
          Si su decisión ha sido aceptada para que usted pueda usar el sistema, se le enviará un correo indicándole que ya tendrá acceso al sistema.
          En caso de no ser así y que se le deniegue el acceso, también se le enviará un correo indicándole el motivo.
        </p>
      </div>
    </div>
  );
}

export default Register;
