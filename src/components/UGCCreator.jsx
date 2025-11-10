import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import { ArrowRight, ArrowDown, Upload, MessageSquare, Download } from 'lucide-react'
import './UGCCreator.css'

const UGCCreator = () => {
  const { language } = useLanguage()
  const t = translations[language].ugcCreator
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const stepIcons = [Upload, MessageSquare, Download]
  const ArrowIcon = isMobile ? ArrowDown : ArrowRight

  return (
    <section id="ugc-creator" className="ugc-creator">
      <div className="ugc-background">
        <div className="ugc-shape ugc-shape-1"></div>
        <div className="ugc-shape ugc-shape-2"></div>
        <div className="ugc-shape ugc-shape-3"></div>
      </div>

      <div className="container">
        <div className="ugc-header">
          <h2 className="ugc-title">{t.title}</h2>
          <p className="ugc-subtitle">{t.subtitle}</p>
        </div>

        <div className="ugc-steps">
          {t.steps.map((step, index) => {
            const Icon = stepIcons[index]
            return (
              <div key={index} className="ugc-step-wrapper">
                <div className="ugc-step-number">{step.number}</div>
                
                <div className="ugc-phone-mockup">
                  <div className="phone-screen">
                    {step.video ? (
                      <video 
                        src={step.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="phone-media"
                      />
                    ) : step.image ? (
                      <img 
                        src={step.image}
                        alt={step.title}
                        className="phone-media"
                      />
                    ) : (
                      <>
                        <div className="phone-icon">
                          <Icon size={32} />
                        </div>
                        <div className="phone-content">
                          <div className="phone-bar"></div>
                          <div className="phone-bar short"></div>
                          <div className="phone-bar medium"></div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <h3 className="ugc-step-title">{step.title}</h3>
                <p className="ugc-step-description">{step.description}</p>

                {index < t.steps.length - 1 && (
                  <div className="ugc-arrow">
                    <ArrowIcon size={28} />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="ugc-cta">
          <a href="https://app.vivendly.com" className="btn btn-primary btn-large">
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

export default UGCCreator
