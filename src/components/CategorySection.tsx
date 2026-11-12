import { ArrowRight, Check } from 'lucide-react'
import { CATEGORIES, type Category, type CategoryId } from '../data/categories'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import SmartImage from './ui/SmartImage'
import WhatsAppButton from './WhatsAppButton'

interface CategorySectionProps {
  /** Called when "View Products" is clicked — filters the featured grid */
  onViewProducts: (id: CategoryId) => void
}

// Bento layout on large screens: 2 wide cards on top, 3 below
const LAYOUT = ['lg:col-span-3', 'lg:col-span-3', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2']

export default function CategorySection({ onViewProducts }: CategorySectionProps) {
  return (
    <section id="products" className="section relative bg-navy-900">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Products"
          title={
            <>
              Everything in lighting, <span className="text-gradient-gold">under one roof</span>
            </>
          }
          description="Imported directly from trusted manufacturers in China — wider variety and better prices than local resellers, for single pieces or bulk orders."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6 lg:gap-6">
          {CATEGORIES.map((category, i) => (
            <Reveal
              key={category.id}
              delay={(i % 3) * 0.08}
              className={`${LAYOUT[i]} ${i === CATEGORIES.length - 1 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
            >
              <CategoryCard
                category={category}
                wide={i < 2}
                onViewProducts={() => onViewProducts(category.id)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryCard({
  category,
  wide,
  onViewProducts,
}: {
  category: Category
  wide: boolean
  onViewProducts: () => void
}) {
  const Icon = category.icon
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-gold-400/30">
      <div className={`relative overflow-hidden ${wide ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
        <SmartImage
          image={category.image}
          widths={[400, 640, 960]}
          aspectRatio={wide ? 16 / 9 : 16 / 10}
          sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-navy-800/20 to-transparent" />
        <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-xl border border-gold-400/30 bg-navy-900/80 text-gold-400 backdrop-blur">
          <Icon className="h-5 w-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold">{category.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{category.description}</p>
        <ul className="mt-4 space-y-1.5">
          {category.items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
              <Check className="h-4 w-4 shrink-0 text-gold-400" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
          <button
            type="button"
            onClick={onViewProducts}
            className="btn-outline px-4 py-2 text-xs sm:text-sm"
          >
            View Products
            <ArrowRight className="h-4 w-4" />
          </button>
          <WhatsAppButton
            size="sm"
            variant="subtle"
            message={category.whatsappMessage}
            className="sm:text-sm"
          >
            Inquire on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </article>
  )
}
