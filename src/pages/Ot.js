import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router-dom";

// 🔹 Agrega los datos de ejemplo
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

// 🔹 Función para asignar color según estado
const getEstadoColor = (estado) => {
  switch (estado.toLowerCase()) {
    case "completado":
      return "text-green-600";
    case "pendiente":
      return "text-red-600";
    case "en proceso":
      return "text-yellow-600";
    default:
      return "text-gray-600";
  }
};

// 🔹 Agrupar por fecha
const groupByDate = (orders) => {
  return orders.reduce((acc, order) => {
    const dateKey = order.date.split(" ")[0];
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(order);
    return acc;
  }, {});
};

const Ot = () => {
  const groupedOrders = groupByDate(orders);
  const sortedDates = Object.keys(groupedOrders).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-yellow-500 mb-6">
        Historial de Tareas Finalizadas
      </h1>

      {sortedDates.map((dateKey) => (
        <div key={dateKey} className="mb-6">
          <h6 className="text-lg font-semibold text-blue-700 mb-2">
            Fecha: {dateKey}
          </h6>

          {groupedOrders[dateKey].map(
            ({ id, date, description, client, estado }) => (
              <Link
                to={`/orden/${id}`}
                key={id}
                className="text-decoration-none"
              >
                <Card className="mb-4 p-4 shadow-md rounded-lg border-primary text-center hover:shadow-lg transition">
                  <CardContent>
                    <p className="font-bold">Nº Orden: {id}</p>
                    <p className="text-gray-600">Fecha y Hora: {date}</p>
                    <p className="text-gray-800">Descripción: {description}</p>
                    <p className="text-gray-800 font-bold">
                      Cliente: {client || "No especificado"}
                    </p>
                    <p
                      className={`font-semibold mt-2 ${getEstadoColor(estado)}`}
                    >
                      Estado: {estado}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Ot;
