import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import { Store, Package, Trophy, Sparkles, Eye, Clock, Rocket, Users } from 'lucide-react'
import { useEffect, useRef } from 'react'
import './Features.css'

const featureIcons = [Store, Package, Trophy, Sparkles, Eye, Clock, Rocket, Users]

const Features = () => {
  const { language } = useLanguage()
  const t = translations[language].features
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    const cards = sectionRef.current?.querySelectorAll('.feature-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="features" ref={sectionRef}>
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">
            {t.title}
            <span className="title-highlight">{t.titleHighlight}</span>
          </h2>
          <p className="features-subtitle">{t.subtitle}</p>
        </div>

        <div className="features-grid">
          {t.items.map((feature, index) => {
            const Icon = featureIcons[index]
            const isPremium = [0, 2, 5, 7].includes(index) // Instant Store, Winner Product, Launch Campaigns, AI Creative Studio
            const isExclusive = index === 2 // Winner Product only
            const isAllInOne = index === 5 // Launch Campaigns only
            const isEssential = index === 7 // AI Creative Studio only
            return (
              <div 
                key={index} 
                className={`feature-card ${isPremium ? 'feature-card-premium' : ''} ${isExclusive ? 'feature-card-exclusive' : ''} ${isAllInOne ? 'feature-card-allinone' : ''} ${isEssential ? 'feature-card-essential' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {isPremium && <div className="premium-border"></div>}
                <div className="feature-icon">
                  <Icon size={24} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
