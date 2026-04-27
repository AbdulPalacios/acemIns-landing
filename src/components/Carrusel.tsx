import "../styles/Carrusel.css";

const imagenesGlob = import.meta.glob("../assets/uploads/*.png", {
  eager: true,
  import: "default",
});

const listaImagenes = Object.values(imagenesGlob) as string[];

const Carrusel = () => {
  const cantidad = listaImagenes.length;

  return (
    <div
      className="carousel-container"
      style={{ "--cantidad-imagenes": cantidad } as React.CSSProperties}
    >
      <div className="carousel-track">
        {listaImagenes.map((ruta, index) => (
          <div className="carousel-item" key={`orig-${index}`}>
            <img src={ruta} alt={`Socio ${index}`} />
          </div>
        ))}

        {listaImagenes.map((ruta, index) => (
          <div className="carousel-item" key={`clone-${index}`}>
            <img src={ruta} alt={`Socio-clone ${index}`} />
          </div>
        ))}

        {listaImagenes.map((ruta, index) => (
          <div className="carousel-item" key={`clone-${index}`}>
            <img src={ruta} alt={`Socio-clone ${index}`} />
          </div>
        ))}

        {listaImagenes.map((ruta, index) => (
          <div className="carousel-item" key={`clone-${index}`}>
            <img src={ruta} alt={`Socio-clone ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
