import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

interface HeaderProps {
  initialDark?: boolean
}

export default function Header({ initialDark = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(initialDark)

  const links = ["home", "about", "services", "contact"]

  const toggleTheme = () => setIsDark(!isDark)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center md:justify-between gap-8">
        
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
            <span className="text-primary-foreground font-bold text-lg">L</span>
          </div>
          <span className="text-xl font-bold text-foreground">Roha Systems</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="text-foreground hover:text-accent transition-colors duration-300 relative group"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>


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

      <div
        className={`md:hidden bg-background border-b border-border transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 flex flex-col items-center gap-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="w-full max-w-xs text-center px-4 py-2 text-foreground hover:text-accent rounded-lg transition-all duration-300"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full max-w-xs px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-all duration-300 font-medium text-center"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
