import { useLanding } from '../../context/LandingContext';
import Content from '../ui/Content';

export default function Footer() {
  const { content } = useLanding();
  return <Content node={content.footer} />;
}
