import { useState, useEffect } from "react";
import "./App.css"

function App() {
  // estado del contador
  const [contador, setContador] = useState(0);
  
  // estado para controlar si el contador está en modo automático o no
  const [automatico, setAutomatico] = useState(false);
  
  // estado para el color del fondo
  const [color, setColor] = useState("white");
  
  // useEffect: se ejecuta al montar el componente
  // [] significa que solo se ejecuta una vez, cuando se carga
  // en este caso mostramos un mensaje en la consola del navegador
  useEffect(() => {
    console.log("Componente montado por primera vez");
  }, []);
  
  // useEffect: se ejecuta cuando cambia el contador
  // [contador] significa que cada vez que se actualiza contador, se ejecuta esto
  useEffect(() => {
    console.log(`El contador cambió a: ${contador}`);
  }, [contador]);
  
  // useEffect: contador automático
  // automatico significa que esto solo se ejecutará cuando cambie automático
  useEffect(() => {
    if (!automatico) return; // si no está activado, no hacemos nada
    const timer = setInterval(() => {
      setContador((prev) => prev + 1); // cada segundo aumenta en 1
    }, 1000);
    // limpieza del efecto: se ejecuta al cambiar automatico
    return () => {
      clearInterval(timer);
      console.log("Contador automático detenido");
    };
  }, [automatico]);

  // useEffect: cambio de color según el valor del contador
  // [contador] significa que cada vez que se actualiza contador, se ejecuta esto
  useEffect(() => {
    if (contador < 5) setColor("lightgreen");
    else if (contador < 10) setColor("lightblue");
    else setColor("lightcoral");
  }, [contador]);

  return (
    <div style={{ backgroundColor: color }}>
      <h1>Ejemplo de useEffect</h1>
      <h2>Contador: {contador}</h2>

      <div>
        <button onClick={() => setContador(contador + 1)}>+1</button>
        <button onClick={() => setContador(contador - 1)}>-1</button>
        <button onClick={() => setContador(0)}>Reiniciar</button>
      </div>

      <div>
        <button onClick={() => setAutomatico(!automatico)}>{automatico ? "Detener automático" : "Iniciar automático"}</button>
      </div>
    </div>
  );
}

export default App;