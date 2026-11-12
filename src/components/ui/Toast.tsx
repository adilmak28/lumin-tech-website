import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'
import { useEffect } from 'react'

interface ToastProps {
  message: string | null
  onClose: () => void
  /** ms before auto-dismiss */
  duration?: number
}

export default function Toast({ message, onClose, duration = 6000 }: ToastProps) {
  useEffect(() => {
    if (!message) return
    const t = window.setTimeout(onClose, duration)
    return () => window.clearTimeout(t)
  }, [message, onClose, duration])

  return (
    <div
      aria-live="polite"
      role="status"
      className="pointer-events-none fixed inset-x-0 bottom-24 z-[70] flex justify-center px-4"
    >
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="pointer-events-auto flex max-w-md items-start gap-3 rounded-2xl border border-gold-400/30 bg-navy-800 p-4 text-sm text-slate-200 shadow-2xl shadow-black/40"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
            <p className="flex-1">{message}</p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Dismiss"
              className="text-slate-500 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
