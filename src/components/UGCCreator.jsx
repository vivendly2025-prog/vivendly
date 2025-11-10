import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import { Volume2, VolumeX } from 'lucide-react'
import './UGCCreator.css'

const UGCCreator = () => {
  const { language } = useLanguage()
  const t = translations[language].ugcCreator
  const [isMuted, setIsMuted] = useState(true)

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

        <div className="ugc-video-container">
          <div className="ugc-phone-mockup-large">
            <div className="phone-screen-large">
              <video 
                src="/video/videogenerate.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="phone-media-large"
              />
              <button 
                className="ugc-sound-button"
                onClick={() => setIsMuted(!isMuted)}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UGCCreator
