import "./styles/App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Carrusel from "./components/Carrusel";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Carrusel />
    </div>
  );
}

export default App;
