import { ArrowUpRight, Building2 } from 'lucide-react'
import { IMAGES } from '../data/images'
import { SERVICES } from '../data/services'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import SmartImage from './ui/SmartImage'
import WhatsAppButton from './WhatsAppButton'

export default function ServicesSection() {
  return (
    <section id="services" className="section bg-navy-900">
      <div className="container-x">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Our Services"
            title={
              <>
                From selection to <span className="text-gradient-gold">switch-on</span>
              </>
            }
            description="We don't just sell lights — our Islamabad team helps you choose, delivers, installs and supports every order."
          />
          <Reveal className="relative hidden overflow-hidden rounded-2xl lg:block">
            <SmartImage
              image={IMAGES.servicesInstallation}
              widths={[640, 960, 1280]}
              aspectRatio={16 / 7}
              sizes="50vw"
              className="aspect-[16/7] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/70 to-transparent" />
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description, whatsappMessage }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 0.08}>
              <a
                href={buildWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-400/30"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold-400/20 bg-gold-400/10 text-gold-400 transition group-hover:bg-gold-400 group-hover:text-navy-900">
                    <Icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-slate-600 transition group-hover:text-gold-400" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
                <span className="mt-auto pt-5 text-sm font-semibold text-whatsapp">
                  Ask on WhatsApp →
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        {/* Contract supply call-out */}
        <Reveal className="relative mt-14 overflow-hidden rounded-3xl border border-gold-400/20">
          <SmartImage
            image={IMAGES.contractStreetLighting}
            widths={[640, 960, 1400]}
            aspectRatio={21 / 9}
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40" />
          <div className="relative flex flex-col gap-6 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div className="max-w-xl">
              <p className="eyebrow">
                <Building2 className="h-4 w-4" /> For societies, builders & contractors
              </p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Street lighting for your entire project — at import rates
              </h3>
              <p className="mt-3 text-slate-300">
                Share your road length or BOQ and get a complete quote for poles, LED/solar fixtures,
                cabling and installation.
              </p>
            </div>
            <WhatsAppButton
              size="lg"
              className="shrink-0"
              message="Hi, I'd like a contract quote for street lighting for a housing society / project. Here are the details:"
            >
              Request a Project Quote
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
