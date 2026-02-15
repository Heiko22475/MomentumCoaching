import { useState } from 'react'

type CookieBannerProps = {
  onOpenPrivacy: () => void
}

type ConsentState = 'accepted' | 'declined' | null

export default function CookieBanner({ onOpenPrivacy }: CookieBannerProps) {
  const [consent, setConsent] = useState<ConsentState>(null)

  const handleConsent = (value: 'accepted' | 'declined') => {
    setConsent(value)
  }

  if (consent) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-6 sm:px-6">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-navy-900/95 p-4 sm:p-6 shadow-2xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-gray-300 leading-relaxed">
            Wir verwenden Cookies, um diese Website zu verbessern. Sie können Ihre Auswahl jederzeit in den
            Datenschutzhinweisen nachlesen.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" className="btn-outline" onClick={() => handleConsent('declined')}>
              Ablehnen
            </button>
            <button type="button" className="btn-gold" onClick={() => handleConsent('accepted')}>
              Akzeptieren
            </button>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-xs uppercase tracking-[0.2em] text-gold-400/80 hover:text-gold-300 transition"
            >
              Datenschutz
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
