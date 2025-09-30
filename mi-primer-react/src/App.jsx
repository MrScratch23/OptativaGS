import { useState } from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState("");

  const cambiarNombre = (e) => {
    e.preventDefault();
    alert("Hola " + nombre);
  };

  return (
    <form onSubmit={cambiarNombre}>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <input type="submit" value="Saludar" />
    </form>
    
  );
  
}

export default App;
