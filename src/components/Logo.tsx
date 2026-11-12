import { useId } from 'react'

interface LogoMarkProps {
  className?: string
}

/** LT monogram inside a glowing bulb — inline SVG, no external assets. */
export function LogoMark({ className = 'h-10 w-10' }: LogoMarkProps) {
  const id = useId()
  const glow = `${id}-glow`
  const bulb = `${id}-bulb`

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={glow} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#f0b429" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f0b429" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={bulb} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8d27a" />
          <stop offset="100%" stopColor="#d4a017" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="20" r="22" fill={`url(#${glow})`} />
      {/* bulb glass */}
      <path
        d="M24 5.5c-7.6 0-13.5 5.9-13.5 13.3 0 4.5 2.2 8.1 5.4 10.6 1.3 1 2.1 2.5 2.1 4.1v1.5h12v-1.5c0-1.6.8-3.1 2.1-4.1 3.2-2.5 5.4-6.1 5.4-10.6C37.5 11.4 31.6 5.5 24 5.5Z"
        fill={`url(#${bulb})`}
      />
      {/* screw base */}
      <rect x="18" y="37" width="12" height="2.6" rx="1.3" fill="#d4a017" />
      <rect x="19.5" y="41" width="9" height="2.4" rx="1.2" fill="#a97e0f" />
      {/* LT monogram */}
      <path
        d="M16.6 12.5h2.9v10.6h5.6v2.5h-8.5V12.5Zm9.2 0h9.6v2.5h-3.35v10.6h-2.9V15h-3.35v-2.5Z"
        fill="#0a0f1e"
      />
    </svg>
  )
}

interface LogoProps {
  className?: string
  showTagline?: boolean
}

export default function Logo({ className = '', showTagline = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-wide text-white">
          LUMIN<span className="text-gold-400">-</span>TECH
        </span>
        {showTagline && (
          <span className="mt-1 text-[0.65rem] font-semibold tracking-[0.3em] text-gold-400 uppercase">
            Top Lights
          </span>
        )}
      </span>
    </span>
  )
}
