/**
 * Business details used across the site (header, footer, contact, WhatsApp).
 * Edit here once and it updates everywhere.
 */
export const SITE = {
  name: 'LUMIN-TECH',
  tagline: 'Top Lights',
  shopName: 'TOP LIGHTS',
  city: 'Islamabad',

  /** Digits only, international format, no "+" — used to build wa.me links */
  whatsappNumber: '923215007702',
  /** How the number is shown on the page */
  phoneDisplay: '+92 321 5007702',
  /** Used in tel: links */
  phoneHref: 'tel:+923215007702',

  // TODO: replace with the real shop address
  address: {
    line1: 'Shop No. __, [Market / Plaza Name]',
    line2: '[Sector / Area], Islamabad, Pakistan',
  },
  // TODO: replace with the real email (or remove)
  email: 'info@lumin-tech.pk',
  hours: 'Mon – Sat: 10:00 AM – 9:00 PM',

  /**
   * Google Maps embed. Placeholder points at central Islamabad.
   * To use the real shop: open Google Maps → find the shop → Share → "Embed a map"
   * → copy the `src="..."` URL and paste it here.
   */
  mapEmbedUrl: 'https://maps.google.com/maps?q=33.6844,73.0479&z=12&output=embed',
  mapLinkUrl: 'https://www.google.com/maps/search/?api=1&query=33.6844,73.0479',

  // TODO: replace "#" with real profile URLs (leave "#" to keep as placeholder)
  social: {
    facebook: '#',
    instagram: '#',
    tiktok: '#',
    youtube: '#',
  },

  defaultWhatsAppMessage: "Hi LUMIN-TECH, I'd like to know more about your lights.",
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
] as const
