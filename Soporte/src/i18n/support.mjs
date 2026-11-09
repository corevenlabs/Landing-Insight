import initialContent from '../data/landing.json' with { type: 'json' };

export const metadata = {
  es: { title: 'Ayuda y soporte · Insight The City / ITC Club', description: 'Estamos aquí para ayudarte a disfrutar la app Insight The City y tus beneficios ITC CLUB.' },
  en: { title: 'Help and support · Insight The City / ITC Club', description: 'We’re here to help you enjoy the Insight The City app and your ITC CLUB benefits.' },
  pt: { title: 'Ajuda e suporte · Insight The City / ITC Club', description: 'Estamos aqui para ajudar você a aproveitar o app Insight The City e seus benefícios ITC CLUB.' },
};

// Explicit translations keep the same markup, offer details and contact address.
const copy = {
  'Conoce la app ↗': ['Explore the app ↗', 'Conheça o app ↗'],
  'Language': ['Language', 'Idioma'],
  'Ayuda y soporte / ITC': ['Help and support / ITC', 'Ajuda e suporte / ITC'],
  '¿NECESITAS': ['NEED', 'PRECISA DE'],
  'UNA MANO?': ['A HAND?', 'UMA AJUDA?'],
  'Estamos aquí para ayudarte a disfrutar la app Insight The City y tus beneficios ITC CLUB.': [metadata.en.description, metadata.pt.description],
  'Contactar al equipo ITC ': ['Contact the ITC team ', 'Fale com a equipe ITC '],
  '¿CON QUÉ TE AYUDAMOS?': ['HOW CAN WE HELP?', 'COMO PODEMOS AJUDAR?'],
  'Encuentra tu tema. Cuenta con nosotros.': ['Find your topic. Count on us.', 'Encontre seu assunto. Conte com a gente.'],
  'LA APP Y': ['THE APP AND', 'O APP E'],
  'TU CUENTA': ['YOUR ACCOUNT', 'SUA CONTA'],
  'Acceso a tu cuenta, errores técnicos y funciones de la app.': ['Account access, technical issues and app features.', 'Acesso à conta, problemas técnicos e funções do app.'],
  'Ayuda con la app ': ['Help with the app ', 'Ajuda com o app '],
  'TU MEMBRESÍA': ['YOUR MEMBERSHIP', 'SUA ASSINATURA'],
  'Consultas sobre activación, renovaciones, cancelación y cargos.': ['Questions about activation, renewals, cancellation and charges.', 'Dúvidas sobre ativação, renovações, cancelamento e cobranças.'],
  'Ayuda con mi membresía ': ['Help with my membership ', 'Ajuda com minha assinatura '],
  'TUS BENEFICIOS': ['YOUR BENEFITS', 'SEUS BENEFÍCIOS'],
  'Condiciones de uso o inconvenientes en un establecimiento participante.': ['Offer terms or issues at a participating business.', 'Condições de uso ou problemas em um estabelecimento participante.'],
  'Ayuda con un beneficio ': ['Help with a benefit ', 'Ajuda com um benefício '],
  'TE ESCUCHAMOS - TE AYUDAMOS - SEGUIMOS - TE ESCUCHAMOS - TE AYUDAMOS - SEGUIMOS - TE ESCUCHAMOS - TE AYUDAMOS - SEGUIMOS - ': [('WE LISTEN - WE HELP - WE KEEP GOING - ').repeat(3), ('OUVIMOS VOCÊ - AJUDAMOS VOCÊ - SEGUIMOS JUNTOS - ').repeat(3)],
  'RESPUESTAS.': ['ANSWERS.', 'RESPOSTAS.'],
  'SIN VUELTAS.': ['STRAIGHTFORWARD.', 'SEM ENROLAÇÃO.'],
  '¿La app es gratuita?': ['Is the app free?', 'O app é gratuito?'],
  'Sí. Puedes descubrir planes con Insight The City gratis. ITC CLUB es una membresía mensual opcional y de pago que suma beneficios en establecimientos participantes.': ['Yes. You can discover things to do with Insight The City for free. ITC CLUB is an optional paid monthly membership offering benefits at participating businesses.', 'Sim. Você pode descobrir programas com o Insight The City gratuitamente. O ITC CLUB é uma assinatura mensal paga e opcional que oferece benefícios em estabelecimentos participantes.'],
  '¿Cómo sé qué incluye un beneficio ITC CLUB?': ['How do I know what an ITC CLUB benefit includes?', 'Como saber o que um benefício ITC CLUB inclui?'],
  'Consulta el perfil del beneficio en la app. Allí encontrarás sus condiciones, vigencia, disponibilidad y modo de uso.': ['Open the benefit’s details in the app to see its terms, validity, availability and how to use it.', 'Abra os detalhes do benefício no app para consultar as condições, a validade, a disponibilidade e como usá-lo.'],
  'Tuve un problema al usar un beneficio. ¿Qué hago?': ['I had a problem using a benefit. What should I do?', 'Tive um problema ao usar um benefício. O que devo fazer?'],
  'Escríbenos con el nombre del establecimiento, el beneficio y la fecha de tu visita. Describe lo ocurrido para que podamos revisar tu caso.': ['Email us the business name, the benefit and the date of your visit. Describe what happened so we can review your case.', 'Envie um e-mail com o nome do estabelecimento, o benefício e a data da visita. Descreva o que aconteceu para analisarmos seu caso.'],
  'Tengo una consulta sobre mi membresía o un cargo.': ['I have a question about my membership or a charge.', 'Tenho uma dúvida sobre minha assinatura ou uma cobrança.'],
  'Contacta al equipo indicando el correo asociado a tu cuenta y el motivo de tu consulta. Te orientaremos según tu caso.': ['Contact our team with your account email and your question. We’ll help you with your specific situation.', 'Fale com a equipe e informe o e-mail da sua conta e o motivo do contato. Vamos orientar você conforme seu caso.'],
  '¿Cómo reporto un error en la app?': ['How do I report an app issue?', 'Como relatar um erro no app?'],
  'Incluye el modelo de tu teléfono, la versión de la app, una descripción del error y, si puedes, una captura de pantalla.': ['Include your phone model, app version, a description of the issue and, if possible, a screenshot.', 'Inclua o modelo do telefone, a versão do app, uma descrição do erro e, se possível, uma captura de tela.'],
  '¿Puedo enviar sugerencias o reportar información?': ['Can I send suggestions or report information?', 'Posso enviar sugestões ou informar algo?'],
  'Sí. Nos ayuda conocer tus ideas y saber si algún lugar, evento o beneficio necesita actualizarse. Escríbenos con los detalles.': ['Yes. We welcome your ideas and updates about places, events or benefits. Email us the details.', 'Sim. Suas ideias e informações sobre lugares, eventos ou benefícios que precisam de atualização nos ajudam. Envie os detalhes por e-mail.'],
  'HABLEMOS.': ['LET’S TALK.', 'VAMOS CONVERSAR.'],
  'ESTAMOS PARA': ['WE’RE HERE TO', 'ESTAMOS AQUI PARA'],
  'AYUDARTE.': ['HELP YOU.', 'AJUDAR VOCÊ.'],
  'Escríbenos ↗': ['Email us ↗', 'Escreva para nós ↗'],
  'Para ayudarte mejor': ['To help us assist you', 'Para ajudar você melhor'],
  'El correo asociado a tu cuenta': ['Your account email', 'O e-mail da sua conta'],
  'Una descripción de lo ocurrido': ['A description of what happened', 'Uma descrição do que aconteceu'],
  'Una captura de pantalla, si aplica': ['A screenshot, if relevant', 'Uma captura de tela, se necessário'],
  'Tu experiencia nos ayuda a mejorar.': ['Your experience helps us improve.', 'Sua experiência nos ajuda a melhorar.'],
  'Ayuda y soporte de la app Insight The City y la membresía ITC CLUB.': ['Help and support for the Insight The City app and ITC CLUB membership.', 'Ajuda e suporte para o app Insight The City e a assinatura ITC CLUB.'],
};

export function languageForPath(path) {
  if (/^\/(?:en\/support|support)\/?$/.test(path)) return 'en';
  if (/^\/pt\/suporte\/?$/.test(path)) return 'pt';
  return 'es';
}

function translate(value, language) {
  if (language === 'es') return value;
  return copy[value]?.[language === 'en' ? 0 : 1] ?? value;
}

export function contentForLanguage(language) {
  const localize = node => {
    if (typeof node === 'string') return translate(node, language);
    const attrs = { ...node.attrs };
    for (const key of ['aria-label', 'title', 'alt', 'placeholder']) {
      if (attrs[key]) attrs[key] = translate(attrs[key], language);
    }
    if (attrs.href?.startsWith('mailto:') && attrs.href.includes('?')) {
      const [address, query] = attrs.href.split('?');
      const params = new URLSearchParams(query);
      const subject = params.get('subject');
      if (subject?.endsWith(' · ITC CLUB')) {
        const source = subject.slice(0, -' · ITC CLUB'.length);
        params.set('subject', translate(source + ' ', language).trim() + ' · ITC CLUB');
      } else if (subject === 'ITC App Support' && language === 'pt') params.set('subject', 'Suporte do app ITC');
      attrs.href = address + '?' + params.toString();
    }
    if (attrs.lang && ['es','en','pt'].includes(attrs.lang)) {
      delete attrs['aria-current'];
      if (attrs.lang === language) attrs['aria-current'] = 'page';
    }
    return { ...node, attrs, children: node.children?.map(localize) };
  };
  return Object.fromEntries(Object.entries(initialContent).map(([key, node]) => [key, localize(node)]));
}
