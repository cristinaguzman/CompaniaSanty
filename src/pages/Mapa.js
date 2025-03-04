import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Mapa = () => {
  const ordenesTrabajo = [
    { id: 10201, descripcion: "Revisión cámara - CKO Seguridad SPA" },
    { id: 10203, descripcion: "Cámara adicional - BAQUEDANO 97" },
    { id: 10258, descripcion: "Revisión cámara - IMPRICEN LTDA" }
  ];

  return (
    <main className="container-fluid pt-1">
      <div className="row gy-1">
        {/* Sección del Mapa */}
        <section className="col-12 col-lg-6">
          <div className="map-container" style={{ height: "500px" }}>
            <iframe
              src="https://www.google.com/maps/embed?"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              title="Mapa"
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* Sección de Órdenes de Trabajo */}
        <section className="col-12 col-lg-3">
          <div className="bg-light p-3 rounded shadow-sm">
            <h5 className="text-primary">Órdenes de trabajo</h5>
            <div className="list-group small">
              {ordenesTrabajo.map((orden) => (
                <button key={orden.id} className="list-group-item list-group-item-action">
                  OT {orden.id}: {orden.descripcion}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Mapa;