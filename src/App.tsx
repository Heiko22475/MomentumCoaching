import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import LegalModal from './components/LegalModal'
import Home from './pages/Home'
import Angebot from './pages/Angebot'
import Arbeitsweise from './pages/Arbeitsweise'
import UeberUns from './pages/UeberUns'
import Kontakt from './pages/Kontakt'
import ScrollToTop from './components/ScrollToTop'

type LegalType = 'impressum' | 'datenschutz'

export default function App() {
  const location = useLocation()
  const [legalType, setLegalType] = useState<LegalType | null>(null)

  const openLegal = (type: LegalType) => setLegalType(type)
  const closeLegal = () => setLegalType(null)

  return (
    <div className="noise-overlay min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/angebot" element={<Angebot />} />
            <Route path="/arbeitsweise" element={<Arbeitsweise />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer onOpenLegal={openLegal} />
      <CookieBanner onOpenPrivacy={() => openLegal('datenschutz')} />
      {legalType && <LegalModal type={legalType} onClose={closeLegal} />}
    </div>
  )
}
