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
    <div
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        padding: '12px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          width: '100%',
          margin: '0 auto',
          background: 'rgba(5, 10, 20, 0.95)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          backdropFilter: 'blur(8px)',
          boxSizing: 'border-box',
        }}
      >
        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.6,
            color: '#cbd5e1',
            margin: '0 0 16px 0',
          }}
        >
          Diese Website verwendet derzeit keine Cookies und keine Analyse- oder Tracking-Tools.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            type="button"
            onClick={() => handleConsent('accepted')}
            style={{
              display: 'block',
              width: '100%',
              padding: '14px 20px',
              fontSize: '16px',
              fontWeight: 600,
              color: '#050a14',
              background: 'linear-gradient(135deg, #c49a35, #e8c050, #c49a35)',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              textAlign: 'center',
              boxSizing: 'border-box',
            }}
          >
            Verstanden
          </button>
          <button
            type="button"
            onClick={onOpenPrivacy}
            style={{
              display: 'block',
              width: '100%',
              padding: '10px',
              fontSize: '11px',
              fontWeight: 500,
              color: 'rgba(196, 154, 53, 0.8)',
              background: 'transparent',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              textAlign: 'center',
              boxSizing: 'border-box',
            }}
          >
            Datenschutz ansehen
          </button>
        </div>
      </div>
    </div>
  )
}
