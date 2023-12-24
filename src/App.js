import React, { useState, useEffect } from "react";
import { FaSearch, FaCog, FaUser } from "react-icons/fa";
import pigLogo from "./img/pig-logo.png";
import { Link } from "react-router-dom";
import { useMap } from "react-leaflet";
import { Carousel, Navbar, Nav, Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/App.css";

const mapContainerStyle = {
  width: "100%",
  height: "100vh",
};

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
          map.flyTo([latitude, longitude], map.getZoom());
        },
        (error) => {
          console.error("Error obtaining user location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Tu ubicación actual.</Popup>
    </Marker>
  );
}

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
            <FaCog />
          </Nav.Link>
          <Nav.Link as={Link} to="/perfil">
            <FaUser />
          </Nav.Link>
        </Nav>

        {/* Barra de Búsqueda */}
        <div className="App-search-bar">
          <Button className="App-search-button" variant="primary">
            <FaSearch />
          </Button>
          <input type="text" className="form-control" placeholder="Buscar" />
        </div>
      </Navbar>

      {/* Carrusel */}
      <div className="header-carousel">
        <Carousel fade>
          {/* Imágenes del carrusel para dispositivos móviles */}
          {/* ... */}
        </Carousel>
      </div>

      {/* Contenido Principal */}
      <main className="App-main">
        {/* Mapa */}
        <div className="map-container">
          <MapContainer
            center={[0, 0]} // Coordenadas iniciales, se actualizarán al obtener la ubicación del usuario
            zoom={13}
            style={mapContainerStyle}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker />
          </MapContainer>
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
