import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { contentForLanguage, languageForPath, metadata } from '../i18n/support.mjs';

const LandingContext = createContext(null);

export function LandingProvider({ children }) {
  const language = languageForPath(window.location.pathname);
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = metadata[language].title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata[language].description);
  }, [language]);
  const [content, setContent] = useState(() => contentForLanguage(languageForPath(window.location.pathname)));
  const [heroVideo, setHeroVideo] = useState('/videos/hero-sunset-to-night.mp4');
  const value = useMemo(() => ({ content, setContent, heroVideo, setHeroVideo }), [content, heroVideo]);
  return <LandingContext.Provider value={value}>{children}</LandingContext.Provider>;
}

export function useLanding() {
  const context = useContext(LandingContext);
  if (!context) throw new Error('useLanding debe usarse dentro de LandingProvider');
  return context;
}
