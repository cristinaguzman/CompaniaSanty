import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Form = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    descripcion: "",
    prioridad: "",
    fechaHora: "",
    duracionEstimada: "",
    tipoTarea: "",
    cliente: "",
    rut: "",
    direccion: "",
    depto: "",
    comuna: "",
    contactoNombre: "",
    contactoTelefono: "",
    contactoEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const continuar = window.confirm(
      "Usted está fuera de ubicación. Debe estar en el lugar indicado para completar la acción. ¿Desea continuar?"
    );

    if (!continuar) {
      alert("Acción cancelada.");
      return;
    }

    console.log("Datos enviados:", formData);
    alert("Formulario enviado con éxito");
  };

  const handlePauseOrder = () => {
    alert(`Orden #${id} pausada`);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-primary">Formulario para Orden #{id}</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-12">
          <label className="form-label fw-bold">Descripción de la Orden</label>
          <textarea
            className="form-control"
            name="descripcion"
            rows="3"
            value={formData.descripcion}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Prioridad</label>
          <select
            className="form-select"
            name="prioridad"
            value={formData.prioridad}
            onChange={handleChange}
          >
            <option value="">Selecciona</option>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Fecha y Hora</label>
          <input
            type="datetime-local"
            className="form-control"
            name="fechaHora"
            value={formData.fechaHora}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Duración Estimada</label>
          <input
            type="text"
            className="form-control"
            name="duracionEstimada"
            placeholder="Ej: 2 horas"
            value={formData.duracionEstimada}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Tipo de Tarea</label>
          <input
            type="text"
            className="form-control"
            name="tipoTarea"
            value={formData.tipoTarea}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Nombre del Cliente</label>
          <input
            type="text"
            className="form-control"
            name="cliente"
            value={formData.cliente}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">RUT</label>
          <input
            type="text"
            className="form-control"
            name="rut"
            value={formData.rut}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <label className="form-label fw-bold">Dirección</label>
          <input
            type="text"
            className="form-control"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Depto / Oficina</label>
          <input
            type="text"
            className="form-control"
            name="depto"
            value={formData.depto}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Comuna</label>
          <input
            type="text"
            className="form-control"
            name="comuna"
            value={formData.comuna}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Nombre del Contacto</label>
          <input
            type="text"
            className="form-control"
            name="contactoNombre"
            value={formData.contactoNombre}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Teléfono del Contacto</label>
          <input
            type="tel"
            className="form-control"
            name="contactoTelefono"
            value={formData.contactoTelefono}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <label className="form-label fw-bold">Email del Contacto</label>
          <input
            type="email"
            className="form-control"
            name="contactoEmail"
            value={formData.contactoEmail}
            onChange={handleChange}
          />
        </div>

        <div className="col-12 mt-4 d-grid gap-3 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-primary me-md-2">
            Enviar Formulario
          </button>
          <button type="button" className="btn btn-warning" onClick={handlePauseOrder}>
            Pausar Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
