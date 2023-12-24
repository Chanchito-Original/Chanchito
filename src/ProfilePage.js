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
import { Link } from "react-router-dom"; // Importa el componente Link para la navegación
import "./css/ProfilePage.css";

function ProfilePage() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={pigLogo} alt="Perfil" className="profile-avatar" />
        <h1 className="profile-title">Nombre de Usuario</h1>
        <Link to="/" className="back-button">
          <FaArrowLeft />
        </Link>
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
      </button>
    </div>
  );
}

export default ProfilePage;
