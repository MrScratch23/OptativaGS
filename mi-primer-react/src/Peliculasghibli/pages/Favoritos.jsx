import { Link } from "react-router-dom";
import { useFavoritosStore } from "../store/useFavoritosStore";

function Favoritos() {
  const { favoritos } = useFavoritosStore();

  if (favoritos.length === 0) {
    return <p>No tienes películas favoritas aún.</p>;
  }

  return (
    <div>
      <h1>Tus películas favoritas</h1>
      <ul>
        {favoritos.map((f) => (
          <li key={f.id} style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
            <Link to={`/film/${f.id}`} style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#2e3a59" }}>
              {/* aqui iria la imagen de la peli */}
              <img
                src={f.imagen}
                alt={f.title}
                style={{
                  width: "100px",
                  height: "150px",
                  objectFit: "cover",
                  marginRight: "15px",
                  borderRadius: "8px"
                }}
              />
              <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {f.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favoritos;
