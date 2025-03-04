import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaClipboardList, FaCheckCircle, FaExclamationTriangle, FaTools, FaTimesCircle, FaFlag } from "react-icons/fa";



const Dashboard = () => {
  return (
    <div className="container mt-1" >
      <h5 className="text-center fw-bold">OTL POR ESTADO</h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        <div className="col">
          <div className="card border-primary text-center p-3">
            <FaClipboardList className="fs-5 text-primary" />
            <div className="fw-semibold text-primary fs-6">Por ingresar: <strong>20</strong></div>
          </div>
        </div>
        <div className="col">
          <div className="card border-success text-center p-3">
            <FaCheckCircle className="fs-5 text-success" />
            <div className="fw-semibold text-success fs-6">Ingresado: <strong>15</strong></div>
          </div>
        </div>
        <div className="col">
          <div className="card border-warning text-center p-3">
            <FaExclamationTriangle className="fs-5 text-warning" />
            <div className="fw-semibold text-warning fs-6">Diagnóstico: <strong>2</strong></div>
          </div>
        </div>
        <div className="col">
          <div className="card border-secondary text-center p-3">
            <FaTools className="fs-5 text-secondary" />
            <div className="fw-semibold text-secondary fs-6">Reparación: <strong>1</strong></div>
          </div>
        </div>
        <div className="col">
          <div className="card border-dark text-center p-3">
            <FaCheckCircle className="fs-5 text-secondary" />
            <div className="fw-semibold text-secondary fs-6">Prueba Final:<strong>0</strong></div>
          </div>
        </div>
        <div className="col">
          <div className="card border-dark text-center p-3">
            <FaFlag className="fs-5 text-dark" />
            <div className="fw-semibold text-dark fs-6">Terminadas:<strong>0</strong></div>
          </div>
        </div>
        <div className="col">
          <div className="card border-danger text-center p-3">
            <FaTimesCircle className="fs-5 text-danger" />
            <div className="fw-semibold text-danger fs-6">Anuladas:<strong>0</strong></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;