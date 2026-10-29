import Content from '../ui/Content';
import { useLanding } from '../../context/LandingContext';

export default function YorkiSection() {
  const { content } = useLanding();
  return <Content node={content.sections.YorkiSection} />;
}
