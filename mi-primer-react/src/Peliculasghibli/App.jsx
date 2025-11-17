import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Detalle from "./pages/Detalle";
import Favoritos from "./pages/Favoritos";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/film/:id" element={<Detalle />} /> 
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
