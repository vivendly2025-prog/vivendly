import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { LogIn, UserPlus, ChevronDown } from 'lucide-react'
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 767) {
        // Mobile: Hide everything after 300px
        setIsVisible(window.scrollY < 300)
      } else {
        // Desktop: Hide auth buttons after 400px (keep language visible)
        setIsVisible(window.scrollY < 400)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const languages = {
    en: 'EN',
    fr: 'FR',
    es: 'ES'
  }

  const otherLanguages = Object.keys(languages).filter(lang => lang !== language)

  return (
    <div className="language-switcher">
      <div className={`language-switcher-container ${!isVisible ? 'mobile-hidden' : ''}`}>
        {/* Auth Buttons - Hidden on scroll */}
        <div className={`auth-buttons ${!isVisible ? 'hidden' : ''}`}>
          <a href="https://app.vivendly.com" className="auth-btn login-btn" aria-label="Login">
            <LogIn size={18} />
            <span>Login</span>
          </a>
          <a href="https://app.vivendly.com" className="auth-btn signup-btn" aria-label="Sign Up">
            <UserPlus size={18} />
            <span>Sign Up</span>
          </a>
        </div>

        {/* Language Dropdown - Always visible on desktop */}
        <div className="language-dropdown">
          <button
            className="lang-current"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-label="Select language"
          >
            {languages[language]}
            <ChevronDown size={16} className={`chevron ${isDropdownOpen ? 'open' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="lang-dropdown-menu">
              {otherLanguages.map(lang => (
                <button
                  key={lang}
                  className="lang-dropdown-item"
                  onClick={() => {
                    changeLanguage(lang)
                    setIsDropdownOpen(false)
                  }}
                >
                  {languages[lang]}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LanguageSwitcher
