import React from 'react';
import { createRoot } from 'react-dom/client';
import { LandingProvider } from './context/LandingContext';
import ReferenceLandingView from './views/landing/ReferenceLandingView';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode><LandingProvider><ReferenceLandingView /></LandingProvider></React.StrictMode>
);
