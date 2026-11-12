import { getCategory } from '../data/categories'
import { productWhatsAppMessage, type Product } from '../data/products'
import SmartImage from './ui/SmartImage'
import WhatsAppButton from './WhatsAppButton'

export default function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category)
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-gold-400/30">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-700">
        <SmartImage
          image={product.image}
          widths={[320, 480, 720]}
          aspectRatio={4 / 3}
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-gold-400 px-2.5 py-1 text-[0.7rem] font-bold tracking-wide text-navy-900 uppercase">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold tracking-widest text-gold-400/80 uppercase">
          {category.shortName}
        </p>
        <h3 className="mt-1.5 text-lg leading-snug font-bold">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{product.spec}</p>
        <div className="mt-auto pt-5">
          <p className="mb-3 text-xs text-slate-500">Price on request · depends on quantity</p>
          <WhatsAppButton
            size="sm"
            variant="outline"
            fullWidth
            message={productWhatsAppMessage(product)}
            className="py-2.5 sm:text-sm"
          >
            Inquire on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </article>
  )
}
