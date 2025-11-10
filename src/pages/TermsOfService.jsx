import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import { ArrowLeft } from 'lucide-react'
import './LegalPages.css'

const TermsOfService = () => {
  const { language } = useLanguage()
  const t = translations[language].termsOfService

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
          <h2>{t.services.title}</h2>
          <p>{t.services.content}</p>
        </section>

        <section className="legal-section">
          <h2>{t.subscription.title}</h2>
          <p>{t.subscription.content}</p>
        </section>

        <section className="legal-section">
          <h2>{t.refund.title}</h2>
          <p>{t.refund.subscription}</p>
          <p><strong>{t.refund.important}:</strong> {t.refund.credits}</p>
        </section>

        <section className="legal-section">
          <h2>{t.userResponsibilities.title}</h2>
          <ul>
            {t.userResponsibilities.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="legal-section">
          <h2>{t.intellectualProperty.title}</h2>
          <p>{t.intellectualProperty.content}</p>
        </section>

        <section className="legal-section">
          <h2>{t.limitation.title}</h2>
          <p>{t.limitation.content}</p>
        </section>

        <section className="legal-section">
          <h2>{t.termination.title}</h2>
          <p>{t.termination.content}</p>
        </section>

        <section className="legal-section">
          <h2>{t.changes.title}</h2>
          <p>{t.changes.content}</p>
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

export default TermsOfService
