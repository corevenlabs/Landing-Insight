import { useEffect, useRef, useState } from 'react';
import { useLanding } from '../../context/LandingContext';

export default function HeroBackground() {
  const { content } = useLanding();
  const video = useRef(null);
  const pausedByUser = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = video.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = true;
    const sync = () => {
      if (visible && !document.hidden && !motion.matches && !pausedByUser.current) {
        element.play().catch(() => setPlaying(false));
      } else element.pause();
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(element);
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    sync();
    return () => {
      observer.disconnect();
      element.pause();
      motion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
    };
  }, []);

  const toggle = () => {
    const element = video.current;
    pausedByUser.current = !element.paused;
    if (element.paused) element.play().catch(() => setPlaying(false));
    else element.pause();
  };

  return <>
    <div className="hero-photo" aria-hidden="true">
      <video ref={video} className="hero-video" src={content.heroBackground.src}
        poster={content.heroBackground.poster} muted loop playsInline preload="metadata" tabIndex={-1}
        hidden={failed} onError={() => setFailed(true)}
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
    </div>
    {!failed && <button type="button" className="hero-video-toggle" onClick={toggle}
      aria-label={playing ? 'Pausar video de fondo' : 'Reproducir video de fondo'}>
      {playing ? 'Pausar video' : 'Reproducir video'}
    </button>}
  </>;
}
