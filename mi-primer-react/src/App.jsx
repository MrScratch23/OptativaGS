import { useState } from 'react';
import './App.css';

function App() {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  const agregarTarea = (e) => {
    e.preventDefault();

    // con trim para que no se meta ninguna vacía
    if (tarea.trim() === "") return;

    // agregar a la lista usando corchetes y los puntos suspensivos delante para que este primero
    setLista([...lista, tarea.trim()]); 

    // limpia el input para que se vuelva a poner en blanco
    setTarea("");
  }; 

  // elimina la tarea por indice
  const eliminarTarea = (indice) => {
  const nuevaLista = [];
  // usamos for each para recorrer
  lista.forEach((lista, i) => {
    // si es diferente, la añadimos
    if (i !== indice) {
      nuevaLista.push(lista);
    }
  });

  setLista(nuevaLista);
};


  return (
    <div>
      <h1>Lista de tareas</h1>

      <form onSubmit={agregarTarea}>
        <input
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          placeholder="Escribe una tarea"
        />
        <button type="submit">Añadir Tarea</button>
      </form>

      <ul>
        {lista.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => eliminarTarea(i)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
