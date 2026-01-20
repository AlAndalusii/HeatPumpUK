"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"

export default function EastLondonInstallersPage() {
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
        <title>Heat Pump Installers East London | Local MCS Quotes</title>
        <meta name="description" content="Get free quotes from MCS-certified heat pump installers in East London. Serving Hackney, Tower Hamlets, Stratford, Walthamstow and all E postcodes. £7,500 grant support." />
        <link rel="canonical" href="https://getheatpumpquotes.co.uk/installers/london/east-london" />
      </Head>
      <div className="min-h-screen bg-white text-[#1d1d1f]">
        {/* Header - Same as other pages */}
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

        {/* Hero */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f7] via-white to-[#f9f9fb]" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#ff9500] rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl opacity-0 animate-fade-in-up">
              <div className="inline-block mb-6">
                <div className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm">
                  <p className="text-[13px] sm:text-[14px] font-medium text-[#ff9500]">East London Heat Pump Installers</p>
                </div>
              </div>

              <h1 className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.05] mb-6">
                Heat Pump Installers East London: Local MCS-Certified Quotes
              </h1>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#6e6e73] leading-[1.6] mb-10">
                Looking for heat pump installers in East London? We connect homeowners across E postcodes with vetted, MCS-certified installers. Check your £7,500 grant eligibility and compare quotes from local professionals serving Hackney, Stratford, Walthamstow, and beyond.
              </p>

              <Link href="/quiz">
                <Button className="bg-[#ff9500] hover:bg-[#e68600] text-white px-10 py-4 text-[17px] rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg min-h-[52px]">
                  Get Free East London Quotes
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto opacity-0 animate-fade-in-up-scroll">
              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-6">
                East London is changing fast. Stratford, Hackney, Walthamstow – these areas have seen massive development over the past decade. Mix of old Victorian terraces and brand new builds creates unique opportunities for heat pump installation.
              </p>
              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7]">
                Young demographic, strong environmental awareness, and lots of new construction make East London perfect for heat pump adoption. New builds around Stratford often come ready for heat pumps.
              </p>
            </div>
          </div>
        </section>

        {/* Costs */}
        <section className="py-20 sm:py-28 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-8 opacity-0 animate-fade-in-up-scroll">
              Heat Pump Installation Costs in East London
            </h2>

            <div className="max-w-5xl mx-auto">
              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                East London costs are competitive. Not as high as North or West London. New builds in Stratford and Canary Wharf are often easier to install, keeping costs down. Expect £10,000-£14,000 for typical properties before the grant.
              </p>

              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#1d1d1f] mb-6">Typical East London Costs</h3>
                
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

              <div className="text-center">
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
              Common Property Types in East London
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* New Builds */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  New Build Apartments
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Stratford, Canary Wharf, Bow</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Olympic Park developments and Canary Wharf towers offer perfect conditions for heat pumps. Well-insulated, modern building standards, often with underfloor heating already installed.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Balconies work well for outdoor units. Main challenge is building management approval, but newer developments tend to be heat pump-friendly.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £9,000 - £12,000</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £1,500 - £4,500</p>
                </div>
              </div>

              {/* Victorian Terraces */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Victorian Terraces
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Hackney, Walthamstow, Leyton</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Hackney and Walthamstow have thousands of Victorian terraces. Many have been renovated by younger homeowners who care about sustainability.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  These properties usually need insulation work before heat pumps go in. But once upgraded, they work brilliantly. Small gardens mean careful positioning of outdoor units.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £11,000 - £14,000</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £3,500 - £6,500</p>
                </div>
              </div>

              {/* Converted Flats */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Converted Flats
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Shoreditch, Bethnal Green, Mile End</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Industrial buildings converted to residential use are common in Shoreditch and surrounding areas. These conversions vary wildly in quality and layout.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Some have great outdoor spaces. Others don't. Ground floor units with courtyard access work best. Upper floors need balconies or roof rights.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £10,000 - £13,000</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £2,500 - £5,500</p>
                </div>
              </div>

              {/* Semi-Detached */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.25s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Semi-Detached Houses
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Ilford, Romford, Woodford</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Outer East London has plenty of 1930s and 1950s semi-detached houses. These are ideal for heat pumps. Bigger gardens than inner-city terraces. Cavity walls make insulation easier.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Installation is typically straightforward. Good value for money in these areas.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £9,500 - £12,500</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £2,000 - £5,000</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Covered */}
        <section className="py-20 sm:py-28 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-8 opacity-0 animate-fade-in-up-scroll">
              Areas We Cover in East London
            </h2>

            <div className="max-w-5xl mx-auto opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
              <p className="text-[18px] text-[#6e6e73] mb-8">
                Our MCS-certified installers serve all East London areas including:
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  'Hackney', 'Tower Hamlets', 'Newham', 'Waltham Forest',
                  'Shoreditch', 'Stratford', 'Canary Wharf', 'Bow',
                  'Mile End', 'Bethnal Green', 'Whitechapel', 'Leyton',
                  'Walthamstow', 'Ilford', 'Romford', 'Woodford',
                  'Barking', 'Dagenham'
                ].map((area) => (
                  <div key={area} className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                    <span className="text-[15px] text-[#1d1d1f]">{area}</span>
                  </div>
                ))}
              </div>

              <p className="text-[17px] text-[#6e6e73] text-center">
                And all surrounding E postcodes. Enter your postcode to check coverage.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-12 opacity-0 animate-fade-in-up-scroll">
              Common Questions from East London Homeowners
            </h2>

            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up-scroll">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Do new build flats in Stratford already support heat pumps?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  Many do, but not all. Some newer developments were built heat pump-ready with underfloor heating and good insulation. Others still use gas boilers. If you're in a new build around Olympic Park or Stratford, there's a good chance heat pumps will work well. Check with your building management to see if anyone else in the building has installed one.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Are Victorian terraces in Hackney and Walthamstow suitable?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  Yes, with preparation. Most Victorian terraces in these areas need better insulation first. Loft insulation is easy and cheap. Wall insulation is more involved but worth it. Many Hackney homeowners have done this work already because they care about efficiency. Once insulation is sorted, heat pumps work beautifully.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">What about industrial conversions in Shoreditch?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  These vary hugely. Some warehouse conversions have good outdoor space and work great. Others are landlocked with no outdoor access. Ground floor units usually have options. Upper floors depend entirely on whether there's balcony or roof access. A free survey will tell you if yours is suitable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff9500] via-[#ffb84d] to-[#ff9500]" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="opacity-0 animate-fade-in-up-scroll">
              <h2 className="text-[44px] sm:text-[56px] md:text-[64px] font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Get Quotes from Local East London Installers
              </h2>

              <p className="text-[18px] sm:text-[20px] text-white/90 mb-10 max-w-3xl mx-auto leading-[1.6]">
                Free quotes from MCS-certified installers across all East London areas. New builds to Victorian terraces – we cover them all.
              </p>

              <Link href="/quiz">
                <Button className="bg-white hover:bg-gray-50 text-[#ff9500] px-12 py-4 text-[17px] rounded-full font-bold transition-all duration-300 hover:scale-[1.05] shadow-2xl min-h-[52px]">
                  Get Free Quotes
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}


