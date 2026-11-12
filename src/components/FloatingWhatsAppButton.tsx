import { useEffect, useState } from 'react'
import { SITE } from '../data/site'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import { WhatsAppIcon } from './icons/BrandIcons'

/** Persistent bottom-right WhatsApp bubble, visible on every section. */
export default function FloatingWhatsAppButton({
  message = SITE.defaultWhatsAppMessage,
}: {
  message?: string
}) {
  // Show the "Need a quote?" label briefly after the user starts scrolling
  const [showLabel, setShowLabel] = useState(false)

  useEffect(() => {
    let hideTimer: number | undefined
    const onScroll = () => {
      if (window.scrollY > 400) {
        setShowLabel(true)
        window.removeEventListener('scroll', onScroll)
        hideTimer = window.setTimeout(() => setShowLabel(false), 6000)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.clearTimeout(hideTimer)
    }
  }, [])

  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with LUMIN-TECH on WhatsApp"
      className="group fixed right-4 bottom-4 z-50 flex items-center gap-3 sm:right-6 sm:bottom-6"
    >
      <span
        className={`hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy-900 shadow-xl transition-all duration-300 sm:block ${
          showLabel
            ? 'translate-x-0 opacity-100'
            : 'pointer-events-none translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
        }`}
      >
        Need a quote? Chat now
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-xl shadow-black/30 transition group-hover:scale-105 group-hover:bg-whatsapp-dark">
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-25 motion-reduce:hidden" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
    </a>
  )
}
