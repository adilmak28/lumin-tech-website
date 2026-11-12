import type { ReactNode } from 'react'
import { SITE } from '../data/site'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import { WhatsAppIcon } from './icons/BrandIcons'

type Variant = 'solid' | 'outline' | 'subtle'
type Size = 'sm' | 'md' | 'lg'

export interface WhatsAppButtonProps {
  /** Pre-filled chat message, e.g. "Hi, I'd like a quote for Chandeliers." */
  message?: string
  /** Button text (defaults to "Chat on WhatsApp") */
  children?: ReactNode
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  className?: string
  /** Accessible label override, useful for icon-only buttons */
  ariaLabel?: string
}

const variants: Record<Variant, string> = {
  solid: 'bg-whatsapp text-white shadow-lg shadow-whatsapp/25 hover:bg-whatsapp-dark',
  outline: 'border border-whatsapp/60 text-whatsapp hover:bg-whatsapp hover:text-white',
  subtle: 'bg-whatsapp/10 text-whatsapp hover:bg-whatsapp hover:text-white',
}

const sizes: Record<Size, string> = {
  sm: 'px-3.5 py-2 text-xs',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-base',
}

/** Reusable click-to-chat button. Builds a wa.me link from the `message` prop. */
export default function WhatsAppButton({
  message = SITE.defaultWhatsAppMessage,
  children = 'Chat on WhatsApp',
  variant = 'solid',
  size = 'md',
  fullWidth = false,
  className = '',
  ariaLabel,
}: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 active:scale-[0.98]',
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        className,
      ].join(' ')}
    >
      <WhatsAppIcon className={size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} />
      {children}
    </a>
  )
}
