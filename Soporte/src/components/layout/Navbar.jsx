import { useLanding } from '../../context/LandingContext';
import Content from '../ui/Content';

export default function Navbar() {
  const { content } = useLanding();
  return <Content node={content.navbar} />;
}
