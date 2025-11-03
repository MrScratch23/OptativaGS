import { useState } from "react";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const buscarPokemon = async (e) => {
    e.preventDefault();

    if (nombre.trim() === "") {
      setError("Por favor, escribe un nombre de Pokémon");
      setPokemon(null);
      return;
    }

    try {
      setError(null);
      setCargando(true);
      setPokemon(null);

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);
      if (!response.ok) throw new Error("Pokémon no encontrado");

      const pokemonInfo = await response.json();
      setPokemon(pokemonInfo);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div>
      {/* reemplace el h1 con un font de pokemon que se vea mejor */}
      <a href="https://fontmeme.com/es/fuente-pokemon/">
        <img 
          src="https://fontmeme.com/permalink/251103/08dd0b3c911d9b8fe9a9902e509dcaff.png" 
          alt="fuente-pokemon" 
          border="0" 
        />
      </a>

      <form onSubmit={buscarPokemon} className="formulario">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe un nombre (ej: ditto)"
        />
        <button type="submit">Buscar</button>
      </form>

      {cargando && <p className="mensaje">Cargando datos...</p>}
      {error && <p className="error">{error}</p>}

      {pokemon && (
        <div>
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width="200"
            height="200"
          />
          <p><strong>Tipo:</strong> {pokemon.types.map((tipo) => tipo.type.name).join(", ")}</p>
          <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
          <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
          
          <h3>Estadísticas:</h3>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                <strong>{stat.stat.name.replace("-", " ").toUpperCase()}:</strong> {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
