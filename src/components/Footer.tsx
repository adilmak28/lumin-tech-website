import { MapPin, Phone } from 'lucide-react'
import { CATEGORIES } from '../data/categories'
import { NAV_LINKS, SITE } from '../data/site'
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from './icons/BrandIcons'
import Logo from './Logo'
import WhatsAppButton from './WhatsAppButton'

const SOCIALS = [
  { label: 'Facebook', href: SITE.social.facebook, icon: FacebookIcon },
  { label: 'Instagram', href: SITE.social.instagram, icon: InstagramIcon },
  { label: 'TikTok', href: SITE.social.tiktok, icon: TikTokIcon },
  { label: 'YouTube', href: SITE.social.youtube, icon: YouTubeIcon },
]

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950 pt-16 pb-24 sm:pb-10">
      <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            {SITE.name} ({SITE.shopName}) imports LED &amp; SMD lighting directly from China and
            supplies chandeliers, street lights, outdoor, decorative and electrical products across
            Pakistan.
          </p>
          <ul className="mt-6 flex gap-3">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={href === '#' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-gold-400/60 hover:text-gold-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h3 className="text-sm font-semibold tracking-wider uppercase">Explore</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-slate-400 hover:text-gold-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold tracking-wider uppercase">Products</h3>
          <ul className="mt-4 space-y-2.5">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <a href="#products" className="text-sm text-slate-400 hover:text-gold-300">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold tracking-wider uppercase">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                {SITE.address.line1}, {SITE.address.line2}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={SITE.phoneHref} className="hover:text-gold-300">
                {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
          <WhatsAppButton size="sm" className="mt-5">
            WhatsApp {SITE.phoneDisplay}
          </WhatsAppButton>
        </div>
      </div>

      <div className="container-x mt-12 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
        <p>
          © {YEAR} {SITE.name} · {SITE.shopName}, {SITE.city}. All rights reserved.
        </p>
        <p>LED lights · Chandeliers · Street lights · Electrical supplies — Pakistan</p>
      </div>
    </footer>
  )
}
