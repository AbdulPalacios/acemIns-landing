import "../styles/Hero.css";

const Hero = () => {
  const servicios = [
    {
      nombre: "AUTOMATIZACIÓN",
      icono: "fas fa-robot",
      color: "var(--primary-blue)",
    },
    { nombre: "CONTROL", icono: "fas fa-cogs", color: "var(--primary-blue)" },
    {
      nombre: "ELECTRICIDAD",
      icono: "fas fa-bolt",
      color: "var(--primary-blue)",
    },
    { nombre: "MECÁNICA", icono: "fas fa-tools", color: "var(--primary-blue)" },
  ];

  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <h1 className="hero-title">Soluciones Integrales de Ingeniería</h1>

        <h3 className="hero-subtitle">Excelencia en ingeniería desde 2002</h3>

        <div className="services-grid">
          {servicios.map((servicio, index) => (
            <div key={index} className="service-item">
              <i
                className={servicio.icono}
                style={{ color: servicio.color }}
              ></i>
              <span className="service-name">{servicio.nombre}</span>
            </div>
          ))}
        </div>

        <p className="hero-quote">
          "No hay secretos para el éxito. Es el resultado de la preparación, el
          trabajo duro y el aprendizaje de los fracasos."
        </p>

        <button className="cta-button" id="#">
          Conozca Nuestros Servicios
        </button>
      </div>
    </section>
  );
};

export default Hero;
