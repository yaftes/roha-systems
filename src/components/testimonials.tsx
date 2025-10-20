"use client"

import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechVenture",
    content:
      "Luna Labs transformed our entire infrastructure. The results exceeded our expectations and the support was exceptional.",
  },
  {
    name: "Marcus Johnson",
    role: "CTO, InnovateCo",
    content:
      "Working with Luna Labs was a game-changer. Their expertise and dedication to excellence is unmatched in the industry.",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, FutureScale",
    content:
      "The team at Luna Labs understood our vision immediately and delivered a solution that perfectly aligned with our goals.",
  },
]

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`text-center mb-16 space-y-4 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">Trusted by leading companies worldwide</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 space-y-4 hover:shadow-lg hover:shadow-primary/10 transform hover:scale-105 ${
                isVisible ? `animate-slide-up animate-stagger-${(index % 5) + 1}` : "opacity-0"
              }`}
            >
              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
