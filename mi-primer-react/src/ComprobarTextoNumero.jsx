import { useState } from "react";
import "./App.css";

function App() {

  const [texto1, setTexto1] = useState("");
  const [texto2, setTexto2] = useState("");
  const [focusMsg, setFocusMsg] = useState("Nada");

  // manejar texto1
  const manejarCambio1 = (e) => setTexto1(e.target.value);

  // manejar texto2
  const manejarCambio2 = (e) => setTexto2(e.target.value);

  // manejar focus y blur
  const manejarFocus1 = () => setFocusMsg("Input uno");
  const manejarFocus2 = () => setFocusMsg("Input dos");
  const manejarBlur1 = () => setFocusMsg("Nada");
  const manejarBlur2 = () => setFocusMsg("Nada");
 
  const mayusculaMinuscula = (e) => {
    // le ponemos para cambiar a mayuscula o minuscala segun el caso
    if (e.ctrlKey && e.key === "m") {
    setTexto1(texto1.toUpperCase());
  }
 
  else if (e.ctrlKey && e.key === "ñ") {
    setTexto1(texto1.toLowerCase());
  }
  }


  // keydown para el numero 
  const manejarKeyDown2 = (e) => {
    if (e.key === "ArrowUp") {
      const valorActual = parseInt(texto2, 10);
      if (!isNaN(valorActual)) {
        setTexto2((valorActual + 1).toString());
      } else {
        // empezo desde el 1 por si acaso
        setTexto2("1");
      }
    } else if (e.key === "ArrowDown") {
      const valorActual = parseInt(texto2, 10);
      if (!isNaN(valorActual)) {
        setTexto2((valorActual - 1).toString());
      } else {
        // empezo desde el 1 por si acaso
        setTexto2("1");
      }
    }
  };

  // alerta texto1
  const mostrarAlerta = () => {
    if (texto1.trim() === "") {
      alert("El campo está vacío");
      return;
    }

// comprobacion del numero, con trim para que no de problemas
    if (Number.isNaN(Number(texto1)) || texto1.trim() === "") {
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
        onBlur={manejarBlur1}
        onKeyDown={mayusculaMinuscula}
        placeholder="Escribe algo..."
      />
      <br />
      <input
        type="text"
        value={texto2}
        onChange={manejarCambio2}
        onFocus={manejarFocus2}
        onBlur={manejarBlur2}
        onKeyDown={manejarKeyDown2}
        placeholder="Escribe un numero..."
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