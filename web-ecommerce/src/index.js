import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // Cambié esto a 'App' porque es donde has configurado las rutas

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Aquí cargamos el componente principal que contiene el enrutamiento */}
  </React.StrictMode>
);
