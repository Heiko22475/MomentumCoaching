import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Angebot from './pages/Angebot'
import Arbeitsweise from './pages/Arbeitsweise'
import UeberUns from './pages/UeberUns'
import Kontakt from './pages/Kontakt'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const location = useLocation()

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
      <Footer />
    </div>
  )
}
