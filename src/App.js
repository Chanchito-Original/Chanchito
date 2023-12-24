import React from "react";
import { FaSearch, FaCog, FaUser } from "react-icons/fa";
import pigLogo from "./img/pig-logo.png";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <div className="App-header-container">
          <div className="App-logo-container">
            <Link to="/">
              <img src={pigLogo} className="App-logo" alt="logo" />
              <span className="App-title">Chanchito</span>
            </Link>
          </div>
          <div className="App-header-buttons">
            <button className="App-nav-button">
              <Link to="/settings">
                <FaCog /> Ajustes
              </Link>
            </button>
            <button className="App-nav-button">
              <Link to="/perfil">
                <FaUser /> Perfil
              </Link>
            </button>
          </div>
        </div>
      </header>

      {/* Carrusel */}
      <div className="header-carousel">
        <Carousel>
          <div>
            <img src="imagen1.jpg" alt="Imagen 1" />
          </div>
          <div>
            <img src="imagen2.jpg" alt="Imagen 2" />
          </div>
          <div>
            <img src="imagen3.jpg" alt="Imagen 3" />
          </div>
        </Carousel>
      </div>

      {/* Barra de Búsqueda */}
      <div className="App-search-bar">
        <input type="text" placeholder="Buscar" />
        <button className="App-search-button">
          <FaSearch />
        </button>
      </div>

      {/* Contenido Principal */}
      <main className="App-main">
        <section className="App-section">
          <h2>Solicitudes de Consultas</h2>
          {/* Contenido de Solicitudes de Consultas */}
        </section>

        <section className="App-section">
          <h2>Consultas en Curso</h2>
          {/* Contenido de Consultas en Curso */}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-info">
          <h3>Información de la Empresa</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
