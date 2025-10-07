import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // renderiza um componente react na tela, chamado App
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
