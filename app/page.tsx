"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"

function PDFDownloadModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Simulate API call - in production, this would send email and track download
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Create a simple PDF or redirect to existing PDF
      // For now, we'll create a placeholder that opens a download
      const link = document.createElement("a")
      link.href = "/heat-pump-guide-2025.pdf" // This would be your actual PDF file
      link.download = "Heat-Pump-vs-Gas-Boiler-Guide-2025.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      setEmail("")
      onClose()
    } catch (err) {
      setError("Failed to download. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-fade-in-up">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f]">
            Get Your Free Guide
          </h2>
          <button
            onClick={onClose}
            className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors p-1"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-[15px] sm:text-[16px] text-[#6e6e73] mb-6">
          Enter your email to download the 2025 Heat Pump vs Gas Boiler comparison guide.
        </p>

        <form onSubmit={handleDownload} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError("")
              }}
              placeholder="you@example.com"
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-[16px] focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20 text-[#1d1d1f] min-h-[44px]"
              required
            />
            {error && (
              <p className="text-[13px] text-red-500 mt-2 font-medium">{error}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-3.5 sm:py-4 text-[16px] sm:text-[17px] rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[44px]"
          >
            {isLoading ? "Downloading..." : "Download Guide →"}
          </Button>
        </form>

        <p className="text-[12px] sm:text-[13px] text-[#6e6e73] text-center mt-4">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </div>
  )
}

function ExitIntentPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("")
  const [subscribeTips, setSubscribeTips] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Simulate API call - in production, this would send to backend
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setSubmitted(true)
      
      // Set cookie to prevent showing again
      document.cookie = "exitIntentShown=true; path=/; max-age=2592000" // 30 days
      
      setTimeout(() => {
        onClose()
      }, 2000)
    } catch (err) {
      setError("Failed to send. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-10 animate-fade-in-up max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#6e6e73] hover:text-[#1d1d1f] transition-colors p-2"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#34c759]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-2">Thanks!</h3>
            <p className="text-[15px] sm:text-[16px] text-[#6e6e73]">Check your email for the free guide</p>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Left: Icon/Illustration */}
              <div className="hidden sm:flex justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-[#0071e3]/20 to-[#34c759]/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-24 h-24 text-[#0071e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Right: Content */}
              <div>
                <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] mb-2 leading-tight">
                  Wait! Before You Go...
                </h2>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] mb-6 leading-relaxed">
                  Download our free guide: <strong>5 Questions to Ask Every Heat Pump Installer</strong>
                </p>

                {/* What's Included */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[14px] sm:text-[15px] text-[#1d1d1f]">Red flag warning signs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[14px] sm:text-[15px] text-[#1d1d1f]">Price negotiation tips</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[14px] sm:text-[15px] text-[#1d1d1f]">Grant application checklist</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[14px] sm:text-[15px] text-[#1d1d1f]">Installer comparison worksheet</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setError("")
                      }}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-[16px] focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20 text-[#1d1d1f] min-h-[44px]"
                      required
                    />
                    {error && (
                      <p className="text-[13px] text-red-500 mt-2 font-medium">{error}</p>
                    )}
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={subscribeTips}
                      onChange={(e) => setSubscribeTips(e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300 text-[#0071e3] focus:ring-[#0071e3]"
                    />
                    <span className="text-[14px] sm:text-[15px] text-[#6e6e73]">Send me heat pump tips & exclusive offers</span>
                  </label>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-3.5 sm:py-4 text-[16px] sm:text-[17px] rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[44px]"
                  >
                    {isLoading ? "Sending..." : "Send Me The Free Guide →"}
                  </Button>
                </form>

                <p className="text-[12px] sm:text-[13px] text-[#6e6e73] text-center mt-4">
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function SocialProofBanner() {
  const messages = [
    { text: "Sarah from Manchester just checked", highlight: "Qualified for £7,500!" },
    { text: "James from Bristol compared 3 installers", highlight: "Saved £2,100" },
    { text: "Emma from Leeds got quotes", highlight: "in 24 hours" },
    { text: "1,247 homeowners used this checker", highlight: "this month" },
    { text: "Michael from Glasgow found", highlight: "grant-approved installer" }
  ];
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 4500);
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => setCurrent((prev) => (prev + 1) % messages.length), 250);
      setTimeout(() => setFade(false), 4500);
    }, 5500);
    return () => { clearInterval(interval); clearTimeout(timeout) };
  }, [messages.length]);

  return (
    <div className="w-full flex justify-start mt-8 mb-8">
      <div
        className="group relative inline-flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.25)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.25)',
          opacity: fade ? 1 : 0.4,
          transform: fade ? 'translateY(0) scale(1)' : 'translateY(4px) scale(0.98)',
          transition: 'opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
        aria-live="polite"
      >
        {/* Animated gradient orb icon */}
        <div className="relative shrink-0">
          <div 
            className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-[#34c759] to-[#00d84f] opacity-75 animate-pulse"
            style={{ width: '20px', height: '20px' }}
          />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="relative z-10">
            <circle cx="10" cy="10" r="10" fill="#34c759"/>
            <path d="M14.19 8.23a.75.75 0 00-1.08-1.04l-3.24 3.3-1.1-1.14A.75.75 0 007.6 10.5l1.65 1.7a.75.75 0 001.08 0l3.86-3.97z" fill="#fff"/>
          </svg>
        </div>

        {/* Text content with dual-tone styling */}
        <div className="flex items-baseline gap-1.5 text-white">
          <span 
            className="text-[15px] sm:text-[16px] font-normal"
            style={{ letterSpacing: '0.3px', opacity: 0.85 }}
          >
            {messages[current].text}
          </span>
          <span 
            className="text-[15px] sm:text-[16px] font-semibold"
            style={{ 
              letterSpacing: '0.3px',
              background: 'linear-gradient(135deg, #34c759 0%, #00d84f 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: 'none'
            }}
          >
            {messages[current].highlight}
          </span>
        </div>
      </div>
    </div>
  );
}


export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showPDFModal, setShowPDFModal] = useState(false)
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [exitIntentShown, setExitIntentShown] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
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

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up-scroll")
            ;(entry.target as HTMLElement).style.opacity = "1"
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(".opacity-0")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Exit Intent Popup - Desktop (mouse leaving)
  useEffect(() => {
    // Check if already shown in this session (cookie)
    const hasCookie = document.cookie.includes("exitIntentShown=true")
    if (hasCookie) {
      setExitIntentShown(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from top of viewport
      if (e.clientY <= 0 && !exitIntentShown && !showExitIntent) {
        setShowExitIntent(true)
        setExitIntentShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [exitIntentShown, showExitIntent])

  // Exit Intent Popup - Mobile (45 seconds on page)
  useEffect(() => {
    const hasCookie = document.cookie.includes("exitIntentShown=true")
    if (hasCookie) return

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (!isMobile) return

    const timer = setTimeout(() => {
      if (!exitIntentShown && !showExitIntent) {
        setShowExitIntent(true)
        setExitIntentShown(true)
      }
    }, 45000) // 45 seconds

    return () => clearTimeout(timer)
  }, [exitIntentShown, showExitIntent])

  return (
    <>
      <Head>
        <title>Heat Pump Grant Checker UK - Check £7,500 Eligibility in 90s</title>
        <meta name="description" content="Free heat pump grant eligibility checker. Find out if you qualify for £7,500 government funding in 90 seconds. Compare quotes from vetted UK installers. Used by 1,247 homeowners." />
        <meta name="keywords" content="heat pump grant UK, heat pump grant checker, £7,500 grant eligibility, government heat pump grant, air source heat pump, heat pump installation costs, heat pump quotes, MCS certified installers, heat pump cost comparison" />
      </Head>
      <div className="min-h-screen bg-white text-[#1d1d1f]">
      {/* Header - Clean navigation */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrollY > 50 ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.95)",
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
              <Link href="#how-it-works" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                How it works
              </Link>
              <Link href="#faq" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                FAQ
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
                href="#how-it-works" 
                className="text-base font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors py-3 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it works
              </Link>
              <Link 
                href="#faq" 
                className="text-base font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors py-3 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
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

      {/* Hero Section - Split layout with image */}
      <section className="relative pt-24 pb-12 bg-linear-to-br from-[#0071e3] to-[#0056b3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 sm:py-12">
            {/* Left content */}
            <div className="text-white py-6 sm:py-12 opacity-0 animate-fade-in-up">
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-semibold mb-6 sm:mb-8 tracking-tight leading-[1.1]">
                Find Out If You Qualify for £7,500 in 90 Seconds
              </h1>
              
              {/* Social Proof Banner - Positioned prominently */}
              <SocialProofBanner />

              <p className="text-[17px] sm:text-[19px] md:text-[22px] lg:text-[24px] mb-8 sm:mb-10 leading-[1.4] opacity-85">
                No calls required—instant grant eligibility results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quiz" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#0071e3] px-8 sm:px-10 py-3 sm:py-5 text-[17px] sm:text-[19px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-lg min-h-[44px]"
                  >
                    Get Free Quotes
                  </Button>
                </Link>
                <Link href="/urgent-inquiry" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#FF3B30] hover:bg-[#FF2D1F] text-white px-8 sm:px-10 py-3 sm:py-5 text-[17px] sm:text-[19px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-lg min-h-[44px] animate-pulse"
                  >
                    Urgent Callback
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right image */}
            <div className="relative w-full max-w-[520px] mx-auto lg:mx-0 lg:ml-auto opacity-0 animate-fade-in-up aspect-square" style={{ animationDelay: "0.2s" }}>
              <img
                src="/modern-heat-pump-installation.jpg"
                alt="Heat pump installation"
                className="w-full h-full object-cover rounded-[16px] sm:rounded-[24px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-6 sm:py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center">
            <div className="flex items-center gap-2 text-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#1d1d1f]">Vetted Installers</span>
            </div>
            <div className="flex items-center gap-2 text-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#1d1d1f]">Free Quotes</span>
            </div>
            <div className="flex items-center gap-2 text-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#1d1d1f]">No Obligation</span>
            </div>
            <div className="flex items-center gap-2 text-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#1d1d1f]">MCS Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section - Why choose us */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-semibold text-center mb-10 sm:mb-12 md:mb-16 tracking-tight text-[#1d1d1f] opacity-0 animate-fade-in-up-scroll">
            Why choose us?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Benefit 1 */}
            <div className="text-center opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-linear-to-br from-[#0071e3] to-[#0056b3] rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">Vetted installers</h3>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#6e6e73] leading-normal px-2">
                Only MCS-certified professionals who pass our quality checks
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-linear-to-br from-[#34c759] to-[#30a14e] rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">£7,500 grant available</h3>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#6e6e73] leading-normal px-2">
                Most customers qualify for government funding
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.3s" }}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-linear-to-br from-[#ff9500] to-[#ff6b00] rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">Compare prices</h3>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#6e6e73] leading-normal px-2">
                Get up to 3 quotes and choose the best deal
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="text-center opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-linear-to-br from-[#af52de] to-[#8e44ad] rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">100% free service</h3>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#6e6e73] leading-normal px-2">
                No obligation, no hidden fees, completely free
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10 sm:mt-12 md:mt-16 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.5s" }}>
            <Link href="/quiz" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 sm:px-10 py-3 sm:py-5 text-[17px] sm:text-[19px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-lg min-h-[44px]"
              >
                Get Free Quotes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works - 3 steps */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-semibold text-center mb-4 sm:mb-6 tracking-tight text-[#1d1d1f] opacity-0 animate-fade-in-up-scroll">
            How it works
          </h2>
          <p className="text-[16px] sm:text-[17px] md:text-[19px] text-[#6e6e73] text-center mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto opacity-0 animate-fade-in-up-scroll px-4" style={{ animationDelay: "0.1s" }}>
            Get quotes from vetted installers in 3 simple steps
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0071e3] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-[13px] sm:text-[14px] font-semibold text-[#0071e3] mb-2">STEP 1</div>
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">Tell us about your home</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-normal">
                Answer 10 quick questions about your property and heating needs. Takes less than 2 minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.3s" }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#34c759] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="text-[13px] sm:text-[14px] font-semibold text-[#34c759] mb-2">STEP 2</div>
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">Installers contact you</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-normal">
                Up to 3 vetted, MCS-certified installers will reach out within 24 hours to arrange free surveys.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.4s" }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ff9500] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-[13px] sm:text-[14px] font-semibold text-[#ff9500] mb-2">STEP 3</div>
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">Compare & choose</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-normal">
                Review quotes, compare prices and service, then choose the installer that's right for you.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10 sm:mt-12 md:mt-16 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.5s" }}>
            <Link href="/quiz" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 sm:px-10 py-3 sm:py-5 text-[17px] sm:text-[19px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-lg min-h-[44px]"
              >
                Get Free Quotes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PDF Download Section - Apple Style */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white via-[#f5f5f7] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="opacity-0 animate-fade-in-up-scroll">
              <p className="text-[14px] sm:text-[15px] font-semibold text-[#0071e3] mb-3 sm:mb-4 tracking-wide">BUYER'S GUIDE</p>
              <h2 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-semibold text-[#1d1d1f] mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Not Ready for Quotes Yet?
              </h2>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#6e6e73] mb-8 sm:mb-10 leading-[1.5]">
                Download our free 2025 Heat Pump vs Gas Boiler cost comparison guide
              </p>

              {/* Features List */}
              <div className="space-y-4 sm:space-y-5 mb-10 sm:mb-12">
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[16px] sm:text-[17px] text-[#1d1d1f] leading-relaxed">Installation costs breakdown</span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[16px] sm:text-[17px] text-[#1d1d1f] leading-relaxed">Running costs comparison (5-year projection)</span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[16px] sm:text-[17px] text-[#1d1d1f] leading-relaxed">Grant eligibility requirements</span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[16px] sm:text-[17px] text-[#1d1d1f] leading-relaxed">Pros and cons of each system</span>
                </div>
              </div>

              <button
                onClick={() => setShowPDFModal(true)}
                className="group inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 md:py-5 bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] min-h-[44px] text-[16px] sm:text-[17px] md:text-[18px] shadow-lg"
              >
                Download Free Guide
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Right: Premium Card Design */}
            <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="relative group">
                {/* Background gradient orb effect */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-[#0071e3]/20 via-[#34c759]/10 to-[#0071e3]/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                
                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  {/* PDF Icon */}
                  <div className="mb-6 sm:mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#0071e3] to-[#0056b3] rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-[22px] sm:text-[24px] font-semibold text-[#1d1d1f] mb-3">2025 Comparison Guide</h3>
                  <p className="text-[15px] sm:text-[16px] text-[#6e6e73] mb-6 leading-relaxed">
                    Expert analysis comparing heat pumps and gas boilers across cost, performance, and environmental impact.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#34c759] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[14px] text-[#6e6e73]">PDF format • 12 pages</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#34c759] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[14px] text-[#6e6e73]">100% free • No registration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 sm:py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
            <div>
              <div className="text-[40px] sm:text-[48px] md:text-[56px] font-semibold text-[#0071e3] mb-2">10,000+</div>
              <p className="text-[15px] sm:text-[17px] text-[#6e6e73]">Homeowners helped</p>
            </div>
            <div>
              <div className="text-[40px] sm:text-[48px] md:text-[56px] font-semibold text-[#0071e3] mb-2">£7,500</div>
              <p className="text-[15px] sm:text-[17px] text-[#6e6e73]">Average grant received</p>
            </div>
            <div>
              <div className="text-[40px] sm:text-[48px] md:text-[56px] font-semibold text-[#0071e3] mb-2">4.8★</div>
              <p className="text-[15px] sm:text-[17px] text-[#6e6e73]">Average installer rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-semibold text-center mb-4 tracking-tight text-[#1d1d1f] opacity-0 animate-fade-in-up-scroll">
            Frequently asked questions
          </h2>
          <p className="text-[16px] sm:text-[17px] md:text-[19px] text-[#6e6e73] text-center mb-10 sm:mb-12 md:mb-16 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
            Everything you need to know about the heat pump grant
          </p>

          <div className="space-y-3 sm:space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">How much does a heat pump cost in the UK?</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-[1.6]">
                Installation costs range from £8,000-£15,000 depending on property size and system type. With the £7,500 government grant, most homeowners pay £5,000-£7,500.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">Do I qualify for the £7,500 grant?</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-[1.6]">
                You must own your property and be replacing a fossil fuel system (gas, oil, or LPG boiler). Take our 90-second checker to find out.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">How long does installation take?</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-[1.6]">
                Typical installation takes 2-3 days once approved. Grant application and approval takes 2-4 weeks.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.5s" }}>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">Are heat pumps expensive to run?</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-[1.6]">
                Heat pumps are 3x more efficient than gas boilers. Average running costs: £500-800/year vs £1,200-1,500 for gas.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.6s" }}>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">Do I need to replace my radiators?</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-[1.6]">
                Not always. Many homes can keep existing radiators. Installers assess during survey.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.7s" }}>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">Is this service really free?</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-[1.6]">
                Yes. We connect you with vetted installers who pay us a referral fee. You never pay us anything.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10 sm:mt-12 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "1s" }}>
            <Link href="/quiz" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 sm:px-10 py-3 sm:py-5 text-[17px] sm:text-[19px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-lg min-h-[44px]"
              >
                Get Free Quotes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Blue section */}
      <section className="py-16 sm:py-20 md:py-24 bg-linear-to-br from-[#0071e3] to-[#0056b3] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-semibold mb-4 sm:mb-6 tracking-tight leading-[1.1] text-balance opacity-0 animate-fade-in-up-scroll">
            Ready to compare heat pump quotes?
          </h2>
          <p className="text-[18px] sm:text-[21px] md:text-[24px] lg:text-[28px] mb-8 sm:mb-10 md:mb-12 leading-[1.3] opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
            Get free quotes from vetted installers in your area. Most customers qualify for £7,500 grant.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
            <Link href="/quiz" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#0071e3] px-8 sm:px-10 md:px-12 py-3 sm:py-5 md:py-6 text-[18px] sm:text-[19px] md:text-[21px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-xl min-h-[44px]"
              >
                Get Free Quotes →
              </Button>
            </Link>
            <Link href="/urgent-inquiry" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#FF3B30] hover:bg-[#FF2D1F] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-5 md:py-6 text-[18px] sm:text-[19px] md:text-[21px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-xl min-h-[44px]"
              >
                Urgent Callback
              </Button>
            </Link>
          </div>

          <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white/70 mt-6 sm:mt-8">No obligation • 100% free • Takes 2 minutes</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-[#d2d2d7] py-10 sm:py-12 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <Logo className="h-10 sm:h-11 w-auto mb-3 sm:mb-4" />
              <p className="text-[13px] sm:text-[14px] text-[#6e6e73]">
                Free heat pump quotes from trusted installers. Save up to £7,500.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-[13px] sm:text-[14px] font-semibold text-[#1d1d1f] mb-3 sm:mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/quiz" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Check Eligibility
                </Link>
                <Link href="/installation" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Get Quote
                </Link>
                <Link href="#how-it-works" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  How It Works
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[13px] sm:text-[14px] font-semibold text-[#1d1d1f] mb-3 sm:mb-4">Resources</h4>
              <div className="space-y-2">
                <Link href="#faq" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  FAQ
                </Link>
                <Link href="/blog" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Blog
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[13px] sm:text-[14px] font-semibold text-[#1d1d1f] mb-3 sm:mb-4">Contact</h4>
              <div className="space-y-2">
                <Link href="/contact" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Contact Us
                </Link>
                <Link href="/contact" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Support
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-[#d2d2d7] pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              <p className="text-[11px] sm:text-[12px] text-[#86868b] text-center sm:text-left">
                © 2025 HeatPump UK. All rights reserved.
              </p>
              <div className="flex gap-4 sm:gap-6">
                <Link href="/privacy" className="text-[11px] sm:text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-[11px] sm:text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* PDF Download Modal */}
      <PDFDownloadModal isOpen={showPDFModal} onClose={() => setShowPDFModal(false)} />

      {/* Exit Intent Popup */}
      <ExitIntentPopup isOpen={showExitIntent} onClose={() => setShowExitIntent(false)} />
    </div>
    </>
  )
}
