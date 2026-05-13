import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: 'La Sfera — Sala Biliardi',
    desc: 'Pessano con Bornago, MI',
    tags: ['Landing Page', 'Ristorazione & Sport'],
    image: `${import.meta.env.BASE_URL}projects/la-sfera.jpg`,
    gradient: 'linear-gradient(135deg, #1a2744 0%, #0d3b2e 100%)',
    accent: '#2d8653',
    emoji: '🎱',
    live: true,
  },
  {
    title: 'Studio Dentistico Rossi',
    desc: 'Milano Centro',
    tags: ['Sito Vetrina', 'Salute & Benessere'],
    image: null,
    gradient: 'linear-gradient(135deg, #0a1120 0%, #1e3a5f 100%)',
    accent: '#00b4d8',
    emoji: '🦷',
    live: false,
  },
  {
    title: 'Bianchi Fotografia',
    desc: 'Portfolio fotografico',
    tags: ['Portfolio', 'Creativi'],
    image: null,
    gradient: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b69 100%)',
    accent: '#a78bfa',
    emoji: '📷',
    live: false,
  },
  {
    title: 'Officina Verdi',
    desc: 'Bergamo',
    tags: ['Landing Page', 'Artigianato'],
    image: null,
    gradient: 'linear-gradient(135deg, #1a1a0a 0%, #3d3000 100%)',
    accent: '#fbbf24',
    emoji: '🔧',
    live: false,
  },
]

export default function Portfolio() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section className="portfolio" id="portfolio" ref={ref}>
      <div className="portfolio-header">
        <div>
          <span className="section-label">Il nostro lavoro</span>
          <h2 className="section-title-light">
            Progetti che parlano<br />
            <span className="gradient-text">da soli.</span>
          </h2>
        </div>
        <p className="section-subtitle-light">
          Ogni progetto è costruito su misura.
          Nessun template, nessuna scorciatoia.
        </p>
      </div>

      <div className="portfolio-grid" style={{ maxWidth: 1160, margin: '0 auto' }}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="portfolio-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Sfondo: screenshot se disponibile, altrimenti gradient + emoji */}
            {p.image ? (
              <img
                src={p.image}
                alt={p.title}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                }}
                className="portfolio-card-bg-img"
              />
            ) : (
              <>
                <div
                  className="portfolio-card-bg"
                  style={{ background: p.gradient, position: 'absolute', inset: 0 }}
                />
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -60%)',
                  fontSize: '4.5rem',
                  opacity: 0.15,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}>
                  {p.emoji}
                </div>
                <div style={{
                  position: 'absolute',
                  top: '30%',
                  right: '8%',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: p.accent,
                  opacity: 0.12,
                  filter: 'blur(28px)',
                }} />
              </>
            )}

            <div className="portfolio-card-overlay">
              <div className="portfolio-tags">
                {p.tags.map((t, j) => (
                  <span key={j} className="portfolio-tag">{t}</span>
                ))}
                {p.live && (
                  <span className="portfolio-tag" style={{ background: 'rgba(45,134,83,0.2)', color: '#4ade80', borderColor: 'rgba(74,222,128,0.25)' }}>
                    Live
                  </span>
                )}
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
