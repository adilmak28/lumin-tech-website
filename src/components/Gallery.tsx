import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { GALLERY, type GalleryItem } from '../data/gallery'
import { sizedSrc } from '../utils/image'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import SmartImage from './ui/SmartImage'
import WhatsAppButton from './WhatsAppButton'

const SPAN_CLASSES: Record<NonNullable<GalleryItem['span']>, string> = {
  large: 'col-span-2 row-span-2',
  wide: 'col-span-2',
  tall: 'row-span-2',
}

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null)
  const close = useCallback(() => setIndex(null), [])
  const step = useCallback(
    (dir: 1 | -1) =>
      setIndex((i) => (i === null ? i : (i + dir + GALLERY.length) % GALLERY.length)),
    [],
  )

  return (
    <section id="gallery" className="section bg-navy-900">
      <div className="container-x">
        <SectionHeading
          eyebrow="Gallery"
          title="Projects that shine"
          description="A look at the chandeliers, outdoor, street and decorative lighting we supply and install."
        />

        <ul className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 md:grid-cols-4 lg:auto-rows-[220px]">
          {GALLERY.map((item, i) => (
            <Reveal
              as="li"
              key={item.image.src}
              delay={(i % 4) * 0.06}
              className={item.span ? SPAN_CLASSES[item.span] : ''}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block h-full w-full overflow-hidden rounded-2xl bg-navy-800"
                aria-label={`View photo: ${item.caption}`}
              >
                <SmartImage
                  image={item.image}
                  widths={[320, 480, 800]}
                  sizes={item.span === 'large' ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent opacity-80 transition group-hover:opacity-100" />
                <span className="absolute right-3 bottom-3 left-3 flex items-end justify-between gap-2 text-left">
                  <span className="text-xs font-medium text-white sm:text-sm">{item.caption}</span>
                  <ZoomIn className="h-4 w-4 shrink-0 text-gold-400 opacity-0 transition group-hover:opacity-100" />
                </span>
              </button>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <WhatsAppButton
            variant="outline"
            message="Hi, can you share more photos of your recent installations?"
          >
            See more project photos on WhatsApp
          </WhatsAppButton>
        </div>
      </div>

      <AnimatePresence>
        {index !== null && (
          <Lightbox item={GALLERY[index]} onClose={close} onPrev={() => step(-1)} onNext={() => step(1)} />
        )}
      </AnimatePresence>
    </section>
  )
}

function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      previouslyFocused?.focus()
    }
  }, [onClose, onPrev, onNext])

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        aria-label="Previous photo"
        className="absolute left-2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        aria-label="Next photo"
        className="absolute right-2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <motion.figure
        key={item.image.src}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={sizedSrc(item.image.src, 1600)}
          alt={item.image.alt}
          className="max-h-[78vh] w-auto rounded-xl object-contain"
        />
        <figcaption className="mt-3 text-center text-sm text-slate-300">{item.caption}</figcaption>
      </motion.figure>
    </motion.div>
  )
}
