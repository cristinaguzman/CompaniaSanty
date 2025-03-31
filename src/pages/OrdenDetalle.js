import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Datos simulados
const orders = [
  {
    id: 56629,
    date: "12/03/2025 00:00",
    description:
      "Normal;N/A; Visita de ejecutivo en conjunto con Mabel y cko para revisar mejor posiciones de cámaras.",
    client: "CASA SAN RAFAEL",
    estado: "Completado",
  },
  {
    id: 56642,
    date: "11/03/2025 00:00",
    description: "Normal;Presupuesto; entrega de OPIS",
    client: "TEPILLE SAN GERARDO",
    estado: "Pendiente",
  },
  {
    id: 55530,
    date: "13/01/2025 00:00",
    description:
      "Normal;N/A;Servicio adicional a tarea 55468, ya que fue instalada Antena U. (Costo extra)",
    client: "AGRICOLA EL HUAPI - OFICINAS - BODEGA",
    estado: "En Proceso",
  },
  {
    id: 55531,
    date: "13/01/2025 00:00",
    description:
      "Normal;N/A;Ticket:101889;Servicio adicional a tarea 55473 - Revisión de rayos y filtro de detección SD, verificación de sistema antibloqueo, en caso de no tener, implementar sistema antibloqueo",
    client: "No especificado",
    estado: "Completado",
  },
];

// Asignar clase Bootstrap según estado
const getEstadoColor = (estado) => {
  switch (estado.toLowerCase()) {
    case "completado":
      return "text-success";
    case "pendiente":
      return "text-danger";
    case "en proceso":
      return "text-warning";
    default:
      return "text-secondary";
  }
};

const OrdenDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ← para navegación

  const orden = orders.find((o) => o.id.toString() === id);

  if (!orden) {
    return (
      <div className="p-4">
        <h2 className="text-danger">Orden no encontrada</h2>
        <p>Verifica el número de orden o vuelve al historial.</p>
      </div>
    );
  }

  const handleEnRuta = () => {
    navigate(`/en-ruta/${id}`);
  };

  return (
    <div className="container py-4">
      <h2 className="text-primary mb-4">Detalle de la Orden</h2>
      <div className="card shadow-sm p-4 mb-4">
        <div className="mb-3">
          <strong>Número de Orden:</strong> {orden.id}
        </div>
        <div className="mb-3">
          <strong>Fecha:</strong> {orden.date}
        </div>
        <div className="mb-3">
          <strong>Cliente:</strong> {orden.client}
        </div>
        <div className="mb-3">
          <strong>Descripción:</strong>
          <p className="mb-0">{orden.description}</p>
        </div>
        <div className={`fw-bold ${getEstadoColor(orden.estado)} mb-4`}>
          Estado: {orden.estado}
        </div>

        {/* Botón que navega a otra página */}
        <button className="btn btn-outline-primary w-100" onClick={handleEnRuta}>
          En Ruta
        </button>
      </div>
    </div>
  );
};

export default OrdenDetalle;
