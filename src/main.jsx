import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // ✅ Aquí estás usando TailwindCSS
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
