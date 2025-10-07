import { useState } from 'react';
import './App.css';

function App() {
    const [tarea, setTarea] = useState("");
    const [lista, setLista] = useState ([]);

    const agregarTarea = (e) => {
        e.preventDefault();
    
    }


    const eliminarTarea = (indice) => {


    }
}

return (

<div>
    <h1>Lista de tareas</h1>

<form onSubmit="{agregar tarea}">

<input type="text" value={tarea}
onChange={(e) => setTarea(e.target.value)}
placeholder="Escribe una tarea"
/>
<button type='submit'>Añadir Tarea</button>

</form>

<ul>
    {lista.map((t,i) =>(
        <li key={i}>{t}</li>

    ))}
</ul>

</div>



)
