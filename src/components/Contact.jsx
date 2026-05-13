import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Richiesta da ${form.company || form.name} — C&O Studio`)
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\nAzienda: ${form.company}\nServizio: ${form.service}\n\nMessaggio:\n${form.message}`
    )
    window.location.href = `mailto:co.webstudios@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="contact" id="contatti" ref={ref}>
      <div className="contact-inner">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="section-label">Contatti</span>
          <h2 className="section-title-light">
            Parliamo del<br />
            <span className="gradient-text">tuo progetto.</span>
          </h2>
          <p className="section-subtitle-light" style={{ marginBottom: 0 }}>
            Raccontaci la tua attività. Ti risponderemo entro 24 ore
            con una prima valutazione gratuita — senza impegno.
          </p>

          <div className="contact-info-items">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-info-text">
                <h4>Email</h4>
                <a href="mailto:co.webstudios@gmail.com">co.webstudios@gmail.com</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="contact-info-text">
                <h4>Tempo di risposta</h4>
                <p>Entro 24 ore (spesso molto meno)</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="contact-info-text">
                <h4>Dove siamo</h4>
                <p>Milano, Italia · Lavoriamo da remoto</p>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: 40,
            padding: '20px 24px',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(0,180,216,0.07)',
            border: '1px solid rgba(0,180,216,0.15)',
          }}>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
              <span style={{ color: 'var(--cyan-light)', fontWeight: 700 }}>💡 Sapevi che</span> con GitHub Pages
              il tuo sito è gratuito per sempre? Paghi solo il dominio personalizzato —
              circa <strong style={{ color: 'rgba(255,255,255,0.8)' }}>€12–18 all'anno</strong>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          {sent ? (
            <div className="contact-form-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 300, gap: 16, textAlign: 'center' }}>
              <div style={{ fontSize: '3rem' }}>✅</div>
              <h3 style={{ color: 'var(--white)', fontSize: '1.3rem' }}>Email aperta nel tuo client!</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Invia il messaggio dalla tua app email e ti risponderemo entro 24 ore.
              </p>
              <button className="btn btn-outline-white" onClick={() => setSent(false)}>
                Invia un altro messaggio
              </button>
            </div>
          ) : (
            <form className="contact-form-wrap" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Il tuo nome *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Mario Rossi"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="mario@azienda.it"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Nome azienda</label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="La tua impresa S.r.l."
                />
              </div>

              <div className="form-group">
                <label>Cosa ti serve?</label>
                <select name="service" value={form.service} onChange={handleChange}>
                  <option value="">Scegli un servizio...</option>
                  <option value="landing">Landing Page</option>
                  <option value="sito">Sito Vetrina</option>
                  <option value="portfolio">Portfolio & Brand</option>
                  <option value="altro">Preventivo personalizzato</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: 24 }}>
                <label>Raccontaci il tuo progetto *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Descrivi la tua attività, cosa vorresti nel sito, se hai riferimenti o ispirazioni..."
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Invia la richiesta
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>

              <p className="form-note">
                Nessuno spam. Ti risponderemo entro 24 ore con una valutazione gratuita del tuo progetto.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
