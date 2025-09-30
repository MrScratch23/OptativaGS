import { useState } from 'react';
import './App.css';
import CarnetUsuario from './CarnetUsuario';

function App() {
 

  return (
    
  <div>
    <CarnetUsuario nombre="Rubén" edad={29} ciudad="Sevilla"/>
  </div>

    
  );
}

export default App;