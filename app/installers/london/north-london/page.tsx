"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"

export default function NorthLondonInstallersPage() {
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
        <title>Heat Pump Installers North London | Local MCS Quotes</title>
        <meta name="description" content="Get free quotes from MCS-certified heat pump installers in North London. Serving Islington, Camden, Hampstead, Barnet and all N postcodes. £7,500 grant support." />
        <link rel="canonical" href="https://getheatpumpquotes.co.uk/installers/london/north-london" />
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
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#5856d6] rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl opacity-0 animate-fade-in-up">
              <div className="inline-block mb-6">
                <div className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm">
                  <p className="text-[13px] sm:text-[14px] font-medium text-[#5856d6]">North London Heat Pump Installers</p>
                </div>
              </div>

              <h1 className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.05] mb-6">
                Heat Pump Installers North London: Local MCS-Certified Quotes
              </h1>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#6e6e73] leading-[1.6] mb-10">
                Looking for heat pump installers in North London? We connect homeowners across N postcodes with vetted, MCS-certified installers who understand North London properties. Check your £7,500 grant eligibility and compare quotes from local professionals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quiz">
                  <Button className="w-full sm:w-auto bg-[#5856d6] hover:bg-[#4a42c0] text-white px-10 py-4 text-[17px] rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg min-h-[52px]">
                    Get Free North London Quotes
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
                North London has some of the UK's most expensive property and strongest environmental awareness. Hampstead, Highgate, Islington, Camden – these areas are leading the way on heat pump adoption.
              </p>
              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7]">
                Properties here are typically well-maintained with good insulation already in place. Conservation areas are common, but local installers know how to navigate planning requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Costs Section */}
        <section className="py-20 sm:py-28 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-8 opacity-0 animate-fade-in-up-scroll">
              Heat Pump Installation Costs in North London
            </h2>

            <div className="max-w-5xl mx-auto">
              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                North London costs tend to be at the higher end. Labor rates are premium, properties are often larger, and many homes are in conservation areas. Expect £12,000-£15,000 for most installations before the grant.
              </p>

              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#1d1d1f] mb-6">Typical North London Costs</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-[16px] text-[#6e6e73]">Air Source Heat Pump</span>
                    <span className="text-[16px] font-medium text-[#1d1d1f]">£12,000 - £16,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100 bg-[#34c759]/5 px-4 py-2 rounded-xl">
                    <span className="text-[16px] font-semibold text-[#34c759]">Less Grant</span>
                    <span className="text-[16px] font-semibold text-[#34c759]">-£7,500</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#0071e3]/5 px-4 py-3 rounded-xl">
                    <span className="text-[17px] font-bold text-[#0071e3]">Your Final Cost</span>
                    <span className="text-[17px] font-bold text-[#0071e3]">£4,500 - £8,500</span>
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
              Common Property Types in North London
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Large Victorian/Edwardian */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Large Victorian and Edwardian Houses
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Hampstead, Highgate, Muswell Hill</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  These are substantial properties, often 4-5 bedrooms with high ceilings and multiple reception rooms. Beautiful period features but can be expensive to heat.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Most have been improved over the years with better insulation and double glazing. Heat pumps work well here, though you might need multiple units or a larger system for the whole house.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £13,000 - £17,000</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £5,500 - £9,500</p>
                </div>
              </div>

              {/* Period Conversions */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Converted Flats
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Islington, Camden, Holloway</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Victorian and Edwardian houses converted into flats are common throughout North London. Each flat needs individual consideration for heat pump suitability.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Ground floor and garden flats are easiest. Upper floors need outdoor space (balcony or roof access) and freeholder permission. Building management companies in Islington tend to be relatively progressive about heat pumps.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £11,000 - £14,000</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £3,500 - £6,500</p>
                </div>
              </div>

              {/* Modern Apartments */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Modern Apartments
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">King's Cross, Camden, Finsbury Park</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  New developments around King's Cross and Finsbury Park offer good opportunities for heat pumps. Well-insulated buildings with underfloor heating are ideal candidates.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Balconies are usually suitable for outdoor units. Main challenge is getting management company approval and finding space for the hot water cylinder.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £10,000 - £13,000</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £2,500 - £5,500</p>
                </div>
              </div>

              {/* Conservation Properties */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.25s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Conservation Area Properties
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Hampstead, Highgate, Kentish Town</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Many North London areas have conservation status. This doesn't mean you can't get a heat pump, but positioning matters.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Side or rear walls usually fine. Front-facing installations need planning permission. Our installers have extensive experience working with Camden and Barnet planning departments.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £12,000 - £16,000</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £4,500 - £8,500</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Covered */}
        <section className="py-20 sm:py-28 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-8 opacity-0 animate-fade-in-up-scroll">
              Areas We Cover in North London
            </h2>

            <div className="max-w-5xl mx-auto opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
              <p className="text-[18px] text-[#6e6e73] mb-8">
                Our MCS-certified installers serve all North London areas including:
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  'Islington', 'Camden', 'Hampstead', 'Highgate',
                  'Finchley', 'Barnet', 'Enfield', 'Haringey',
                  'Wood Green', 'Hornsey', 'Archway', 'Holloway',
                  'Kentish Town', 'Swiss Cottage', 'Golders Green', 'Muswell Hill',
                  'Crouch End', 'Finsbury Park'
                ].map((area) => (
                  <div key={area} className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                    <span className="text-[15px] text-[#1d1d1f]">{area}</span>
                  </div>
                ))}
              </div>

              <p className="text-[17px] text-[#6e6e73] text-center">
                And all surrounding N postcodes. Enter your postcode in our quote form to check coverage.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-12 opacity-0 animate-fade-in-up-scroll">
              Common Questions from North London Homeowners
            </h2>

            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up-scroll">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Are heat pumps suitable for large Hampstead and Highgate homes?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  Yes, very much so. Larger properties might need bigger units or multiple heat pumps to cover the whole house. The key is proper heat loss calculations during the survey. Many Hampstead homes already have good insulation, which helps enormously. Running costs can actually be lower than gas heating because of how efficient heat pumps are.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">What about conservation areas common in North London?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  Conservation areas don't automatically mean no heat pump. It depends where the outdoor unit goes. Rear walls not visible from the street usually don't need planning permission. Front walls probably will. Our installers know Camden and Barnet planning rules well and can advise on positioning that's likely to be approved.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Do converted flats in Islington work for heat pumps?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  Many do. Ground floor flats with garden access are straightforward. Upper floor flats need either balcony space or roof access for the outdoor unit. You'll need permission from all freeholders in the building, which can take time. Islington freeholders tend to be more progressive than some other boroughs, but it's not guaranteed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5856d6] via-[#6f6de8] to-[#5856d6]" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="opacity-0 animate-fade-in-up-scroll">
              <h2 className="text-[44px] sm:text-[56px] md:text-[64px] font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Get Quotes from Local North London Installers
              </h2>

              <p className="text-[18px] sm:text-[20px] text-white/90 mb-10 max-w-3xl mx-auto leading-[1.6]">
                Free, no obligation quotes from MCS-certified installers who understand North London properties and conservation requirements.
              </p>

              <Link href="/quiz">
                <Button className="bg-white hover:bg-gray-50 text-[#5856d6] px-12 py-4 text-[17px] rounded-full font-bold transition-all duration-300 hover:scale-[1.05] shadow-2xl min-h-[52px]">
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


