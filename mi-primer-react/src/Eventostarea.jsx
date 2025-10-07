import { useState } from "react";
import "./App.css";

function App() {

  const [texto1, setTexto1] = useState("");
  const [texto2, setTexto2] = useState("");
  const [focusMsg, setFocusMsg] = useState("");

  // manejar texto1
  const manejarCambio1 = (e) => setTexto1(e.target.value);

  // manejar texto2
  const manejarCambio2 = (e) => setTexto2(e.target.value);
  const manejarFocus1 = () => setFocusMsg("Input uno");
  const manejarFocus2 = () => setFocusMsg("Input dos");

  // alerta texto1
  const mostrarAlerta = () => {
    if (texto1.trim() === "") {
      alert("El campo está vacío");
      return;
    }

    if (isNaN(texto1)) {
      alert("No es un número");
    } else {
      alert("El número ingresado es: " + texto1);
    }
  };

  return (
    <div id="principal">
      <h1>Tarea</h1>

      <input
        type="text"
        value={texto1}
        onChange={manejarCambio1}
        onFocus={manejarFocus1}
        placeholder="Escribe algo..."
      />
      <br />
      <input
        type="text"
        value={texto2}
        onChange={manejarCambio2}
        onFocus={manejarFocus2}
        placeholder="Escribe algo..."
      />

      <button onClick={mostrarAlerta}>
        Comprobar
      </button>

      <p>Texto actual: {texto1}{texto2}</p>

      <p>Foco en: {focusMsg}</p>

    </div>
  );
}

export default App;
