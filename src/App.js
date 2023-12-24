import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaCog, FaUser } from "react-icons/fa";
import pigLogo from "./img/pig-logo.png";
import { Link } from "react-router-dom";
import { Carousel, Navbar, Nav, Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">
            <img src={pigLogo} className="App-logo" alt="logo" />
            {/* Mostrar solo el ícono en dispositivos móviles */}
            <span className="App-title d-none d-sm-inline">Chanchito</span>
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/settings">
            <FaCog />{" "}
            {/* Puedes añadir un texto aquí para dispositivos móviles si lo deseas */}
          </Nav.Link>
          <Nav.Link as={Link} to="/perfil">
            <FaUser />{" "}
            {/* Puedes añadir un texto aquí para dispositivos móviles si lo deseas */}
          </Nav.Link>
        </Nav>
      </Navbar>

      {/* Carrusel */}
      <div className="header-carousel">
        <Carousel fade>
          {/* Imágenes del carrusel para dispositivos móviles */}
          {/* ... */}
        </Carousel>
      </div>

      {/* Barra de Búsqueda */}
      <div className="App-search-bar">
        <Button className="App-search-button" variant="primary">
          <FaSearch />
        </Button>
        <input type="text" className="form-control" placeholder="Buscar" />
      </div>

      {/* Contenido Principal */}
      <main className="App-main">
        {/* Mapa */}
        <div className="map-container">
          {/* Aquí puedes integrar tu mapa de Google Maps */}
          {/* Puedes utilizar la API de Google Maps u otro servicio de mapas */}
          <div
            className="scroll-indicator"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            &#9660; {/* Código de la flecha hacia abajo */}
          </div>
        </div>
        {/* Sección de Solicitudes de Consultas */}
        <section className="App-section wow fadeIn" data-wow-duration="1s">
          <h2>Solicitudes de Consultas</h2>
          {/* Contenido de Solicitudes de Consultas */}
        </section>

        {/* Sección de Consultas en Curso */}
        <section className="App-section wow fadeIn" data-wow-duration="1s">
          <h2>Consultas en Curso</h2>
          {/* Contenido de Consultas en Curso */}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer wow fadeIn" data-wow-duration="1s">
        <div className="footer-info">
          <h3>Información</h3>
          {/* Información de la Empresa para dispositivos móviles */}
          {/* ... */}
        </div>
      </footer>
    </div>
  );
}

export default App;
