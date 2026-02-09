import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  CheckCircle2,
  Sparkles,
  Clock,
  MessageCircle,
  BarChart3,
  Heart,
  Lightbulb,
  Compass,
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'

const services = [
  {
    icon: <Target size={32} />,
    title: 'Einzelcoaching',
    subtitle: 'Persönliche Exzellenz erreichen',
    desc: 'In vertraulichen 1:1-Sessions arbeiten wir gemeinsam an Ihren persönlichen Zielen, Herausforderungen und Ihrer Weiterentwicklung. Ob berufliche Neuorientierung, persönliche Blockaden oder die nächste Stufe Ihrer Karriere – im Einzelcoaching steht Ihre individuelle Situation im Mittelpunkt.',
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop&q=80',
    features: [
      'Persönliche Standortbestimmung & Zieldefinition',
      'Überwindung innerer Blockaden & limitierender Glaubenssätze',
      'Entwicklung von Entscheidungskompetenz',
      'Stärkung der persönlichen Resilienz',
      'Work-Life-Integration für nachhaltigen Erfolg',
    ],
    extraIcons: [
      { icon: <Clock size={18} />, label: '90 Min. / Session' },
      { icon: <MessageCircle size={18} />, label: 'Online oder vor Ort' },
    ],
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Business Coaching',
    subtitle: 'Strategisch wachsen',
    desc: 'Das Business Coaching richtet sich an Unternehmer und Führungskräfte, die ihr Unternehmen auf die nächste Stufe heben möchten. Wir verbinden strategisches Denken mit operativer Umsetzungskraft – für Wachstum, das Bestand hat.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop&q=80',
    features: [
      'Strategieentwicklung & Business-Planung',
      'Führungskompetenz & Teamdynamik',
      'Skalierung & Wachstumsstrategien',
      'Krisenmanagement & Change-Begleitung',
      'Performance-Optimierung für Ihr Unternehmen',
    ],
    extraIcons: [
      { icon: <BarChart3 size={18} />, label: 'KPI-basiertes Tracking' },
      { icon: <Users size={18} />, label: 'Team-Workshops möglich' },
    ],
  },
  {
    icon: <Users size={32} />,
    title: 'Persönlichkeitsentwicklung',
    subtitle: 'Die Basis für alles',
    desc: 'Nachhaltige Veränderung beginnt im Inneren. In diesem Programm arbeiten wir an den Fundamenten Ihrer Persönlichkeit: Selbstkenntnis, emotionale Intelligenz, Authentizität und innere Stärke. Denn wer sich selbst kennt, führt besser – sich und andere.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop&q=80',
    features: [
      'Persönlichkeitsanalyse & Stärkenprofilierung',
      'Emotionale Intelligenz & Selbstregulation',
      'Wertearbeit & authentische Positionierung',
      'Kommunikation & Beziehungskompetenz',
      'Mindset-Arbeit für langfristigen Erfolg',
    ],
    extraIcons: [
      { icon: <Heart size={18} />, label: 'Tiefenarbeit' },
      { icon: <Lightbulb size={18} />, label: 'Praxis-Übungen' },
    ],
  },
]

export default function Angebot() {
  return (
    <PageTransition>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-navy-800/15 to-transparent rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-600/20 bg-gold-600/5 mb-6">
              <Compass size={14} className="text-gold-400" />
              <span className="text-gold-300/80 text-xs uppercase tracking-widest font-medium">
                Unsere Leistungen
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Unser <span className="text-shimmer">Angebot</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Drei maßgeschneiderte Coaching-Formate, die Ihnen helfen,
              Ihre Ziele systematisch zu erreichen – beruflich und persönlich.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════ SERVICES ═══════════════ */}
      {services.map((service, i) => (
        <section
          key={i}
          className={`relative py-24 lg:py-32 ${i % 2 === 1 ? 'glow-blue' : ''}`}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
              {/* Image side */}
              <AnimatedSection direction={i % 2 === 0 ? 'left' : 'right'} className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-navy-700/20 via-gold-600/5 to-navy-800/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
                  <div className="relative img-hover rounded-2xl overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-[450px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/70 via-[#050a14]/20 to-transparent" />
                  </div>
                  {/* Icon badge */}
                  <div className="absolute top-6 left-6 w-14 h-14 rounded-xl bg-navy-950/80 backdrop-blur-md border border-gold-600/20 flex items-center justify-center text-gold-400">
                    {service.icon}
                  </div>
                  {/* Bottom tags */}
                  <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                    {service.extraIcons.map((extra, j) => (
                      <div key={j} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-950/70 backdrop-blur-sm border border-white/5 text-xs text-gray-300">
                        <span className="text-gold-400">{extra.icon}</span>
                        {extra.label}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Text side */}
              <AnimatedSection direction={i % 2 === 0 ? 'right' : 'left'} delay={0.15} className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="space-y-6">
                  <span className="text-gold-500/70 uppercase text-xs tracking-[0.2em] font-semibold">
                    {service.subtitle}
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {service.desc}
                  </p>
                  <div className="space-y-3 pt-4">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className="w-5 h-5 mt-0.5 rounded-full bg-gold-600/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 size={12} className="text-gold-400" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6">
                    <Link to="/kontakt" className="btn-gold">
                      Jetzt Erstgespräch anfragen <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {i < services.length - 1 && <div className="section-divider mt-24 lg:mt-32" />}
        </section>
      ))}

      {/* ═══════════════ PACKAGES ═══════════════ */}
      <section className="relative py-28 lg:py-36 glow-gold">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold-500/70 uppercase text-xs tracking-[0.2em] font-semibold">
              Flexible Optionen
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Formate & <span className="text-shimmer">Pakete</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Wählen Sie das passende Format für Ihre Bedürfnisse.
              Alle Preise werden im persönlichen Erstgespräch besprochen.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Impuls',
                sessions: '1 Session',
                desc: 'Perfekt als Einstieg oder für eine gezielte Standortbestimmung.',
                features: ['90-minütige Deep-Dive Session', 'Persönliche Analyse & Impulse', 'Handlungsempfehlungen'],
                highlight: false,
              },
              {
                name: 'Transformation',
                sessions: '6 Sessions',
                desc: 'Das beliebteste Format: Intensiv, strukturiert, nachhaltig.',
                features: ['6 × 90-Minuten Sessions', 'Individuelle Roadmap', 'Zwischen-Support per E-Mail', 'Materialien & Übungen'],
                highlight: true,
              },
              {
                name: 'Mastery',
                sessions: '12 Sessions',
                desc: 'Für tiefgreifende Veränderung und langfristige Begleitung.',
                features: ['12 × 90-Minuten Sessions', 'Priority-Support', 'Monatliche Check-ins', 'Persönliches Wachstumsjournal', 'Exklusive Ressourcen'],
                highlight: false,
              },
            ].map((pkg, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className={`glass-card p-8 h-full flex flex-col relative overflow-hidden ${
                  pkg.highlight ? 'border-gold-500/30' : ''
                }`}>
                  {pkg.highlight && (
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                  )}
                  {pkg.highlight && (
                    <div className="absolute -top-px right-6">
                      <div className="bg-gold-500 text-navy-950 text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1 rounded-b-md">
                        Beliebt
                      </div>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-display font-bold text-white mb-1">{pkg.name}</h3>
                    <p className="text-gold-400 text-sm font-medium">{pkg.sessions}</p>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{pkg.desc}</p>
                  <div className="space-y-3 flex-1">
                    {pkg.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2.5">
                        <CheckCircle2 size={14} className="text-gold-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/kontakt"
                    className={`mt-8 text-center ${pkg.highlight ? 'btn-gold justify-center' : 'btn-outline justify-center'}`}
                  >
                    Gespräch vereinbaren
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-36">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Sparkles size={32} className="text-gold-400 mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Nicht sicher, welches Format passt?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Im kostenlosen Erstgespräch finden wir gemeinsam heraus,
              welcher Weg der richtige für Sie ist.
            </p>
            <Link to="/kontakt" className="btn-gold text-base">
              Jetzt Erstgespräch anfragen <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}
