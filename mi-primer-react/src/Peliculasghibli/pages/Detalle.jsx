import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFavoritosStore } from "../store/useFavoritosStore";

function Detalle() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  // hay que importar las funciones
  const { favoritos, agregarFavorito, eliminarFavorito } = useFavoritosStore();

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const res = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
        const data = await res.json();
        setFilm(data);
      } catch (error) {
        console.error("Error al cargar la película:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilm();
  }, [id]);

  if (loading) return <p>Cargando película...</p>;
  if (!film) return <p>No se encontró la película.</p>;

  // si no esta en favoritos, para no repetirla
  const esFavorito = favoritos.some((f) => f.id === film.id);

  const manejarFavorito = () => {
    if (esFavorito) {
      eliminarFavorito(film.id);
    } else {
      agregarFavorito({ id: film.id, title: film.title });
    }
  };

  return (
    <div>
      <h1>{film.title}</h1>
      <img src={film.image} alt={film.title} />
      <p><strong>Director:</strong> {film.director}</p>
      <p><strong>Productor:</strong> {film.producer}</p>
      <p><strong>Año de lanzamiento:</strong> {film.release_date}</p>
      <p><strong>Duración:</strong> {film.running_time} minutos</p>
      <p><strong>Descripción:</strong> {film.description}</p>
      <p><strong>Calificación Rotten Tomatoes:</strong> {film.rt_score}%</p>

      <button onClick={manejarFavorito}>
        {esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
      </button>
    </div>
  );
}

export default Detalle;
