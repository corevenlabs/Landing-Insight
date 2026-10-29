import Content from '../ui/Content';
import { useLanding } from '../../context/LandingContext';

export default function ClosingSection() {
  const { content } = useLanding();
  return <Content node={content.sections.ClosingSection} />;
}
