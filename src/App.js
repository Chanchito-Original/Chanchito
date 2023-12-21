import React from 'react';
import { FaCog, FaUser } from 'react-icons/fa'; // Importa los iconos necesarios
import pigLogo from './pig-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-container">
          <div className="App-logo-container">
            {/* Agrega espacio entre el logo y el texto */}
            <img src={pigLogo} className="App-logo" alt="logo" />
            <h1 className="App-title">Chanchito</h1>
          </div>
          <div className="App-header-buttons">
            <button className="App-nav-button">
              <FaCog /> Ajustes
            </button>
            <button className="App-nav-button">
              <FaUser /> Perfil
            </button>
          </div>
        </div>
      </header>

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
