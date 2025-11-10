import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import './SocialProof.css'

const SocialProof = () => {
  const { language } = useLanguage()
  const t = translations[language].socialProof

  return (
    <section className="social-proof">
      <div className="container">
        <h2 className="social-proof-title">{t.title}</h2>

        <div className="metrics-row">
          {t.metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
