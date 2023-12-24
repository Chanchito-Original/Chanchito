import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pigLogo from "./img/pig-logo.png";
import { FaSearch, FaCog, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./css/App.css";

const App = () => {
  const [showCarousel, setShowCarousel] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarousel(false);
    }, 5000); // Oculta el carrusel después de 5 segundos (ajusta según sea necesario)

    return () => clearTimeout(timer);
  }, []);

  const carouselAnimation = useSpring({
    opacity: showCarousel ? 1 : 0,
    transform: showCarousel ? "translateY(0)" : "translateY(-100%)",
  });

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
};

export default App;
