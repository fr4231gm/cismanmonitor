import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [identificador, setIdentificador] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login con:', { identificador, password });
  };

  return (
    <div className="login-container">
      <h1 className="app-title">CismanMonitor</h1>
      <p className="welcome-message">
        Bienvenido a CismanMonitor, el sistema inteligente de monitorización agrícola.
      </p>

      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Identificador:
          <input
            type="text"
            value={identificador}
            onChange={(e) => setIdentificador(e.target.value)}
            required
          />
        </label>

        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Entrar</button>
      </form>

      <div className="login-links">
        <a href="/reset-clave-maestra">¿Ha olvidado su contraseña?</a>
        <a href="/register">Registrarse</a>
      </div>
    </div>
  );
}

export default Login;
