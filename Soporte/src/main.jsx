import React from 'react';
import { createRoot } from 'react-dom/client';
import { LandingProvider } from './context/LandingContext';
import SupportView from './views/SupportView';
import './styles/base.css';
import './styles/support.css';
import './styles/overrides.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingProvider><SupportView /></LandingProvider>
  </React.StrictMode>,
);
