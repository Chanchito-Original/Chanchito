import React, { useState } from "react";
import "./css/RegisterPage.css";
import pigLogo from "./img/pig-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

function RegisterPage() {
  const [error, setError] = useState(null);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [genero, setGenero] = useState("");
  const [preguntaSeguridad, setPreguntaSeguridad] = useState("");
  const [respuestaSeguridad, setRespuestaSeguridad] = useState("");

  const navigate = useNavigate();

  const handleRegisterClick = async () => {
    const nombreCompleto = `${nombre} ${apellido}`;

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
          nombre_completo: nombreCompleto,
          email,
          password,
          telefono,
          nombre_usuario: nombreUsuario,
          genero,
          pregunta_seguridad: preguntaSeguridad,
          respuesta_seguridad: respuestaSeguridad,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.success) {
        console.log("Usuario registrado con éxito");
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

        {/* Nombre y Apellido input */}
        <div className="form-group">
          <label htmlFor="register-nombre" className="register-label">
            Nombre
          </label>
          <input
            type="text"
            id="register-nombre"
            className="register-rounded-input"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="register-apellido" className="register-label">
            Apellido
          </label>
          <input
            type="text"
            id="register-apellido"
            className="register-rounded-input"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Nuevos campos */}
        <div className="form-group">
          <label htmlFor="register-telefono" className="register-label">
            Teléfono
          </label>
          <input
            type="text"
            id="register-telefono"
            className="register-rounded-input"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="register-nombreUsuario" className="register-label">
            Nombre de Usuario
          </label>
          <input
            type="text"
            id="register-nombreUsuario"
            className="register-rounded-input"
            placeholder="Nombre de Usuario"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="register-genero" className="register-label">
            Género
          </label>
          <select
            id="register-genero"
            className="register-rounded-input"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          >
            <option value="">Seleccionar Género</option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="register-preguntaSeguridad" className="register-label">
            Pregunta de Seguridad
          </label>
          <select
            id="register-preguntaSeguridad"
            className="register-rounded-input"
            value={preguntaSeguridad}
            onChange={(e) => setPreguntaSeguridad(e.target.value)}
          >
            <option value="">Seleccionar Pregunta</option>
            <option value="¿Cuál es el nombre de tu primera mascota?">
              ¿Cuál es el nombre de tu primera mascota?
            </option>
            <option value="¿En qué ciudad naciste?">¿En qué ciudad naciste?</option>
            <option value="¿Cuál es tu comida favorita?">
              ¿Cuál es tu comida favorita?
            </option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="register-respuestaSeguridad" className="register-label">
            Respuesta de Seguridad
          </label>
          <input
            type="text"
            id="register-respuestaSeguridad"
            className="register-rounded-input"
            placeholder="Respuesta de Seguridad"
            value={respuestaSeguridad}
            onChange={(e) => setRespuestaSeguridad(e.target.value)}
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
              Iniciar Sesión
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
