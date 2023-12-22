import React from 'react';
import { FaUser } from 'react-icons/fa'; // Importa el icono de usuario
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="Login-container">
        <h1 className="Login-title">Iniciar Sesión</h1>
        <div className="Login-input-container">
          <FaUser className="Login-user-icon" />
          <input type="text" placeholder="Usuario" />
        </div>
        <div className="Login-input-container">
          <FaUser className="Login-user-icon" />
          <input type="password" placeholder="Contraseña" />
        </div>
        <button className="Login-button">Iniciar Sesión</button>
      </div>
    </div>
  );
}

export default LoginPage;
