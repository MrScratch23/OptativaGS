import { useState, useEffect } from "react";
import "./App.css";

function App() {
    // estado para la hora actual
  const [hora, setHora] = useState("");

   // estado para el color de fondo (día/noche)
  const [colorFondo, setColorFondo] = useState("lightyellow");

  // estado para la alarma activada
  const [alarmaActiva, setAlarmaActiva] = useState(false);

  // funcion para obtener la hora segun los milisegundos, transformandolos
  const obtenerHora = () => {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");
    const segundos = String(ahora.getSeconds()).padStart(2, "0");
    return `${horas}:${minutos}:${segundos}`;
  };

  // useEffect: actualiza la hora cada segundo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(obtenerHora());
    }, 1000);
   // TODO: crea un intervalo que actualice la hora cada segundo
    // recuerda limpiar el intervalo cuando se desmonte el componente
    return () => clearInterval(intervalo);
  }, []);

  // useEffect: cambia el color de fondo según la hora
  useEffect(() => {
    const horaActual = parseInt(hora.slice(0, 2), 10);
    // TODO: si la hora está entre 6:00 y 18:00 -> lightyellow
    // si está entre 18:00 y 6:00 -> darkblue

    if (horaActual >= 6 && horaActual < 18) {
      setColorFondo("lightyellow"); 
    } else {
      setColorFondo("darkblue"); 
    }
  }, [hora]);

  // useEffect: comprueba la alarma
  useEffect(() => {
    if (!alarmaActiva) return;
     // TODO: si la hora coincide con la alarma, mostrar mensaje en consola y en pantalla
// cambie la hora a 18 para probar que funcionaba

    if (hora === "18:00:00") {
      console.log("¡ALARMA, ALARMA");

    }
  }, [hora, alarmaActiva]);

  return (
    <div style={{ backgroundColor: colorFondo, paddingTop: "50px", minHeight: "100vh", color: colorFondo === "darkblue" ? "white" : "black", textAlign: "center" }}>
      <h1>Reloj digital</h1>
      <h2>{hora}</h2>

      <button onClick={() => setAlarmaActiva(!alarmaActiva)}>
        {alarmaActiva ? "Desactivar alarma" : "Activar alarma"}
      </button>

       {/* Mensaje de alarma */}
      {(alarmaActiva && hora === "18:00:00") ? <h3>¡Alarma activada!</h3> : null}
    </div>
  );
 
}

export default App;
