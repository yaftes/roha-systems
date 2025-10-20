import { useEffect, useRef, useState } from "react"
import type React from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null) // ✅ fix ref type

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
        {/* Contact Info */}
        <div className={`${isVisible ? "animate-slide-left" : "opacity-0"} space-y-8`}>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Get In Touch</h2>
            <p className="text-muted-foreground">Ready to transform your business? Let's talk.</p>
          </div>

          <div className="space-y-6">
            {[{
              icon: <Mail className="w-6 h-6 text-primary" />,
              title: "Email",
              desc: "hello@lunalabs.com"
            },{
              icon: <Phone className="w-6 h-6 text-primary" />,
              title: "Phone",
              desc: "+1 (555) 123-4567"
            },{
              icon: <MapPin className="w-6 h-6 text-primary" />,
              title: "Address",
              desc: "123 Innovation Drive, Tech City, TC 12345"
            }].map((item, i) => (
              <div key={i} className="flex gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-110">
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
            className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-all duration-300 text-foreground focus:shadow-lg focus:shadow-primary/20"
          />
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-all duration-300 text-foreground focus:shadow-lg focus:shadow-primary/20"
          />
          <textarea
            required
            placeholder="Tell us about your project..."
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-all duration-300 text-foreground resize-none focus:shadow-lg focus:shadow-primary/20"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105 active:scale-95"
          >
            {submitted ? "Message Sent! ✓" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  )
}
