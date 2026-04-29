import "../styles/Politicas.css";

const Politicas = () => {
  const listaPoliticas = [
    {
      titulo: "Calidad",
      icono: "fas fa-award",
      desc: "Cumplimos con los más altos estándares técnicos y resultados duraderos.",
    },
    {
      titulo: "Seguridad Industrial",
      icono: "fas fa-user-shield",
      desc: "Uso obligatorio de EPP y cumplimiento estricto de normas para minimizar riesgos.",
    },
    {
      titulo: "Ética y Cumplimiento",
      icono: "fas fa-balance-scale",
      desc: "Honestidad, transparencia y respeto en todas nuestras relaciones comerciales.",
    },
    {
      titulo: "Atención al Cliente",
      icono: "fas fa-headset",
      desc: "Asesoría clara, soluciones técnicas adecuadas y seguimiento continuo.",
    },
    {
      titulo: "Medio Ambiente",
      icono: "fas fa-leaf",
      desc: "Uso responsable de recursos y manejo adecuado de residuos en cada proyecto.",
    },
    {
      titulo: "Capacitación",
      icono: "fas fa-graduation-cap",
      desc: "Desarrollo profesional constante en nuevas tecnologías y seguridad.",
    },
    {
      titulo: "Entrega Oportuna",
      icono: "fas fa-clock",
      desc: "Mecanismos de planeación que garantizan el cumplimiento de plazos acordados.",
    },
    {
      titulo: "Mejora Continua",
      icono: "fas fa-sync-alt",
      desc: "Innovación constante para optimizar procesos y competitividad.",
    },
    {
      titulo: "Responsabilidad Social",
      icono: "fas fa-users",
      desc: "Generamos bienestar para colaboradores, familias y la comunidad.",
    },
    {
      titulo: "Confidencialidad",
      icono: "fas fa-lock",
      desc: "Resguardo absoluto de información técnica y operativa de nuestros clientes.",
    },
  ];

  return (
    <section className="politicas" id="politicas">
      <div className="politicas-container">
        <div className="section-header">
          <span className="subtitle">Compromiso Institucional</span>
          <h2 className="title">Nuestras Políticas</h2>
          <div className="u-line"></div>
        </div>

        <div className="politicas-grid">
          {listaPoliticas.map((p, index) => (
            <div className="politica-item" key={index}>
              <div className="politica-icon">
                <i className={p.icono}></i>
              </div>
              <div className="politica-info">
                <h4>{p.titulo}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Politicas;
