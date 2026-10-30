import { useLanding } from '../../context/LandingContext';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanding();
  return <div className="language-selector" role="group" aria-label={t('Seleccionar idioma')}>
    {[['es', 'Español'], ['en', 'English'], ['pt', 'Português']].map(([code, name]) =>
      <button key={code} type="button" lang={code} aria-label={name} title={name}
        aria-pressed={language === code} onClick={() => setLanguage(code)}>{code.toUpperCase()}</button>)}
  </div>;
}
