import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Peliculasghibli/estilo/estilo.css'
import App from './Peliculasghibli/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
