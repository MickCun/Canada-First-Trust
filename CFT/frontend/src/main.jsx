import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // optional; creates app.css in the build

createRoot(document.getElementById('root')).render(<App />);
