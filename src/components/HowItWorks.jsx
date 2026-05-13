import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    num: '01',
    title: 'Ascoltiamo la tua visione',
    desc: 'Una chiamata gratuita di 30 minuti. Ti chiediamo dei tuoi clienti, dei tuoi obiettivi e di come vuoi essere percepito online. Nessun tecnicismo, solo ascolto.',
  },
  {
    num: '02',
    title: 'Progettiamo e costruiamo',
    desc: 'Design pixel-perfect su misura per la tua attività, sviluppato con tecnologie moderne. Revisions incluse finché non sei soddisfatto al 100%.',
  },
  {
    num: '03',
    title: 'Vai online — gratis',
    desc: 'Deploy su GitHub Pages con il tuo dominio personalizzato. Il tuo sito è live, veloce, sicuro (HTTPS), e non ti costerà nulla di hosting ogni mese.',
  },
]

export default function HowItWorks() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="how" id="processo" ref={ref}>
      <div className="how-header">
        <span className="section-label">Come lavoriamo</span>
        <h2 className="section-title">
          Dal primo contatto al sito live<br />
          <span className="gradient-text">in meno di due settimane.</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Nessuna burocrazia. Nessun tecnicismo infinito. Un processo semplice
          e trasparente che ti tiene sempre aggiornato.
        </p>
      </div>

      <div className="how-steps">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            className="how-step"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="step-number">
              <div className="step-number-inner">{s.num}</div>
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.7 }}
        style={{ textAlign: 'center', marginTop: 56 }}
      >
        <a href="#contatti" className="btn btn-primary" style={{ display: 'inline-flex' }}>
          Prenota la chiamata gratuita
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
