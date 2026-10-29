import { createContext, useContext, useMemo, useState } from 'react';
import initialContent from '../data/landing.json';

const LandingContext = createContext(null);

export function LandingProvider({ children }) {
  const [content, setContent] = useState(initialContent);
  const [heroVideo, setHeroVideo] = useState('/videos/hero-sunset-to-night.mp4');
  const value = useMemo(() => ({ content, setContent, heroVideo, setHeroVideo }), [content, heroVideo]);
  return <LandingContext.Provider value={value}>{children}</LandingContext.Provider>;
}

export function useLanding() {
  const context = useContext(LandingContext);
  if (!context) throw new Error('useLanding debe usarse dentro de LandingProvider');
  return context;
}
