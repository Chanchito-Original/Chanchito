import React from "react";
import { FaSearch } from "react-icons/fa"; // Importa el icono de búsqueda
import { FaCog, FaUser } from "react-icons/fa"; // Importa los iconos necesarios
import pigLogo from "./img/pig-logo.png";
import { Link } from "react-router-dom";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-container">
          <div className="App-logo-container">
            <Link to="/">
              <img src={pigLogo} className="App-logo" alt="logo" />
            </Link>
            <Link to="/" className="App-title">
              Chanchito
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

      <div className="App-search-bar">
        <input type="text" placeholder="Buscar" />
        <button className="App-search-button">
          <FaSearch />
        </button>
      </div>

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
    </div>
  );
}

export default App;
