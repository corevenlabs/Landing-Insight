import Content from '../ui/Content';
import { useLanding } from '../../context/LandingContext';

export default function HowItWorksSection() {
  const { content } = useLanding();
  return <Content node={content.sections.HowItWorksSection} />;
}
