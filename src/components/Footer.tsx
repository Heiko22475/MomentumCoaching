import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = [
  { to: '/', label: 'Start' },
  { to: '/angebot', label: 'Angebot' },
  { to: '/arbeitsweise', label: 'Arbeitsweise' },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy-900/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">

          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full border border-gold-500/40 flex items-center justify-center group-hover:border-gold-400 transition-all">
                <span className="text-gold-400 font-display font-bold">M</span>
              </div>
              <span className="text-white font-display font-semibold text-lg tracking-wide">
                Momentum Coaching
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Professionelles Coaching für Unternehmer, Selbstständige und Führungskräfte. 
              Klarheit gewinnen. Fokus setzen. Wachstum erleben.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gold-400/80 uppercase text-xs tracking-[0.2em] font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight
                      size={14}
                      className="text-gold-600/50 group-hover:text-gold-400 transition-colors"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-400/80 uppercase text-xs tracking-[0.2em] font-semibold mb-6">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={16} className="text-gold-600/60" />
                info@momentum-coaching.de
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={16} className="text-gold-600/60" />
                +49 (0) 123 456 7890
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-gold-600/60 mt-0.5" />
                <span>Musterstraße 12<br />80331 München</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Momentum Coaching. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Impressum</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
