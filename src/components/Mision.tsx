import "../styles/Mision.css";

const Mision = () => {
  const pilares = [
    {
      id: "mision",
      titulo: "Misión",
      texto:
        "Brindar confianza y satisfacción mediante trabajos eléctricos, mecánicos y de automatización con calidad, seguridad y responsabilidad ambiental, asegurando un futuro estable para nuestro equipo.",
      icono: "fa-solid fa-bullseye",
      color: "var(--primary-blue)",
    },
    {
      id: "vision",
      titulo: "Visión",
      texto:
        "Ser una empresa competitiva a nivel nacional, destacando por innovación y capacidad técnica, siendo aliados estratégicos que impulsan el crecimiento personal y profesional de nuestra gente.",
      icono: "fas fa-eye",
      color: "var(--navy)",
    },
    {
      id: "filosofia",
      titulo: "Filosofía",
      texto:
        "Atendemos con personal responsable, honesto y calificado. Nuestro compromiso es la entrega con la más alta calidad y puntualidad, bases de una relación de confianza duradera.",
      icono: "fas fa-handshake",
      color: "var(--dark-slate)",
    },
  ];

  return (
    <section className="mision-vision">
      <div className="mision-container">
        <div className="mision-grid">
          {pilares.map((pilar) => (
            <div className="pilar-card" key={pilar.id}>
              <div
                className="pilar-icon"
                style={{ backgroundColor: pilar.color }}
              >
                <i className={pilar.icono}></i>
              </div>
              <h3 style={{ color: pilar.color }}>{pilar.titulo}</h3>
              <p>{pilar.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mision;
