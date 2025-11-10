import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import { ChevronDown } from 'lucide-react'
import './FAQ.css'

const FAQ = () => {
  const { language } = useLanguage()
  const t = translations[language].faq
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="faq-title">{t.title}</h2>

        <div className="faq-list">
          {t.items.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <ChevronDown 
                  size={24} 
                  className={`faq-icon ${openIndex === index ? 'rotated' : ''}`}
                />
              </button>
              
              <div className={`faq-answer ${openIndex === index ? 'visible' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
