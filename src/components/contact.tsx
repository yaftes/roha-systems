import { useEffect, useRef, useState } from "react"
import type React from "react"
import { Mail, Phone, MapPin } from "lucide-react"

const PRIMARY_COLOR = "#2384d2"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section
      id="contact"
      className="w-full py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className={`${isVisible ? "animate-slide-left" : "opacity-0"} space-y-8`}>
          <div className="space-y-4">
            
            <p className="text-muted-foreground">
              Ready to transform your business? Let's talk with Roha Systems.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: <Mail className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />,
                title: "Email",
                desc: "hello@rohasystems.com",
              },
              {
                icon: <Phone className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />,
                title: "Phone",
                desc: "+251924808008",
              },
              {
                icon: <MapPin className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />,
                title: "Address",
                desc: "Ethiopia, Addis Abeba",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 group cursor-pointer">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: "rgba(35, 132, 210, 0.2)",
                    boxShadow: "0 4px 12px rgba(35, 132, 210, 0.2)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className={`${isVisible ? "animate-slide-right" : "opacity-0"} space-y-6`}
        >
          <input
            type="text"
            required
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:outline-none transition-all duration-300 text-foreground"
            style={{ borderColor: PRIMARY_COLOR }}
          />
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:outline-none transition-all duration-300 text-foreground"
            style={{ borderColor: PRIMARY_COLOR }}
          />
          <textarea
            required
            placeholder="Tell us about your project..."
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:outline-none transition-all duration-300 text-foreground resize-none"
            style={{ borderColor: PRIMARY_COLOR }}
          />
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg font-semibold text-white transform transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: PRIMARY_COLOR,
              boxShadow: `0 4px 12px rgba(35, 132, 210, 0.3)`,
            }}
          >
            {submitted ? "Message Sent! ✓" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  )
}
