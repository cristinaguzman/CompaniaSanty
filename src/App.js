import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Inventario from "./pages/Inventario";
import Comunicaciones from "./pages/Comunicaciones";
import TermsOfUse from "./pages/TermsOfUse";
import Login from "./pages/Login";
import Mapa from "./pages/Mapa";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Alternar Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Cierra el Sidebar al cambiar de ruta
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <Navbar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Overlay cuando el Sidebar está abierto */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* Contenido principal */}
      <main className="flex-grow-1 p-3 mt-2 content-area">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/comunicaciones" element={<Comunicaciones />} />
          <Route path="/TermsOfUse" element={<TermsOfUse />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
