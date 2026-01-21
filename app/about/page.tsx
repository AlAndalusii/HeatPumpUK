"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function AboutPage() {
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

    const animatedElements = document.querySelectorAll(".opacity-0")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
        {/* Header */}
        <header
          className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
          style={{
            backgroundColor: scrollY > 50 ? "rgba(255, 255, 255, 0.95)" : "transparent",
            backdropFilter: scrollY > 50 ? "saturate(180%) blur(20px)" : "none",
            borderBottom: scrollY > 50 ? "1px solid rgba(0, 0, 0, 0.08)" : "none",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-3 group">
                <Logo className="h-9 sm:h-11 w-auto transition-transform duration-300 group-hover:scale-105" />
              </Link>
              
              <nav className="hidden md:flex items-center gap-8">
                <Link href="/#how-it-works" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                  How It Works
                </Link>
                <Link href="/#faq" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                  FAQ
                </Link>
                <Link href="/about" className="text-sm font-normal text-[#0071e3] transition-colors duration-200">
                  About Us
                </Link>
                <Link href="/quiz">
                  <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 min-h-[44px]">
                    Get Free Quotes
                  </Button>
                </Link>
              </nav>

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

          {mobileMenuOpen && (
            <div className="md:hidden fixed inset-0 top-16 bg-white z-40 animate-fade-in-up">
              <nav className="flex flex-col px-4 py-6 gap-4">
                <Link href="/#how-it-works" className="text-base font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors py-3 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
                  How It Works
                </Link>
                <Link href="/#faq" className="text-base font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors py-3 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
                  FAQ
                </Link>
                <Link href="/about" className="text-base font-normal text-[#0071e3] transition-colors py-3 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
                  About Us
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

        {/* Hero Section - Premium gradient with glassmorphism elements */}
        <section className="pt-32 pb-24 sm:pt-44 sm:pb-32 md:pt-56 md:pb-40 relative overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-linear-to-br from-[#f5f5f7] via-white to-[#f9f9fb]" />
          
          {/* Decorative blur elements - futuristic */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#0071e3] rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#34c759] rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#00a2ff] rounded-full mix-blend-multiply filter blur-3xl opacity-6" style={{ animationDelay: '4s' }} />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="opacity-0 animate-fade-in-up">
              {/* Subtle badge */}
              <div className="inline-block mb-6 sm:mb-8">
                <div className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm">
                  <p className="text-[13px] sm:text-[14px] font-medium text-[#0071e3]">Trusted by thousands of UK homeowners</p>
                </div>
              </div>

              {/* Main headline with premium spacing */}
              <h1 className="text-[44px] sm:text-[56px] md:text-[72px] lg:text-[80px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.05] mb-6 sm:mb-8">
                <span className="block">Your Trusted Guide to</span>
                <span className="block bg-linear-to-r from-[#0071e3] via-[#00a2ff] to-[#34c759] bg-clip-text text-transparent">Air Source Heat Pump Installation</span>
              </h1>

              {/* Premium subheading */}
              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#6e6e73] leading-[1.6] max-w-3xl mx-auto font-light mb-4 sm:mb-5">
                We help UK homeowners compare air source heat pump installers and heating engineers, check if they can get the £7,500 Boiler Upgrade Scheme grant, and get free quotes from trusted companies.
              </p>

              {/* Clear "not installers" statement */}
              <p className="text-[17px] sm:text-[19px] text-[#1d1d1f] leading-[1.6] max-w-3xl mx-auto font-medium mb-8 sm:mb-10">
                We don't install heat pumps ourselves – we're an independent comparison service for air source heat pumps.
              </p>

              {/* Enhanced trust indicators */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto text-center">
                <div className="p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-white/50">
                  <div className="text-[20px] sm:text-[24px] font-bold text-[#0071e3] mb-1">10K+</div>
                  <p className="text-[12px] sm:text-[13px] text-[#6e6e73]">Happy homeowners</p>
                </div>
                <div className="p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-white/50">
                  <div className="text-[20px] sm:text-[24px] font-bold text-[#34c759] mb-1">100%</div>
                  <p className="text-[12px] sm:text-[13px] text-[#6e6e73]">Free to use</p>
                </div>
                <div className="p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-white/50">
                  <div className="text-[20px] sm:text-[24px] font-bold text-[#ff9500] mb-1">250+</div>
                  <p className="text-[12px] sm:text-[13px] text-[#6e6e73]">Installers vetted</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are - Premium Section with glassmorphism */}
        <section className="py-20 sm:py-28 md:py-32 bg-linear-to-br from-white via-[#f9f9fb] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Content */}
              <div className="opacity-0 animate-fade-in-up-scroll">
                <div className="inline-block mb-6">
                  <span className="px-3 py-1 rounded-full bg-[#0071e3]/10 text-[#0071e3] text-[12px] font-semibold uppercase tracking-wider">About Get Heat Pump Quotes</span>
                </div>
                
                <h2 className="text-[44px] sm:text-[52px] md:text-[60px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.1] mb-6">
                  Independent, Transparent, Homeowner-First
                </h2>
                
                <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.8] mb-6">
                  Get Heat Pump Quotes is an independent comparison service for UK homeowners. We don't install heat pumps. We don't sell equipment. We explain air source heat pumps in simple language and connect you with vetted, MCS-certified installers and heating engineers.
                </p>

                <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.8] mb-6">
                  We help you get and compare air source heat pump quotes from trusted UK installers.
                </p>
                
                <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.8] mb-10">
                  Every recommendation we make is guided by one principle: your interests come first. Whether you qualify for grants, how installation works, or comparing the right installer for your home—we're here to make it simple.
                </p>

                {/* Key stats inline */}
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div>
                    <div className="text-[28px] sm:text-[32px] font-bold text-[#0071e3] mb-2">Founded</div>
                    <p className="text-[14px] sm:text-[15px] text-[#6e6e73]">By energy and home heating specialists who wanted clear, honest advice for normal homeowners</p>
                  </div>
                  <div>
                    <div className="text-[28px] sm:text-[32px] font-bold text-[#34c759] mb-2">Mission</div>
                    <p className="text-[14px] sm:text-[15px] text-[#6e6e73]">Make the switch to air source heat pumps simple, fair, and affordable for UK homeowners</p>
                  </div>
                </div>

                <Link href="/contact">
                  <Button className="bg-[#0071e3] hover:bg-[#0066cc] text-white px-8 py-3 rounded-full font-semibold text-[16px] transition-all duration-300 hover:shadow-lg hover:scale-105 min-h-[48px]">
                    Learn more about us →
                  </Button>
                </Link>
              </div>

              {/* Right: Feature cards with premium styling */}
              <div className="opacity-0 animate-fade-in-up-scroll grid grid-cols-1 gap-6" style={{ animationDelay: "0.15s" }}>
                {/* Card 1 */}
                <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/60 hover:border-[#0071e3]/40 transition-all duration-500 hover:shadow-xl hover:bg-white/95 hover:-translate-y-1">
                  <div className="flex items-start gap-5 mb-4">
                    <div className="w-14 h-14 bg-linear-to-br from-[#0071e3] to-[#00a2ff] rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[19px] font-bold text-[#1d1d1f] mb-1">100% Independent</h3>
                      <p className="text-[14px] text-[#6e6e73] leading-[1.6]">No installer owns us. No conflicts of interest. Just honest, homeowner-first advice backed by data.</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/60 hover:border-[#34c759]/40 transition-all duration-500 hover:shadow-xl hover:bg-white/95 hover:-translate-y-1">
                  <div className="flex items-start gap-5 mb-4">
                    <div className="w-14 h-14 bg-linear-to-br from-[#34c759] to-[#30b55f] rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[19px] font-bold text-[#1d1d1f] mb-1">UK Specialists</h3>
                      <p className="text-[14px] text-[#6e6e73] leading-[1.6]">We know the UK market inside out—grants, regulations, regional differences, and what installers actually deliver.</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/60 hover:border-[#ff9500]/40 transition-all duration-500 hover:shadow-xl hover:bg-white/95 hover:-translate-y-1">
                  <div className="flex items-start gap-5 mb-4">
                    <div className="w-14 h-14 bg-linear-to-br from-[#ff9500] to-[#ff8c00] rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.16 5.314l4.897 7.308c.498.742.198 1.74-.675 2.236l-4.897 2.908c-.873.497-1.968.2-2.467-.543L.12 9.914c-.498-.743-.198-1.74.675-2.236l4.897-2.908c.873-.498 1.968-.199 2.467.544z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[19px] font-bold text-[#1d1d1f] mb-1">Completely Free</h3>
                      <p className="text-[14px] text-[#6e6e73] leading-[1.6]">No hidden fees. No subscription. Our service costs you zero. Transparency is built into our DNA.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do - Premium service showcase */}
        <section className="py-20 sm:py-28 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-16 sm:mb-20 opacity-0 animate-fade-in-up-scroll">
              <div className="inline-block mb-4">
                <span className="px-3 py-1 rounded-full bg-[#0071e3]/10 text-[#0071e3] text-[12px] font-semibold uppercase tracking-wider">Our Services</span>
              </div>
              <h2 className="text-[44px] sm:text-[52px] md:text-[60px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.1] mb-6">
                Everything You Need, In One Place
              </h2>
              <p className="text-[18px] sm:text-[20px] text-[#6e6e73] leading-[1.6] max-w-2xl mx-auto">
                From grant eligibility checks to installer recommendations—we've designed every service to save you time and money.
              </p>
            </div>

            {/* Services grid */}
            <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
              {/* Service 1 - Grant Check */}
              <div className="group opacity-0 animate-fade-in-up-scroll rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl" style={{ animationDelay: "0.1s" }}>
                <div className="bg-linear-to-br from-[#0071e3]/5 to-[#00a2ff]/5 hover:from-[#0071e3]/10 hover:to-[#00a2ff]/10 rounded-2xl p-8 sm:p-10 border border-[#e5e5e7] hover:border-[#0071e3]/30 transition-all duration-500 h-full">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-linear-to-br from-[#0071e3] to-[#00a2ff] rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-[#1d1d1f] mb-4">
                    Grant Eligibility Check
                  </h3>
                  <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-6">
                    Discover if you qualify for the £7,500 Boiler Upgrade Scheme in under 90 seconds. No paperwork. No calls. Just instant clarity.
                  </p>
                  <div className="flex items-center text-[#0071e3] font-semibold text-[15px] group-hover:translate-x-2 transition-transform duration-300">
                    Check your eligibility
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Service 2 - Installer Network */}
              <div className="group opacity-0 animate-fade-in-up-scroll rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl" style={{ animationDelay: "0.2s" }}>
                <div className="bg-linear-to-br from-[#34c759]/5 to-[#30d158]/5 hover:from-[#34c759]/10 hover:to-[#30d158]/10 rounded-2xl p-8 sm:p-10 border border-[#e5e5e7] hover:border-[#34c759]/30 transition-all duration-500 h-full">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-linear-to-br from-[#34c759] to-[#30d158] rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zm5 4a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-[#1d1d1f] mb-4">
                    MCS-Certified Installers
                  </h3>
                  <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-6">
                    Access our network of 250+ vetted, MCS-certified installers. Compare quotes, read reviews, and choose with complete confidence.
                  </p>
                  <div className="flex items-center text-[#34c759] font-semibold text-[15px] group-hover:translate-x-2 transition-transform duration-300">
                    Find your installer
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Service 3 - Resources */}
              <div className="group opacity-0 animate-fade-in-up-scroll rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl" style={{ animationDelay: "0.3s" }}>
                <div className="bg-linear-to-br from-[#ff9500]/5 to-[#ffb84d]/5 hover:from-[#ff9500]/10 hover:to-[#ffb84d]/10 rounded-2xl p-8 sm:p-10 border border-[#e5e5e7] hover:border-[#ff9500]/30 transition-all duration-500 h-full">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-linear-to-br from-[#ff9500] to-[#ffb84d] rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-[#1d1d1f] mb-4">
                    Expert Resources
                  </h3>
                  <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-6">
                    Comprehensive guides on costs, installation timelines, maintenance, and maximizing your grant. Knowledge is power.
                  </p>
                  <div className="flex items-center text-[#ff9500] font-semibold text-[15px] group-hover:translate-x-2 transition-transform duration-300">
                    Read our guides
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Exist - Trust & Standards */}
        <section className="py-20 sm:py-28 md:py-32 bg-linear-to-b from-white to-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-16 sm:mb-20 opacity-0 animate-fade-in-up-scroll">
              <div className="inline-block mb-4">
                <span className="px-3 py-1 rounded-full bg-[#34c759]/10 text-[#34c759] text-[12px] font-semibold uppercase tracking-wider">Quality & Trust</span>
              </div>
              <h2 className="text-[44px] sm:text-[52px] md:text-[60px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.1] mb-6">
                Standards You Can Trust
              </h2>
              <p className="text-[18px] sm:text-[20px] text-[#6e6e73] leading-[1.6] max-w-2xl mx-auto">
                We've built robust vetting criteria and quality standards that protect you at every step.
              </p>
            </div>

            {/* Trust cards grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="group opacity-0 animate-fade-in-up-scroll bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/60 hover:border-[#34c759]/40 hover:bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-1" style={{ animationDelay: "0.05s" }}>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 bg-[#34c759] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#1d1d1f] mb-3">MCS-Verified</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6] grow">
                    Every installer holds Microgeneration Certification Scheme credentials—required for government grants.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group opacity-0 animate-fade-in-up-scroll bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/60 hover:border-[#34c759]/40 hover:bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-1" style={{ animationDelay: "0.1s" }}>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 bg-[#34c759] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#1d1d1f] mb-3">UK Coverage</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6] grow">
                    Licensed, vetted professionals operating across all regions of the United Kingdom.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group opacity-0 animate-fade-in-up-scroll bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/60 hover:border-[#34c759]/40 hover:bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-1" style={{ animationDelay: "0.15s" }}>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 bg-[#34c759] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#1d1d1f] mb-3">Quality Assurance</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6] grow">
                    Strict vetting criteria with continuous monitoring. Installers who cut corners are immediately removed.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group opacity-0 animate-fade-in-up-scroll bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/60 hover:border-[#34c759]/40 hover:bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-1" style={{ animationDelay: "0.2s" }}>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 bg-[#34c759] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#1d1d1f] mb-3">Privacy Protected</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6] grow">
                    Your data is yours alone. We never sell information or share details without your explicit consent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Make Money */}
        <section className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fade-in-up-scroll">
              <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.1] mb-4">
                How We Make Money
              </h2>
              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.6] max-w-2xl mx-auto">
                Our business model is transparent and keeps us independent. You always pay nothing.
              </p>
            </div>

            <div className="bg-[#fafafa] rounded-3xl p-8 sm:p-12 opacity-0 animate-fade-in-up-scroll">
              <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                <div className="text-center sm:text-left">
                  <div className="w-12 h-12 bg-[#0071e3] rounded-full flex items-center justify-center mx-auto sm:mx-0 mb-4 text-white font-semibold text-lg">1</div>
                  <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2">You check eligibility & request quotes</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">Use our quiz to check if you qualify for the £7,500 grant and connect with installers.</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="w-12 h-12 bg-[#34c759] rounded-full flex items-center justify-center mx-auto sm:mx-0 mb-4 text-white font-semibold text-lg">2</div>
                  <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2">We match you with MCS installers</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">We connect you with vetted, certified professionals in your area.</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="w-12 h-12 bg-[#ff9500] rounded-full flex items-center justify-center mx-auto sm:mx-0 mb-4 text-white font-semibold text-lg">3</div>
                  <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2">Installers pay us a referral fee</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">MCS-certified installers pay us a referral fee for each qualified lead. You pay nothing.</p>
                </div>
              </div>

              <div className="border-t border-[#e5e5e7] pt-8 sm:pt-10">
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] text-center max-w-3xl mx-auto">
                  This model ensures independence. We're compensated regardless of which installer you choose, so our recommendations are always based on quality and fit — never on commission.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16 sm:py-20 md:py-24 bg-[#fafafa]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fade-in-up-scroll">
              <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.1] mb-4">
                Our Commitment
              </h2>
              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.6] max-w-2xl mx-auto">
                We're dedicated to making Air Source Heat Pump installation transparent, fair, and homeowner-first.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#e5e5e7] h-full">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Transparency</h3>
                  <p className="text-[16px] text-[#6e6e73] leading-[1.7]">
                    No hidden costs. No jargon. We explain how air source heat pumps work, what they cost, and what the government grant covers. You make informed decisions.
                  </p>
                </div>
              </div>

              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#e5e5e7] h-full">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Fair Pricing</h3>
                  <p className="text-[16px] text-[#6e6e73] leading-[1.7]">
                    Compare multiple quotes from MCS-certified installers. Our referral model means we're paid equally regardless of your choice, so pricing is always competitive.
                  </p>
                </div>
              </div>

              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#e5e5e7] h-full">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Quality Assurance</h3>
                  <p className="text-[16px] text-[#6e6e73] leading-[1.7]">
                    Every installer in our network is MCS-certified, UK-based, and vetted. We maintain standards. Installers who cut corners are removed.
                  </p>
                </div>
              </div>

              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.25s" }}>
                <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#e5e5e7] h-full">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Privacy First</h3>
                  <p className="text-[16px] text-[#6e6e73] leading-[1.7]">
                    Your data is yours. We never sell information or share details without your permission. You control who contacts you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium gradient with motion */}
        <section className="py-24 sm:py-32 md:py-40 relative overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-linear-to-br from-[#0071e3] via-[#00a2ff] to-[#0071e3]" />
          
          {/* Decorative animated elements */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-10" style={{ animationDelay: '2s' }} />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="opacity-0 animate-fade-in-up-scroll">
              {/* Heading */}
              <h2 className="text-[44px] sm:text-[56px] md:text-[64px] lg:text-[72px] font-semibold text-white tracking-tight leading-[1.1] mb-6 sm:mb-8">
                Ready to Make the Switch?
              </h2>

              {/* Subheading */}
              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-white/90 mb-12 sm:mb-16 max-w-3xl mx-auto leading-[1.6] font-light">
                Take our 90-second eligibility check. Discover if you qualify for the £7,500 Boiler Upgrade Scheme. Then compare free quotes from our network of vetted, MCS-certified installers.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
                <Link href="/quiz">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#0071e3] px-10 sm:px-12 py-4 sm:py-4.5 text-[16px] sm:text-[17px] rounded-full h-auto font-bold transition-all duration-300 hover:scale-[1.05] border-0 shadow-2xl hover:shadow-3xl min-h-[52px]"
                  >
                    Check Eligibility Now →
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white border-white/50 hover:border-white px-10 sm:px-12 py-4 sm:py-4.5 text-[16px] sm:text-[17px] rounded-full h-auto font-semibold transition-all duration-300 backdrop-blur-md min-h-[52px]"
                  >
                    Schedule a Callback
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-white/80 text-[14px] sm:text-[15px]">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Completely Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No Obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Takes 90 Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
    </div>
  )
}
