"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"

export default function SouthLondonInstallersPage() {
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
    <>
      <Head>
        <title>Heat Pump Installers South London | Local MCS Quotes</title>
        <meta name="description" content="Get free quotes from MCS-certified heat pump installers in South London. Serving Wandsworth, Lambeth, Croydon, Wimbledon and all SW postcodes. £7,500 grant support." />
        <link rel="canonical" href="https://getheatpumpquotes.co.uk/installers/london/south-london" />
      </Head>
      <div className="min-h-screen bg-white text-[#1d1d1f]">
        {/* Header */}
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
              
              <nav className="hidden md:flex items-center gap-8">
                <Link href="/#how-it-works" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                  How it works
                </Link>
                <Link href="/#faq" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                  FAQ
                </Link>
                <Link href="/about" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                  About
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
                  How it works
                </Link>
                <Link href="/#faq" className="text-base font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors py-3 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
                  FAQ
                </Link>
                <Link href="/about" className="text-base font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors py-3 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
                  About
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
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f7] via-white to-[#f9f9fb]" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#34c759] rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl opacity-0 animate-fade-in-up">
              <div className="inline-block mb-6">
                <div className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm">
                  <p className="text-[13px] sm:text-[14px] font-medium text-[#34c759]">South London Heat Pump Installers</p>
                </div>
              </div>

              <h1 className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.05] mb-6">
                Heat Pump Installers South London: Local MCS-Certified Quotes
              </h1>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#6e6e73] leading-[1.6] mb-10">
                Looking for heat pump installers in South London? We connect homeowners across SW postcodes with vetted, MCS-certified installers who know South London properties inside out. Check your £7,500 grant eligibility and compare quotes from local professionals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quiz">
                  <Button className="w-full sm:w-auto bg-[#34c759] hover:bg-[#30b350] text-white px-10 py-4 text-[17px] rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg min-h-[52px]">
                    Get Free South London Quotes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto opacity-0 animate-fade-in-up-scroll">
              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-6">
                South London has some of the most diverse housing stock in the capital. From Victorian terraces in Clapham to modern flats in Nine Elms, from 1930s semis in Streatham to period conversions in Dulwich. Each property type brings its own considerations when installing a heat pump.
              </p>
              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7]">
                That's why we focus on connecting you with installers who've done this before in South London. They understand the area, the properties, and what works.
              </p>
            </div>
          </div>
        </section>

        {/* Costs Section */}
        <section className="py-20 sm:py-28 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-8 opacity-0 animate-fade-in-up-scroll">
              Heat Pump Installation Costs in South London
            </h2>

            <div className="max-w-5xl mx-auto">
              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                South London costs tend to sit in the middle of London pricing. Not as high as Central or West London, but typically more than outer suburbs. For a typical 3-bed Victorian terrace or semi, expect to pay £11,000-£14,000 before the grant.
              </p>

              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#1d1d1f] mb-6">Typical South London Costs</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-[16px] text-[#6e6e73]">Air Source Heat Pump</span>
                    <span className="text-[16px] font-medium text-[#1d1d1f]">£10,000 - £14,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100 bg-[#34c759]/5 px-4 py-2 rounded-xl">
                    <span className="text-[16px] font-semibold text-[#34c759]">Less Grant</span>
                    <span className="text-[16px] font-semibold text-[#34c759]">-£7,500</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#0071e3]/5 px-4 py-3 rounded-xl">
                    <span className="text-[17px] font-bold text-[#0071e3]">Your Final Cost</span>
                    <span className="text-[17px] font-bold text-[#0071e3]">£2,500 - £6,500</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#34c759]/10 border-l-4 border-[#34c759] rounded-r-2xl p-6 sm:p-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Why Costs Vary in South London</h4>
                <p className="text-[16px] text-[#6e6e73] leading-[1.7]">
                  Victorian properties in Wandsworth and Lambeth often need insulation upgrades. Conservation areas in Dulwich require extra planning. Modern flats in Battersea are typically easier to install. The property type makes a big difference to the final price.
                </p>
              </div>

              <div className="text-center mt-10">
                <Link href="/quiz">
                  <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-10 py-4 text-[17px] rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg min-h-[52px]">
                    Check Grant Eligibility
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-12 opacity-0 animate-fade-in-up-scroll">
              Common Property Types in South London
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Victorian Terraces */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Victorian Terraces
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Clapham, Balham, Wandsworth, Brixton</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  These are everywhere in South London. Solid brick walls, high ceilings, sash windows. Beautiful houses that weren't built with energy efficiency in mind.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Most need better insulation before a heat pump goes in. Loft insulation is easy. Wall insulation is harder but doable. Windows might need upgrading from single to double glazing.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £11,000 - £14,000</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £3,500 - £6,500</p>
                </div>
              </div>

              {/* 1930s Semis */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  1930s Semis
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Streatham, Tooting, Mitcham</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  These properties have cavity walls, which makes insulation easier. You can pump insulation into the cavity without major disruption.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Gardens are usually bigger than Victorian terraces, giving more options for positioning the outdoor unit. Installation tends to be more straightforward.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £10,000 - £13,000</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £2,500 - £5,500</p>
                </div>
              </div>

              {/* Modern Flats */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Modern Flats
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Battersea, Nine Elms, Southwark</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  New developments in Battersea and Nine Elms often have balconies suitable for heat pump outdoor units. Well-insulated buildings. Underfloor heating is common, which works perfectly with heat pumps.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Main challenge is getting freeholder permission and dealing with building management companies. Also need space for a hot water cylinder.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £10,000 - £13,000</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £2,500 - £5,500</p>
                </div>
              </div>

              {/* Period Conversions */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.25s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Period Conversions
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Dulwich, Herne Hill, Crystal Palace</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Dulwich has several conservation areas. Installing heat pumps here needs careful consideration of where the outdoor unit goes and how it looks from the street.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Our installers have worked with Southwark Council's planning department many times. They know what gets approved and how to position units sensitively.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £12,000 - £15,000</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £4,500 - £7,500</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Covered */}
        <section className="py-20 sm:py-28 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-8 opacity-0 animate-fade-in-up-scroll">
              Areas We Cover in South London
            </h2>

            <div className="max-w-5xl mx-auto opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
              <p className="text-[18px] text-[#6e6e73] mb-8">
                Our MCS-certified installers serve all South London areas including:
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  'Wandsworth', 'Battersea', 'Clapham', 'Balham',
                  'Wimbledon', 'Merton', 'Colliers Wood', 'Tooting',
                  'Streatham', 'Mitcham', 'Croydon', 'Purley',
                  'Sutton', 'Lambeth', 'Brixton', 'Stockwell',
                  'Southwark', 'Peckham', 'Dulwich', 'Herne Hill',
                  'Crystal Palace', 'Norwood'
                ].map((area) => (
                  <div key={area} className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                    <span className="text-[15px] text-[#1d1d1f]">{area}</span>
                  </div>
                ))}
              </div>

              <p className="text-[17px] text-[#6e6e73] text-center">
                And all surrounding SW postcodes. Enter your postcode in our quote form to check coverage.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Local */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-12 text-center opacity-0 animate-fade-in-up-scroll">
              Benefits of Local South London Heat Pump Installers
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <div className="w-16 h-16 bg-[#34c759]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#34c759]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Faster Response Times</h3>
                <p className="text-[16px] text-[#6e6e73] leading-[1.7]">
                  Local installers can visit for surveys quickly. Less travel time means more availability for appointments.
                </p>
              </div>

              <div className="text-center opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <div className="w-16 h-16 bg-[#0071e3]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#0071e3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Know Local Properties</h3>
                <p className="text-[16px] text-[#6e6e73] leading-[1.7]">
                  Experience with Victorian terraces, 1930s semis, and modern flats common to South London.
                </p>
              </div>

              <div className="text-center opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 bg-[#ff9500]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#ff9500]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Local Reputation</h3>
                <p className="text-[16px] text-[#6e6e73] leading-[1.7]">
                  Build their business on local recommendations. Care about quality because word spreads fast.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local FAQs */}
        <section className="py-20 sm:py-28 bg-[#f5f5f7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-12 opacity-0 animate-fade-in-up-scroll">
              Common Questions from South London Homeowners
            </h2>

            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up-scroll">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Do Victorian terraces in Clapham and Balham need special preparation?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  Usually yes. Most Victorian properties in these areas have solid walls with no cavity insulation. You'll probably need to upgrade loft insulation at minimum. External or internal wall insulation might be worth considering too, though it's not always essential. Your surveyor will assess your specific property and advise what's needed.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">What about conservation areas in Dulwich?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7] mb-3">
                  Dulwich has several conservation areas managed by Southwark Council. You might need planning permission depending on where your heat pump unit will go.
                </p>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  If the unit goes on a side or rear wall not visible from the street, you're often fine. If it's front-facing or in a prominent position, you'll need permission. Our installers know the local rules and can guide you through the process.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Can flats in Battersea and Nine Elms get heat pumps?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7] mb-3">
                  Yes, many can. Modern developments in these areas often have good outdoor space options. Balconies work well for smaller units.
                </p>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  The main hurdle is getting permission from the building management company. Some are supportive, others less so. Worth checking your lease and speaking to them early. You'll also need space inside for a hot water cylinder, which can be tight in smaller flats.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#34c759] via-[#30d158] to-[#34c759]" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="opacity-0 animate-fade-in-up-scroll">
              <h2 className="text-[44px] sm:text-[56px] md:text-[64px] font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Get Quotes from Local South London Installers
              </h2>

              <p className="text-[18px] sm:text-[20px] text-white/90 mb-10 max-w-3xl mx-auto leading-[1.6]">
                Free, no obligation quotes from MCS-certified installers who know South London properties. 90-second grant check included.
              </p>

              <Link href="/quiz">
                <Button className="bg-white hover:bg-gray-50 text-[#34c759] px-12 py-4 text-[17px] rounded-full font-bold transition-all duration-300 hover:scale-[1.05] shadow-2xl min-h-[52px]">
                  Get Free Quotes
                </Button>
              </Link>

              <p className="text-[15px] text-white/70 mt-8">
                Serving all SW postcodes • No sales pressure • Just honest quotes
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

