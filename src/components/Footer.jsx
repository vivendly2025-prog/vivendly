import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import { Instagram, Facebook } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const { language, changeLanguage } = useLanguage()
  const t = translations[language].footer

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column footer-brand">
            <img 
              src="/images/logo_footer.png" 
              alt="Vivendly Logo" 
              className="footer-logo"
            />
            <p className="footer-description">{t.description}</p>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">{t.navigation.title}</h4>
            <ul className="footer-links">
              <li><a href="#visual-demo">{t.navigation.howItWorks}</a></li>
              <li><a href="#features">{t.navigation.allFeatures}</a></li>
              <li><a href="#ad-spy">{t.navigation.adSpy}</a></li>
              <li><a href="#ugc-creator">{t.navigation.aiCreatives}</a></li>
              <li><a href="#faq">{t.navigation.faq}</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">{t.links.title}</h4>
            <ul className="footer-links">
              <li><a href="/privacy-policy">{t.links.privacy}</a></li>
              <li><a href="/terms-of-service">{t.links.terms}</a></li>
              <li><a href="mailto:support@vivendly.com">{t.links.support}</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">{t.social.title}</h4>
            <div className="footer-social">
              <a href="https://www.instagram.com/vivendly" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@vivendly" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/vivendly" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
            
            <div className="footer-lang-switcher">
              <button
                className={language === 'en' ? 'active' : ''}
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
              <button
                className={language === 'fr' ? 'active' : ''}
                onClick={() => changeLanguage('fr')}
              >
                FR
              </button>
              <button
                className={language === 'es' ? 'active' : ''}
                onClick={() => changeLanguage('es')}
              >
                ES
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
