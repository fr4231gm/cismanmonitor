import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [identificador, setIdentificador] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          identificador,
          password
        })
      });

      if (response.ok) {
        const data = await response.json();

        // Guardar token
        localStorage.setItem('token', data.token);

        // Redirigir al menú
        navigate('/menu');
      } else {
        const errorMsg = await response.text();
        setError('Error al iniciar sesión: ' + errorMsg);
      }
    } catch (err) {
      console.error('Error de red o servidor:', err);
      setError('No se pudo conectar con el servidor.');
    }
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

      {error && <p className="error-message">{error}</p>}

      <div className="login-links">
        <a href="/reset-clave-maestra">¿Ha olvidado su contraseña?</a>
        <a href="/register">Registrarse</a>
      </div>
    </div>
  );
}

export default Login;
