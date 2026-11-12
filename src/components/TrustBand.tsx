import { TRUST_POINTS } from '../data/services'
import Reveal from './ui/Reveal'

/** "Why LUMIN-TECH" — 4 trust points on a warm-lit band. */
export default function TrustBand() {
  return (
    <section
      aria-labelledby="why-heading"
      className="relative overflow-hidden border-y border-white/5 bg-navy-950 py-14 sm:py-16"
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[60rem] max-w-full -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="container-x relative">
        <Reveal className="mb-10 text-center">
          <p className="eyebrow">Why LUMIN-TECH</p>
          <h2 id="why-heading" className="mt-3 text-2xl font-bold sm:text-3xl">
            Importer prices. Local service you can trust.
          </h2>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {TRUST_POINTS.map(({ icon: Icon, title, stat, description }, i) => (
            <Reveal as="li" key={title} delay={i * 0.08}>
              <div className="flex h-full gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 lg:flex-col">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 text-navy-900 shadow-lg shadow-gold-500/20">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-gold-400 uppercase">
                    {stat}
                  </p>
                  <h3 className="mt-1 text-base font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
