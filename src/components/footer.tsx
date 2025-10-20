import { Linkedin, Twitter, Github } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer
      className="w-full border-t border-border bg-card/30 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className={`space-y-4 ${isVisible ? "animate-slide-up animate-stagger-1" : "opacity-0"}`}>
            <div className="flex items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity">
              <img
                src="../../public/logo-dark.png" // directly using light logo from public folder
                alt="Roha Systems Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-lg">Roha Systems</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Innovating the future of technology, one solution at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className={`space-y-4 ${isVisible ? "animate-slide-up animate-stagger-2" : "opacity-0"}`}>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["home", "about", "services", "contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="hover:text-primary transition-colors duration-300 relative group"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={`space-y-4 ${isVisible ? "animate-slide-up animate-stagger-3" : "opacity-0"}`}>
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Lightning Fast", "Enterprise Security", "Rapid Deployment", "Expert Support"].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="hover:text-primary transition-colors duration-300 relative group"
                  >
                    {service}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className={`space-y-4 ${isVisible ? "animate-slide-up animate-stagger-4" : "opacity-0"}`}>
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              {[Linkedin, Twitter,].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-110 transform"
                >
                  <Icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Roha Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
