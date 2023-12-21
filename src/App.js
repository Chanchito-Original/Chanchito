import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a la Clínica Veterinaria</h1>
        <p>
          Ofreciendo atención médica de calidad para tus mascotas.
        </p>
        <img
          src="https://placekitten.com/200/200" // Puedes reemplazar esto con tu propio logo o imagen veterinaria
          className="App-logo"
          alt="logo"
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
