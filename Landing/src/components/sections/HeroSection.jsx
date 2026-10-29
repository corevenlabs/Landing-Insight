import Content from '../ui/Content';
import { useLanding } from '../../context/LandingContext';

export default function HeroSection() {
  const { content } = useLanding();
  return <Content node={content.sections.HeroSection} />;
}
