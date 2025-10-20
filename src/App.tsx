import './App.css'
import { useState } from "react"
import { useTheme } from './components/theme-provider'
import Header from './components/header'
import Hero from './components/hero'
import { Contact } from 'lucide-react'
import About from './components/about'
import Footer from './components/footer'
import Services from './components/services'
import Testimonials from './components/testimonials'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className={`${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="relative z-10">
        <Header
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
