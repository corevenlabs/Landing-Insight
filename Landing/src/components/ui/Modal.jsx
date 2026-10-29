import { useEffect, useRef } from 'react';
import Content from './Content';
import { useLanding } from '../../context/LandingContext';

export default function Modal() {
  const { content, modal, setModal } = useLanding();
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    if (modal && !dialog.open) dialog.showModal();
    if (!modal && dialog.open) dialog.close();
  }, [modal]);
  const detail = modal?.type === 'benefit' ? content.benefitDetails[modal.key] : null;
  return <dialog ref={ref} className={modal?.type === 'screen' ? 'screen-dialog' : 'benefit-dialog'}
    aria-label={detail ? undefined : 'Captura de pantalla ampliada'}
    aria-labelledby={detail ? 'dialog-title' : undefined}
    onClose={() => setModal(null)} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setModal(null);
    }}>
    <button type="button" className="dialog-close" aria-label="Cerrar detalle" onClick={() => setModal(null)}>×</button>
    {detail && <><span className="eyebrow">{detail.category}</span><h2 id="dialog-title">{detail.title}</h2>
      <p className="dialog-highlight">{detail.highlight}</p>
      <div><Content node={detail.content} /></div>
      <a className="button" href="#la-app" onClick={() => setModal(null)}>Descubre la app <svg aria-hidden="true"><use href="#arrow-up-right" /></svg></a></>}
    {modal?.type === 'screen' && <img src={modal.src} alt="Captura ampliada de la app Insight The City" />}
  </dialog>;
}

