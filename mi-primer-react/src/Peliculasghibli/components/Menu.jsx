import { NavLink } from "react-router-dom";

function Menu() {
  const estiloActivo = ({ isActive }) => ({
    color: isActive ? "red" : "black",
    textDecoration: isActive ? "underline" : "none",
    marginRight: "10px",
  });

  return (
    <nav style={{ marginBottom: "20px" }}>
      <NavLink to="/" style={estiloActivo}>
        Inicio
      </NavLink>
      <NavLink to="/favoritos" style={estiloActivo}>
        Favoritos
      </NavLink>
      <NavLink to="/about" style={estiloActivo}>
        Sobre mí
      </NavLink>
    </nav>
  );
}

export default Menu;

