import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start'
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      <span className="eyebrow">
        <span className="h-px w-6 bg-gold-400/70" />
        {eyebrow}
      </span>
      <h2 className="text-3xl leading-tight font-bold sm:text-4xl">{title}</h2>
      {description && <p className="text-base leading-relaxed text-slate-400">{description}</p>}
    </Reveal>
  )
}
