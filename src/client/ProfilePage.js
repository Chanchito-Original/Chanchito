// ProfilePage.js
import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaEdit,
  FaArrowLeft,
} from "react-icons/fa";
import pigLogo from "./img/pig-logo.png";
import { Link } from "react-router-dom";
import "./css/ProfilePage.css";

// Componente para las consultas
const QueryBox = ({ title }) => (
  <div className="profile-box">
    <h3>{title}</h3>
    {/* Contenido de la consulta */}
  </div>
);

// Contenedor para las consultas
const ProfileQueriesContainer = () => (
  <div className="profile-queries-container">
    <QueryBox title="Consulta 1" />
    <QueryBox title="Consulta 2" />
    {/* Agrega más consultas según sea necesario */}
  </div>
);

// Componente principal de la página de perfil
function ProfilePage() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-header">
          <Link to="/" className="back-button">
            <FaArrowLeft />
          </Link>
          <img src={pigLogo} alt="Perfil" className="profile-avatar" />
          <h1 className="profile-title">Nombre de Usuario</h1>
        </div>

        <div className="profile-details">
          <div className="profile-detail">
            <FaUser className="profile-icon" />
            <span>Nombre: Nombre de Usuario</span>
          </div>
          <div className="profile-detail">
            <FaEnvelope className="profile-icon" />
            <span>Correo Electrónico: correo@ejemplo.com</span>
          </div>
          <div className="profile-detail">
            <FaPhone className="profile-icon" />
            <span>Teléfono: (123) 456-7890</span>
          </div>
        </div>

        {/* Otros detalles del perfil, según sea necesario */}

        <button className="profile-edit-button">
          <FaEdit />
          Editar Perfil
        </button>
      </div>

      {/* Nueva sección inferior fuera del container del perfil */}
      <ProfileQueriesContainer />
    </div>
  );
}

export default ProfilePage;
