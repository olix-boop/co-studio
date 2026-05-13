import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Landing Page',
    desc: 'Una pagina, un obiettivo chiaro: trasformare i visitatori in clienti. Progettata per convertire, ottimizzata per i motori di ricerca.',
    features: ['Design su misura', 'Testo copywriting incluso', 'Form di contatto', 'Google Analytics', 'Ottimizzazione SEO on-page'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Sito Vetrina',
    desc: 'Presenta la tua attività con eleganza e professionalità. Fino a 5 pagine, galerie, sezione servizi e tutto ciò che la tua impresa merita.',
    features: ['Fino a 5 pagine', 'Galleria fotografica', 'Mappa & contatti', 'Animazioni scroll', '1 mese di assistenza'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.57 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'Portfolio & Brand',
    desc: 'Per creativi, freelance e studi professionali. Un portfolio digitale che racconta chi sei, cosa fai e perché sceglierti.',
    features: ['Fino a 10 pagine', 'Showcase lavori', 'Blog integrato', 'SEO avanzato', '3 mesi di assistenza'],
  },
]

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section className="services" id="servizi" ref={ref}>
      <div className="services-header">
        <div>
          <span className="section-label">I nostri servizi</span>
          <h2 className="section-title">
            Tutto ciò di cui hai bisogno.<br />
            <span className="gradient-text">Niente di superfluo.</span>
          </h2>
        </div>
        <p className="section-subtitle">
          Siti statici: nessun server da gestire, nessuna vulnerabilità, velocità massima.
          Hostabili gratuitamente su GitHub Pages — con il tuo dominio .it o .com.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <ul className="service-features">
              {s.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.6 }}
        style={{ maxWidth: 1160, margin: '48px auto 0', textAlign: 'center' }}
      >
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          padding: '14px 24px', borderRadius: 50,
          background: 'linear-gradient(135deg, rgba(0,180,216,0.06), rgba(72,202,228,0.03))',
          border: 'var(--border-subtle)',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
          </svg>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Tutti i siti sono hostabili <strong style={{ color: 'var(--text-primary)' }}>gratuitamente su GitHub Pages</strong> e funzionano con qualsiasi dominio personalizzato
          </span>
        </div>
      </motion.div>
    </section>
  )
}
