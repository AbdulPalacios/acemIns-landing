import { useState } from "react";
import logo from "../assets/acemins-logo-white-removebg-preview.png";
import "../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="ACEM INS SA DE CV" />
        </div>

        <button
          className={`menu ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          <li>
            <a href="#inicio" onClick={() => setIsOpen(false)}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#acerca-de" onClick={() => setIsOpen(false)}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#mision" onClick={() => setIsOpen(false)}>
              Mision
            </a>
          </li>
          <li>
            <a href="#especialidades" onClick={() => setIsOpen(false)}>
              Especialidades
            </a>
          </li>
          <li>
            <a href="#politicas" onClick={() => setIsOpen(false)}>
              Politicas
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
