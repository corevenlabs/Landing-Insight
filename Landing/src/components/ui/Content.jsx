import { createElement } from 'react';
import HeroBackground from './HeroBackground';
import PhoneMockup from './PhoneMockup';
import LanguageSelector from './LanguageSelector';
import { useLanding } from '../../context/LandingContext';

// Shared content blocks preserve the reference markup and SVGs without injecting HTML.
const attributeNames = { class: 'className', tabindex: 'tabIndex', fetchpriority: 'fetchPriority',
  viewbox: 'viewBox', 'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin', 'fill-rule': 'fillRule', 'clip-rule': 'clipRule' };
const booleanAttributes = new Set(['hidden', 'disabled', 'open']);

export default function Content({ node }) {
  const state = useLanding();
  if (typeof node === 'string') return node;
  if (!node) return null;
  const { tag, attrs = {}, children = [] } = node;
  if (attrs.class?.split(' ').includes('header-cta')) return <LanguageSelector />;
  if (attrs.class === 'hero-photo') return <HeroBackground />;
  if (attrs.class?.split(' ').includes('phone')) return <PhoneMockup node={node} />;
  const props = {};
  for (const [name, value] of Object.entries(attrs)) {
    if (name === 'style' || name.startsWith('on')) continue;
    props[attributeNames[name] || name] = booleanAttributes.has(name) ? true : (value ?? '');
  }
  if (props.src?.startsWith('assets/')) props.src = `/${props.src}`;
  if (props.href?.startsWith('assets/')) props.href = `/${props.href}`;
  if (props.className === 'menu-toggle') {
    props['aria-expanded'] = state.menuOpen;
    props['aria-label'] = state.t(state.menuOpen ? 'Cerrar menú' : 'Abrir menú');
    props.onClick = () => state.setMenuOpen(open => !open);
  }
  if (props.id === 'mobile-menu') props.hidden = !state.menuOpen;
  if (tag === 'a') props.onClick = () => state.setMenuOpen(false);
  if (attrs['data-feature']) {
    props['aria-pressed'] = state.feature === attrs['data-feature'];
    props.onClick = () => state.setFeature(attrs['data-feature']);
  }
  if (attrs['data-prompt']) {
    props['aria-pressed'] = state.prompt === attrs['data-prompt'];
    props.onClick = () => state.setPrompt(attrs['data-prompt']);
  }
  if (attrs['data-benefit'] || 'data-conditions' in attrs) {
    props.onClick = () => state.setModal({ type: 'benefit', key: attrs['data-benefit'] || 'conditions' });
  }
  if (attrs['data-preview']) props.onClick = () => state.setModal({ type: 'screen', src: `/${attrs['data-preview']}` });
  if (tag === 'button') props.type = 'button';
  if (props.className === 'reading-progress') props.style = { width: `${state.progress}%` };
  if (props.id === 'mobile-cta') props.className += state.stickyVisible ? ' is-visible' : '';
  let renderedChildren = children.map((child, index) => <Content key={index} node={child} />);
  if (props.id === 'feature-note') renderedChildren = state.content.featureNotes[state.feature];
  if (props.id === 'chat-question') renderedChildren = state.content.chatExamples[state.prompt][0];
  if (props.id === 'chat-answer') renderedChildren = state.content.chatExamples[state.prompt][1];
  return createElement(tag, props, children.length ? renderedChildren : undefined);
}
