"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"

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
                <div className="w-40 h-40 bg-linear-to-br from-[#0071e3]/20 to-[#34c759]/20 rounded-2xl flex items-center justify-center">
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
                  Download our free guide: <strong>5 Questions to Ask Every Air Source Heat Pump Installer</strong>
                </p>

                {/* What's Included */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[14px] sm:text-[15px] text-[#1d1d1f]">Red flag warning signs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[14px] sm:text-[15px] text-[#1d1d1f]">Price negotiation tips</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[14px] sm:text-[15px] text-[#1d1d1f]">Grant application checklist</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
    { text: "Emma from Leeds got quotes", highlight: "in 24 hours" },
    { text: "Sarah checked eligibility", highlight: "Qualified for £7,500!" },
    { text: "James compared 3 installers", highlight: "Saved £2,100" },
    { text: "1,247 homeowners used this", highlight: "this month" },
    { text: "Michael found", highlight: "grant-approved installer" }
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
            className="absolute inset-0 rounded-full blur-md bg-linear-to-r from-[#34c759] to-[#00d84f] opacity-75 animate-pulse"
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

// Postcode Hero Input - Apple-inspired premium design
function PostcodeHeroInput({ variant = "default" }: { variant?: "default" | "hero-blue" }) {
  const [postcode, setPostcode] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (postcode.trim()) {
      // Store postcode and redirect to quiz
      sessionStorage.setItem("heroPostcode", postcode.trim().toUpperCase());
      window.location.href = "/quiz";
    } else {
      window.location.href = "/quiz";
    }
  };

  const isValidUKPostcode = (pc: string) => {
    // Basic UK postcode validation (first part)
    const pattern = /^[A-Z]{1,2}[0-9][0-9A-Z]?$/i;
    return pattern.test(pc.trim());
  };

  // Styles for blue hero background variant
  if (variant === "hero-blue") {
    return (
      <form onSubmit={handleSubmit} className="w-full">
        <div
          className={`
            relative flex items-center gap-2 p-2 rounded-2xl transition-all duration-500
            bg-white/95 shadow-lg backdrop-blur-sm
            ${isFocused || isHovered ? "shadow-xl" : ""}
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Location icon */}
          <div className="pl-4 text-[#0071e3]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>

          {/* Input field */}
          <input
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value.toUpperCase())}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Enter your postcode"
            className="flex-1 bg-transparent text-[17px] text-[#1d1d1f] placeholder-[#86868b] outline-none py-3 px-2 min-w-0"
            maxLength={8}
            autoComplete="postal-code"
          />

          {/* Submit button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-[15px] transition-all duration-300 whitespace-nowrap bg-[#0071e3] hover:bg-[#0056b3] text-white hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="hidden sm:inline">Check Eligibility</span>
            <span className="sm:hidden">Check</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </form>
    );
  }

  // Default variant (for light backgrounds)
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`
          relative flex items-center gap-2 p-2 rounded-2xl transition-all duration-500
          ${isFocused || isHovered
            ? "bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12),0_2px_12px_rgba(0,0,0,0.08)]"
            : "bg-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.06),0_1px_8px_rgba(0,0,0,0.04)]"
          }
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Location icon */}
        <div className="pl-4 text-[#86868b]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        </div>

        {/* Input field */}
        <input
          type="text"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value.toUpperCase())}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Enter your postcode"
          className="flex-1 bg-transparent text-[17px] text-[#1d1d1f] placeholder-[#86868b] outline-none py-3 px-2 min-w-0"
          maxLength={8}
          autoComplete="postal-code"
        />

        {/* Submit button */}
        <button
          type="submit"
          className={`
            flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-[15px] sm:text-[16px]
            transition-all duration-300 whitespace-nowrap
            ${postcode.trim()
              ? "bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-[0_4px_16px_rgba(0,113,227,0.4)]"
              : "bg-[#1d1d1f] hover:bg-[#333] text-white"
            }
            hover:scale-[1.02] active:scale-[0.98]
          `}
        >
          <span className="hidden sm:inline">Get Quotes in 90 Seconds</span>
          <span className="sm:hidden">Get Quotes</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>

      {/* Subtle helper text */}
      <p className="mt-4 text-[13px] text-[#86868b]">
        Free, no-obligation quotes from local installers
      </p>
    </form>
  );
}

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
        <meta name="description" content="Free heat pump grant eligibility checker. Find out if you qualify for £7,500 government funding in 90 seconds. Compare quotes from vetted UK installers." />
        <meta name="keywords" content="heat pump grant UK, grant checker, £7,500 grant eligibility, boiler upgrade scheme, heat pump quotes, MCS certified installers" />
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
              <Link href="/blog" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                Resources
              </Link>
              <Link href="#how-it-works" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                How it works
              </Link>
              <Link href="#faq" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                FAQ
              </Link>
              <Link href="/about" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
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
                className="text-base font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors py-3 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
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
              <Link 
                href="/about" 
                className="text-base font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors py-3 border-b border-gray-100"
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

      {/* Hero Section - Blue Gradient Two-Column Design */}
      <section className="relative min-h-[90vh] bg-linear-to-br from-[#0071e3] to-[#0056b3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(90vh-7rem)]">
            {/* Left Column - Content */}
            <div className="text-left">
              {/* Main headline */}
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-bold text-white tracking-[-0.02em] leading-[1.1] mb-6 opacity-0 animate-fade-in-up">
                Compare Air Source Heat Pump Installers & Check £7,500 Grant Eligibility
              </h1>

              {/* Social proof badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <span className="w-5 h-5 rounded-full bg-[#34c759] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[14px] font-medium text-white">
                  James compared 3 installers
                </span>
                <span className="text-[14px] font-semibold text-[#FF6B6B]">
                  Saved £2,100
                </span>
              </div>

              {/* Subheadline */}
              <p className="text-[17px] sm:text-[19px] md:text-[21px] text-white/90 font-normal leading-normal mb-4 max-w-xl opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                Check your eligibility in 90 seconds, then compare free quotes from 3 vetted installers near you.
              </p>

              {/* Independent service note */}
              <p className="text-[15px] text-white/70 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                We are an independent comparison service — not installers.
              </p>

              {/* Postcode Input - Hero style for blue bg */}
              <div className="max-w-md mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
                <PostcodeHeroInput variant="hero-blue" />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <Link href="/quiz">
                  <Button className="bg-white hover:bg-gray-50 text-[#0071e3] text-[16px] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 min-h-[52px] shadow-lg">
                    Get Free Quotes
                  </Button>
                </Link>
                <Link href="/urgent-inquiry">
                  <Button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white text-[16px] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 min-h-[52px] shadow-lg">
                    Urgent Callback
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap items-center gap-6 sm:gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span className="text-[14px] font-medium">Independent</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  <span className="text-[14px] font-medium">Certified Pros</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                  <span className="text-[14px] font-medium">100% Free</span>
                </div>
              </div>
            </div>

            {/* Right Column - Heat Pump Image */}
            <div className="relative hidden lg:block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/modern-heat-pump-installation.jpg"
                  alt="Modern air source heat pump installation on UK home"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Premium Apple-Inspired Design */}
      <section className="relative py-28 sm:py-32 md:py-40 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#fafafa]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,113,227,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(52,199,89,0.03)_0%,transparent_50%)]" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Headline with premium typography */}
          <div className="text-center mb-20 sm:mb-24 md:mb-28 opacity-0 animate-fade-in-up-scroll">
            <h2 className="text-[42px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-semibold text-[#1d1d1f] mb-6 sm:mb-8 tracking-[-0.03em] leading-[1.05]">
              Independent. Trusted. Free.
            </h2>
            <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#86868b] leading-normal max-w-2xl mx-auto font-normal">
              We help UK homeowners compare heat pump installers and access government grants — without pressure or bias.
            </p>
          </div>

          {/* Premium Features Grid */}
          <div className="max-w-5xl mx-auto opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
              {/* Item 1 - Independent */}
              <div className="group flex flex-col items-center text-center">
                <div className="relative mb-5 sm:mb-6">
                  <div className="absolute inset-0 bg-[#0071e3] rounded-[20px] blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 scale-90 group-hover:scale-110" />
                  <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[18px] bg-linear-to-br from-white to-[#f5f5f7] border border-[#e5e5e7]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_8px_40px_rgba(0,113,227,0.15)]">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#0071e3] transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#1d1d1f] font-medium leading-[1.4] tracking-[-0.01em]">
                  Independent<br /><span className="text-[#86868b] font-normal">comparison</span>
                </p>
              </div>

              {/* Item 2 - No Pressure */}
              <div className="group flex flex-col items-center text-center">
                <div className="relative mb-5 sm:mb-6">
                  <div className="absolute inset-0 bg-[#34c759] rounded-[20px] blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 scale-90 group-hover:scale-110" />
                  <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[18px] bg-linear-to-br from-white to-[#f5f5f7] border border-[#e5e5e7]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_8px_40px_rgba(52,199,89,0.15)]">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#34c759] transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#1d1d1f] font-medium leading-[1.4] tracking-[-0.01em]">
                  No sales<br /><span className="text-[#86868b] font-normal">pressure</span>
                </p>
              </div>

              {/* Item 3 - Certified Installers */}
              <div className="group flex flex-col items-center text-center">
                <div className="relative mb-5 sm:mb-6">
                  <div className="absolute inset-0 bg-[#ff9500] rounded-[20px] blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 scale-90 group-hover:scale-110" />
                  <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[18px] bg-linear-to-br from-white to-[#f5f5f7] border border-[#e5e5e7]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_8px_40px_rgba(255,149,0,0.15)]">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#ff9500] transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#1d1d1f] font-medium leading-[1.4] tracking-[-0.01em]">
                  Certified<br /><span className="text-[#86868b] font-normal">installers</span>
                </p>
              </div>

              {/* Item 4 - Grant Guidance */}
              <div className="group flex flex-col items-center text-center">
                <div className="relative mb-5 sm:mb-6">
                  <div className="absolute inset-0 bg-[#5856d6] rounded-[20px] blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 scale-90 group-hover:scale-110" />
                  <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[18px] bg-linear-to-br from-white to-[#f5f5f7] border border-[#e5e5e7]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_8px_40px_rgba(88,86,214,0.15)]">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#5856d6] transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#1d1d1f] font-medium leading-[1.4] tracking-[-0.01em]">
                  £7,500 grant<br /><span className="text-[#86868b] font-normal">guidance</span>
                </p>
              </div>

              {/* Item 5 - Free Service */}
              <div className="group flex flex-col items-center text-center col-span-2 sm:col-span-1">
                <div className="relative mb-5 sm:mb-6">
                  <div className="absolute inset-0 bg-[#30d158] rounded-[20px] blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 scale-90 group-hover:scale-110" />
                  <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[18px] bg-linear-to-br from-white to-[#f5f5f7] border border-[#e5e5e7]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_8px_40px_rgba(48,209,88,0.15)]">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#30d158] transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                  </div>
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#1d1d1f] font-medium leading-[1.4] tracking-[-0.01em]">
                  100% free<br /><span className="text-[#86868b] font-normal">service</span>
                </p>
              </div>
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
              <span className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#1d1d1f]">Certified Pros</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - 3 steps */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-semibold text-center mb-4 sm:mb-6 tracking-tight text-[#1d1d1f] opacity-0 animate-fade-in-up-scroll">
            How it Works
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

      {/* Trust Signals Section */}
      <section className="py-20 sm:py-28 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 opacity-0 animate-fade-in-up-scroll">
            <p className="text-[13px] sm:text-[14px] font-semibold text-[#0071e3] mb-3 tracking-[0.15em] uppercase">
              Why Homeowners Choose Us
            </p>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.1] mb-6">
              Built on Trust, Not Commissions
            </h2>
            <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-normal max-w-2xl mx-auto">
              We're independent, transparent, and focused entirely on helping you find the right system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Trust Signal 1 */}
            <div className="bg-linear-to-br from-[#f5f5f7] to-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0071e3]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#0071e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1d1d1f] mb-3">
                Independent & Unbiased
              </h3>
              <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.6]">
                We're not installers trying to sell you something. We're an independent comparison service providing honest advice. No hidden agenda. No commission bias.
              </p>
            </div>

            {/* Trust Signal 2 */}
            <div className="bg-linear-to-br from-[#f5f5f7] to-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#34c759]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#34c759]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1d1d1f] mb-3">
                Save Time & Money
              </h3>
              <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.6]">
                One form, up to 3 quotes. Installers compete for your business, driving better prices. We help you compare everything easily.
              </p>
            </div>

            {/* Trust Signal 3 */}
            <div className="bg-linear-to-br from-[#f5f5f7] to-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ff9500]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#ff9500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1d1d1f] mb-3">
                Only Vetted Professionals
              </h3>
              <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.6]">
                Every installer is MCS-certified and background-checked. No cowboys. No pushy salespeople. Only quality professionals.
              </p>
            </div>

            {/* Trust Signal 4 */}
            <div className="bg-linear-to-br from-[#f5f5f7] to-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.25s" }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#34c759]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#34c759]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1d1d1f] mb-3">
                Grant Experts
              </h3>
              <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.6]">
                We help you maximize your £7,500 government grant. Most people qualify but don't know it. We make sure you get every pound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer's Guide Section - Apple Style */}
      <section className="py-16 sm:py-20 md:py-24 bg-linear-to-br from-white via-[#f5f5f7] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="opacity-0 animate-fade-in-up-scroll">
              <p className="text-[14px] sm:text-[15px] font-semibold text-[#34c759] mb-3 sm:mb-4 tracking-wide">BUYER'S GUIDE</p>
              <h2 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-semibold text-[#1d1d1f] mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Not Ready for Quotes Yet?
              </h2>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#6e6e73] mb-8 sm:mb-10 leading-normal">
                Read our free step-by-step guide to applying for the £7,500 heat pump grant
              </p>

              {/* Features List */}
              <div className="space-y-4 sm:space-y-5 mb-10 sm:mb-12">
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[16px] sm:text-[17px] text-[#1d1d1f] leading-relaxed">Eligibility checklist</span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[16px] sm:text-[17px] text-[#1d1d1f] leading-relaxed">Documents you'll need</span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[16px] sm:text-[17px] text-[#1d1d1f] leading-relaxed">Common mistakes to avoid</span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[16px] sm:text-[17px] text-[#1d1d1f] leading-relaxed">Template emails included</span>
                </div>
              </div>

              <Link href="/blog/heat-pump-grant-application-guide">
                <button
                  className="group inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 md:py-5 bg-[#34c759] hover:bg-[#2db24c] text-white rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] min-h-[44px] text-[16px] sm:text-[17px] md:text-[18px] shadow-lg"
                >
                  View Our Guide
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Right: Premium Card Design */}
            <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
              <Link href="/blog/heat-pump-grant-application-guide">
                <div className="relative group cursor-pointer">
                  {/* Background gradient orb effect */}
                  <div className="absolute -inset-4 sm:-inset-6 bg-linear-to-br from-[#34c759]/20 via-[#0071e3]/10 to-[#34c759]/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                  
                  {/* Card */}
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:scale-[1.02]">
                    {/* Guide Icon */}
                    <div className="mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-[#34c759] to-[#248a3d] rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-[22px] sm:text-[24px] font-semibold text-[#1d1d1f] mb-3">£7,500 Grant Application Guide</h3>
                    <p className="text-[15px] sm:text-[16px] text-[#6e6e73] mb-6 leading-relaxed">
                      Complete step-by-step guide to applying for the UK heat pump grant. Everything you need to know in one place.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#34c759] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[14px] text-[#6e6e73]">Easy to read • 10 min</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#34c759] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[14px] text-[#6e6e73]">100% free • No registration</span>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center text-[#34c759] font-medium text-[15px]">
                      Read now
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
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
            Frequently Asked Questions
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

            {/* FAQ 7 - What is an air source heat pump? */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 opacity-0 animate-fade-in-up-scroll border-l-4 border-[#0071e3]" style={{ animationDelay: "0.8s" }}>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">What is an air source heat pump?</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-[1.6]">
                An air source heat pump is a renewable heating system that extracts heat from outside air to warm your home. It's like a refrigerator in reverse and can be 3-4 times more efficient than gas boilers. Want to see if it makes sense for your home? <Link href="/quiz" className="text-[#0071e3] hover:underline font-medium">Check your eligibility and get quotes.</Link>
              </p>
            </div>

            {/* FAQ 8 - How does an air source heat pump work? */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 opacity-0 animate-fade-in-up-scroll border-l-4 border-[#34c759]" style={{ animationDelay: "0.9s" }}>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">How does an air source heat pump work?</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-[1.6]">
                Air source heat pumps use a refrigerant fluid to extract heat energy from the outside air, even in cold weather. This heat is compressed and transferred to your central heating system to warm your home and hot water. Ready to learn more? <Link href="/quiz" className="text-[#0071e3] hover:underline font-medium">Check your eligibility and get quotes.</Link>
              </p>
            </div>

            {/* FAQ 9 - Are air source heat pumps worth it in the UK? */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 opacity-0 animate-fade-in-up-scroll border-l-4 border-[#ff9500]" style={{ animationDelay: "1s" }}>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">Are air source heat pumps worth it in the UK?</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-[1.6]">
                Yes, especially with the £7,500 Boiler Upgrade Scheme grant. Air source heat pumps typically cost £1,500-£5,500 after the grant, with running costs 40-50% lower than gas boilers. Most UK homeowners see a return on investment within 7-10 years. <Link href="/quiz" className="text-[#0071e3] hover:underline font-medium">Check your eligibility and get quotes.</Link>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10 sm:mt-12 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "1.1s" }}>
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

      {/* Popular Areas Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#fbfbfd] border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-center mb-8 sm:mb-12 text-[#1d1d1f] opacity-0 animate-fade-in-up-scroll">
            Popular Areas
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <Link href="/installers/manchester" className="group block p-4 sm:p-5 rounded-xl bg-white hover:bg-[#f5f5f7] border border-gray-100 hover:border-[#0071e3] transition-all duration-300 text-center opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
              <p className="text-[15px] sm:text-[16px] font-medium text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                Air source heat pump installers in Manchester
              </p>
            </Link>
            
            <Link href="/installers/london" className="group block p-4 sm:p-5 rounded-xl bg-white hover:bg-[#f5f5f7] border border-gray-100 hover:border-[#0071e3] transition-all duration-300 text-center opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
              <p className="text-[15px] sm:text-[16px] font-medium text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                Air source heat pump installers in London
              </p>
            </Link>
            
            <Link href="/blog" className="group block p-4 sm:p-5 rounded-xl bg-white hover:bg-[#f5f5f7] border border-gray-100 hover:border-[#0071e3] transition-all duration-300 text-center opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
              <p className="text-[15px] sm:text-[16px] font-medium text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                Find installers in your area
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Blue section */}
      <section className="py-16 sm:py-20 md:py-24 bg-linear-to-br from-[#0071e3] to-[#0056b3] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-semibold mb-4 sm:mb-6 tracking-tight leading-[1.1] text-balance opacity-0 animate-fade-in-up-scroll">
            Ready To Compare Heat Pump Quotes?
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
      <Footer />


      {/* Exit Intent Popup */}
      <ExitIntentPopup isOpen={showExitIntent} onClose={() => setShowExitIntent(false)} />
    </div>
    </>
  )
}
