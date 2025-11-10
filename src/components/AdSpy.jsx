import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import { Eye, Zap } from 'lucide-react'
import './AdSpy.css'

const AdSpy = () => {
  const { language } = useLanguage()
  const t = translations[language].adSpy

  return (
    <section id="ad-spy" className="ad-spy">
      <div className="ad-spy-background">
        <div className="radar-circle radar-1"></div>
        <div className="radar-circle radar-2"></div>
        <div className="radar-circle radar-3"></div>
        <div className="radar-pulse"></div>
        <div className="data-stream stream-1"></div>
        <div className="data-stream stream-2"></div>
        <div className="data-stream stream-3"></div>
      </div>

      <div className="container">
        <div className="ad-spy-content">
          <div className="ad-spy-badge">
            <Zap size={14} />
            <span>{t.badge}</span>
            <div className="badge-pulse"></div>
          </div>

          <h2 className="ad-spy-title">
            <Eye className="title-icon" size={48} />
            {t.title}
          </h2>
          
          <p className="ad-spy-subtitle">{t.subtitle}</p>
          <p className="ad-spy-description">{t.description}</p>

          <div className="adspy-image-container">
            <img 
              src="/images/adspy.jpg" 
              alt="Ad Spy Dashboard" 
              className="adspy-image adspy-image-desktop"
            />
            <img 
              src="/images/adspy_mobile.jpg" 
              alt="Ad Spy Dashboard Mobile" 
              className="adspy-image adspy-image-mobile"
            />
            <a href="https://app.vivendly.com" className="adspy-cta-button">
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdSpy
