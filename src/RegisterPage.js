import React from "react";
import "./css/RegisterPage.css"; // Importa el nuevo CSS para estilos
import pigLogo from "./img/pig-logo.png"; // Importa la imagen del logo de cerdito
import "bootstrap/dist/css/bootstrap.min.css";

// Componente de la página de registro
function RegisterPage() {
  // Función de manejo de clic para el botón de registro
  const handleRegisterClick = () => {
    // Obtener referencias a los elementos del formulario de registro
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

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
    <section className="register-container vh-100">
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className="col-md-8 col-lg-6 col-xl-16 offset-xl-1">
          <div className="card" style={{ width: "35rem" }}>
            <div className="card-body">
              <div className="text-center">
                <img src={pigLogo} alt="Logo de cerdito" className="logo" />
              </div>
              <form className="register-form">
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Registro</p>
                </div>

                {/* Nombre input */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="nombre"
                    className="form-control form-control-lg rounded-input"
                    placeholder="Nombre"
                  />
                </div>

                {/* Apellido input */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="apellido"
                    className="form-control form-control-lg rounded-input"
                    placeholder="Apellido"
                  />
                </div>

                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg rounded-input"
                    placeholder="Email"
                  />
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg rounded-input"
                    placeholder="Contraseña"
                  />
                </div>

                {/* Confirm Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="confirmPassword"
                    className="form-control form-control-lg rounded-input"
                    placeholder="Confirmar Contraseña"
                  />
                </div>

                <div className="button-container">
                  {/* Botón de registro */}
                  <button
                    type="button"
                    className="btn btn-primary btn-lg rounded-button register-button"
                    onClick={handleRegisterClick}
                  >
                    Registrarse
                  </button>

                  {/* Botón de inicio de sesión */}
                  <button
                    type="button"
                    className="btn btn-secondary btn-lg rounded-button login-button"
                  >
                    Iniciar Sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Exporta el componente RegisterPage
export default RegisterPage;
