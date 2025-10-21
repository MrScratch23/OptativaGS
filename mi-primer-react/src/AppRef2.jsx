import { useState, useRef } from "react";

function App() {
  const [contadorState, setContadorState] = useState(0);
  const contadorRef = useRef(0);

  const aumentarConState = () => {
    setContadorState(contadorState + 1);
  }
  
  const aumentarConRef = () => {
    contadorRef.current += 1;
    console.log("Valor actual del ref:", contadorRef.current); // para que veamos que está aumentando aunque no se renderice, en la consola del navegador (F12 en firefox)
  };

  return (
    <div>
      <h1>Diferencia entre useState y useRef</h1>

      <h3>Contador con useState (re-renderiza): {contadorState}</h3>
      <button onClick={aumentarConState}>Aumentar con useState</button>

      <h3>Contador con useRef (no re-renderiza): {contadorRef.current}</h3>
      <button onClick={aumentarConRef}>Aumentar con useRef</button>

      <p>Abre la consola y mira cómo el ref cambia aunque no se actualice en pantalla.</p>
    </div>
  );
}

export default App;