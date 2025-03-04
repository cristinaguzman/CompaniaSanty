import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Comunicaciones = () => {
  const mensajes = [
    {
      id: 1,
      titulo: "Informativo General",
      contenido:
        "Se les recomienda pensar antes de actuar, si no tienen tiempo para pensar, actúen, pero piensen mientras actúan.",
      autor: "Juan Mateluna",
      fecha: "29-10-24 a las 10:47",
      color: "primary",
    },
    {
      id: 2,
      titulo: "Conducir a la Preventiva",
      contenido:
        "Se pronostican lluvias en la región metropolitana, conduzcan con precaución y mantengan distancia prudente.",
      autor: "Wladimir Soto",
      fecha: "29-10-24 a las 10:47",
      color: "warning",
    },
  ];

  return (
    <main className="container-fluid py-1 mt-1">
      {/* Sección de Mensajes */}
      <section className="mt-4">
        <div className="row row-cols-1 row-cols-md-2 g-5">
          {mensajes.map((mensaje) => (
            <div className="col" key={mensaje.id}>
              <div className={`card border-start border-${mensaje.color} shadow-sm`}>
                <div className="card-body">
                  <h6 className={`card-title text-${mensaje.color}`}>{mensaje.titulo}</h6>
                  <p className="card-text">{mensaje.contenido}</p>
                  <small className="text-muted">
                    Creado por {mensaje.autor} - Publicado el {mensaje.fecha}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Paginación */}
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link">1</button>
          </li>
          <li className="page-item">
            <button className="page-link">2</button>
          </li>
          <li className="page-item">
            <button className="page-link">3</button>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Comunicaciones;
