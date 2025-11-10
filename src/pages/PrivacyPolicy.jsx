import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import { ArrowLeft } from 'lucide-react'
import './LegalPages.css'

const PrivacyPolicy = () => {
  const { language } = useLanguage()
  const t = translations[language].privacyPolicy

  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="back-to-home">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        <h1 className="legal-title">{t.title}</h1>
        <p className="legal-updated">{t.lastUpdated}</p>

        <section className="legal-section">
          <h2>{t.introduction.title}</h2>
          <p>{t.introduction.content}</p>
        </section>

        <section className="legal-section">
          <h2>{t.dataCollection.title}</h2>
          <p>{t.dataCollection.intro}</p>
          <ul>
            {t.dataCollection.items.map((item, index) => (
              <li key={index}><strong>{item.title}:</strong> {item.description}</li>
            ))}
          </ul>
        </section>

        <section className="legal-section">
          <h2>{t.dataUsage.title}</h2>
          <p>{t.dataUsage.intro}</p>
          <ul>
            {t.dataUsage.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="legal-section">
          <h2>{t.cookies.title}</h2>
          <p>{t.cookies.content}</p>
        </section>

        <section className="legal-section">
          <h2>{t.gdpr.title}</h2>
          <p>{t.gdpr.content}</p>
          <ul>
            {t.gdpr.rights.map((right, index) => (
              <li key={index}>{right}</li>
            ))}
          </ul>
        </section>

        <section className="legal-section">
          <h2>{t.dataSecurity.title}</h2>
          <p>{t.dataSecurity.content}</p>
        </section>

        <section className="legal-section">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.content}</p>
          <p className="legal-email">
            <a href="mailto:support@vivendly.com">support@vivendly.com</a>
          </p>
        </section>

        <section className="legal-section">
          <h2>{t.company.title}</h2>
          <p><strong>{t.company.name}:</strong> Adcolor AI</p>
          <p><strong>{t.company.license}:</strong> 204595525</p>
          <p><strong>{t.company.hosting}:</strong> Vercel</p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy
