import Content from '../ui/Content';
import { useLanding } from '../../context/LandingContext';

export default function TickerStrip() {
  const { content } = useLanding();
  return <Content node={content.sections.TickerStrip} />;
}
