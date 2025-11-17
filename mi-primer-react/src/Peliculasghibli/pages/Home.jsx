import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const res = await fetch("https://ghibliapi.vercel.app/films");
        const data = await res.json();
        setFilms(data);
      } catch (error) {
        console.error("Error al obtener películas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  if (loading) return <p>Cargando películas...</p>;

  return (
    <div>
      <h1>Películas de Studio Ghibli</h1>
      <ul>
        {films.map((f) => (
          <li key={f.id}>
            <Link to={`/film/${f.id}`}>
              {f.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
