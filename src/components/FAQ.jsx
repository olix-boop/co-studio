import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const faqs = [
  {
    q: 'Quanto costa mantenere il sito online ogni anno?',
    a: 'Solo il costo del tuo dominio: circa €12–18/anno per un .it o .com. L\'hosting su GitHub Pages è completamente gratuito, per sempre. Nessun abbonamento, nessuna sorpresa a fine mese.',
  },
  {
    q: 'Posso usare il mio dominio personalizzato (es. miazienda.it)?',
    a: 'Assolutamente sì. Configuriamo noi il tuo dominio personalizzato direttamente su GitHub Pages. Il sito sarà raggiungibile all\'indirizzo che preferisci, con certificato HTTPS incluso e senza costi aggiuntivi.',
  },
  {
    q: 'In quanto tempo avete il sito pronto?',
    a: 'Tipicamente in 1–2 settimane dal briefing iniziale. Dipende dalla complessità del progetto e dalla velocità con cui ci fornisci i materiali (testi, foto, logo). Ti teniamo aggiornato passo per passo.',
  },
  {
    q: 'Posso modificare i contenuti del sito da solo?',
    a: 'I siti statici non hanno un pannello admin tradizionale come WordPress. Noi gestiamo le modifiche per te — solitamente entro 24 ore dalla richiesta. Per aggiornamenti frequenti possiamo valutare soluzioni su misura.',
  },
  {
    q: 'Perché non usare WordPress o un costruttore di siti?',
    a: 'WordPress richiede hosting a pagamento (€5–30/mese), aggiornamenti costanti, plugin da gestire e rischi di sicurezza. Wix e Squarespace ti legano a canoni mensili elevati. I nostri siti statici sono più veloci, più sicuri, e non ti costano nulla di hosting. Per una piccola impresa, è la scelta più intelligente.',
  },
  {
    q: 'Il sito funzionerà bene su smartphone?',
    a: 'Ogni sito che realizziamo è progettato mobile-first: prima pensato per smartphone, poi adattato al desktop. Testiamo su tutti i dispositivi e i principali browser prima della consegna.',
  },
  {
    q: 'Come funziona il processo? Da dove si inizia?',
    a: 'Tutto parte da una chiamata gratuita di 30 minuti in cui ci racconti la tua attività e i tuoi obiettivi. Da lì definiamo insieme il progetto, i tempi e il budget. Nessun impegno fino a quando non sei convinto.',
  },
  {
    q: 'Cosa succede se voglio modifiche dopo la consegna?',
    a: 'Ogni progetto include un periodo di supporto post-consegna per aggiustamenti finali. Successivamente le modifiche vengono gestite a preventivo — di solito semplici e veloci. Non ti lasciamo mai senza supporto.',
  },
]

function FAQItem({ q, a, index, inView }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.4, 0, 0.2, 1] }}
      style={{
        borderBottom: '1px solid var(--gray-200)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '22px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{
          fontSize: '1rem',
          fontWeight: 600,
          color: open ? 'var(--cyan)' : 'var(--navy-dark)',
          lineHeight: 1.4,
          transition: 'color 0.25s',
        }}>
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            flexShrink: 0,
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: open ? 'var(--gradient-cyan)' : 'var(--gray-100)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: open ? 'white' : 'var(--gray-600)',
            transition: 'background 0.25s',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <p style={{
              fontSize: '0.92rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              paddingBottom: 22,
              paddingRight: 44,
            }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const half = Math.ceil(faqs.length / 2)

  return (
    <section style={{ padding: '110px 24px', background: 'var(--white)' }} id="faq" ref={ref}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="section-label">Domande frequenti</span>
          <h2 className="section-title">
            Tutto quello che vuoi sapere<br />
            <span className="gradient-text">prima di iniziare.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Non trovi la risposta che cerchi?{' '}
            <a href="#contatti" style={{ color: 'var(--cyan)', fontWeight: 600 }}>
              Scrivici direttamente →
            </a>
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0 64px',
          alignItems: 'start',
        }}
          className="faq-grid"
        >
          <div>
            {faqs.slice(0, half).map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} index={i} inView={inView} />
            ))}
          </div>
          <div>
            {faqs.slice(half).map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} index={half + i} inView={inView} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: 64,
            padding: '32px 40px',
            borderRadius: 'var(--radius-xl)',
            background: 'linear-gradient(135deg, var(--navy-dark) 0%, var(--navy-medium) 100%)',
            border: '1px solid rgba(0,180,216,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', marginBottom: 6 }}>
              Hai ancora dubbi? Parliamoci.
            </p>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
              Una chiamata gratuita di 30 minuti — nessun impegno, solo risposte chiare.
            </p>
          </div>
          <a href="#contatti" className="btn btn-primary" style={{ flexShrink: 0 }}>
            Scrivici ora
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
