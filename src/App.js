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
            <span className="App-title">Chanchito</span>
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/settings">
            <FaCog /> Ajustes
          </Nav.Link>
          <Nav.Link as={Link} to="/perfil">
            <FaUser /> Perfil
          </Nav.Link>
        </Nav>
      </Navbar>

      {/* Carrusel */}
      <div className="header-carousel">
        <Carousel>
          <Carousel.Item>
            <img src="/pig-logo.png" alt="Imagen 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="imagen2.jpg" alt="Imagen 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="imagen3.jpg" alt="Imagen 3" />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Barra de Búsqueda */}
      <div className="App-search-bar">
        <input type="text" placeholder="Buscar" />
        <Button className="App-search-button" variant="primary">
          <FaSearch />
        </Button>
      </div>

      {/* Contenido Principal */}
      <main className="App-main">
        {/* Sección de Solicitudes de Consultas */}
        <section className="App-section">
          <h2>Solicitudes de Consultas</h2>
          {/* Contenido de Solicitudes de Consultas */}
        </section>

        {/* Sección de Consultas en Curso */}
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
