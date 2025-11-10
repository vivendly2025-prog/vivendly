import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import { Play, Package, Users, Eye, Sparkles } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language].hero

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <img 
            src="/images/logo_vivendly.png" 
            alt="Vivendly Logo" 
            className="hero-logo"
          />
          
          <h1 className="hero-headline">
            {t.headline}
            <span className="headline-typing">{t.headlineHighlight}</span>
          </h1>

          <div className="hero-shopify-badge">
            <img 
              src="/images/logo_shopify.png" 
              alt="Shopify Logo" 
              className="shopify-logo-hero"
            />
            <span>{t.shopifyPartner}</span>
          </div>
          
          <p className="hero-subheadline">{t.subheadline}</p>
          
          <div className="hero-cta-group">
            <a href="https://app.vivendly.com" className="btn btn-primary" aria-label={t.ctaPrimary}>
              {t.ctaPrimary}
            </a>
            <button className="btn btn-secondary" aria-label={t.ctaSecondary}>
              <Play size={18} />
              {t.ctaSecondary}
            </button>
          </div>
          
          <div className="trust-bar">
            <div className="trust-item">
              <Package size={20} />
              <span>{t.trustBar.products}</span>
            </div>
            <div className="trust-item">
              <Users size={20} />
              <span>{t.trustBar.suppliers}</span>
            </div>
            <div className="trust-item">
              <Eye size={20} />
              <span>{t.trustBar.adSpy}</span>
            </div>
            <div className="trust-item">
              <Sparkles size={20} />
              <span>{t.trustBar.creative}</span>
            </div>
          </div>
          
          <div className="hero-mockup animate-float">
            <img 
              src="/images/dashboard.png" 
              alt="Vivendly Dashboard" 
              className="dashboard-image dashboard-image-desktop"
            />
            <img 
              src="/images/dashboard_mobile.png" 
              alt="Vivendly Dashboard" 
              className="dashboard-image dashboard-image-mobile"
            />
            <a href="https://app.vivendly.com" className="dashboard-overlay">
              <button className="dashboard-cta-btn">
                {t.dashboardCta}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
