import Content from '../ui/Content';
import { useLanding } from '../../context/LandingContext';
export default function SiteFooter() {
 const { content } = useLanding();
 return <Content node={content.layout['site-footer']} />;
}
