import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  CheckCircle2,
  Star,
  Zap,
  Shield,
  ArrowUpRight,
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'
import StatCounter from '../components/StatCounter'

export default function Home() {
  return (
    <PageTransition>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="hero-bg relative min-h-screen flex items-center justify-center pt-20">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-navy-700/20 blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-gold-600/5 blur-[150px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 right-[30%] w-48 h-48 rounded-full bg-navy-600/15 blur-[100px] animate-pulse-soft" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-600/20 bg-gold-600/5 mb-8"
          >
            <Sparkles size={14} className="text-gold-400" />
            <span className="text-gold-300/80 text-xs uppercase tracking-widest font-medium">
              Executive Coaching
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8"
          >
            <span className="text-white">Momentum Coaching</span>
            <br />
            <span className="text-shimmer">Klarheit. Fokus. Wachstum.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Wir begleiten Unternehmer, Selbstständige und Führungskräfte auf dem Weg zu
            nachhaltigem Erfolg – mit einem klaren System, das Wirkung entfaltet.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/kontakt" className="btn-gold text-base">
              Jetzt Erstgespräch anfragen <ArrowRight size={18} />
            </Link>
            <Link to="/angebot" className="btn-outline text-base">
              Unsere Angebote entdecken
            </Link>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-24"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 mx-auto rounded-full border border-white/20 flex items-start justify-center pt-2"
            >
              <div className="w-1 h-2 rounded-full bg-gold-500/60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="relative py-20 border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/50 via-navy-900/30 to-navy-950/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter number="500+" label="Klienten begleitet" delay={0} />
          <StatCounter number="12+" label="Jahre Erfahrung" delay={0.15} />
          <StatCounter number="98%" label="Weiterempfehlung" delay={0.3} />
          <StatCounter number="3x" label="Schnelleres Wachstum" delay={0.45} />
        </div>
      </section>

      {/* ═══════════════ INTRO ═══════════════ */}
      <section className="relative py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <AnimatedSection direction="left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-navy-700/20 via-gold-600/5 to-navy-800/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
                <div className="relative img-hover rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80"
                    alt="Business Coaching Session"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/60 via-transparent to-transparent" />
                </div>
                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -bottom-6 -right-6 glass-card p-5 max-w-[220px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Star size={16} className="text-gold-400 fill-gold-400" />
                    <Star size={16} className="text-gold-400 fill-gold-400" />
                    <Star size={16} className="text-gold-400 fill-gold-400" />
                    <Star size={16} className="text-gold-400 fill-gold-400" />
                    <Star size={16} className="text-gold-400 fill-gold-400" />
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    „Das Coaching hat mein Unternehmen transformiert."
                  </p>
                  <p className="text-gold-500/70 text-xs mt-2">– M. Weber, CEO</p>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-6">
                <span className="text-gold-500/70 uppercase text-xs tracking-[0.2em] font-semibold">
                  Über unser Coaching
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                  Ihr nächster Schritt beginnt{' '}
                  <span className="text-shimmer">hier</span>
                </h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Momentum Coaching vereint strategische Klarheit mit persönlicher Tiefe.
                  Wir helfen Ihnen, Ihre Ziele nicht nur zu definieren, sondern sie mit
                  einem bewährten System konsequent zu erreichen.
                </p>
                <div className="space-y-4 pt-4">
                  {[
                    'Individuelle Strategien für Ihre einzigartige Situation',
                    'Bewährte Methoden aus der Praxis',
                    'Nachhaltige Ergebnisse statt kurzfristiger Impulse',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold-600/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={14} className="text-gold-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Link to="/arbeitsweise" className="btn-outline">
                    Unsere Arbeitsweise <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES PREVIEW ═══════════════ */}
      <section className="relative py-28 lg:py-36 glow-blue">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-gold-500/70 uppercase text-xs tracking-[0.2em] font-semibold">
              Unsere Leistungen
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Coaching, das <span className="text-shimmer">wirkt</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Drei Schwerpunkte – ein Ziel: Ihr persönliches und berufliches Wachstum systematisch zu entfalten.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target size={28} />,
                title: 'Einzelcoaching',
                desc: 'Persönliche 1:1-Begleitung für Ihre individuellen Herausforderungen. Klarheit in komplexen Situationen gewinnen und gezielt handeln.',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&q=80',
              },
              {
                icon: <TrendingUp size={28} />,
                title: 'Business Coaching',
                desc: 'Strategische Begleitung für Unternehmer und Führungskräfte. Wachstum gestalten, Teams entwickeln und Strukturen optimieren.',
                img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&q=80',
              },
              {
                icon: <Users size={28} />,
                title: 'Persönlichkeitsentwicklung',
                desc: 'Die Grundlage für nachhaltigen Erfolg: Selbstkenntnis vertiefen, innere Stärke aufbauen und authentisch führen.',
                img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&q=80',
              },
            ].map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="glass-card group h-full flex flex-col overflow-hidden">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />
                    <div className="absolute bottom-4 left-5 text-gold-400">
                      {service.icon}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-display font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">
                      {service.desc}
                    </p>
                    <Link
                      to="/angebot"
                      className="mt-5 inline-flex items-center gap-1.5 text-gold-400 text-sm font-medium hover:text-gold-300 transition-colors group/link"
                    >
                      Mehr erfahren
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY US ═══════════════ */}
      <section className="relative py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <span className="text-gold-500/70 uppercase text-xs tracking-[0.2em] font-semibold">
                  Warum Momentum
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                  Vertrauen entsteht durch{' '}
                  <span className="text-shimmer">Ergebnisse</span>
                </h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Unser Coaching-Ansatz basiert auf jahrelanger Erfahrung, wissenschaftlich
                  fundierten Methoden und einem tiefen Verständnis für die Herausforderungen
                  moderner Führung.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-10">
                {[
                  {
                    icon: <Shield size={22} />,
                    title: 'Vertraulich',
                    desc: 'Absolute Diskretion als Grundprinzip',
                  },
                  {
                    icon: <Zap size={22} />,
                    title: 'Wirkungsvoll',
                    desc: 'Messbare Ergebnisse ab der ersten Sitzung',
                  },
                  {
                    icon: <Target size={22} />,
                    title: 'Fokussiert',
                    desc: 'Klare Ziele, strukturierter Prozess',
                  },
                  {
                    icon: <Sparkles size={22} />,
                    title: 'Individuell',
                    desc: 'Maßgeschneiderte Lösungen für Sie',
                  },
                ].map((item, i) => (
                  <AnimatedSection key={i} delay={0.1 + i * 0.1}>
                    <div className="glass-card p-5 space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-gold-600/10 flex items-center justify-center text-gold-400">
                        {item.icon}
                      </div>
                      <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold-600/5 via-navy-700/15 to-gold-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
                <div className="relative img-hover rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=700&fit=crop&q=80"
                    alt="Professional Coaching"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/60 via-transparent to-transparent" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="relative py-28 lg:py-36 glow-gold">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold-500/70 uppercase text-xs tracking-[0.2em] font-semibold">
              Stimmen unserer Klienten
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
              Was unsere Klienten <span className="text-shimmer">sagen</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Momentum Coaching hat mir geholfen, als Führungskraft klarer zu kommunizieren und mein Team auf ein neues Level zu bringen.',
                name: 'Anna K.',
                role: 'Geschäftsführerin, Tech-Startup',
              },
              {
                quote: 'Die Kombination aus strategischem Denken und persönlicher Tiefe ist einzigartig. Ich habe in 3 Monaten mehr erreicht als in den 2 Jahren davor.',
                name: 'Thomas M.',
                role: 'Unternehmer, E-Commerce',
              },
              {
                quote: 'Professionell, diskret und unglaublich wirkungsvoll. Das Coaching hat nicht nur mein Business, sondern mein gesamtes Leben verändert.',
                name: 'Dr. Sarah L.',
                role: 'Selbstständige Beraterin',
              },
            ].map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="glass-card p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-gold-400 fill-gold-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed flex-1 italic">
                    „{t.quote}"
                  </p>
                  <div className="mt-6 pt-5 border-t border-white/5">
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Bereit für Ihr{' '}
              <span className="text-shimmer">Momentum</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Starten Sie mit einem unverbindlichen Erstgespräch und erfahren Sie,
              wie Coaching Ihr Potenzial entfalten kann.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/kontakt" className="btn-gold text-base">
                Jetzt Erstgespräch anfragen <ArrowRight size={18} />
              </Link>
              <Link to="/ueber-uns" className="btn-outline text-base">
                Mehr über uns
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}
