import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import './VisualDemo.css'

const VisualDemo = () => {
  const { language } = useLanguage()
  const t = translations[language].visualDemo

  const gradients = [
    'linear-gradient(135deg, #6271d9 0%, #838fe1 100%)',
    'linear-gradient(135deg, #707ddd 0%, #929ce4 100%)',
    'linear-gradient(135deg, #838fe1 0%, #9fa9e7 100%)'
  ]

  return (
    <section id="visual-demo" className="visual-demo">
      <div className="container">
        <div className="visual-demo-header">
          <h2 className="visual-demo-title">{t.title}</h2>
          <p className="visual-demo-subtitle">{t.subtitle}</p>
        </div>

        <div className="visual-demo-grid">
          {t.items.map((item, index) => (
            <div key={index} className="demo-card">
              <div 
                className="demo-mockup"
                style={{ background: (item.image || item.video) ? 'transparent' : gradients[index] }}
              >
                {item.video ? (
                  <video 
                    src={item.video} 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="demo-video"
                  />
                ) : item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.label}
                    className="demo-image"
                  />
                ) : (
                  /* Placeholder for actual screenshots */
                  null
                )}
              </div>
              <div className="demo-content">
                <h3 className="demo-label">{item.label}</h3>
                <p className="demo-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VisualDemo
