import { Menu, X, Moon, Sun } from "lucide-react"

interface HeaderProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  isDark: boolean
  toggleTheme: () => void
}

export default function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
  isDark,
  toggleTheme,
}: HeaderProps) {
  const links = ["home", "about", "services", "contact"]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80 // reduced offset slightly
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/80 border-b border-border shadow-lg shadow-primary/10">
      <nav className="max-w-7xl mx-auto px-6 py- flex items-center justify-between"> {/* reduced py-4 → py-2 */}
        {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-opacity duration-300">
          <img
            src="/logo-light.png"
            alt="Roha Systems Logo"
            className="w-32 h-32 object-contain"
          />
          <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Roha Systems
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="relative text-lg text-foreground font-medium hover:text-accent transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-1 after:bg-primary after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
        </div>

        {/* Theme Toggle & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-primary/20 border border-primary hover:bg-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 transform hover:scale-110"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-white" />}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/40 hover:scale-105 transform transition-transform duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-primary/20 border border-primary hover:bg-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-white" />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background/90 border-t border-border transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 px-6">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="w-full text-center py-3 text-lg text-foreground hover:text-accent rounded-lg transition-all duration-300"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full py-3 bg-primary text-white rounded-full font-bold hover:scale-105 transform transition-transform duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
