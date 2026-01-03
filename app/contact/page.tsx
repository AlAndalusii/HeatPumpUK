"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Head from "next/head"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")

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
  }, [submitted])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit contact form')
      }

      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting contact form:', error)
      setSubmitError('Failed to send message. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white text-[#1d1d1f]">
        {/* Header */}
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
                <Link href="/#how-it-works" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                  How It Works
                </Link>
                <Link href="/#faq" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
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
                  href="/#how-it-works" 
                  className="text-base font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors py-3 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link 
                  href="/#faq" 
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

        {/* Success Message */}
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#34c759] flex items-center justify-center mx-auto mb-6 sm:mb-8 animate-fade-in-up shadow-lg">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-[40px] sm:text-[48px] md:text-[56px] font-semibold text-[#1d1d1f] mb-4 sm:mb-6 tracking-tight leading-[1.1] animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Message Sent!
            </h1>
            <p className="text-[19px] sm:text-[21px] md:text-[24px] text-[#6e6e73] mb-8 sm:mb-10 leading-[1.4] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <Link href="/" className="inline-block w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 sm:px-10 py-3 sm:py-5 text-[17px] sm:text-[19px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-lg min-h-[44px]"
              >
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Contact Heat Pump Resource | Get Expert Heat Pump Advice | Free Consultation</title>
        <meta name="description" content="Contact Heat Pump Resource for expert advice on heat pumps and government grants. Get free consultation from MCS-certified installers. Call, email, or use our contact form for personalized heat pump guidance." />
        <meta name="keywords" content="contact heat pump experts, heat pump advice, heat pump consultation, MCS installers contact, heat pump support, heat pump questions" />
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
              <Link href="/#how-it-works" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                How It Works
              </Link>
              <Link href="/#faq" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
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
                href="/#how-it-works" 
                className="text-base font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors py-3 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="/#faq" 
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

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-[#1d1d1f] mb-4 sm:mb-6 tracking-tight leading-[1.1] opacity-0 animate-fade-in-up">
              Let's Connect
            </h1>
            <p className="text-[19px] sm:text-[21px] md:text-[24px] text-[#6e6e73] leading-[1.4] max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Have questions about heat pumps? Our team is here to help you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] mb-6 sm:mb-8 tracking-tight">
                Get in Touch
              </h2>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#0071e3] to-[#0056b3] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#1d1d1f] mb-1 sm:mb-2">Email Us</h3>
                    <p className="text-[14px] sm:text-[15px] text-[#6e6e73]">
                      Use the contact form to send us a message and we'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#34c759] to-[#30a14e] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#1d1d1f] mb-1 sm:mb-2">Phone Support</h3>
                    <p className="text-[14px] sm:text-[15px] text-[#6e6e73]">
                      Our team is available to help you Monday - Friday: 9am - 6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#ff9500] to-[#ff6b00] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#1d1d1f] mb-1 sm:mb-2">Support Hours</h3>
                    <p className="text-[14px] sm:text-[15px] text-[#6e6e73]">Monday - Friday: 9am - 6pm</p>
                    <p className="text-[14px] sm:text-[15px] text-[#6e6e73]">Saturday: 10am - 4pm</p>
                    <p className="text-[14px] sm:text-[15px] text-[#6e6e73]">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Quick Response Badge */}
              <div className="mt-8 sm:mt-10 p-5 sm:p-6 bg-[#f5f5f7] rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6 text-[#0071e3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h4 className="text-[15px] sm:text-[17px] font-semibold text-[#1d1d1f]">Quick Response Time</h4>
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-relaxed">
                  We typically respond to all inquiries within 24 hours on business days.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#d2d2d7] shadow-sm">
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-6 sm:mb-8 tracking-tight">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div>
                    <label className="block text-[15px] sm:text-[17px] font-medium text-[#1d1d1f] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 text-[15px] sm:text-[17px] rounded-xl sm:rounded-2xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all duration-200 bg-white text-[#1d1d1f]"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-[15px] sm:text-[17px] font-medium text-[#1d1d1f] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 text-[15px] sm:text-[17px] rounded-xl sm:rounded-2xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all duration-200 bg-white text-[#1d1d1f]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[15px] sm:text-[17px] font-medium text-[#1d1d1f] mb-2">
                      Phone <span className="text-[#6e6e73] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 text-[15px] sm:text-[17px] rounded-xl sm:rounded-2xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all duration-200 bg-white text-[#1d1d1f]"
                      placeholder="07700 900000"
                    />
                  </div>

                  <div>
                    <label className="block text-[15px] sm:text-[17px] font-medium text-[#1d1d1f] mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 text-[15px] sm:text-[17px] rounded-xl sm:rounded-2xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all duration-200 bg-white text-[#1d1d1f] resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {submitError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-[14px] sm:text-[15px] text-red-600 font-medium">
                        {submitError}
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-4 sm:py-5 text-[17px] sm:text-[19px] rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] border-0 shadow-lg min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#1d1d1f] mb-4 tracking-tight opacity-0 animate-fade-in-up-scroll">
              Prefer to Talk?
            </h2>
            <p className="text-[17px] sm:text-[19px] text-[#6e6e73] max-w-2xl mx-auto opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
              Skip the form and get instant quotes from vetted installers
            </p>
          </div>

          <div className="text-center opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
            <Link href="/quiz" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 sm:px-10 py-3 sm:py-5 text-[17px] sm:text-[19px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-lg min-h-[44px]"
              >
                Get Free Quotes →
              </Button>
            </Link>
            <p className="text-[13px] sm:text-[14px] text-[#6e6e73] mt-4">Takes 2 minutes • No obligation • 100% free</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
    </>
  )
}












