import { createElement } from 'react';

// Preserve the source markup and copy while keeping all content in global state.
export default function Content({ node, children }) {
  if (typeof node === 'string') return node;
  if (!node) return null;
  const props = { ...node.attrs };
  if (props.class) { props.className = props.class; delete props.class; }
  if (props.lang) props.lang = node.attrs.lang;
  if (props.style) {
    props.style = Object.fromEntries(props.style.split(';').filter(Boolean).map(rule => {
      const separator = rule.indexOf(':');
      return [rule.slice(0, separator).trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase()), rule.slice(separator + 1).trim()];
    }));
  }
  if (['img', 'br', 'hr', 'input', 'source'].includes(node.tag)) return createElement(node.tag, props);
  return createElement(node.tag, props, children, node.children?.map((child, index) => <Content key={index} node={child} />));
}
