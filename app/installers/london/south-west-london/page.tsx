"use client"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { useEffect } from "react"
import Head from "next/head"

export default function SouthWestLondonInstallersPage() {
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
        <title>Heat Pump Installers South West London | Local MCS Quotes | £7,500 Grant</title>
        <meta name="description" content="Get free quotes from MCS-certified heat pump installers in South West London. Serving Putney, Kingston, Wimbledon, Richmond and all SW postcodes. £7,500 grant support." />
        <link rel="canonical" href="https://getheatpumpquotes.co.uk/installers/london/south-west-london" />
      </Head>
      <div className="min-h-screen bg-white text-[#1d1d1f]">
        {/* Header */}
        <Navbar activePage="other" />

        {/* Hero */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f7] via-white to-[#f9f9fb]" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#ff2d55] rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl opacity-0 animate-fade-in-up">
              <div className="inline-block mb-6">
                <div className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm">
                  <p className="text-[13px] sm:text-[14px] font-medium text-[#ff2d55]">South West London Heat Pump Installers</p>
                </div>
              </div>

              <h1 className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.05] mb-6">
                Heat Pump Installers South West London: Local MCS-Certified Quotes
              </h1>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#6e6e73] leading-[1.6] mb-10">
                Looking for heat pump installers in South West London? We connect homeowners across SW postcodes with vetted, MCS-certified installers. Check your £7,500 grant eligibility and compare quotes from professionals serving Putney, Kingston, Wimbledon, and beyond.
              </p>

              <Link href="/quiz">
                <Button className="bg-[#ff2d55] hover:bg-[#ff1f49] text-white px-10 py-4 text-[17px] rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg min-h-[52px]">
                  Get Free South West London Quotes
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
                South West London represents some of the capital's most expensive and sought-after suburban areas. Putney, Barnes, Richmond, Kingston, Wimbledon – these are family-oriented neighborhoods with good schools and green spaces.
              </p>
              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7]">
                Properties here tend to be larger than inner London. Detached and semi-detached houses with gardens are common. High environmental awareness means strong interest in Air Source Heat Pumps. Conservation areas in Richmond and Kew require planning consideration.
              </p>
            </div>
          </div>
        </section>

        {/* Costs */}
        <section className="py-20 sm:py-28 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-8 opacity-0 animate-fade-in-up-scroll">
              Heat Pump Installation Costs in South West London
            </h2>

            <div className="max-w-5xl mx-auto">
              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                South West London costs reflect the area's premium status. Properties are often larger, requiring bigger systems. Expect £12,000-£15,000 for typical installations before the grant. Worth it for the quality of installation and local expertise.
              </p>

              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#1d1d1f] mb-6">Typical South West London Costs</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-[16px] text-[#6e6e73]">Heat Pump</span>
                    <span className="text-[16px] font-medium text-[#1d1d1f]">£12,000 - £15,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100 bg-[#34c759]/5 px-4 py-2 rounded-xl">
                    <span className="text-[16px] font-semibold text-[#34c759]">Less Grant</span>
                    <span className="text-[16px] font-semibold text-[#34c759]">-£7,500</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#0071e3]/5 px-4 py-3 rounded-xl">
                    <span className="text-[17px] font-bold text-[#0071e3]">Your Final Cost</span>
                    <span className="text-[17px] font-bold text-[#0071e3]">£4,500 - £7,500</span>
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
              Common Property Types in South West London
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Detached Houses */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Detached Family Houses
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Wimbledon, Kingston, Surbiton</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Large detached properties on generous plots define much of South West London. These homes offer excellent opportunities for Air Source Heat Pump installations.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Plenty of outdoor space for unit positioning. No shared walls. Often already well-insulated. Higher installation costs due to property size, but excellent long-term value.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £13,000 - £16,000</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £5,500 - £8,500</p>
                </div>
              </div>

              {/* Riverside Properties */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Riverside Properties
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Putney, Barnes, Mortlake, Kew</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Thames-side properties command premium prices but have excellent Air Source Heat Pump potential. Strong environmental consciousness in these areas.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Conservation areas common (especially Kew and Richmond). Planning permission often needed for front-facing installations. Rear positioning usually acceptable.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £12,500 - £15,500</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £5,000 - £8,000</p>
                </div>
              </div>

              {/* Period Villas */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Victorian and Edwardian Villas
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">Wimbledon Village, Kingston Hill</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Large period properties with character features. Often already improved by current owners with insulation and double glazing.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  High ceilings mean larger heat requirements. But generous room sizes make radiator upgrades straightforward. Gardens allow flexible unit positioning.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-semibold">Typical cost: £12,000 - £15,000</p>
                  <p className="text-[15px] text-[#34c759] font-semibold">After grant: £4,500 - £7,500</p>
                </div>
              </div>

              {/* Modern Developments */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.25s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">
                  Modern Developments
                </h3>
                <p className="text-[15px] text-[#86868b] mb-4">New Malden, Worcester Park</p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Newer housing developments offer ideal conditions for Air Source Heat Pumps. Built to modern insulation standards, often with underfloor heating.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Straightforward installations with lower costs. Some might already be Air Source Heat Pump-ready.
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
              Areas We Cover in South West London
            </h2>

            <div className="max-w-5xl mx-auto opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
              <p className="text-[18px] text-[#6e6e73] mb-8">
                Our MCS-certified installers serve all South West London areas including:
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  'Putney', 'Barnes', 'Mortlake', 'Kew',
                  'Richmond', 'Twickenham', 'Kingston', 'Surbiton',
                  'Wimbledon', 'Merton', 'Raynes Park', 'New Malden',
                  'Worcester Park', 'Cheam', 'Epsom', 'Esher'
                ].map((area) => (
                  <div key={area} className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                    <span className="text-[15px] text-[#1d1d1f]">{area}</span>
                  </div>
                ))}
              </div>

              <p className="text-[17px] text-[#6e6e73] text-center">
                And all surrounding SW postcodes. Enter your postcode to check coverage.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-12 opacity-0 animate-fade-in-up-scroll">
              Common Questions from South West London Homeowners
            </h2>

            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up-scroll">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Are heat pumps suitable for large detached houses in Wimbledon and Kingston?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  Absolutely. Larger properties might need bigger systems or multiple Air Source Heat Pumps, but they work brilliantly. Gardens provide excellent positioning options. Many South West London homes already have good insulation, which helps efficiency. The £7,500 grant applies regardless of property size or value.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">What about conservation areas in Richmond and Kew?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  These areas have extensive conservation designations, but Air Source Heat Pumps are definitely possible. Positioning is key – rear walls not visible from the street rarely need permission. Front-facing installations need planning approval. Our installers have worked on many properties in Richmond and Kew conservation areas and know exactly what gets approved.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Do riverside properties have any special considerations?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  Properties along the Thames in Putney, Barnes, and Kew often sit in conservation areas or flood zones. Neither prevents Air Source Heat Pump installation, but positioning and planning permissions need careful consideration. Our local installers understand these requirements intimately and can navigate the process smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff2d55] via-[#ff5571] to-[#ff2d55]" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="opacity-0 animate-fade-in-up-scroll">
              <h2 className="text-[44px] sm:text-[56px] md:text-[64px] font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Get Quotes from Local South West London Installers
              </h2>

              <p className="text-[18px] sm:text-[20px] text-white/90 mb-10 max-w-3xl mx-auto leading-[1.6]">
                Free quotes from MCS-certified installers across all South West London areas. Premium service for premium properties.
              </p>

              <Link href="/quiz">
                <Button className="bg-white hover:bg-gray-50 text-[#ff2d55] px-12 py-4 text-[17px] rounded-full font-bold transition-all duration-300 hover:scale-[1.05] shadow-2xl min-h-[52px]">
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


