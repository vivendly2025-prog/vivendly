import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'
import { TrendingUp } from 'lucide-react'
import './WinnerProducts.css'

const WinnerProducts = () => {
  const { language } = useLanguage()
  const t = translations[language].winnerProducts

  // Emojis de produits pour le défilement - Électronique, Vêtements, Bijoux, Accessoires
  const products = [
    // Électronique
    '📱', '💻', '🖥️', '⌚', '🎧', '📷', '🎮', '⌨️', '🖱️', '🖨️', '📡', '🔌',
    // Vêtements
    '👕', '👔', '👗', '👠', '👟', '🧥', '🧢', '👖', '🩳', '👘', '🥾', '👞',
    // Bijoux
    '💍', '💎', '📿', '⌚', '👑', '🔗',
    // Accessoires
    '👜', '🎒', '👛', '🕶️', '🧣', '🧤', '🎀', '🪮', '💄', '👝', '🎁', '🔑'
  ]

  // Dupliquer pour scroll infini
  const row1 = [...products, ...products]
  const row2 = [...products.reverse(), ...products]
  const row3 = [...products, ...products]

  return (
    <section className="winner-products">
      <div className="products-background">
        {/* Ligne 1: gauche vers droite */}
        <div className="products-row products-row-1">
          {row1.map((product, index) => (
            <div key={index} className="product-item">
              {product}
            </div>
          ))}
        </div>

        {/* Ligne 2: droite vers gauche */}
        <div className="products-row products-row-2">
          {row2.map((product, index) => (
            <div key={index} className="product-item">
              {product}
            </div>
          ))}
        </div>

        {/* Ligne 3: gauche vers droite */}
        <div className="products-row products-row-3">
          {row3.map((product, index) => (
            <div key={index} className="product-item">
              {product}
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="winner-content">
          <div className="winner-badge">
            <TrendingUp size={16} />
            <span>{t.badge}</span>
          </div>

          <h2 className="winner-title">{t.title}</h2>
          <p className="winner-description">{t.description}</p>

          <a href="https://app.vivendly.com" className="btn btn-primary btn-large">
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

export default WinnerProducts
