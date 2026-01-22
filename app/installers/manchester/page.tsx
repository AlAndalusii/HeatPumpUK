"use client"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { useEffect } from "react"
import Head from "next/head"

export default function ManchesterInstallersPage() {
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
        <title>Air Source Heat Pump Installers Manchester | Compare MCS Quotes</title>
        <meta name="description" content="Get free quotes from MCS-certified Air Source Heat Pump installers in Manchester. Check £7,500 grant eligibility. Serving all Greater Manchester areas." />
        <meta name="keywords" content="Air Source Heat Pump installers Manchester, Air Source Heat Pump Manchester, Air Source Heat Pump Manchester, Air Source Heat Pump installation Manchester, Air Source Heat Pumps Manchester, MCS certified Manchester" />
        <link rel="canonical" href="https://getheatpumpquotes.co.uk/installers/manchester" />
      </Head>
      <div className="min-h-screen bg-white text-[#1d1d1f]">
        {/* Header */}
        <Navbar activePage="other" />

        {/* Hero Section */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f7] via-white to-[#f9f9fb]" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#0071e3] rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#34c759] rounded-full mix-blend-multiply filter blur-3xl opacity-8" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl opacity-0 animate-fade-in-up">
              <div className="inline-block mb-6">
                <div className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm">
                  <p className="text-[13px] sm:text-[14px] font-medium text-[#0071e3]">Compare Air Source Heat Pump Installers in Manchester</p>
                </div>
              </div>

              <h1 className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.05] mb-6">
                Compare Air Source Heat Pump Installers in Manchester
              </h1>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#6e6e73] leading-[1.6] mb-4">
                Sarah from Manchester just checked her eligibility and qualified for £7,500.
              </p>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#6e6e73] leading-[1.6] mb-4">
                <Link href="/quiz" className="text-[#0071e3] hover:underline">Check your eligibility in 90 seconds</Link> and compare free quotes from up to 3 vetted air source heat pump installers and heating engineers in Manchester.
              </p>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#6e6e73] leading-[1.6] mb-10">
                We don't install heat pumps ourselves – we're an independent comparison service that helps Manchester homeowners find trusted, MCS-certified installers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quiz">
                  <Button className="w-full sm:w-auto bg-[#0071e3] hover:bg-[#0077ed] text-white px-10 py-4 text-[17px] rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg min-h-[52px]">
                    Get Free Quotes – Check Grant Eligibility
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* Cost Section */}
        <section className="py-20 sm:py-28 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-6 opacity-0 animate-fade-in-up-scroll">
                How Much Does Air Source Heat Pump Installation Cost in Manchester?
              </h2>

              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.05s" }}>
                These are typical prices quoted by MCS-certified Manchester installers in our network.
              </p>

              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                Air source heat pump installation costs in Manchester are usually lower than in London. The city has a mix of Victorian terraces, 1930s semis, and modern flats, so local installers are used to all property types. Average air source heat pump costs range from £9,000 to £13,000 before the grant.
              </p>

              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-12 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                The £7,500 Boiler Upgrade Scheme grant is available to Manchester homeowners, which makes air source heat pump installation much more affordable. After the grant, most homes pay between £1,500 and £5,500.
              </p>

              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg mb-12 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-8">Manchester Air Source Heat Pump Cost Breakdown</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 text-[15px] font-semibold text-[#1d1d1f]">Item</th>
                        <th className="text-right py-4 px-4 text-[15px] font-semibold text-[#1d1d1f]">Cost Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-4 px-4 text-[16px] font-bold text-[#1d1d1f]">Air source heat pump installation in Manchester</td>
                        <td className="py-4 px-4 text-right text-[16px] font-medium text-[#1d1d1f]">£9,000 – £13,000</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-4 px-4 text-[16px] font-bold text-[#1d1d1f]">Ground source heat pump installation in Manchester</td>
                        <td className="py-4 px-4 text-right text-[16px] font-medium text-[#1d1d1f]">£16,000 – £30,000</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-[#34c759]/5">
                        <td className="py-4 px-4 text-[16px] font-semibold text-[#34c759]">Government grant (Boiler Upgrade Scheme)</td>
                        <td className="py-4 px-4 text-right text-[16px] font-semibold text-[#34c759]">–£7,500</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-[#0071e3]/5">
                        <td className="py-4 px-4 text-[17px] font-bold text-[#0071e3]">Your final cost (air source)</td>
                        <td className="py-4 px-4 text-right text-[17px] font-bold text-[#0071e3]">£1,500 – £5,500</td>
                      </tr>
                      <tr className="bg-[#0071e3]/5">
                        <td className="py-4 px-4 text-[17px] font-bold text-[#0071e3]">Your final cost (ground source)</td>
                        <td className="py-4 px-4 text-right text-[17px] font-bold text-[#0071e3]">£8,500 – £22,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-[#ff9500]/10 border-l-4 border-[#ff9500] rounded-r-2xl p-6 sm:p-8 mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.25s" }}>
                <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Why Manchester Prices Are Competitive</h4>
                <p className="text-[16px] text-[#6e6e73] leading-[1.7] mb-4">
                  Manchester air source heat pump installers benefit from:
                </p>
                <ul className="space-y-2 text-[16px] text-[#6e6e73] leading-[1.7]">
                  <li>• Lower labour costs than London and the South</li>
                  <li>• Lots of experience with local property types</li>
                  <li>• Easier access to many properties (less congestion)</li>
                  <li>• Strong competition between local installers</li>
                  <li>• Many homes already upgraded with better insulation</li>
                </ul>
              </div>

              <div className="text-center">
                <Link href="/quiz">
                  <Button className="bg-[#34c759] hover:bg-[#30b350] text-white px-10 py-4 text-[17px] rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg min-h-[52px]">
                    Check If You Qualify for the £7,500 Grant
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Manchester Installers */}
        <section className="py-20 sm:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-6 text-center opacity-0 animate-fade-in-up-scroll">
              Why Compare Air Source Heat Pump Installers in Manchester With Us?
            </h2>
            <p className="text-[17px] sm:text-[19px] text-[#6e6e73] text-center mb-12 max-w-3xl mx-auto opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.05s" }}>
              We match Manchester homeowners with vetted air source heat pump installers and qualified heating engineers – not salespeople.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <div className="w-14 h-14 bg-[#0071e3]/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#0071e3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-[22px] sm:text-[24px] font-semibold text-[#1d1d1f] mb-4">
                  MCS-Certified Professionals
                </h3>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7]">
                  All Manchester installers in our network hold MCS certification. This is required for the £7,500 Boiler Upgrade Scheme grant. MCS certification means the installer has met strict quality standards and their work can be independently checked.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <div className="w-14 h-14 bg-[#34c759]/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#34c759]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-[22px] sm:text-[24px] font-semibold text-[#1d1d1f] mb-4">
                  Local Manchester Expertise
                </h3>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7]">
                  Our installers understand Manchester homes. They've worked on:
                  <br />• Victorian terraces in Chorlton and Didsbury<br />
                  • 1930s semis in Sale, Altrincham and Stockport<br />
                  • Modern city centre flats and new builds<br />
                  They know local planning rules and how heat pumps perform in Manchester's climate.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <div className="w-14 h-14 bg-[#ff9500]/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#ff9500]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-[22px] sm:text-[24px] font-semibold text-[#1d1d1f] mb-4">
                  Competitive Manchester Pricing
                </h3>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7]">
                  When you compare quotes from up to 3 installers, they compete for your business. That often means better prices and better service. You are never forced to choose anyone. If the quote doesn't feel right, you can walk away.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.25s" }}>
                <div className="w-14 h-14 bg-[#5856d6]/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#5856d6]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-[22px] sm:text-[24px] font-semibold text-[#1d1d1f] mb-4">
                  Grant Application Support
                </h3>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.7]">
                  Installers handle the full £7,500 grant application for you. You don't need to fill in government forms yourself. The grant is paid directly to the installer and taken off your final bill.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 sm:py-28 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-6 text-center opacity-0 animate-fade-in-up-scroll">
              How to Get Air Source Heat Pump Quotes in Manchester
            </h2>
            <p className="text-[18px] sm:text-[20px] text-[#6e6e73] text-center mb-16 max-w-3xl mx-auto opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
              Three simple steps to compare installers and get your air source heat pump installed:
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Step 1 */}
              <div className="bg-white rounded-3xl p-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <div className="w-16 h-16 bg-[#0071e3] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-[28px] font-bold text-white">1</span>
                </div>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">Answer 10 Quick Questions</h3>
                <p className="text-[16px] text-[#6e6e73] leading-[1.7] mb-4">
                  Tell us about your Manchester property, your current heating system, and when you'd like installation. This takes about 2 minutes.
                </p>
                <p className="text-[15px] text-[#86868b]">
                  No credit card required • No commitment • No installer sales calls
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-3xl p-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 bg-[#34c759] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-[28px] font-bold text-white">2</span>
                </div>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">Compare Up to 3 Manchester Installers</h3>
                <p className="text-[16px] text-[#6e6e73] leading-[1.7] mb-4">
                  Up to 3 MCS-certified installers contact you within 24 hours. All are based in or serve Greater Manchester and have been vetted for quality and reliability.
                </p>
                <p className="text-[15px] text-[#86868b]">
                  Usually get responses same day
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-3xl p-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.25s" }}>
                <div className="w-16 h-16 bg-[#ff9500] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-[28px] font-bold text-white">3</span>
                </div>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">Compare Quotes and Choose an Installer</h3>
                <p className="text-[16px] text-[#6e6e73] leading-[1.7] mb-4">
                  Review your quotes, ask questions, and choose the installer that feels right for you. We only help you compare – we don't install anything ourselves. You're free to say no.
                </p>
                <p className="text-[15px] text-[#86868b]">
                  Most people save £1,500–£3,000 by comparing
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/quiz">
                <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-10 py-4 text-[17px] rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg min-h-[52px]">
                  Get Free Quotes
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Manchester Property Types */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-12 opacity-0 animate-fade-in-up-scroll">
              Air Source Heat Pumps for Different Manchester Properties
            </h2>

            <div className="space-y-12 max-w-5xl mx-auto">
              {/* Victorian Terraces */}
              <div className="opacity-0 animate-fade-in-up-scroll">
                <h3 className="text-[26px] sm:text-[30px] font-semibold text-[#1d1d1f] mb-4">
                  Victorian Terraces
                </h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7] mb-3">
                  Manchester has thousands of Victorian terraces in areas like Chorlton, Didsbury and Withington. Local heating engineers and air source heat pump specialists in Manchester often work on these homes. These properties usually have solid brick walls and may need insulation upgrades before installation.
                </p>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7] mb-3">
                  Radiators may also need upgrading because heat pumps run at lower water temperatures than gas boilers. Many Victorian homes in Manchester have already had insulation work done, which makes installation easier.
                </p>
                <div className="bg-[#f5f5f7] rounded-2xl p-6">
                  <p className="text-[16px] text-[#1d1d1f] font-semibold mb-2">Typical cost: £10,000 – £13,000 (before grant)</p>
                  <p className="text-[16px] text-[#34c759] font-semibold">After £7,500 grant: £2,500 – £5,500</p>
                </div>
              </div>

              {/* 1930s Semis */}
              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-[26px] sm:text-[30px] font-semibold text-[#1d1d1f] mb-4">
                  1930s Semi-Detached Houses
                </h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7] mb-3">
                  These homes, common in places like Sale, Altrincham and Stockport, are ideal for air source heat pumps. Local heating engineers and installers find these properties straightforward to work with – they often have cavity walls, which are easier to insulate, and decent garden space for the outdoor unit.
                </p>
                <div className="bg-[#f5f5f7] rounded-2xl p-6">
                  <p className="text-[16px] text-[#1d1d1f] font-semibold mb-2">Typical cost: £9,000 – £12,000 (before grant)</p>
                  <p className="text-[16px] text-[#34c759] font-semibold">After £7,500 grant: £1,500 – £4,500</p>
                </div>
              </div>

              {/* Modern Apartments */}
              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[26px] sm:text-[30px] font-semibold text-[#1d1d1f] mb-4">
                  Modern Apartments and New Builds
                </h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7] mb-3">
                  New developments in Manchester city centre, Salford Quays and MediaCityUK are usually well insulated and sometimes already have underfloor heating. These are great for heat pumps, as long as there is space for a hot water cylinder and outdoor unit (often on a balcony).
                </p>
                <div className="bg-[#f5f5f7] rounded-2xl p-6">
                  <p className="text-[16px] text-[#1d1d1f] font-semibold mb-2">Typical cost: £9,000 – £12,000 (before grant)</p>
                  <p className="text-[16px] text-[#34c759] font-semibold">After £7,500 grant: £1,500 – £4,500</p>
                </div>
              </div>

              {/* Period Properties */}
              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-[26px] sm:text-[30px] font-semibold text-[#1d1d1f] mb-4">
                  Period Properties and Conservation Areas
                </h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7] mb-3">
                  Areas like Didsbury and Chorlton include conservation zones and some listed buildings. In these cases, you may need planning permission or listed building consent. The outdoor unit must be placed carefully so it does not harm the look of the building.
                </p>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7] mb-3">
                  Our installers are used to working with local planning departments and can advise what is likely to be approved.
                </p>
                <div className="bg-[#f5f5f7] rounded-2xl p-6">
                  <p className="text-[16px] text-[#1d1d1f] font-semibold mb-2">Typical cost: £11,000 – £14,000 (before grant)</p>
                  <p className="text-[16px] text-[#34c759] font-semibold">After £7,500 grant: £3,500 – £6,500</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Covered */}
        <section className="py-20 sm:py-28 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-8 opacity-0 animate-fade-in-up-scroll">
              Air Source Heat Pump Installers Serving All Greater Manchester Areas
            </h2>
            <p className="text-[18px] text-[#6e6e73] mb-12 max-w-3xl opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
              Our network of MCS-certified air source heat pump installers covers all of Greater Manchester, including:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
              {/* Central Manchester */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Central Manchester</h3>
                <ul className="space-y-2 text-[15px] text-[#6e6e73]">
                  <li>City Centre</li>
                  <li>Northern Quarter</li>
                  <li>Ancoats</li>
                  <li>Spinningfields</li>
                </ul>
              </div>

              {/* South Manchester */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">South Manchester</h3>
                <ul className="space-y-2 text-[15px] text-[#6e6e73]">
                  <li>Chorlton</li>
                  <li>Didsbury</li>
                  <li>Withington</li>
                  <li>Sale</li>
                  <li>Altrincham</li>
                  <li>Stockport</li>
                </ul>
              </div>

              {/* North Manchester */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">North Manchester</h3>
                <ul className="space-y-2 text-[15px] text-[#6e6e73]">
                  <li>Prestwich</li>
                  <li>Bury</li>
                  <li>Rochdale</li>
                  <li>Oldham</li>
                  <li>Middleton</li>
                </ul>
              </div>

              {/* East Manchester */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">East Manchester</h3>
                <ul className="space-y-2 text-[15px] text-[#6e6e73]">
                  <li>Ashton-under-Lyne</li>
                  <li>Droylsden</li>
                  <li>Hyde</li>
                  <li>Stalybridge</li>
                </ul>
              </div>

              {/* West Manchester */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">West Manchester</h3>
                <ul className="space-y-2 text-[15px] text-[#6e6e73]">
                  <li>Salford</li>
                  <li>Salford Quays</li>
                  <li>MediaCityUK</li>
                  <li>Eccles</li>
                  <li>Worsley</li>
                </ul>
              </div>

              {/* Others */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Also Serving</h3>
                <ul className="space-y-2 text-[15px] text-[#6e6e73]">
                  <li>Bolton</li>
                  <li>Wigan</li>
                  <li>Leigh</li>
                  <li>Trafford</li>
                  <li>Tameside</li>
                </ul>
              </div>
            </div>

            <p className="text-[17px] text-[#6e6e73] mt-8 text-center opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
              And all surrounding Greater Manchester areas. Enter your postcode in the quote form to check coverage.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-12 opacity-0 animate-fade-in-up-scroll">
              Common Questions from Manchester Homeowners
            </h2>

            <div className="space-y-8">
              {/* FAQ 1 */}
              <div className="opacity-0 animate-fade-in-up-scroll">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Do I qualify for the £7,500 grant for Air Source Heat Pump installation in Manchester?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7] mb-3">
                  Yes, if you own your property (houses or flats work) and you're replacing gas, oil, or LPG heating. The grant is available across all Greater Manchester areas for air source heat pump installation.
                </p>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  <Link href="/quiz" className="text-[#0071e3] hover:underline">Check eligibility in 90 seconds</Link> with our quiz. Most Manchester homeowners qualify but don't know it.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.05s" }}>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">How long does Air Source Heat Pump installation take in Manchester?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  Survey: 1-2 hours. Grant application: 2-4 weeks. Installation: 2-3 days. Total timeline from quote to completion: 4-8 weeks. Manchester air source heat pump installs are typically straightforward with good access to properties.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Will I need planning permission in Manchester?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7] mb-3">
                  Most Manchester homes: NO (permitted development). Conservation areas: MAYBE (check with local council). Listed buildings: YES (listed building consent required). Flats: Need freeholder or management approval.
                </p>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  Our installers can advise on your specific situation.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Do Air Source Heat Pumps work in Manchester's climate?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7] mb-3">
                  Yes, absolutely. Air source heat pumps work efficiently in Manchester's climate. They extract heat from the air even when temperatures drop. Modern air source heat pumps are designed to work effectively in UK conditions, including Manchester's cooler winters.
                </p>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  Many Manchester homeowners have already made the switch and are seeing lower running costs.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Are Air Source Heat Pumps worth it with Manchester energy prices?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7] mb-3">
                  Yes, especially with the £7,500 grant. Heat pumps are 300 percent efficient (gas boilers 90 percent). Lower running costs if on the right tariff. Increases property value. Future-proof as gas boilers are being phased out.
                </p>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  See our <Link href="/blog/heat-pump-cost-uk" className="text-[#0071e3] hover:underline">cost comparison guide</Link> for detailed pricing.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.25s" }}>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Are Manchester installers MCS-certified and trustworthy?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  Yes! All installers in our network are vetted, MCS-certified, and background-checked.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0071e3] via-[#00a2ff] to-[#0071e3]" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="opacity-0 animate-fade-in-up-scroll">
              <h2 className="text-[44px] sm:text-[56px] md:text-[64px] font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Ready to Compare Air Source Heat Pump Quotes in Manchester?
              </h2>

              <p className="text-[18px] sm:text-[20px] text-white/90 mb-8 max-w-3xl mx-auto leading-[1.6]">
                Get free, no-obligation quotes from MCS-certified air source heat pump installers in Manchester. £7,500 grant support included. Most Manchester homeowners qualify.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
                <Link href="/quiz">
                  <Button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#0071e3] px-12 py-4 text-[17px] rounded-full font-bold transition-all duration-300 hover:scale-[1.05] shadow-2xl min-h-[52px]">
                    Get Free Quotes – Check Grant Eligibility
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-[15px]">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free</span>
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

              <p className="text-[16px] text-white/80 mt-8">
                We are not installers – we help Manchester homeowners compare vetted MCS-certified installers.
              </p>
            </div>
          </div>
        </section>

        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Air Source Heat Pump Installer Comparison - Manchester",
          "description": "Compare MCS-certified Air Source Heat Pump installers in Manchester. Free quotes, £7,500 grant support.",
          "provider": {
            "@type": "Organization",
            "name": "GetHeatPumpQuotes",
            "url": "https://getheatpumpquotes.co.uk"
          },
          "areaServed": {
            "@type": "City",
            "name": "Manchester",
            "@id": "https://en.wikipedia.org/wiki/Manchester",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "Greater Manchester",
              "containedInPlace": {
                "@type": "Country",
                "name": "United Kingdom"
              }
            }
          },
          "serviceType": "Air Source Heat Pump Installation",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "GBP",
            "description": "Free Air Source Heat Pump installer comparison service"
          }
        }) }} />

        <Footer />
      </div>
    </>
  )
}

