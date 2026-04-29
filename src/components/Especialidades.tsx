import "../styles/Especialidades.css";

const Especialidades = () => {
  const servicios = [
    {
      categoria: "Automatización",
      icono: "fas fa-cog",
      puntos: [
        "Maquinaria industrial",
        "Programación PLC's",
        "Robótica industrial",
      ],
    },
    {
      categoria: "Control",
      icono: "fas fa-sliders-h",
      puntos: [
        "Sistemas de control eléctrico",
        "Cálculo de CCM",
        "Lazos de control PID",
      ],
    },
    {
      categoria: "Mecánica",
      icono: "fas fa-tools",
      puntos: [
        "Montaje de celdas de soldadura",
        "Procesos SMAW, FCAW",
        "MIG-GMAW y TIG-GTAW",
      ],
    },
    {
      categoria: "Construcción",
      icono: "fas fa-building",
      puntos: [
        "Diseño arquitectónico",
        "Instalaciones hidrosanitarias",
        "Herrería y acabados",
      ],
    },
    {
      categoria: "Redes",
      icono: "fas fa-network-wired",
      puntos: [
        "Ethernet, Profinet, Profibus",
        "Instalación de redes",
        "Sistemas de CCTV",
      ],
    },
    {
      categoria: "Electricidad",
      icono: "fas fa-bolt",
      puntos: [
        "Ingeniería de detalle",
        "Subestaciones eléctricas",
        "Calidad de energía",
      ],
    },
  ];

  return (
    <section className="especialidades" id="especialidades">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Nuestras Soluciones</span>
          <h2 className="title">Especialidades Técnicas</h2>
          <div className="u-line"></div>
        </div>

        <div className="especialidades-grid">
          {servicios.map((s, index) => (
            <div className="especialidad-card" key={index}>
              <div className="card-icon">
                <i className={s.icono}></i>
              </div>
              <h3>{s.categoria}</h3>
              <ul>
                {s.puntos.map((punto, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i> {punto}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Especialidades;
