import Content from '../ui/Content';
import { useLanding } from '../../context/LandingContext';

export default function FaqSection() {
  const { content } = useLanding();
  return <Content node={content.sections.FaqSection} />;
}
