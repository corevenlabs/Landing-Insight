import Content from '../ui/Content';
import { useLanding } from '../../context/LandingContext';

export default function StatementSection() {
  const { content } = useLanding();
  return <Content node={content.sections.StatementSection} />;
}
