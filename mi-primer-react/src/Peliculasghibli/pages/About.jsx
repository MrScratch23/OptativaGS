function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Sobre la App</h1>
        <div className="about-text">
          <p>
            Esta SPA muestra cómo combinar React Router y consumo de APIs usando la API de Studio Ghibli. 
            Además, incluye la funcionalidad de guardar favoritos usando Zustand.
            Hecho por Rubén Daniel Ternero Molina
          </p>
          <div className="developer-section">
            <div className="developer-card">
              <h3>Desarrollado por</h3>
              <div className="developer-name">
                <span className="name-highlight">Rubén Daniel Ternero Molina</span>
              </div>
              <p className="developer-subtitle">Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;