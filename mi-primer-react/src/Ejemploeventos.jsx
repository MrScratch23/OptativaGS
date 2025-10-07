import { useState } from "react";
import "./App.css"

function App() {

  const [texto, setTexto] = useState("");
  
  
  const [hover, setHover] = useState(false);
  
  
  const [focusMsg, setFocusMsg] = useState("Input fuera de foco");
  
  
  const [divMsg, setDivMsg] = useState("Div inactivo");
  
  

  // Input events
  const manejarCambio = (e) => setTexto(e.target.value);
  
  
  const manejarTecla = (e) => {
    if (e.key === "Escape") setTexto("");
    if (e.ctrlKey && e.key === "m") setTexto((t) => t.toUpperCase());
    if (e.ctrlKey && e.key === "ñ") setTexto((t) => t.toLowerCase());
  };

  const manejarFocus = () => setFocusMsg("Input activo");
  
  
  const manejarBlur = () => setFocusMsg("Input fuera de foco");
  
  
  // Botón events
  const mostrarAlerta = () => alert("Contenido actual: " + texto);
  const borrarTexto = () => setTexto("");

  // Div events
  const clickDiv = () => {
    setDivMsg("Hiciste click en el div");
    
    // Después de 2 segundos, vuelve al texto original
    setTimeout(() => {
      setDivMsg("Div inactivo");
    }, 2000);
  };

  return (
    <div id="principal">
      <h1>Ejemplo de eventos en React</h1>
      
      <input type="text"
        value={texto}
        onChange={manejarCambio}
        onKeyDown={manejarTecla}
        onFocus={manejarFocus}
        onBlur={manejarBlur}
        placeholder="Escribe algo..."
      />
      <p>{focusMsg}</p>

      <button onClick={mostrarAlerta}>
        Mostrar contenido
      </button>
      
      <button onDoubleClick={borrarTexto}>
        Doble click para borrar texto
      </button>

      <p>Texto actual: {texto}</p>
      
      <div id="efectos"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={clickDiv}
        style={{backgroundColor: hover ? "lightgreen" : "lightcoral"}}
      >
        Pasa el ratón y haz click
      </div>
      <p>{divMsg}</p>
    </div>
  );
}

export default App;
