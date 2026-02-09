import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  MessageCircle,
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <PageTransition>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-b from-navy-800/15 to-transparent rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-600/20 bg-gold-600/5 mb-6">
              <MessageCircle size={14} className="text-gold-400" />
              <span className="text-gold-300/80 text-xs uppercase tracking-widest font-medium">
                Kontakt aufnehmen
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Lassen Sie uns{' '}
              <span className="text-shimmer">sprechen</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Der erste Schritt zu Ihrer Veränderung beginnt mit einem Gespräch.
              Wir freuen uns, von Ihnen zu hören.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════ CONTACT SECTION ═══════════════ */}
      <section className="relative py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* ── Left info ── */}
            <div className="lg:col-span-2 space-y-10">
              <AnimatedSection direction="left">
                <div className="space-y-6">
                  <h2 className="font-display text-3xl font-bold text-white">
                    Kontaktinformationen
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    Ob per Formular, E-Mail oder Telefon – wählen Sie den Weg,
                    der Ihnen am angenehmsten ist. Wir melden uns innerhalb von
                    24 Stunden bei Ihnen.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.1}>
                <div className="space-y-5">
                  {[
                    {
                      icon: <Mail size={20} />,
                      label: 'E-Mail',
                      value: 'info@momentum-coaching.de',
                      sub: 'Antwort innerhalb von 24h',
                    },
                    {
                      icon: <Phone size={20} />,
                      label: 'Telefon',
                      value: '+49 (0) 123 456 7890',
                      sub: 'Mo–Fr, 9:00 – 18:00 Uhr',
                    },
                    {
                      icon: <MapPin size={20} />,
                      label: 'Standort',
                      value: 'Musterstraße 12, 80331 München',
                      sub: 'Termine nach Vereinbarung',
                    },
                  ].map((item, i) => (
                    <div key={i} className="glass-card p-5 flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-gold-600/10 flex items-center justify-center text-gold-400 flex-shrink-0 group-hover:bg-gold-600/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm mb-0.5">{item.label}</p>
                        <p className="text-gray-300 text-sm">{item.value}</p>
                        <p className="text-gray-500 text-xs mt-1">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Calendar link (UI only) */}
              <AnimatedSection direction="left" delay={0.2}>
                <div className="glass-card p-6 border-gold-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gold-600/10 flex items-center justify-center">
                      <Calendar size={20} className="text-gold-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        Online-Terminbuchung
                      </h4>
                      <p className="text-gray-500 text-xs">
                        Wählen Sie direkt einen freien Termin
                      </p>
                    </div>
                  </div>
                  <button className="btn-outline w-full justify-center text-sm !py-2.5">
                    <Calendar size={16} />
                    Termin im Kalender buchen
                  </button>
                </div>
              </AnimatedSection>

              {/* Availability note */}
              <AnimatedSection direction="left" delay={0.3}>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-navy-900/30 border border-navy-700/20">
                  <Clock size={16} className="text-gold-500/60 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-500 text-sm leading-relaxed">
                    <span className="text-gray-400 font-medium">Verfügbarkeit:</span> Aktuell sind Erstgespräche innerhalb
                    von 5–7 Werktagen möglich. Für dringende Anfragen kontaktieren
                    Sie uns bitte telefonisch.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* ── Right form ── */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="glass-card p-8 md:p-10">
                  {!submitted ? (
                    <>
                      <div className="mb-8">
                        <h3 className="font-display text-2xl font-bold text-white mb-2">
                          Erstgespräch anfragen
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Füllen Sie das Formular aus und wir melden uns bei Ihnen.
                          Alle Angaben werden vertraulich behandelt.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                              Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Ihr vollständiger Name"
                              className="w-full bg-navy-950/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-gold-500/40 focus:shadow-[0_0_15px_rgba(196,154,53,0.1)] transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                              E-Mail *
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="ihre@email.de"
                              className="w-full bg-navy-950/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-gold-500/40 focus:shadow-[0_0_15px_rgba(196,154,53,0.1)] transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                              Telefon
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+49 ..."
                              className="w-full bg-navy-950/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-gold-500/40 focus:shadow-[0_0_15px_rgba(196,154,53,0.1)] transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                              Interesse an
                            </label>
                            <select
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full bg-navy-950/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-500/40 focus:shadow-[0_0_15px_rgba(196,154,53,0.1)] transition-all appearance-none cursor-pointer"
                            >
                              <option value="" className="bg-navy-950">Bitte wählen...</option>
                              <option value="einzelcoaching" className="bg-navy-950">Einzelcoaching</option>
                              <option value="business" className="bg-navy-950">Business Coaching</option>
                              <option value="persoenlichkeit" className="bg-navy-950">Persönlichkeitsentwicklung</option>
                              <option value="unsicher" className="bg-navy-950">Noch unsicher</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Ihre Nachricht
                          </label>
                          <textarea
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Erzählen Sie uns kurz, was Sie beschäftigt und was Sie sich vom Coaching erhoffen..."
                            className="w-full bg-navy-950/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-gold-500/40 focus:shadow-[0_0_15px_rgba(196,154,53,0.1)] transition-all resize-none"
                          />
                        </div>

                        <div className="flex items-start gap-3 p-4 rounded-lg bg-navy-900/30 border border-navy-700/20">
                          <CheckCircle2 size={16} className="text-gold-500/60 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-500 text-xs leading-relaxed">
                            Ihre Daten werden vertraulich behandelt und ausschließlich
                            zur Bearbeitung Ihrer Anfrage verwendet. Wir geben keine Daten
                            an Dritte weiter.
                          </p>
                        </div>

                        <button type="submit" className="btn-gold w-full justify-center text-base !py-3.5">
                          <Send size={18} />
                          Nachricht senden
                        </button>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 mx-auto rounded-full bg-gold-600/10 flex items-center justify-center mb-6">
                        <CheckCircle2 size={32} className="text-gold-400" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-white mb-3">
                        Vielen Dank!
                      </h3>
                      <p className="text-gray-400 max-w-sm mx-auto mb-8">
                        Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb
                        von 24 Stunden bei Ihnen.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false)
                          setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
                        }}
                        className="btn-outline"
                      >
                        Weitere Nachricht senden <ArrowRight size={16} />
                      </button>
                    </motion.div>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ MAP PLACEHOLDER ═══════════════ */}
      <section className="relative py-28 lg:py-36 glow-blue">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Unser Standort
            </h2>
            <p className="text-gray-400">München – im Herzen der Stadt</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="glass-card overflow-hidden h-[400px] relative">
              <img
                src="https://images.unsplash.com/photo-1577462694946-b5c8d5b tried?w=1200&h=400&fit=crop&q=80"
                alt="München Stadtansicht"
                className="w-full h-full object-cover opacity-40"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=1200&h=400&fit=crop&q=80'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 via-[#050a14]/40 to-[#050a14]/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full border-2 border-gold-500/40 flex items-center justify-center mb-4 animate-pulse-soft">
                    <MapPin size={28} className="text-gold-400" />
                  </div>
                  <p className="text-white font-display font-semibold text-lg">
                    Musterstraße 12
                  </p>
                  <p className="text-gray-400 text-sm mt-1">80331 München</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}
