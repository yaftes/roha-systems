import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null) // ✅ Change here

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-card/20 transition-colors duration-300"
    >
      <div ref={ref} className="relative max-w-5xl mx-auto text-center space-y-10">
        <h2 className={`text-4xl sm:text-5xl font-bold ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          About Luna Labs
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground">
          <p className={isVisible ? "animate-slide-up animate-stagger-1" : "opacity-0"}>
            Luna Labs is a forward-thinking technology company dedicated to pushing the boundaries of innovation. We
            believe in creating solutions that not only solve today's problems but anticipate tomorrow's challenges.
          </p>
          <p className={isVisible ? "animate-slide-up animate-stagger-2" : "opacity-0"}>
            Our mission is to empower businesses with cutting-edge technology that drives growth, efficiency, and
            transformation. We combine deep technical expertise with creative problem-solving to deliver exceptional
            results.
          </p>
          <p className={isVisible ? "animate-slide-up animate-stagger-3" : "opacity-0"}>
            With a team of passionate innovators and industry experts, we're committed to excellence in every project
            we undertake. Your success is our success.
          </p>
        </div>
      </div>
    </section>
  )
}
