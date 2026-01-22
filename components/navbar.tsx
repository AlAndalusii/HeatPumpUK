"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

interface NavbarProps {
  /** Current page for highlighting active link */
  activePage?: "home" | "resources" | "about" | "contact" | "quiz" | "privacy" | "installation" | "other"
}

export function Navbar({ activePage = "other" }: NavbarProps) {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Determine if we're on the homepage for anchor links
  const isHomePage = activePage === "home"
  const howItWorksLink = isHomePage ? "#how-it-works" : "/#how-it-works"
  const faqLink = isHomePage ? "#faq" : "/#faq"

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "saturate(180%) blur(20px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="h-9 sm:h-11 w-auto transition-transform duration-300 group-hover:scale-105" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/blog" 
              className={`text-sm font-normal transition-colors duration-200 ${
                activePage === "resources" 
                  ? "text-[#0071e3]" 
                  : "text-[#1d1d1f] hover:text-[#0071e3]"
              }`}
            >
              Resources
            </Link>
            <Link 
              href={howItWorksLink} 
              className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200"
            >
              How it works
            </Link>
            <Link 
              href={faqLink} 
              className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200"
            >
              FAQ
            </Link>
            <Link 
              href="/about" 
              className={`text-sm font-normal transition-colors duration-200 ${
                activePage === "about" 
                  ? "text-[#0071e3]" 
                  : "text-[#1d1d1f] hover:text-[#0071e3]"
              }`}
            >
              Who We Are
            </Link>
            <Link href="/quiz">
              <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 min-h-[44px]">
                Get Free Quotes
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1d1d1f] hover:text-[#0071e3] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 animate-fade-in-up">
          <nav className="flex flex-col px-4 py-6 gap-4">
            <Link 
              href="/blog" 
              className={`text-base font-normal transition-colors py-3 border-b border-gray-100 ${
                activePage === "resources" 
                  ? "text-[#0071e3]" 
                  : "text-[#1d1d1f] hover:text-[#0071e3]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              href={howItWorksLink}
              className="text-base font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors py-3 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it works
            </Link>
            <Link 
              href={faqLink}
              className="text-base font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors py-3 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/about" 
              className={`text-base font-normal transition-colors py-3 border-b border-gray-100 ${
                activePage === "about" 
                  ? "text-[#0071e3]" 
                  : "text-[#1d1d1f] hover:text-[#0071e3]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Who We Are
            </Link>
            <Link href="/quiz" className="mt-4" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-base px-6 py-3 rounded-full transition-all duration-300 min-h-[44px]">
                Get Free Quotes
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
