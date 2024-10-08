import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'



const root = createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
            <Routes>
                  <Route exact path="/" element={<App />} />
                  {/* Rendre la page 404 en cas d'erreur URL */}
                  {/* <Route exact path="*" element={<NotFound />} /> */}
            </Routes>
      </BrowserRouter>
);