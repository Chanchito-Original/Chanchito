import React, { useState } from "react";
import "./css/RegisterPage.css";
import pigLogo from "./img/pig-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

function RegisterPage() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegisterClick = async () => {
    const nombreInput = document.getElementById("register-nombre");
    const apellidoInput = document.getElementById("register-apellido");
    const emailInput = document.getElementById("register-email");
    const passwordInput = document.getElementById("register-password");
    const confirmPasswordInput = document.getElementById(
      "register-confirmPassword"
    );

    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          apellido,
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.success) {
        console.log("Usuario registrado con éxito");
        // Redirige al usuario a la página de inicio de sesión después del registro
        navigate("/");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error en la solicitud de registro:", error);
      setError("Error en la solicitud de registro");
    }
  };

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
            <Nav.Link as={Link} to="/">
              Iniciar Sesion
            </Nav.Link>
          </button>
        </div>
      </form>
      <div className="error-message">{error}</div>
    </section>
  );
}

// Exporta el componente RegisterPage
export default RegisterPage;
