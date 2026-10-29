import { useLanding } from '../../context/LandingContext';
import Content from '../ui/Content';

export default function HeroSection() {
  const { content, heroVideo } = useLanding();
  return <Content node={content.hero}>
    <video className="support-hero-video" src={heroVideo} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
    <div className="support-hero-overlay" aria-hidden="true" />
  </Content>;
}
