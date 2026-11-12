import { Clock, ExternalLink, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useCallback, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { CATEGORIES } from '../data/categories'
import { SITE } from '../data/site'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import { WhatsAppIcon } from './icons/BrandIcons'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Toast from './ui/Toast'
import WhatsAppButton from './WhatsAppButton'

const INTERESTS = [
  ...CATEGORIES.map((c) => c.name),
  'Installation / fitting service',
  'Bulk / contract supply',
  'Other',
]

const inputClass =
  'w-full rounded-xl border border-white/10 bg-navy-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-gold-400/70 focus:ring-2 focus:ring-gold-400/20 focus:outline-none'

export default function ContactSection() {
  return (
    <>
      <LocationBlock />
      <ContactBlock />
    </>
  )
}

function LocationBlock() {
  const details = [
    {
      icon: MapPin,
      label: 'Visit our shop',
      value: (
        <>
          {SITE.address.line1}
          <br />
          {SITE.address.line2}
        </>
      ),
    },
    {
      icon: Phone,
      label: 'Call / WhatsApp',
      value: (
        <a href={SITE.phoneHref} className="hover:text-gold-300">
          {SITE.phoneDisplay}
        </a>
      ),
    },
    {
      icon: Mail,
      label: 'Email',
      value: (
        <a href={`mailto:${SITE.email}`} className="hover:text-gold-300">
          {SITE.email}
        </a>
      ),
    },
    { icon: Clock, label: 'Opening hours', value: SITE.hours },
  ]

  return (
    <section id="location" className="section bg-navy-900">
      <div className="container-x">
        <SectionHeading
          eyebrow="Location"
          title={
            <>
              Visit <span className="text-gradient-gold">{SITE.shopName}</span> in Islamabad
            </>
          }
          description="See our chandeliers and lights in person, or just message us — we'll send photos and videos on WhatsApp."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <Reveal className="card flex flex-col gap-6 p-6 sm:p-8 lg:col-span-2">
            <ul className="space-y-6">
              {details.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-400/10 text-gold-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                      {label}
                    </p>
                    <p className="mt-1 text-slate-200">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3 sm:flex-row lg:flex-col">
              <WhatsAppButton
                className="flex-1"
                message="Hi, I'd like directions to your shop in Islamabad."
              >
                Get directions on WhatsApp
              </WhatsAppButton>
              <a
                href={SITE.mapLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1"
              >
                Open in Google Maps
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="overflow-hidden rounded-2xl border border-white/5 lg:col-span-3"
          >
            <iframe
              title="LUMIN-TECH location on Google Maps"
              src={SITE.mapEmbedUrl}
              className="h-80 w-full grayscale-[35%] sm:h-96 lg:h-full lg:min-h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactBlock() {
  const formRef = useRef<HTMLFormElement>(null)
  const [toast, setToast] = useState<string | null>(null)
  const closeToast = useCallback(() => setToast(null), [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // UI only for now — no backend. Hook up Formspree / EmailJS / an API here later.
    const name = String(new FormData(e.currentTarget).get('name') ?? '').trim()
    setToast(
      `Thanks${name ? `, ${name}` : ''}! Your inquiry has been noted. For the fastest reply, message us on WhatsApp at ${SITE.phoneDisplay}.`,
    )
    e.currentTarget.reset()
  }

  /** Sends the form contents as a pre-filled WhatsApp message instead. */
  const sendViaWhatsApp = () => {
    const form = formRef.current
    if (!form) return
    if (!form.reportValidity()) return
    const data = new FormData(form)
    const lines = [
      'Hi LUMIN-TECH, I have an inquiry:',
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      data.get('city') ? `City: ${data.get('city')}` : null,
      `Interested in: ${data.get('interest')}`,
      data.get('message') ? `Details: ${data.get('message')}` : null,
    ].filter(Boolean)
    window.open(buildWhatsAppUrl(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="section relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="Get a quote in minutes"
            description="Tell us what you're looking for — a single chandelier or lighting for an entire society. We usually reply fastest on WhatsApp."
          />
          <Reveal delay={0.1} className="mt-8 space-y-4">
            <a
              href={buildWhatsAppUrl("Hi LUMIN-TECH, I'd like a quote.")}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 p-5 transition hover:border-whatsapp/40"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-whatsapp text-white">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm text-slate-400">WhatsApp (fastest)</span>
                <span className="block text-lg font-bold text-white">{SITE.phoneDisplay}</span>
              </span>
            </a>
            <a
              href={SITE.phoneHref}
              className="card flex items-center gap-4 p-5 transition hover:border-gold-400/40"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-400 text-navy-900">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-slate-400">Call us</span>
                <span className="block text-lg font-bold text-white">{SITE.phoneDisplay}</span>
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="card space-y-4 p-6 sm:p-8"
            aria-label="Inquiry form"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Full name"
                  className={inputClass}
                />
              </Field>
              <Field label="Phone / WhatsApp" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="03XX XXXXXXX"
                  pattern="[0-9+\s\-]{10,16}"
                  className={inputClass}
                />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Interested in" htmlFor="interest">
                <select
                  id="interest"
                  name="interest"
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {INTERESTS.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="City" htmlFor="city">
                <input
                  id="city"
                  name="city"
                  autoComplete="address-level2"
                  placeholder="Islamabad"
                  className={inputClass}
                />
              </Field>
            </div>
            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Quantity, room size, project details…"
                className={`${inputClass} resize-y`}
              />
            </Field>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button type="submit" className="btn-gold flex-1">
                <Send className="h-4 w-4" />
                Send Inquiry
              </button>
              <button
                type="button"
                onClick={sendViaWhatsApp}
                className="btn flex-1 bg-whatsapp text-white hover:bg-whatsapp-dark"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Send via WhatsApp
              </button>
            </div>
            <p className="text-xs text-slate-500">
              We'll only use your details to respond to your inquiry.
            </p>
          </form>
        </Reveal>
      </div>
      <Toast message={toast} onClose={closeToast} />
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-slate-300">
        {label}
      </label>
      {children}
    </div>
  )
}
