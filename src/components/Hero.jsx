import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { motion } from 'framer-motion'

function Particles({ count = 200 }) {
  const mesh = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 32
      arr[i * 3 + 1] = (Math.random() - 0.5) * 22
      arr[i * 3 + 2] = (Math.random() - 0.5) * 16
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.022
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.055} color="#00b4d8" transparent opacity={0.65} sizeAttenuation />
    </points>
  )
}

function DimParticles({ count = 130 }) {
  const mesh = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 44
      arr[i * 3 + 1] = (Math.random() - 0.5) * 30
      arr[i * 3 + 2] = (Math.random() - 0.5) * 22
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y -= delta * 0.01
      mesh.current.rotation.x += delta * 0.007
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#2d5986" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

function FloatingIcosahedron() {
  const mesh = useRef()
  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x = state.clock.elapsedTime * 0.09
    mesh.current.rotation.y = state.clock.elapsedTime * 0.13
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.38) * 0.55 + 0.4
  })
  return (
    <mesh ref={mesh} position={[4.5, 0.4, -1.5]}>
      <icosahedronGeometry args={[2.3, 1]} />
      <meshBasicMaterial color="#00b4d8" wireframe transparent opacity={0.1} />
    </mesh>
  )
}

function FloatingTorus() {
  const mesh = useRef()
  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x = state.clock.elapsedTime * 0.14
    mesh.current.rotation.z = state.clock.elapsedTime * 0.09
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.32 + 2) * 0.45 - 0.6
  })
  return (
    <mesh ref={mesh} position={[-4.8, -0.6, -2.8]}>
      <torusGeometry args={[1.5, 0.28, 7, 22]} />
      <meshBasicMaterial color="#1e3a5f" wireframe transparent opacity={0.2} />
    </mesh>
  )
}

function FloatingOctahedron() {
  const mesh = useRef()
  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x = state.clock.elapsedTime * 0.22
    mesh.current.rotation.y = state.clock.elapsedTime * 0.3
    mesh.current.position.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.5 + 0.5
    mesh.current.position.y = Math.cos(state.clock.elapsedTime * 0.28) * 0.5 - 2.8
  })
  return (
    <mesh ref={mesh} position={[0.5, -2.8, 1.2]}>
      <octahedronGeometry args={[0.75, 0]} />
      <meshBasicMaterial color="#48cae4" wireframe transparent opacity={0.22} />
    </mesh>
  )
}

function CameraRig() {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.7 - camera.position.x) * 0.03
    camera.position.y += (mouse.current.y * 0.4 - camera.position.y) * 0.03
    camera.lookAt(0, 0, 0)
  })

  return null
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] } },
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-canvas">
        <Canvas
          camera={{ position: [0, 0, 9], fov: 72 }}
          gl={{ antialias: true, alpha: false }}
          dpr={[1, 1.5]}
          performance={{ min: 0.5 }}
        >
          <color attach="background" args={['#060c1a']} />
          <fog attach="fog" args={['#060c1a', 18, 38]} />
          <DimParticles />
          <Particles />
          <FloatingIcosahedron />
          <FloatingTorus />
          <FloatingOctahedron />
          <CameraRig />
        </Canvas>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-label" variants={item}>
            C&O Web Studio
          </motion.span>

          <motion.h1 className="hero-title" variants={item}>
            Il tuo sito web.<br />
            <span className="hero-title-accent">Zero server.</span><br />
            Massima impressione.
          </motion.h1>

          <motion.p className="hero-subtitle" variants={item}>
            Creiamo landing page professionali per piccole imprese italiane —
            veloci, eleganti e ospitate <strong>gratuitamente</strong> su GitHub Pages
            con il tuo dominio personalizzato.
          </motion.p>

          <motion.div className="hero-ctas" variants={item}>
            <a href="#contatti" className="btn btn-primary">
              Inizia il progetto
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#portfolio" className="btn btn-outline-white">
              Vedi i nostri lavori
            </a>
          </motion.div>

          <motion.div className="hero-badges" variants={item}>
            <span className="badge">GitHub Pages</span>
            <span className="badge">Dominio Custom</span>
            <span className="badge">Mobile-First</span>
            <span className="badge">SEO Ready</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.2 }}
      >
        <div className="scroll-line" />
        <span>Scorri</span>
      </motion.div>
    </section>
  )
}
