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
          <li key={f.id}>
            <Link to={`/film/${f.id}`}>
              <div>
                <img
                  src={f.image}
                  alt={f.title}
                  style={{ width: "100px", height: "150px", objectFit: "cover" }}
                />
                <p>{f.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favoritos;
