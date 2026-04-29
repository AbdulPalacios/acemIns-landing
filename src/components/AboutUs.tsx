import "../styles/AboutUs.css";

const AboutUs = () => {
  const especialidades = [
    {
      titulo: "Diseño y Planos",
      desc: "Construcción eléctrica, mecánica y automatización.",
      icono: "fas fa-drafting-compass",
    },
    {
      titulo: "Ejecución de Obra",
      desc: "Personal altamente calificado para proyectos llave en mano.",
      icono: "fas fa-hard-hat",
    },
    {
      titulo: "Supervisión Técnica",
      desc: "Puesta en marcha y seguimiento riguroso de instalaciones.",
      icono: "fas fa-clipboard-check",
    },
    {
      titulo: "Mantenimiento",
      desc: "Servicios preventivos y correctivos industriales y residenciales.",
      icono: "fas fa-tools",
    },
  ];

  return (
    <section className="about-us" id="acerca-de">
      <div className="about-container">
        <header className="about-header">
          <span className="about-tag">Trayectoria y Confianza</span>
          <h2 className="about-title">ACEM INS S.A. de C.V.</h2>
          <p className="about-intro">
            Empresa tlaxcalteca con más de{" "}
            <strong>20 años de experiencia</strong>. Acompañamos a la industria
            y al sector público con soluciones de calidad, seguridad y
            eficiencia.
          </p>
        </header>

        <div className="about-grid">
          {especialidades.map((item, index) => (
            <div className="about-card" key={index}>
              <div className="icon-box">
                <i className={item.icono}></i>
              </div>
              <h4>{item.titulo}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <footer className="about-footer">
          <p>
            <i className="fas fa-box-open" id="mision"></i> En ACEM INS no solo
            desarrollamos proyectos, también te proveemos de los insumos que
            necesitas para operar día a día.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default AboutUs;
