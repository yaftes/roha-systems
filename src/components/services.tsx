"use client"

import { useEffect, useRef, useState } from "react"
import type React from "react"
import { Code2, Globe, Smartphone, Cloud, Database, Zap } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs. From concept to deployment, we build scalable and robust applications.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications. We create stunning digital experiences that engage and convert your audience.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications. Reach your users on iOS and Android with high-performance apps.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services. Optimize your operations with AWS, Azure, and Google Cloud expertise.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Transform raw data into actionable insights. Our analytics solutions help you make data-driven decisions.",
  },
  {
    icon: Zap,
    title: "DevOps & Automation",
    description:
      "Streamline your development pipeline with CI/CD automation. Deploy faster and more reliably with our DevOps expertise.",
  },
]

export default function Services() {
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

  return (
    <section id="services" className="w-full py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 space-y-4 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 space-y-4 ${
                  isVisible ? `animate-slide-up animate-stagger-${(index % 5) + 1}` : "opacity-0"
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
