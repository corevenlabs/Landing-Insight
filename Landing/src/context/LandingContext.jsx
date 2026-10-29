import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import landing from '../data/landing.json';
import featureNotes from '../data/featureNotes.json';
import chatExamples from '../data/chatExamples.json';
import benefitDetails from '../data/benefitDetails.json';

const LandingContext = createContext(null);
const initialContent = { ...landing, featureNotes, chatExamples, benefitDetails };

export function LandingProvider({ children }) {
  const [content, setContent] = useState(initialContent);
  const [menuOpen, setMenuOpen] = useState(false);
  const [feature, setFeature] = useState('descubre');
  const [prompt, setPrompt] = useState('pareja');
  const [modal, setModal] = useState(null);
  const [progress, setProgress] = useState(0);
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    let frame;
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(100, window.scrollY / height * 100) : 0);
    };
    const scroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    const escape = event => { if (event.key === 'Escape') setMenuOpen(false); };
    const media = window.matchMedia('(min-width: 701px)');
    const resize = event => { if (event.matches) setMenuOpen(false); };
    const visibility = new Map();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => visibility.set(entry.target.id, entry.isIntersecting));
      setStickyVisible(![...visibility.values()].some(Boolean));
    });
    ['inicio', 'la-app', 'descubre'].forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    update();
    window.addEventListener('scroll', scroll, { passive: true });
    document.addEventListener('keydown', escape);
    media.addEventListener('change', resize);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', scroll);
      document.removeEventListener('keydown', escape);
      media.removeEventListener('change', resize);
    };
  }, []);

  const value = useMemo(() => ({ content, setContent, menuOpen, setMenuOpen, feature, setFeature,
    prompt, setPrompt, modal, setModal, progress, stickyVisible }),
  [content, menuOpen, feature, prompt, modal, progress, stickyVisible]);
  return <LandingContext.Provider value={value}>{children}</LandingContext.Provider>;
}

export function useLanding() {
  const context = useContext(LandingContext);
  if (!context) throw new Error('useLanding requiere LandingProvider');
  return context;
}
