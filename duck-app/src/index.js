// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);