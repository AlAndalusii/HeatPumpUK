"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"

export default function WestLondonInstallersPage() {
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
        <title>Heat Pump Installers West London | Local MCS Quotes</title>
        <meta name="description" content="Get free quotes from MCS-certified heat pump installers in West London. Serving Ealing, Richmond, Chiswick, Hounslow and all W postcodes. £7,500 grant support." />
        <link rel="canonical" href="https://getheatpumpquotes.co.uk/installers/london/west-london" />
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
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#af52de] rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl opacity-0 animate-fade-in-up">
              <div className="inline-block mb-6">
                <div className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm">
                  <p className="text-[13px] sm:text-[14px] font-medium text-[#af52de]">West London Heat Pump Installers</p>
                </div>
              </div>

              <h1 className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.05] mb-6">
                Heat Pump Installers West London: Local MCS-Certified Quotes
              </h1>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#6e6e73] leading-[1.6] mb-10">
                Looking for heat pump installers in West London? We connect homeowners across W postcodes with vetted, MCS-certified installers. Check your £7,500 grant eligibility and compare quotes from professionals serving Ealing, Richmond, Chiswick, and beyond.
              </p>

              <Link href="/quiz">
                <Button className="bg-[#af52de] hover:bg-[#9c42c8] text-white px-10 py-4 text-[17px] rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg min-h-[52px]">
                  Get Free West London Quotes
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
                West London offers a mix of expensive areas like Kensington and Chelsea alongside more affordable spots like Ealing and Acton. Property types range from premium townhouses to suburban semis.
              </p>
              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7]">
                Richmond, Kew, and Chiswick have strong green credentials and high heat pump adoption rates. Conservation areas are common, but installers here know the planning system well.
              </p>
            </div>
          </div>
        </section>

        {/* Costs */}
        <section className="py-20 sm:py-28 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-8 opacity-0 animate-fade-in-up-scroll">
              Heat Pump Installation Costs in West London
            </h2>

            <div className="max-w-5xl mx-auto">
              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                West London costs vary significantly. Kensington and Chelsea command premium prices (£13,000-£17,000). Outer areas like Ealing and Hounslow are more competitive (£10,000-£13,000).  Average across West London: £11,000-£15,000 before grant.
              </p>

              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#1d1d1f] mb-6">Typical West London Costs</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-[16px] text-[#6e6e73]">Air Source Heat Pump</span>
                    <span className="text-[16px] font-medium text-[#1d1d1f]">£11,000 - £15,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100 bg-[#34c759]/5 px-4 py-2 rounded-xl">
                    <span className="text-[16px] font-semibold text-[#34c759]">Less Grant</span>
                    <span className="text-[16px] font-semibold text-[#34c759]">-£7,500</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#0071e3]/5 px-4 py-3 rounded-xl">
                    <span className="text-[17px] font-bold text-[#0071e3]">Your Final Cost</span>
                    <span className="text-[17px] font-bold text-[#0071e3]">£3,500 - £7,500</span>
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
              Common Property Types in West London
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Premium Townhouses */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Period Townhouses
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Kensington, Chelsea, Notting Hill</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  These are some of London's most valuable properties. Large Victorian and Georgian townhouses, often listed or in conservation areas.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Heat pumps are absolutely viable here, but need careful planning. Listed building consent may be required. Our installers have extensive experience with high-end properties and heritage requirements.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £14,000 - £18,000</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £6,500 - £10,500</p>
                </div>
              </div>

              {/* Suburban Semis */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Suburban Semis
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Ealing, Acton, Hounslow</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  These make up much of outer West London. 1930s and 1950s semi-detached houses with gardens. Cavity walls, decent space, straightforward installations.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Perfect candidates for heat pumps. Good value for money in these areas. Less planning restrictions than central locations.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £10,000 - £13,000</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £2,500 - £5,500</p>
                </div>
              </div>

              {/* Riverside Properties */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Riverside Properties
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Richmond, Kew, Chiswick</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  These areas have strong environmental awareness and high heat pump adoption. Mix of period properties and modern developments along the Thames.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Conservation areas are common (especially in Kew and Richmond Green). Planning is usually manageable with experienced installers who know local requirements.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £12,000 - £15,000</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £4,500 - £7,500</p>
                </div>
              </div>

              {/* Modern Apartments */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.25s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Modern Apartments
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Hammersmith, Shepherd's Bush</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  New developments in Hammersmith and around Westfield offer good heat pump potential. Well-insulated, often with balconies for outdoor units.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Building management approval needed. Space for hot water cylinders can be tight. But many succeed with heat pump installations.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £10,000 - £13,000</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £2,500 - £5,500</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Covered */}
        <section className="py-20 sm:py-28 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-8 opacity-0 animate-fade-in-up-scroll">
              Areas We Cover in West London
            </h2>

            <div className="max-w-5xl mx-auto opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
              <p className="text-[18px] text-[#6e6e73] mb-8">
                Our MCS-certified installers serve all West London areas including:
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  'Hammersmith', 'Fulham', 'Chiswick', 'Ealing',
                  'Acton', 'Shepherd\'s Bush', 'Kensington', 'Chelsea',
                  'Notting Hill', 'Paddington', 'Bayswater', 'Hounslow',
                  'Richmond', 'Twickenham', 'Kew', 'Brentford'
                ].map((area) => (
                  <div key={area} className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                    <span className="text-[15px] text-[#1d1d1f]">{area}</span>
                  </div>
                ))}
              </div>

              <p className="text-[17px] text-[#6e6e73] text-center">
                And all surrounding W postcodes. Enter your postcode to check coverage.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-12 opacity-0 animate-fade-in-up-scroll">
              Common Questions from West London Homeowners
            </h2>

            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up-scroll">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Are heat pumps suitable for large townhouses in Kensington?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  Yes, absolutely. These properties might need larger systems or multiple units to heat the whole house. Listed buildings need special consideration for unit positioning and any building fabric changes. Our installers have worked on many high-end properties and understand the requirements. The £7,500 grant applies regardless of property value.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">What about conservation areas in Richmond and Kew?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  Richmond and Kew have extensive conservation areas, but heat pumps are absolutely possible. The key is positioning the outdoor unit where it's not prominent from the street. Rear walls usually don't need permission. Our installers work regularly with Richmond Council and know what gets approved. Many properties in these areas already have heat pumps successfully installed.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Do suburban homes in Ealing work well for heat pumps?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  Perfectly. Semi-detached houses in Ealing, Acton, and Hounslow are ideal candidates. Cavity walls make insulation easy. Gardens provide good positioning options. No conservation concerns in most cases. These installations tend to be straightforward and cost-effective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#af52de] via-[#c084e8] to-[#af52de]" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="opacity-0 animate-fade-in-up-scroll">
              <h2 className="text-[44px] sm:text-[56px] md:text-[64px] font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Get Quotes from Local West London Installers
              </h2>

              <p className="text-[18px] sm:text-[20px] text-white/90 mb-10 max-w-3xl mx-auto leading-[1.6]">
                Free quotes from MCS-certified installers across all West London areas. From premium townhouses to suburban semis.
              </p>

              <Link href="/quiz">
                <Button className="bg-white hover:bg-gray-50 text-[#af52de] px-12 py-4 text-[17px] rounded-full font-bold transition-all duration-300 hover:scale-[1.05] shadow-2xl min-h-[52px]">
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

