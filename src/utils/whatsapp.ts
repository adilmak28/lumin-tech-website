import { SITE } from '../data/site'

/** Builds a click-to-chat link: https://wa.me/<number>?text=<encoded message> */
export function buildWhatsAppUrl(
  message: string = SITE.defaultWhatsAppMessage,
  number: string = SITE.whatsappNumber,
): string {
  const digits = number.replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}
