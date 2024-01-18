import React from "react";
import "./css/SettingsPage.css"; // Asegúrate de ajustar la ruta del CSS
import pigLogo from "./img/pig-logo.png"; // Asegúrate de ajustar la ruta del logo
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function SettingsPage() {
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
            {/* Añade los botones específicos de ajustes */}
          </div>
        </div>
      </header>

      <main className="App-main">
        <section className="App-section">
          <h2>Ajustes Generales</h2>
          {/* Contenido de Ajustes Generales */}
        </section>
      </main>
    </div>
  );
}

export default SettingsPage;
