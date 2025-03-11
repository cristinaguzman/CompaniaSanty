import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaClipboardList,
  FaComments,
  FaBox,
  FaBook,
  FaSignOutAlt,
  FaTimes,
  FaMap,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Fondo oscuro semi-transparente cuando el Sidebar está abierto */}
      {isOpen && (
        <div
          className="overlay"
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1049,
          }}
        ></div>
      )}

      {/* Sidebar con transición suave y diseño mejorado */}
      <div
        className={`sidebar text-white p-3 position-fixed vh-100 d-flex flex-column shadow-lg ${
          isOpen ? "show" : "hide"
        }`}
        style={{
          width: "250px",
          top: 0,
          left: isOpen ? "0" : "-250px",
          transition: "left 0.3s ease-in-out",
          backgroundColor: "#1f355a",
          zIndex: 1050,
        }}
      >
        {/* Botón de Cerrar Sidebar */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn btn-outline-light" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>

        {/* Información de Usuario */}
        <div className="text-center my-2">
          <img
            src="https://i.ibb.co/zTHGt9Cy/miavatar.png"
            alt="User Avatar"
            className="rounded-circle mb-2"
            style={{ width: "60px", height: "60px" }}
          />
          <h6>Karina</h6>
          <small>karina@cuatrolabs.cl</small>
        </div>

        {/* Links del menú */}
        <nav className="nav flex-column">
          <Link to="/" className="nav-link text-white" onClick={toggleSidebar}>
            <FaTachometerAlt className="me-2" /> Dashboard
          </Link>
          <Link to="/ot" className="nav-link text-white" onClick={toggleSidebar}>
            <FaClipboardList className="me-2" /> OT
          </Link>
          <Link to="/mapa" className="nav-link text-white" onClick={toggleSidebar}>
            <FaMap className="me-2" /> Mapa
          </Link>
          <Link to="/comunicaciones" className="nav-link text-white" onClick={toggleSidebar}>
            <FaComments className="me-2" /> Comunicaciones
          </Link>
          <Link to="/inventario" className="nav-link text-white" onClick={toggleSidebar}>
            <FaBox className="me-2" /> Inventario
          </Link>
        </nav>

        <hr className="border-light" />

        {/* Configuración y Cierre de Sesión */}
        <nav className="nav flex-column">
          <Link to="/TermsOfUse" className="nav-link text-white" onClick={toggleSidebar}>
            <FaBook className="me-2" /> Guía de Uso
          </Link>
          <Link to="/Login" className="nav-link text-danger" onClick={toggleSidebar}>
            <FaSignOutAlt className="me-2" /> Cerrar Sesión
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
