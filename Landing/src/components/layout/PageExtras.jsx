import Content from '../ui/Content';
import Modal from '../ui/Modal';
import { useLanding } from '../../context/LandingContext';
export default function PageExtras() {
  const { content } = useLanding();
  return <>
    {['mobile-cta', 'svg-definitions'].map(key => <Content key={key} node={content.layout[key]} />)}
    <Modal />
  </>;
}
