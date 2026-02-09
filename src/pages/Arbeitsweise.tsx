import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Search,
  Map,
  Rocket,
  RefreshCw,
  MessageSquare,
  Brain,
  Layers,
  Award,
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'

const steps = [
  {
    num: '01',
    icon: <Search size={24} />,
    title: 'Analyse & Standortbestimmung',
    desc: 'Wir beginnen mit einer umfassenden Analyse Ihrer aktuellen Situation. Was funktioniert? Wo liegen Herausforderungen? Welche Ziele möchten Sie erreichen?',
    detail: 'In einem ausführlichen Erstgespräch verschaffen wir uns gemeinsam einen klaren Überblick. Durch gezielte Fragen und bewährte Analyse-Tools identifizieren wir Ihre Stärken, Potenziale und die Bereiche, die Ihrer Aufmerksamkeit bedürfen.',
  },
  {
    num: '02',
    icon: <Map size={24} />,
    title: 'Strategie & Roadmap',
    desc: 'Basierend auf der Analyse entwickeln wir Ihre individuelle Coaching-Roadmap – mit klaren Zielen, Meilensteinen und messbaren Ergebnissen.',
    detail: 'Keine vagen Versprechen, sondern ein konkreter Plan. Wir definieren gemeinsam, wohin die Reise geht, und legen die Schritte fest, die Sie dorthin bringen. Prioritäten werden gesetzt, Zeitrahmen abgesteckt.',
  },
  {
    num: '03',
    icon: <Rocket size={24} />,
    title: 'Umsetzung & Begleitung',
    desc: 'In regelmäßigen Sessions arbeiten wir intensiv an Ihren Themen. Zwischen den Sessions setzen Sie Gelerntes direkt in die Praxis um.',
    detail: 'Jede Session baut auf der vorherigen auf. Sie erhalten praktische Tools, Übungen und Frameworks, die Sie sofort anwenden können. Wir arbeiten lösungsorientiert und praxisnah – Theorie nur dort, wo sie Ihren Fortschritt beschleunigt.',
  },
  {
    num: '04',
    icon: <RefreshCw size={24} />,
    title: 'Reflexion & Nachhaltigkeit',
    desc: 'Regelmäßige Reflexionsphasen sichern Ihre Fortschritte und sorgen dafür, dass Veränderungen langfristig Bestand haben.',
    detail: 'Nachhaltigkeit ist kein Zufall, sondern das Ergebnis systematischer Reflexion. Wir evaluieren Ihre Fortschritte, justieren bei Bedarf nach und stellen sicher, dass die Veränderungen fest in Ihrem Alltag verankert sind.',
  },
]

const principles = [
  {
    icon: <MessageSquare size={24} />,
    title: 'Dialogisch',
    desc: 'Coaching ist kein Monolog. Im echten Dialog entstehen die wertvollsten Erkenntnisse – an der Schnittstelle zwischen Frage und Antwort.',
  },
  {
    icon: <Brain size={24} />,
    title: 'Evidenzbasiert',
    desc: 'Unsere Methoden basieren auf wissenschaftlich fundierten Ansätzen aus Psychologie, Neurowissenschaften und Managementforschung.',
  },
  {
    icon: <Layers size={24} />,
    title: 'Systemisch',
    desc: 'Wir betrachten Sie nicht isoliert, sondern in Ihrem gesamten Kontext – beruflich, persönlich, in Ihren Beziehungen und Rollen.',
  },
  {
    icon: <Award size={24} />,
    title: 'Ergebnisorientiert',
    desc: 'Gutes Coaching zeigt Wirkung. Wir messen Fortschritte, feiern Erfolge und stellen sicher, dass Ihre Investition sich auszahlt.',
  },
]

export default function Arbeitsweise() {
  return (
    <PageTransition>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-navy-800/15 to-transparent rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-600/20 bg-gold-600/5 mb-6">
              <Layers size={14} className="text-gold-400" />
              <span className="text-gold-300/80 text-xs uppercase tracking-widest font-medium">
                Unser Prozess
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              So arbeiten <span className="text-shimmer">wir</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Ein klar strukturierter Prozess, der Orientierung gibt und Raum für
              individuelle Entfaltung lässt. Transparenz und Vertrauen stehen bei
              uns an erster Stelle.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════ PROCESS ═══════════════ */}
      <section className="relative py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-gold-500/70 uppercase text-xs tracking-[0.2em] font-semibold">
              Schritt für Schritt
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
              Der Coaching-Prozess
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/30 via-navy-600/30 to-gold-500/30 hidden md:block" />

            {steps.map((step, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.1}
                className={`relative mb-20 last:mb-0 md:grid md:grid-cols-2 md:gap-16 items-center`}
              >
                {/* Number dot on timeline */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#050a14] border-2 border-gold-600/30 flex items-center justify-center z-10 hidden md:flex">
                  <span className="text-gold-400 font-display font-bold text-sm">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 0 ? 'md:text-right md:pr-16 lg:pr-20' : 'md:col-start-2 md:pl-16 lg:pl-20'}`}>
                  <div className={`glass-card p-8 ${i % 2 === 0 ? '' : ''}`}>
                    <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="w-10 h-10 rounded-lg bg-gold-600/10 flex items-center justify-center text-gold-400 md:hidden">
                        <span className="font-display font-bold text-sm">{step.num}</span>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-navy-800/50 flex items-center justify-center text-gold-400">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-display font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{step.desc}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.detail}</p>
                  </div>
                </div>

                {/* Empty col for spacing (alternating) */}
                {i % 2 !== 0 && <div className="hidden md:block md:col-start-1 md:row-start-1" />}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PRINCIPLES ═══════════════ */}
      <section className="relative py-28 lg:py-36 glow-blue">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold-500/70 uppercase text-xs tracking-[0.2em] font-semibold">
              Unsere Grundsätze
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Prinzipien unserer <span className="text-shimmer">Arbeit</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Diese vier Grundsätze leiten jede Session und jede Interaktion
              mit unseren Klienten.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card p-7 h-full text-center group">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gold-600/10 flex items-center justify-center text-gold-400 mb-5 group-hover:bg-gold-600/20 transition-colors duration-500">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white mb-3">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TRUST SECTION ═══════════════ */}
      <section className="relative py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold-600/5 via-navy-700/15 to-gold-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
                <div className="relative img-hover rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop&q=80"
                    alt="Vertrauensvolle Zusammenarbeit"
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/60 via-transparent to-transparent" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="space-y-6">
                <span className="text-gold-500/70 uppercase text-xs tracking-[0.2em] font-semibold">
                  Vertrauen & Transparenz
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                  Ihr Vertrauen ist unser{' '}
                  <span className="text-shimmer">Fundament</span>
                </h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Veränderung braucht einen sicheren Raum. Bei uns finden Sie genau diesen:
                  einen Ort der absoluten Vertraulichkeit, des respektvollen Dialogs und
                  der ehrlichen Rückmeldung. Wir begegnen Ihnen auf Augenhöhe – ohne
                  Bewertung, aber mit klarem Blick.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Unser Coaching ist kein vorgefertigtes Programm. Es ist ein lebendiger
                  Prozess, der sich an Ihrem Tempo, Ihren Bedürfnissen und Ihren Zielen
                  orientiert. Denn die besten Lösungen entstehen, wenn der Rahmen stimmt.
                </p>
                <div className="pt-4">
                  <Link to="/kontakt" className="btn-gold">
                    Jetzt Vertrauen aufbauen <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-36 glow-gold">
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Überzeugt? Dann lassen Sie uns{' '}
              <span className="text-shimmer">starten</span>.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Im kostenlosen Erstgespräch lernen wir uns kennen und besprechen Ihre
              Ziele. Unverbindlich und vertraulich.
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
