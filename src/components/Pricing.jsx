import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const CheckIcon = () => (
  <div className="check-icon">
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  </div>
)

const plans = [
  {
    name: 'Starter',
    price: 499,
    desc: 'La soluzione ideale per chi vuole iniziare online con una presenza professionale e senza pensieri.',
    features: [
      'Landing page singola',
      'Design custom su misura',
      'Mobile-first & responsive',
      'Deploy su GitHub Pages',
      'Dominio custom (.it o .com)',
      'HTTPS incluso',
      'Form di contatto',
      'Google Analytics',
      '15 giorni di supporto post-consegna',
    ],
  },
  {
    name: 'Business',
    price: 899,
    desc: 'Per chi ha bisogno di raccontare di più: una presenza digitale completa che converte.',
    badge: 'Più richiesto',
    featured: true,
    features: [
      'Fino a 5 pagine',
      'Design custom premium',
      'Animazioni scroll (Framer Motion)',
      'Deploy su GitHub Pages',
      'Dominio custom incluso nel 1° anno',
      'HTTPS incluso',
      'Form contatto + WhatsApp button',
      'SEO on-page completo',
      'Google Analytics + Search Console',
      '1 mese di supporto prioritario',
      'Revisioni illimitate',
    ],
  },
  {
    name: 'Premium',
    price: 1499,
    desc: 'Per portfolio professionali, studi e aziende che vogliono fare una prima impressione indimenticabile.',
    features: [
      'Fino a 10 pagine',
      'Design premium con 3D / animazioni',
      'Portfolio con filtri e gallerie',
      'Blog integrato (contenuti statici)',
      'Deploy su GitHub Pages',
      'Dominio custom incluso nel 1° anno',
      'SEO avanzato + sitemap XML',
      'Lighthouse score 95+',
      'Integrazione social & review',
      '3 mesi di supporto prioritario',
      'Revisioni illimitate',
      'Brand identity review',
    ],
  },
]

export default function Pricing() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section className="pricing" id="prezzi" ref={ref}>
      <div className="pricing-header">
        <span className="section-label">Prezzi trasparenti</span>
        <h2 className="section-title">
          Sai esattamente cosa paghi.<br />
          <span className="gradient-text">Nessuna sorpresa.</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Prezzi fissi, nessun costo mensile nascosto. Una volta consegnato il sito,
          l'unico costo che paghi è il tuo dominio (~15€/anno).
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            className={`pricing-card${p.featured ? ' featured' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            {p.badge && <div className="pricing-badge">{p.badge}</div>}

            <div className="pricing-plan">{p.name}</div>

            <div className="pricing-price">
              <span className="price-currency">€</span>
              <span className="price-amount">{p.price}</span>
            </div>

            <p className="pricing-desc">{p.desc}</p>

            <ul className="pricing-features">
              {p.features.map((f, j) => (
                <li key={j}>
                  <CheckIcon />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contatti"
              className={`btn ${p.featured ? 'btn-primary' : 'btn-outline-cyan'}`}
            >
              Inizia con {p.name}
            </a>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.6 }}
        style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--gray-400)', marginTop: 28, maxWidth: 1160, marginLeft: 'auto', marginRight: 'auto' }}
      >
        Tutti i prezzi sono IVA esclusa. Hosting GitHub Pages: gratuito. Costo annuale dominio: ~€12–18. Hai un progetto fuori standard? <a href="#contatti" style={{ color: 'var(--cyan)', fontWeight: 600 }}>Contattaci per un preventivo su misura →</a>
      </motion.p>
    </section>
  )
}
