import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const nombre = "Rubén";
  const edad = 23;  
  const a = 10;
  const b = 5;
  let mensaje = "";

  const usuario = {
    nombre: "Rubén",
    edad: 29,
    ciudad: "Sevilla",
    foto: "https://cdn.shopify.com/s/files/1/0747/5317/9944/files/Il-Capitano.jpg?v=1739325236"
  };

  if (edad >= 18) {
    mensaje = "Mayor de edad";
  } else {
    mensaje = "No soy mayor de edad";
  }

  return (
    
    <div class="presentacion">
      <img src={usuario.foto} alt="foto de usuario" class="foto" />
      <div class="info">
        <p>Hola {usuario.nombre}.</p>
        <p>Tienes {usuario.edad} años, tío joven.</p>
        <p>Eres {mensaje}.</p>

      </div>
    </div>

    
  );
}

export default App;
