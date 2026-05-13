import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LogoMark = () => (
  <svg width="36" height="22" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="8" stroke="#1a2744" strokeWidth="3" fill="none"/>
    <circle cx="25" cy="11" r="8" stroke="#00b4d8" strokeWidth="3" fill="none"/>
    <path d="M17 6 Q18 11 17 16" stroke="#1a2744" strokeWidth="1.5" fill="none" opacity="0.6"/>
    <path d="M19 6 Q18 11 19 16" stroke="#00b4d8" strokeWidth="1.5" fill="none" opacity="0.6"/>
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#servizi', label: 'Servizi' },
    { href: '#processo', label: 'Come Lavoriamo' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#chi-siamo', label: 'Chi Siamo' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#" className="nav-logo">
            <div className="nav-logo-mark">
              <LogoMark />
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo-name">C<span>&</span>O</span>
              <span className="nav-logo-sub">Web Studio</span>
            </div>
          </a>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          <a href="#contatti" className="btn btn-primary nav-cta" style={{ padding: '10px 20px', fontSize: '0.82rem' }}>
            Parliamo del tuo progetto
          </a>

          <button
            className="hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            <span style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            style={{ position: 'fixed', top: 68, left: 0, right: 0, zIndex: 99 }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="#contatti" className="btn btn-primary" onClick={() => setOpen(false)}>
              Parliamo del tuo progetto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
