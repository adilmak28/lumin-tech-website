import { MotionConfig } from 'framer-motion'
import { useEffect, useState } from 'react'
import CategorySection from './components/CategorySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FeaturedProducts, { type ProductFilter } from './components/FeaturedProducts'
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton'
import Header from './components/Header'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import TrustBand from './components/TrustBand'

export default function App() {
  const [productFilter, setProductFilter] = useState<ProductFilter>('all')

  // Sections are rendered by React, so the browser can't jump to a shared link
  // like "/#contact" on first load — do it once the page has mounted.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    const frame = requestAnimationFrame(() =>
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant' }),
    )
    return () => cancelAnimationFrame(frame)
  }, [])

  const showCategory = (filter: ProductFilter) => {
    setProductFilter(filter)
    document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <CategorySection onViewProducts={showCategory} />
        <TrustBand />
        <ServicesSection />
        <FeaturedProducts filter={productFilter} onFilterChange={setProductFilter} />
        <Gallery />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </MotionConfig>
  )
}
