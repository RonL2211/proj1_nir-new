import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // אם יש קובץ CSS כללי
import App from './App'; // רכיב האפליקציה הראשי שלך

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
