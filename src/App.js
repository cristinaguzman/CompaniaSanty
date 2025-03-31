// App.js
import React, { useState, useEffect, useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import classNames from "classnames";

// Componentes comunes
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Páginas
import Dashboard from "./pages/Dashboard";
import Ot from "./pages/Ot";
import Inventario from "./pages/Inventario";
import Comunicaciones from "./pages/Comunicaciones";
import TermsOfUse from "./pages/TermsOfUse";
import TermsOfUse2 from "./pages/TermsOfUse2";
import Privacidad from "./pages/Privacidad";
import Login from "./pages/Login";
import Mapa from "./pages/Mapa";
import OrdenDetalle from "./pages/OrdenDetalle";
import EnRuta from "./pages/EnRuta";
import Form from "./pages/Form"; // 👈 nueva importación

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const isAuthPage = useMemo(() => location.pathname === "/Login", [location.pathname]);

  useEffect(() => {
    if (isSidebarOpen) setIsSidebarOpen(false);
  }, [location.pathname]);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="d-flex flex-column min-vh-100">
      {!isAuthPage && (
        <ProtectedLayout isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}

      <main
        className={classNames("flex-grow-1 p-3 mt-2 content-area", {
          "d-flex justify-content-center align-items-center": isAuthPage,
        })}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Ot" element={<Ot />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/comunicaciones" element={<Comunicaciones />} />
          <Route path="/TermsOfUse" element={<TermsOfUse />} />
          <Route path="/TermsOfUse2" element={<TermsOfUse2 />} />
          <Route path="/Privacidad" element={<Privacidad />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/orden/:id" element={<OrdenDetalle />} />
          <Route path="/en-ruta/:id" element={<EnRuta />} />
          <Route path="/formulario/:id" element={<Form />} /> {/* ✅ nueva ruta */}
        </Routes>
      </main>

      {!isAuthPage && <Footer />}
    </div>
  );
};

const ProtectedLayout = ({ isSidebarOpen, toggleSidebar }) => (
  <>
    <Navbar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
  </>
);

export default App;
