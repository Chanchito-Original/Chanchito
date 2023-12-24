import React from "react";
import "./css/RegisterPage.css"; // Importa el nuevo CSS para estilos
import pigLogo from "./img/pig-logo.png"; // Importa la imagen del logo de cerdito

// Componente de la página de registro
function RegisterPage() {
  // Función de manejo de clic para el botón de registro
  const handleRegisterClick = () => {
    // Obtener referencias a los elementos del formulario de registro
    const nombreInput = document.getElementById("register-nombre");
    const apellidoInput = document.getElementById("register-apellido");
    const emailInput = document.getElementById("register-email");
    const passwordInput = document.getElementById("register-password");
    const confirmPasswordInput = document.getElementById(
      "register-confirmPassword"
    );

    // Obtener valores de los campos de entrada
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Validar si las contraseñas coinciden
    if (password !== confirmPassword) {
      console.error("Las contraseñas no coinciden");
      return;
    }

    // Realizar acciones de registro (puedes reemplazar con tu lógica)
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Email:", email);
    console.log("Contraseña:", password);
  };

  // Renderizar el componente de la página de registro
  return (
    <section className="register-container">
      <div className="register-logo-container">
        <img src={pigLogo} alt="Logo de cerdito" className="register-logo" />
      </div>
      <form className="register-form-container">
        <div className="title-container">
          <p className="register-label-title">Registro</p>
        </div>

        {/* Nombre input */}
        <div className="form-group">
          <label htmlFor="register-nombre" className="register-label">
            Nombre
          </label>
          <input
            type="text"
            id="register-nombre"
            className="register-rounded-input"
            placeholder="Nombre"
          />
        </div>

        {/* Apellido input */}
        <div className="form-group">
          <label htmlFor="register-apellido" className="register-label">
            Apellido
          </label>
          <input
            type="text"
            id="register-apellido"
            className="register-rounded-input"
            placeholder="Apellido"
          />
        </div>

        {/* Email input */}
        <div className="form-group">
          <label htmlFor="register-email" className="register-label">
            Email
          </label>
          <input
            type="email"
            id="register-email"
            className="register-rounded-input"
            placeholder="Email"
          />
        </div>

        {/* Password input */}
        <div className="form-group">
          <label htmlFor="register-password" className="register-label">
            Contraseña
          </label>
          <input
            type="password"
            id="register-password"
            className="register-rounded-input"
            placeholder="Contraseña"
          />
        </div>

        {/* Confirm Password input */}
        <div className="form-group">
          <label htmlFor="register-confirmPassword" className="register-label">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="register-confirmPassword"
            className="register-rounded-input"
            placeholder="Confirmar Contraseña"
          />
        </div>

        <div className="register-button-container">
          {/* Botón de registro */}
          <button
            type="button"
            className="register-login-button"
            onClick={handleRegisterClick}
          >
            Registrarse
          </button>

          {/* Botón de inicio de sesión */}
          <button type="button" className="register-register-button">
            Iniciar Sesión
          </button>
        </div>
      </form>
    </section>
  );
}

// Exporta el componente RegisterPage
export default RegisterPage;
