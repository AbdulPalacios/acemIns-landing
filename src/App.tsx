import "./styles/App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Carrusel from "./components/Carrusel";
import AboutUs from "./components/AboutUs";
import Mision from "./components/Mision";
import Especialidades from "./components/Especialidades";
import Politicas from "./components/Politicas";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Carrusel />
      <AboutUs />
      <Mision />
      <Especialidades />
      <Politicas />
      <Footer />
    </div>
  );
}

export default App;
