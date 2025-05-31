'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-terminal/95 backdrop-blur-sm border-b border-green-400/20' : 'bg-terminal/95 backdrop-blur-sm border-b border-green-400/20'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-lg font-bold text-primary">$ ./sharath-devasahayam</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <button onClick={() => scrollToSection('about')} className="text-green-300 hover:text-primary transition-colors">--about</button>
            <button onClick={() => scrollToSection('skills')} className="text-green-300 hover:text-primary transition-colors">--skills</button>
            <button onClick={() => scrollToSection('experience')} className="text-green-300 hover:text-primary transition-colors">--experience</button>
            <button onClick={() => scrollToSection('projects')} className="text-green-300 hover:text-primary transition-colors">--projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-green-300 hover:text-primary transition-colors">--contact</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
