import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import './FinalCTA.css'

const FinalCTA = () => {
  const { language } = useLanguage()
  const t = translations[language].finalCTA

  return (
    <section className="final-cta">
      <div className="final-cta-background">
        <div className="cta-halo cta-halo-1"></div>
        <div className="cta-halo cta-halo-2"></div>
        <div className="cta-halo cta-halo-3"></div>
        <div className="cta-glow"></div>
      </div>
      
      <div className="container">
        <div className="final-cta-content">
          <h2 className="final-cta-headline">{t.headline}</h2>
          <p className="final-cta-subheadline">{t.subheadline}</p>
          
          <a href="https://app.vivendly.com" className="btn btn-primary btn-large" aria-label={t.cta}>
            {t.cta}
          </a>
          
          <p className="final-cta-microcopy">{t.microcopy}</p>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
