import React, { useState, useEffect } from 'react';
import './DigimonSearch.css';

const DigimonSearch = () => {
  const [digimons, setDigimons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDigimons, setFilteredDigimons] = useState([]);
  const [selectedDigimon, setSelectedDigimon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // cargar todos los Digimons al inicio
  useEffect(() => {
    const fetchAllDigimons = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://digi-api.com/api/v1/digimon');
        const data = await response.json();
        setDigimons(data.content);
        setFilteredDigimons(data.content);
      } catch (err) {
        setError('Error al cargar los Digimons');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllDigimons();
  }, []);

  // buscar entre todos los digimons segun el texto
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredDigimons(digimons);
    } else {
      const filtered = digimons.filter(digimon =>
        digimon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredDigimons(filtered);
    }
  }, [searchTerm, digimons]);

  // función para obtener detalles de un Digimon específico por ID, usar async
  const fetchDigimonDetails = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`https://digi-api.com/api/v1/digimon/${id}`);
      const data = await response.json();
      setSelectedDigimon(data);
    } catch (err) {
      setError('Error al cargar los detalles del Digimon');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // función para buscar por nombre exacto
  const searchExactDigimon = async () => {
    if (searchTerm.trim() === '') return;
    
    try {
      setLoading(true);
      const response = await fetch(`https://digi-api.com/api/v1/digimon?name=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();
      
      if (data.content && data.content.length > 0) {
        setFilteredDigimons(data.content);
      } else {
        setFilteredDigimons([]);
      }
    } catch (err) {
      setError('Error en la búsqueda');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchExactDigimon();
  };

  const closeDetails = () => {
    setSelectedDigimon(null);
  };

  if (loading && digimons.length === 0) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando Digimons...</p>
      </div>
    );
  }

  return (
    <div className="digimon-search">
      <header className="header">
        <h1>Buscador de Digimons</h1>
        <p>Encuentra tu Digimon favorito</p>
      </header>

      <form onSubmit={handleSearchSubmit} className="search-form">
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar Digimon por nombre..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button type="submit" className="search-button">
            🔍 Buscar
          </button>
        </div>
      </form>

      {error && (
        <div className="error">
          <p>{error}</p>
          <button onClick={() => setError(null)}>Cerrar</button>
        </div>
      )}

      {selectedDigimon ? (
        <DigimonDetails 
          digimon={selectedDigimon} 
          onClose={closeDetails} 
        />
      ) : (
        <div className="results-container">
          <h2>
            {filteredDigimons.length === 0 && searchTerm 
              ? 'No se encontraron Digimons' 
              : `Digimons (${filteredDigimons.length})`}
          </h2>
          
          {loading && (
            <div className="loading-small">
              <div className="spinner"></div>
            </div>
          )}

          <div className="digimon-grid">
            {filteredDigimons.map(digimon => (
              <div 
                key={digimon.id} 
                className="digimon-card"
                onClick={() => fetchDigimonDetails(digimon.id)}
              >
                <img 
                  src={digimon.image} 
                  alt={digimon.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150x150/4A90E2/FFFFFF?text=Digimon';
                  }}
                />
                <h3>{digimon.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Componente para mostrar los detalles del Digimon
const DigimonDetails = ({ digimon, onClose }) => {
  return (
    <div className="digimon-details">
      <button className="back-button" onClick={onClose}>
        ← Volver a la lista
      </button>
      
      <div className="details-content">
        <div className="details-header">
          <img 
            src={digimon.images?.[0]?.href || digimon.image} 
            alt={digimon.name}
            className="details-image"
          />
          <div className="details-info">
            <h1>{digimon.name}</h1>
            {digimon.xAntibody && <span className="antibody-tag">X-Antibody</span>}
          </div>
        </div>

        <div className="details-grid">
          {digimon.descriptions?.[0]?.description && (
            <div className="detail-section">
              <h3>Descripción</h3>
              <p>{digimon.descriptions.find(desc => desc.language === 'en_us')?.description || digimon.descriptions[0].description}</p>
            </div>
          )}

          {digimon.levels && digimon.levels.length > 0 && (
            <div className="detail-section">
              <h3>Nivel</h3>
              <div className="tags">
                {digimon.levels.map(level => (
                  <span key={level.id} className="tag">{level.level}</span>
                ))}
              </div>
            </div>
          )}

          {digimon.types && digimon.types.length > 0 && (
            <div className="detail-section">
              <h3>Tipos</h3>
              <div className="tags">
                {digimon.types.map(type => (
                  <span key={type.id} className="tag">{type.type}</span>
                ))}
              </div>
            </div>
          )}

          {digimon.attributes && digimon.attributes.length > 0 && (
            <div className="detail-section">
              <h3>Atributos</h3>
              <div className="tags">
                {digimon.attributes.map(attribute => (
                  <span key={attribute.id} className="tag">{attribute.attribute}</span>
                ))}
              </div>
            </div>
          )}

          {digimon.fields && digimon.fields.length > 0 && (
            <div className="detail-section">
              <h3>Campos</h3>
              <div className="fields">
                {digimon.fields.map(field => (
                  <div key={field.id} className="field">
                    <img 
                      src={field.image} 
                      alt={field.field}
                      className="field-image"
                    />
                    <span>{field.field}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DigimonSearch;
