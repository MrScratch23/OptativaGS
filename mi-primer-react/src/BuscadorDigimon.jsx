import React, { useState } from "react";
import './App.css';

function App() {
  // almacenar lo del usuario
  const [query, setQuery] = useState(""); 
  // almacenar los resultados
  const [digimons, setDigimons] = useState([]); 
  // manejo de estado de carga
  const [loading, setLoading] = useState(false); 

  const handleSearch = async () => {
    if (!query) return; // Si no hay query, no hacer nada

    setLoading(true); // Comienza el loading

    try {
      // url y buscar el digimon en la pagina
      const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${query}`);
      // hay que convertir la respuesta a Json
      const data = await response.json(); 
      setDigimons(data); // Guarda los resultados de la API
    } catch (error) {
      console.error("No se encontró el Digimon.", error);
      setDigimons([]);
    } finally {
      setLoading(false); // Finaliza el loading
    }
  };

  return (
    <div className="App">
      <h1>Buscador de Digimons</h1>
      <input
        type="text"
        placeholder="Buscar Digimon..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button onClick={handleSearch}>Buscar</button>

      {loading && <p>Cargando...</p>} {/* Muestra un mensaje mientras carga */}

      <div>
        {digimons.length > 0 ? (
          digimons.map((digimon) => (
            <div className="digimon-card" key={digimon.name}>
              <img src={digimon.img} alt={digimon.name} className="digimon-image" />
              <h2>{digimon.name}</h2>
              <p><strong>Nivel:</strong> {digimon.level}</p>
              <p><strong>Atributo(s):</strong> {digimon.attributes ? digimon.attributes.join(", ") : "No disponible"}</p>
              <p><strong>Tipo:</strong> {digimon.type || "Desconocido"}</p>
              <p><strong>Campos:</strong></p>
              <div className="fields">
                {digimon.fields && digimon.fields.map((field) => (
                  <img key={field.id} src={field.image} alt={field.field} className="field-icon" />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron Digimons</p>
        )}
      </div>
    </div>
  );
}

export default App;
