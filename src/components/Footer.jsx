const LogoMark = () => (
  <svg width="32" height="20" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="8" stroke="#1a2744" strokeWidth="3" fill="none"/>
    <circle cx="25" cy="11" r="8" stroke="#00b4d8" strokeWidth="3" fill="none"/>
    <path d="M17 6 Q18 11 17 16" stroke="#1a2744" strokeWidth="1.5" fill="none" opacity="0.6"/>
    <path d="M19 6 Q18 11 19 16" stroke="#00b4d8" strokeWidth="1.5" fill="none" opacity="0.6"/>
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <LogoMark />
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--white)', letterSpacing: '-0.02em' }}>
                  C&O <span style={{ color: 'var(--cyan)' }}>Web Studio</span>
                </div>
              </div>
            </div>
            <p>
              Landing page e siti vetrina per piccole imprese italiane. Statici, veloci, hostati gratuitamente su GitHub Pages.
            </p>
          </div>

          <div className="footer-col">
            <h4>Servizi</h4>
            <ul>
              <li><a href="#servizi">Landing Page</a></li>
              <li><a href="#servizi">Sito Vetrina</a></li>
              <li><a href="#servizi">Portfolio & Brand</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Studio</h4>
            <ul>
              <li><a href="#chi-siamo">Chi Siamo</a></li>
              <li><a href="#processo">Come Lavoriamo</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contatti">Contatti</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Tecnologie</h4>
            <ul>
              <li><a href="#servizi">GitHub Pages</a></li>
              <li><a href="#servizi">React / Vite</a></li>
              <li><a href="#servizi">SEO & Performance</a></li>
              <li>
                <a href="https://github.com/OLIX-boop" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <GitHubIcon /> OLIX-boop
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} C&O Web Studio · Olimpio & Cernuschi ·{' '}
            <a href="mailto:co.webstudios@gmail.com">co.webstudios@gmail.com</a>
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            Fatto con <span className="footer-heart">♥</span> in Italia ·{' '}
            <a href="https://github.com/OLIX-boop" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <GitHubIcon /> GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
