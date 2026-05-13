import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section className="about" id="chi-siamo" ref={ref}>
      <div className="about-inner">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="section-label">Chi siamo</span>
          <h2 className="section-title">
            Due sviluppatori.<br />
            <span className="gradient-text">Una sola missione.</span>
          </h2>

          <p className="about-body">
            Siamo <strong>Olimpio</strong> e <strong>Cernuschi</strong> — due sviluppatori con una passione
            condivisa: trasformare le piccole imprese italiane in presenze digitali di primo livello,
            senza costi assurdi e senza inutili complessità.
          </p>
          <p className="about-body">
            Abbiamo visto troppi imprenditori spendere centinaia di euro al mese in hosting per siti
            che potrebbero girare gratis. La nostra risposta è C&O Studio: siti statici ad alte
            prestazioni, deployati su GitHub Pages, con il tuo dominio personalizzato.
          </p>
          <p className="about-body">
            Niente WordPress, niente plugin da aggiornare, niente vulnerabilità. Solo codice pulito,
            design raffinato e risultati misurabili.
          </p>

          <div className="about-team">
            <div className="team-member">
              <div className="team-avatar">O</div>
              <div className="team-info">
                <h4>Olimpio</h4>
                <p>Full-stack developer · UI/UX · GitHub: OLIX-boop</p>
              </div>
            </div>
            <div className="team-member">
              <div className="team-avatar">C</div>
              <div className="team-info">
                <h4>Cernuschi</h4>
                <p>Front-end developer · SEO · Web performance</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-github"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="github-card">
            <div className="github-card-header">
              <GitHubIcon />
              <div>
                <div className="github-card-handle">OLIX-boop</div>
                <div className="github-card-name">Olimpio · Developer</div>
              </div>
            </div>

            <p className="github-card-bio">
              Sviluppatore full-stack appassionato di design sistemico e web technologies moderne.
              Tra i suoi progetti open source: componenti UI, strumenti per il web e siti statici ad alte prestazioni.
            </p>

            <div className="github-stats">
              <div className="github-stat">
                <div className="github-stat-num">∞</div>
                <div className="github-stat-label">Commit</div>
              </div>
              <div className="github-stat">
                <div className="github-stat-num">⚡</div>
                <div className="github-stat-label">Velocità</div>
              </div>
              <div className="github-stat">
                <div className="github-stat-num">100</div>
                <div className="github-stat-label">Lighthouse</div>
              </div>
            </div>

            <div className="github-languages">
              <span className="lang-badge">
                <span className="lang-dot" style={{ background: '#f7df1e' }}/>
                JavaScript
              </span>
              <span className="lang-badge">
                <span className="lang-dot" style={{ background: '#3178c6' }}/>
                TypeScript
              </span>
              <span className="lang-badge">
                <span className="lang-dot" style={{ background: '#61dafb' }}/>
                React
              </span>
              <span className="lang-badge">
                <span className="lang-dot" style={{ background: '#06b6d4' }}/>
                CSS / Tailwind
              </span>
              <span className="lang-badge">
                <span className="lang-dot" style={{ background: '#68a063' }}/>
                Node.js
              </span>
            </div>

            <a
              href="https://github.com/OLIX-boop"
              target="_blank"
              rel="noopener noreferrer"
              className="github-cta"
            >
              <GitHubIcon />
              Visita il profilo GitHub
              <ArrowIcon />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
