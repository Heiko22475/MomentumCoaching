import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Heart,
  Eye,
  Compass,
  Flame,
  Shield,
  Gem,
  Users,
  Award,
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'

const values = [
  {
    icon: <Heart size={24} />,
    title: 'Menschlichkeit',
    desc: 'Im Zentrum unserer Arbeit steht der Mensch. Wir begegnen jedem Klienten mit Respekt, Empathie und echtem Interesse an seiner Geschichte.',
  },
  {
    icon: <Eye size={24} />,
    title: 'Klarheit',
    desc: 'Wir sprechen Dinge an, wie sie sind. Kein Coaching-Jargon, keine leeren Phrasen – sondern ehrliche Reflexion und klare Impulse.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Integrität',
    desc: 'Vertrauen ist die Basis unserer Arbeit. Wir handeln stets integer, vertraulich und im besten Interesse unserer Klienten.',
  },
  {
    icon: <Flame size={24} />,
    title: 'Leidenschaft',
    desc: 'Wir brennen für das, was wir tun. Diese Leidenschaft treibt uns an, jeden Tag unser Bestes für unsere Klienten zu geben.',
  },
  {
    icon: <Compass size={24} />,
    title: 'Orientierung',
    desc: 'In einer komplexen Welt bieten wir einen klaren Kompass. Wir helfen Ihnen, Ihren eigenen Weg zu finden und konsequent zu gehen.',
  },
  {
    icon: <Gem size={24} />,
    title: 'Exzellenz',
    desc: 'Wir streben in allem, was wir tun, nach höchster Qualität. Vom ersten Gespräch bis zur letzten Session.',
  },
]

export default function UeberUns() {
  return (
    <PageTransition>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-to-br from-navy-800/15 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-gradient-to-tl from-gold-600/5 to-transparent rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-600/20 bg-gold-600/5 mb-6">
              <Users size={14} className="text-gold-400" />
              <span className="text-gold-300/80 text-xs uppercase tracking-widest font-medium">
                Wer wir sind
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Über <span className="text-shimmer">Momentum</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Wir glauben daran, dass jeder Mensch das Potenzial hat, Außergewöhnliches
              zu erreichen. Unser Auftrag ist es, dieses Potenzial freizulegen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════ STORY ═══════════════ */}
      <section className="relative py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-navy-700/20 via-gold-600/5 to-navy-800/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop&q=80"
                    alt="Momentum Coaching Gründer"
                    className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/70 via-transparent to-transparent" />
                </div>

                {/* Experience badge */}
                <div className="absolute bottom-6 left-6 glass-card px-5 py-3 flex items-center gap-3">
                  <Award size={20} className="text-gold-400" />
                  <div>
                    <p className="text-white font-semibold text-sm">12+ Jahre</p>
                    <p className="text-gray-400 text-xs">Executive Coaching</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="space-y-6">
                <span className="text-gold-500/70 uppercase text-xs tracking-[0.2em] font-semibold">
                  Unsere Geschichte
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                  Die Vision hinter{' '}
                  <span className="text-shimmer">Momentum</span>
                </h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Momentum Coaching entstand aus einer klaren Überzeugung: Dass professionelles
                  Coaching nicht nur ein Luxus, sondern eine strategische Investition in die
                  eigene Zukunft ist.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Gegründet von einem erfahrenen Coach mit über 12 Jahren Praxiserfahrung,
                  steht Momentum für einen Coaching-Ansatz, der Tiefe mit Struktur verbindet.
                  Unsere Klienten sind Menschen, die bereits viel erreicht haben – und
                  bereit sind, den nächsten Schritt zu gehen.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Der Name „Momentum" steht für die Kraft des Anfangs – den entscheidenden
                  Impuls, der Bewegung erzeugt. Denn wahres Wachstum beginnt mit dem Mut,
                  die erste Veränderung zu wagen.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ PHILOSOPHY ═══════════════ */}
      <section className="relative py-28 lg:py-36 glow-blue">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.15}>
              <div className="space-y-6">
                <span className="text-gold-500/70 uppercase text-xs tracking-[0.2em] font-semibold">
                  Unsere Philosophie
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                  Coaching als{' '}
                  <span className="text-shimmer">Partnerschaft</span>
                </h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Wir verstehen Coaching nicht als Beratung von oben herab, sondern als
                  gleichberechtigte Partnerschaft. Sie bringen Ihre Expertise über Ihre
                  Situation mit – wir bringen die Methoden, Werkzeuge und den Außenblick.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Unser Ansatz ist pragmatisch und wirkungsorientiert. Wir interessieren
                  uns nicht für Theorie um der Theorie willen, sondern für das, was in Ihrer
                  konkreten Situation funktioniert. Gleichzeitig nehmen wir uns die Zeit,
                  tiefer zu schauen – denn oft liegen die Antworten nicht an der Oberfläche.
                </p>

                <div className="glass-card p-6 mt-8">
                  <p className="text-gray-300 italic font-display text-lg leading-relaxed">
                    „Die Qualität Ihres Lebens wird bestimmt durch die Qualität Ihrer
                    Entscheidungen. Und die Qualität Ihrer Entscheidungen wird bestimmt
                    durch die Qualität Ihres Denkens."
                  </p>
                  <p className="text-gold-500/70 text-sm mt-3">– Momentum Coaching</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold-600/5 via-navy-700/15 to-gold-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
                <div className="relative img-hover rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&q=80"
                    alt="Coaching Philosophie"
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/60 via-transparent to-transparent" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ VALUES ═══════════════ */}
      <section className="relative py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold-500/70 uppercase text-xs tracking-[0.2em] font-semibold">
              Wofür wir stehen
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Unsere <span className="text-shimmer">Werte</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Sechs Werte, die unser Handeln leiten und die Basis für jede
              Coaching-Beziehung bilden.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card p-7 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-gold-600/10 flex items-center justify-center text-gold-400 mb-5 group-hover:bg-gold-600/20 group-hover:shadow-[0_0_20px_rgba(196,154,53,0.15)] transition-all duration-500">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ APPROACH ═══════════════ */}
      <section className="relative py-28 lg:py-36 glow-gold">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-navy-700/20 via-gold-600/5 to-navy-800/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
                <div className="relative img-hover rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop&q=80"
                    alt="Coaching-Sitzung"
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/60 via-transparent to-transparent" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="space-y-6">
                <span className="text-gold-500/70 uppercase text-xs tracking-[0.2em] font-semibold">
                  Unsere Haltung
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                  Professionell. Ruhig.{' '}
                  <span className="text-shimmer">Seriös.</span>
                </h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Unsere Haltung zeichnet sich durch Ruhe, Professionalität und
                  Tiefgang aus. Wir schaffen einen Raum, in dem Sie sicher sein können,
                  dass Ihre Themen in erfahrene Hände gelangen.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Kein Hype, keine leeren Versprechen. Stattdessen fundierte Methoden,
                  ehrliches Feedback und ein unerschütterlicher Glaube an Ihr Potenzial.
                  Das ist Momentum.
                </p>
                <div className="pt-4">
                  <Link to="/kontakt" className="btn-gold">
                    Lernen Sie uns kennen <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-36">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Bereit, Ihr Potenzial zu{' '}
              <span className="text-shimmer">entfalten</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Der erste Schritt ist oft der wichtigste. Wir freuen uns auf ein
              persönliches Gespräch mit Ihnen.
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
