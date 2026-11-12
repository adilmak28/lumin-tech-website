import { Quote, Star } from 'lucide-react'
import { CLIENTS, TESTIMONIALS } from '../data/testimonials'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-navy-950">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by homeowners, businesses & builders"
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="li" key={i} delay={i * 0.08}>
              <figure className="card relative flex h-full flex-col p-6 sm:p-7">
                <Quote className="h-8 w-8 text-gold-400/40" />
                <div className="mt-4 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star
                      key={s}
                      className={`h-4 w-4 ${s < t.rating ? 'fill-gold-400 text-gold-400' : 'text-slate-600'}`}
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-slate-300">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-400/15 text-sm font-bold text-gold-400">
                    {t.name.replace(/[^A-Za-z]/g, '').charAt(0) || '?'}
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{t.name}</span>
                    <span className="block text-xs text-slate-500">{t.role}</span>
                  </span>
                  {t.placeholder && (
                    <span className="ml-auto rounded-full border border-dashed border-slate-600 px-2 py-0.5 text-[0.65rem] tracking-wide text-slate-500 uppercase">
                      Sample review
                    </span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        {CLIENTS.length > 0 && (
          <Reveal className="mt-14 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
              Supplying projects for
            </p>
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {CLIENTS.map((client) => (
                <li
                  key={client}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400"
                >
                  {client}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  )
}
