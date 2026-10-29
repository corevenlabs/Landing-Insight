import Content from '../ui/Content';
import { useLanding } from '../../context/LandingContext';

export default function MembershipSection() {
  const { content } = useLanding();
  return <Content node={content.sections.MembershipSection} />;
}
