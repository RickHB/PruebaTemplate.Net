import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import MyRouter from "../src/Router/Router"

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRouter/>
  </React.StrictMode>
);