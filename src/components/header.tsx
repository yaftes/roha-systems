"use client"
import { Menu, X, Moon, Sun } from "lucide-react"

interface HeaderProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  isDark: boolean
  toggleTheme: () => void
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen, isDark, toggleTheme }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 animate-slide-down">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
            <span className="text-primary-foreground font-bold text-lg">L</span>
          </div>
          <span className="text-xl font-bold text-foreground">Roha Systems</span>
        </div>

        {/* Desktop Menu */}
        
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground hover:text-accent transition-colors duration-300 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-accent transition-colors duration-300 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-accent transition-colors duration-300 relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-accent transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </button>
        </div>

        {/* Theme Toggle & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-primary" />}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-all duration-300 font-medium hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-primary" />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-foreground">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-slide-down">
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-all duration-300 font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
