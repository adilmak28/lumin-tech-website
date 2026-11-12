import { AnimatePresence, motion } from 'framer-motion'
import { CATEGORIES, type CategoryId } from '../data/categories'
import { PRODUCTS } from '../data/products'
import ProductCard from './ProductCard'
import SectionHeading from './ui/SectionHeading'
import WhatsAppButton from './WhatsAppButton'

export type ProductFilter = CategoryId | 'all'

interface FeaturedProductsProps {
  filter: ProductFilter
  onFilterChange: (filter: ProductFilter) => void
}

export default function FeaturedProducts({ filter, onFilterChange }: FeaturedProductsProps) {
  const visible = filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)
  const tabs: { id: ProductFilter; label: string }[] = [
    { id: 'all', label: 'All' },
    ...CATEGORIES.map((c) => ({ id: c.id, label: c.shortName })),
  ]
  const activeCategory = CATEGORIES.find((c) => c.id === filter)

  return (
    <section id="featured" className="section relative bg-navy-950">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured Products"
          title="Popular picks from our latest shipments"
          description="Prices vary with quantity and specifications — message us for today's rate, wholesale pricing and stock availability."
        />

        <div
          role="group"
          aria-label="Filter products by category"
          className="-mx-4 mt-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        >
          {tabs.map((tab) => {
            const selected = tab.id === filter
            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={selected}
                onClick={() => onFilterChange(tab.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
                  selected
                    ? 'border-gold-400 bg-gold-400 text-navy-900'
                    : 'border-white/10 text-slate-300 hover:border-gold-400/50 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <motion.ul layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((product) => (
              <motion.li
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <ProductCard product={product} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-slate-400">
            {activeCategory
              ? `Looking for more ${activeCategory.shortName.toLowerCase()}? Ask for the full range.`
              : "Can't find what you need? Many more designs are available on request."}
          </p>
          <WhatsAppButton
            message={
              activeCategory
                ? `Hi, please send me your full catalogue for ${activeCategory.name}.`
                : 'Hi, please send me your full product catalogue.'
            }
          >
            Request Full Catalogue
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
