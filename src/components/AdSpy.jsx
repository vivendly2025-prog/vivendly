import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import { Eye, Zap, TrendingUp, Volume2, VolumeX } from 'lucide-react'
import './AdSpy.css'

const AdSpy = () => {
  const { language } = useLanguage()
  const t = translations[language].adSpy
  const [mutedStates, setMutedStates] = useState([true, true, true, true, true, true])

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

          <div className="adspy-cards-container">
            {[
              { video: 'ad_1.mp4', name: 'DownyBrasil', category: 'Beauty & Personal Care', views: '80.2M', ctr: '36%' },
              { video: 'ad_2.mp4', name: 'lexususa', category: 'Vehicle & Transport', views: '46.2M', ctr: '2%' },
              { video: 'ad_3.mp4', name: 'Cokolata', category: 'Food', views: '68.3M', ctr: '40%' },
              { video: 'ad_4.mp4', name: 'Hollister', category: 'E-commerce', views: '32.7M', ctr: '21%' },
              { video: 'ad_5.mp4', name: "L'Oreal Paris", category: 'Beauty & Personal Care', views: '20.8M', ctr: '34%' },
              { video: 'ad_6.mp4', name: "Domino's", category: 'Food', views: '15.6M', ctr: '23%' }
            ].map((ad, index) => (
              <div key={index} className="adspy-card">
                <div className="adspy-card-content">
                  <video 
                    className="adspy-video"
                    src={`/video/ad/${ad.video}`}
                    loop
                    muted={mutedStates[index]}
                    playsInline
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                  />
                  
                  <button 
                    className="adspy-sound-button"
                    onClick={() => {
                      const newMutedStates = [...mutedStates]
                      newMutedStates[index] = !newMutedStates[index]
                      setMutedStates(newMutedStates)
                    }}
                    aria-label={mutedStates[index] ? "Unmute" : "Mute"}
                  >
                    {mutedStates[index] ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                  
                  <div className="adspy-video-overlay">
                    <div className="adspy-play-icon">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="adspy-card-footer">
                  <span className="adspy-status">
                    <span className="status-dot"></span>
                    Active
                  </span>
                  
                  <h4 className="adspy-name">{ad.name}</h4>
                  <p className="adspy-category">{ad.category}</p>
                  
                  <div className="adspy-metrics">
                    <div className="adspy-metric">
                      <span className="metric-label">Views</span>
                      <span className="metric-value">{ad.views}</span>
                    </div>
                    <div className="adspy-metric">
                      <span className="metric-label">CTR</span>
                      <span className="metric-value ctr">{ad.ctr}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdSpy
