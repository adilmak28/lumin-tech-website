import { motion } from 'framer-motion'
import { ArrowRight, Building2, Home, Landmark, Store } from 'lucide-react'
import { IMAGES } from '../data/images'
import SmartImage from './ui/SmartImage'
import WhatsAppButton from './WhatsAppButton'

const HIGHLIGHTS = [
  { icon: Home, label: 'Homes & villas' },
  { icon: Building2, label: 'Offices & shops' },
  { icon: Store, label: 'Commercial spaces' },
  { icon: Landmark, label: 'Housing societies & builders' },
]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pt-24 pb-16 lg:pt-28"
    >
      {/* Background photo + overlays */}
      <div className="absolute inset-0 -z-10">
        <SmartImage
          image={IMAGES.heroChandelier}
          widths={[640, 960, 1280, 1600, 2000]}
          sizes="100vw"
          priority
          className="h-full w-full object-cover object-[70%_center] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-950/60" />
        {/* warm glow */}
        <div className="absolute top-1/4 right-[10%] h-72 w-72 rounded-full bg-gold-400/20 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <div className="container-x">
        <div className="max-w-3xl">
          <motion.p {...fadeUp(0)} className="eyebrow mb-5">
            <span className="h-px w-6 bg-gold-400/70" />
            Top Lights · Islamabad
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Premium Lighting Solutions —{' '}
            <span className="text-gradient-gold">Imported &amp; Installed</span> Across Pakistan
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Chandeliers, street pole lights, decorative &amp; neon LEDs, and complete electrical
            products — sourced directly from manufacturers in China, so you get better prices, wider
            variety and bulk rates for every project.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              size="lg"
              message="Hi LUMIN-TECH, I'd like to discuss lighting for my project."
            >
              Chat on WhatsApp
            </WhatsAppButton>
            <a href="#products" className="btn-outline px-6 py-3.5 text-base">
              View Products
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.p
            {...fadeUp(0.45)}
            className="mt-12 border-t border-white/10 pt-7 text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase"
          >
            Lighting for
          </motion.p>
          <motion.ul
            {...fadeUp(0.5)}
            className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4"
          >
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-start gap-2.5 text-sm text-slate-300">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{label}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
