import { useState } from "react"

import Header from "./components/header"
import Hero from "./components/hero"
import About from "./components/about"
import Services from "./components/services"
import Testimonials from "./components/testimonials"
import Contact from "./components/contact"
import Footer from "./components/footer"
import { ThemeProvider, useTheme } from "./components/theme-provider"

function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden transition-colors duration-300">
      {/* Cosmic background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-glow"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Content */}
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

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
