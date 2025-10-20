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
      const headerOffset = 70
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/80 border-b border-border shadow-lg shadow-[#2384d2]/10">
      <nav className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-4 cursor-pointer group">
          <img
            src="/logo-light.png"
            alt="Roha Systems Logo"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="flex flex-col">
            <span
              className={`text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent tracking-tight 
              bg-gradient-to-r ${
                isDark ? "from-white" : "from-black"
              } to-[#2384d2]`}
            >
              ROHA SYSTEMS
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="relative text-lg text-foreground font-medium hover:text-[#2384d2] transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-1 after:bg-[#2384d2] after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
        </div>

        {/* Theme Toggle & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-[#2384d2]/20 border border-[#2384d2] hover:bg-[#2384d2]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#2384d2]/40 transform hover:scale-110"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-white" />}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-[#2384d2] text-white rounded-full font-bold shadow-lg shadow-[#2384d2]/40 hover:scale-105 transform transition-transform duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-[#2384d2]/20 border border-[#2384d2] hover:bg-[#2384d2]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#2384d2]/40"
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
              className="w-full text-center py-3 text-lg text-foreground hover:text-[#2384d2] rounded-lg transition-all duration-300"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full py-3 bg-[#2384d2] text-white rounded-full font-bold hover:scale-105 transform transition-transform duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
