import { useEffect, useState } from "react"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80 // adjust if you have a fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="w-full min-h-screen relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/cover_page.jpg')" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-float">
        {/* Headline */}
        <div className="space-y-4">
          <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-white animate-slide-up">
            ✨ Where Innovation Meets Excellence
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white animate-slide-up">
            Innovating the Future of{" "}
            <span className="bg-gradient-to-r from-[#2384d2] to-accent bg-clip-text text-transparent animate-pulse">
              Technology
            </span>
          </h1>
          <p className="text-lg sm:text-xl mx-auto text-white max-w-3xl animate-slide-up animate-stagger-1">
            Cutting-edge solutions for your digital world. Transform your business with Roha Systems' innovative technology platform.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-slide-up animate-stagger-2">
          <button
            onClick={() => scrollToSection("services")}
            className="px-8 py-3 bg-[#2384d2] text-white rounded-full hover:bg-accent transition-all duration-300 font-semibold text-lg shadow-lg shadow-[#2384d2]/50 transform hover:scale-105 active:scale-95"
          >
            Learn More
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-[#2384d2] text-white rounded-full hover:bg-accent transition-all duration-300 font-semibold text-lg shadow-lg shadow-[#2384d2]/50 transform hover:scale-105 active:scale-95"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
