import { useLanding } from '../../context/LandingContext';
import './PhoneMockup.css';

export default function PhoneMockup({ node }) {
  const { setModal } = useLanding();
  const screen = node.children.find(child => child?.attrs?.class === 'phone-screen');
  const image = screen?.children.find(child => child?.tag === 'img');
  const source = `/${image.attrs.src.replace(/^\//, '')}`;

  return <button type="button" className={`${node.attrs.class} iphone-device`}
    aria-label={node.attrs['aria-label']}
    onClick={() => setModal({ type: 'screen', src: source })}>
    <span className="iphone-hardware" aria-hidden="true">
      <span className="iphone-action" />
      <span className="iphone-volume iphone-volume-up" />
      <span className="iphone-volume iphone-volume-down" />
      <span className="iphone-power" />
    </span>
    <span className="phone-screen iphone-display">
      <img src={source} alt={image.attrs.alt} width={image.attrs.width} height={image.attrs.height}
        loading={image.attrs.loading} fetchPriority={image.attrs.fetchpriority} />
      <span className="iphone-island" aria-hidden="true"><span className="iphone-camera" /></span>
      <span className="iphone-glass" aria-hidden="true" />
      <span className="iphone-home" aria-hidden="true" />
    </span>
    <span className="iphone-earpiece" aria-hidden="true" />
  </button>;
}
