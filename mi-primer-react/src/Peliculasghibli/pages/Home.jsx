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
          <li key={f.id} style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
            <Link to={`/film/${f.id}`} style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#2e3a59" }}>
              {/* aqui iria la imagen de la peli */}
              <img 
                src={f.image}  
                alt={f.title}
                style={{ width: "60px", height: "auto", marginRight: "15px", borderRadius: "8px" }} 
              />
              <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {f.title} {/* aqui iria eltitulo de la peli */}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
