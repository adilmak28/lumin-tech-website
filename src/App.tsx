import { MotionConfig } from 'framer-motion'
import { useState } from 'react'
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
