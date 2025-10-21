import { useRef } from "react";

function App() {
  const inputRef = useRef(null); // crea una referencia

  const enfocarInput = () => {
    inputRef.current.focus(); // foco en el valor actual (current) de inputRef
  };

  const borrarInput = () => {
    inputRef.current.value = ""; // borra el valor actual (.current) de inputRef
  };

  return (
    <div>
      <h1>Ejemplo simple de useRef</h1>

      <input
        type="text"
        ref={inputRef} // asigna la referencia que hemos creado antes a este input (.current)
      />

      <div>
        <button onClick={enfocarInput}>Enfocar input</button>
        <button onClick={borrarInput}>Borrar input</button>
      </div>
    </div>
  );
}

export default App;
