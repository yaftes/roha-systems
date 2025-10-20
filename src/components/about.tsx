"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 transition-colors duration-300">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <div className={`text-center space-y-6 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold">About Luna Labs</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p className={isVisible ? "animate-slide-up animate-stagger-1" : ""}>
              Luna Labs is a forward-thinking technology company dedicated to pushing the boundaries of innovation. We
              believe in creating solutions that not only solve today's problems but anticipate tomorrow's challenges.
            </p>
            <p className={isVisible ? "animate-slide-up animate-stagger-2" : ""}>
              Our mission is to empower businesses with cutting-edge technology that drives growth, efficiency, and
              transformation. We combine deep technical expertise with creative problem-solving to deliver exceptional
              results.
            </p>
            <p className={isVisible ? "animate-slide-up animate-stagger-3" : ""}>
              With a team of passionate innovators and industry experts, we're committed to excellence in every project
              we undertake. Your success is our success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
