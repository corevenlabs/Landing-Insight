import Content from '../ui/Content';
import { useLanding } from '../../context/LandingContext';
export default function SiteHeader() {
 const { content } = useLanding();
 return <><Content node={content.layout['skip-link']} /><Content node={content.layout['reading-progress']} /><Content node={content.layout['header']} /></>;
}
