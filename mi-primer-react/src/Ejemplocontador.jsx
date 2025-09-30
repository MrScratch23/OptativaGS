import { useState } from 'react';
import './App.css';
import CarnetUsuario from './CarnetUsuario';

function App() {
      const [contador, setContador] = useState(0);
 

  return (
    
  <div>
    <p>Contador: {contador}</p>
    <button onClick={() => setContador(contador+1)}>+1</button>
       <button onClick={() => setContador(contador-1)}>-1</button>
          <button onClick={() => setContador(contador=0)}>+0</button>
  </div>

    
  );
}

export default App;