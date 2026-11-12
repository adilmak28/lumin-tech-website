import { MotionConfig } from 'framer-motion'
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton'
import Header from './components/Header'
import Hero from './components/Hero'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
      </main>
      <FloatingWhatsAppButton />
    </MotionConfig>
  )
}
