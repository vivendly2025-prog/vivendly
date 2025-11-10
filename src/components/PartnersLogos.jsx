import './PartnersLogos.css'

const PartnersLogos = () => {
  const partners = [
    { name: 'Shopify', logo: '/images/partenaires/shopify.png', url: 'https://shopify.com' },
    { name: 'Meta', logo: '/images/partenaires/meta.png', url: 'https://developers.meta.com' },
    { name: 'La Poste', logo: '/images/partenaires/laposte.png', url: 'https://www.lapostegroupe.com/en' },
    { name: "L'Orange Bleue", logo: '/images/partenaires/lorangebleu.png', url: 'https://www.lorangebleue.fr' },
    { name: 'Boulangerie Louise', logo: '/images/partenaires/boulangerielouise.png', url: 'https://www.boulangerielouise.com' },
  ]

  // Dupliquer les logos pour un défilement infini fluide
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="partners-logos">
      <div className="container">
        <div className="partners-track">
          {duplicatedPartners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-logo"
              aria-label={partner.name}
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="partner-logo-img"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersLogos
