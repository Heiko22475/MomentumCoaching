import { useEffect } from 'react'
import { X } from 'lucide-react'

type LegalType = 'impressum' | 'datenschutz'

type LegalModalProps = {
  type: LegalType
  onClose: () => void
}

const contentMap: Record<LegalType, { title: string; body: string[] }> = {
  impressum: {
    title: 'Impressum',
    body: [
      'Momentum Coaching',
      'Musterstraße 12',
      '80331 München',
      '',
      'Vertreten durch: Max Mustermann',
      'Telefon: +49 (0) 123 456 7890',
      'E-Mail: info@momentum-coaching.de',
      '',
      'Umsatzsteuer-ID: DE123456789',
      'Zuständige Aufsichtsbehörde: Industrie- und Handelskammer München',
    ],
  },
  datenschutz: {
    title: 'Datenschutz',
    body: [
      'Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst.',
      'Diese Website verarbeitet personenbezogene Daten nur im technisch notwendigen Umfang.',
      '',
      'Verantwortlicher: Momentum Coaching, Musterstraße 12, 80331 München',
      'Kontakt: info@momentum-coaching.de',
      '',
      'Zwecke der Verarbeitung:',
      '- Bereitstellung der Website',
      '- Analyse des Nutzerverhaltens nur mit Einwilligung',
      '',
      'Speicherdauer: Daten werden nur so lange gespeichert, wie es zur Erreichung des Zwecks erforderlich ist.',
      '',
      'Ihre Rechte: Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch, Datenübertragbarkeit.',
    ],
  },
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  const content = contentMap[type]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-navy-900/90 p-6 sm:p-8 shadow-2xl">
        <div className="flex items-start justify-between gap-6">
          <h2 className="text-2xl font-display text-white">{content.title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 p-2 text-gray-300 transition hover:text-white"
            aria-label="Schließen"
          >
            <X size={18} />
          </button>
        </div>
        <div className="mt-6 space-y-3 text-sm text-gray-300 leading-relaxed">
          {content.body.map((line, index) =>
            line === '' ? (
              <div key={`${type}-${index}`} className="h-2" />
            ) : (
              <p key={`${type}-${index}`}>{line}</p>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
