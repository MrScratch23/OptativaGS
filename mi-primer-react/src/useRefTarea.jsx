import { useState, useRef } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const maximo = useRef(0); 

  const aumentar = () => {
    const nuevoValor = contador + 1;
    setContador(nuevoValor);
    // TODO: comprobar si el nuevo valor es mayor que el máximo, en cuyo caso habrá que actualizarlo

      if (nuevoValor > maximo.current) {
        maximo.current = nuevoValor;
        
      }
  };

  const reiniciar = () => {
    // TODO: poner el contador a 0
    setContador (0);
  };

  const mostrarMaximo = () => {
    // TODO: mostrar el valor máximo (con alert o por consola, como prefieras)
    console.log(`El contador maximo es: ${maximo.current}`);
  };

  return (
    <div>
      <h1>Contador con historial oculto</h1>

      <p>Contador actual: {contador}</p>

      <button onClick={aumentar}>Aumentar</button>
      <button onClick={reiniciar}>Reiniciar</button>
      <button onClick={mostrarMaximo}>Mostrar máximo</button>
    </div>
  );
}

export default App;
