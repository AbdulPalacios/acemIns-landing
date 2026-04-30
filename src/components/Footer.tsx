import "../styles/Footer.css";
import logo from "../assets/acemins-logo-white-removebg-preview.png";

const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <div className="slogan-placeholder">
            <img src={logo} alt="Logo de ACEM INS" />
          </div>
          <p className="slogan-phrase">Excelencia en ingeniería desde 2002</p>
        </div>
        <div className="footer-section footer-info">
          <h4>Ubicación</h4>
          <p>
            <i className="fas fa-map-marker-alt"></i>
            <span>
              PRIVADA DURAZNO # 10
              <br />
              SANTA CRUZ EL PORVENIR
              <br />
              IXTACUIXTLA, TLAXCALA, C.P. 90120
            </span>
          </p>
        </div>
        <div className="footer-section footer-contact">
          <h4>Contacto Directo</h4>
          <p className="contact-name">
            <i className="fas fa-user-tie"></i>
            FIDEL ALEJANDRO COYOTZI HERNÁNDEZ
          </p>
          <a href="tel:+522481019351" className="contact-link">
            <i className="fas fa-phone-alt"></i>
            +52 248 101 9351
          </a>
          <a
            href="mailto:alejandro.coyotzi@acemins.com"
            className="contact-email"
          >
            <i className="fas fa-envelope"></i>
            alejandro.coyotzi@acemins.com
          </a>
          <a href="mailto:administracion@acemins.com" className="contact-email">
            <i className="fas fa-envelope"></i>
            administracion@acemins.com
          </a>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a
              href="https://www.instagram.com/acem_ins?igsh=YW03bndpYTJkaXQ2"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {anioActual} ACEM INS S.A. de C.V. Todos los derechos
          reservados.
        </p>
        <p className="ubication-text">Tlaxcala, México.</p>
      </div>
    </footer>
  );
};

export default Footer;
