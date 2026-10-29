import { useLanding } from '../../context/LandingContext';
import Content from '../ui/Content';

export function TopicsSection() { const { content } = useLanding(); return <Content node={content.topics} />; }
export function RibbonSection() { const { content } = useLanding(); return <Content node={content.ribbon} />; }
export function FaqSection() { const { content } = useLanding(); return <Content node={content.faq} />; }
export function ContactSection() { const { content } = useLanding(); return <Content node={content.contact} />; }
