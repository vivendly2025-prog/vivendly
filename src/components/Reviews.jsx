import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import { Star, CheckCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import './Reviews.css'

const Reviews = () => {
  const { language } = useLanguage()
  const t = translations[language].reviews
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 30)

    return () => clearInterval(intervalId)
  }, [])

  // Dupliquer les reviews pour un scroll infini
  const duplicatedReviews = [...t.items, ...t.items]

  const avatarColors = [
    '#6271d9', '#838fe1', '#929ce4', '#9fa9e7', 
    '#707ddd', '#6271d9', '#838fe1', '#929ce4'
  ]

  return (
    <section className="reviews">
      <div className="reviews-background">
        <div className="reviews-shape reviews-shape-1"></div>
        <div className="reviews-shape reviews-shape-2"></div>
      </div>

      <div className="container">
        <div className="reviews-header">
          <h2 className="reviews-title">{t.title}</h2>
          <p className="reviews-subtitle">{t.subtitle}</p>
        </div>
      </div>

      <div className="reviews-scroll-container" ref={scrollRef}>
        <div className="reviews-track">
          {duplicatedReviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div 
                  className="review-avatar"
                  style={{ background: avatarColors[index % avatarColors.length] }}
                >
                  {review.name.charAt(0)}
                </div>
                <div className="review-author">
                  <div className="author-name">
                    {review.name}
                    {review.verified && (
                      <CheckCircle size={14} className="verified-badge" />
                    )}
                  </div>
                  <div className="author-title">{review.title}</div>
                </div>
              </div>

              <div className="review-rating">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#fac0cf" color="#fac0cf" />
                ))}
              </div>

              <p className="review-quote">"{review.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
