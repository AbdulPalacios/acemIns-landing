import "./styles/App.css";
import logo from "./assets/acemins-logo-removebg-preview.png";

function App() {
  return (
    <div className="container-proximamente">
      <div className="overlay-industrial"></div>

      <main className="content">
        <div className="logo-container">
          <img src={logo} alt="ACEM INS Logo" className="logo" />
        </div>

        <h1 className="title">
          Automatización <span className="highlight">&</span> Electricidad
        </h1>

        <div className="status-badge">
          <span className="dot"></span>
          Pagina En Construcción
        </div>

        <p className="description">
          Estamos creando nuestra nueva plataforma digital para ofrecer
          soluciones integrales en ingeniería mecánica, control y mantenimiento
          industrial.
        </p>

        <div className="services-icons">
          <div className="icon-item">
            <i className="fa-solid fa-bolt"></i>
            <span>Electricidad</span>
          </div>
          <div className="icon-item">
            <i className="fa-solid fa-microchip"></i>
            <span>Control</span>
          </div>
          <div className="icon-item">
            <i className="fa-solid fa-gears"></i>
            <span>Mecánica</span>
          </div>
        </div>

        <a href="mailto:alejandro.coyotzi@acemins.com" className="btn-contact">
          <i className="fa-solid fa-envelope"></i>
          alejandro.coyotzi@acemins.com
        </a>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} ACEM INS. Tlaxcala, México.
      </footer>
    </div>
  );
}

export default App;
