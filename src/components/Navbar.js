import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ isOpen, toggleSidebar }) => {
  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-3">
      <div className="container-fluid d-flex justify-content-between">
        <span className="navbar-brand d-flex align-items-center">
          <img
            src="https://i.ibb.co/b5pGpmkF/logoazul1.png"
            alt="Logo"
            className="me-2"
            style={{ width: "100px" }}
          />
         
        </span>
        <button className="btn btn-outline-white border-0" onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;