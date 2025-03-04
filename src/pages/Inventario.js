import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Inventario = ({ isSidebarOpen }) => {
  return (
    <div 
      className="container-fluid"
      style={{ 
        paddingLeft: isSidebarOpen ? "250px" : "0",  // Ajusta el espacio según el Sidebar
        transition: "padding-left 0.3s ease-in-out" // Animación suave
      }}
    >
      {/* Título bien posicionado */}
      <h5 className="text-center fw-bold mt-3">Inventario</h5>

      {/* Grid de tarjetas */}
      <div className="row row-cols-1 row-cols-md-2 g-3">
        {[
          { codigo: "010102", detalle: "Router", modelo: "KJ", unidad: "UN" },
          { codigo: "020103", detalle: "Cable UTP", modelo: "Hikvision", unidad: "Mts" },
          { codigo: "020104", detalle: "Switch", modelo: "Cisco", unidad: "UN" },
          { codigo: "020105", detalle: "Access Point", modelo: "TP-Link", unidad: "UN" },
          { codigo: "020106", detalle: "Cable HDMI", modelo: "Sony", unidad: "Mts" },
          { codigo: "020107", detalle: "Monitor", modelo: "LG", unidad: "UN" },
        ].map((item, index) => (
          <div className="col" key={index}>
            <div className="card shadow-sm">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="card-title text-primary fw-bold mb-1">Código: {item.codigo}</h6>
                  <p className="mb-0"><strong>Detalle:</strong> {item.detalle}</p>
                  <p className="mb-0"><strong>Modelo:</strong> {item.modelo}</p>
                  <p className="mb-0"><strong>UN:</strong> {item.unidad}</p>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventario;
