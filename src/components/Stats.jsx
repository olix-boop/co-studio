import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

function Counter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1400
    const steps = 60
    const increment = target / steps
    const interval = duration / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

const stats = [
  { value: 15, suffix: '+', label: 'Progetti completati' },
  { value: 100, suffix: '%', label: 'Clienti soddisfatti' },
  { value: 0, suffix: '€', prefix: '', label: 'Costi di hosting mensili', special: true },
  { value: 2, suffix: ' sett.', label: 'Dal brief al go-live' },
]

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="stats" ref={ref}>
      <div className="stats-inner">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="stat-number">
              {s.special ? (
                <span>
                  <span style={{ background: 'var(--gradient-cyan)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    <Counter target={s.value} suffix={s.suffix} prefix={s.prefix} />
                  </span>
                </span>
              ) : (
                <span>
                  <Counter target={s.value} suffix={s.suffix} prefix={s.prefix} />
                </span>
              )}
            </div>
            <p className="stat-label">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
