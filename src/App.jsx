import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import LanguageSwitcher from './components/LanguageSwitcher'
import Hero from './components/Hero'
import VisualDemo from './components/VisualDemo'
import PartnersLogos from './components/PartnersLogos'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import AdSpy from './components/AdSpy'
import UGCCreator from './components/UGCCreator'
import WinnerProducts from './components/WinnerProducts'
import FAQ from './components/FAQ'
import Reviews from './components/Reviews'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function HomePage() {
  return (
    <>
      <LanguageSwitcher />
      <Hero />
      <VisualDemo />
      <PartnersLogos />
      <UGCCreator />
      <SocialProof />
      <AdSpy />
      <Features />
      <WinnerProducts />
      <FAQ />
      <Reviews />
      <FinalCTA />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
