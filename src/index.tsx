import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';

const element = document.getElementById('root');
const root = createRoot(element!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);