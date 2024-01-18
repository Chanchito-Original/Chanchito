// Importa las bibliotecas de React y CSS
import React, { useState } from "react";
import "./css/LoginPage.css"; // Importa el CSS para estilos
import pigLogo from "./img/pig-logo.png"; // Importa la imagen del logo de cerdito
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

// Componente de la página de inicio de sesión
function LoginPage() {
  // Estado para manejar el enfoque de los campos de entrada
  const [focusedInput, setFocusedInput] = useState(null);

  // Función de manejo de clic para el botón de inicio de sesión
  const handleLoginClick = () => {
    // Obtener referencias a los elementos del formulario
    const emailUsuarioInput = document.getElementById("emailUsuario");
    const passwordInput = document.getElementById("password");

    // Obtener valores de los campos de entrada
    const emailUsuario = emailUsuarioInput.value;
    const password = passwordInput.value;

    // Realizar acciones de inicio de sesión (puedes reemplazar con tu lógica)
    console.log("Email/Usuario:", emailUsuario);
    console.log("Contraseña:", password);
  };

  // Función de manejo de foco para los campos de entrada
  const handleFocus = (inputId) => {
    setFocusedInput(inputId);
  };

  // Renderizar el componente de la página de inicio de sesión
  return (
    <div className="login-container">
      <img src={pigLogo} alt="Logo de cerdito" className="logo" />
      <form className="login-form">
        <label htmlFor="emailUsuario">Correo o Usuario:</label>
        <input
          type="text"
          id="emailUsuario"
          className={`rounded-input ${
            focusedInput === "emailUsuario" ? "focused" : ""
          }`}
          onFocus={() => handleFocus("emailUsuario")}
          onBlur={() => handleFocus(null)}
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          className={`rounded-input ${
            focusedInput === "password" ? "focused" : ""
          }`}
          onFocus={() => handleFocus("password")}
          onBlur={() => handleFocus(null)}
        />
        <div className="button-container">
          <button
            type="button"
            onClick={handleLoginClick}
            className="login-button"
          >
            <Nav.Link as={Link} to="/login">
              Acceder
            </Nav.Link>
          </button>
          <button type="button" className="register-button">
            <Nav.Link as={Link} to="/register">
              Registrarme
            </Nav.Link>
          </button>
        </div>
        <button type="button" className="forgot-password-button">
          ¿Olvidaste tu contraseña?
        </button>
      </form>
    </div>
  );
}

// Exporta el componente LoginPage
export default LoginPage;
