"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"

export default function HeatPumpCostPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Heat Pump Cost UK: Complete Price Breakdown & Savings</title>
        <meta name="description" content="Heat pump installation costs, running costs, and £7,500 grant deductions explained. Real examples from UK homes. Calculate your total cost and savings." />
        <meta name="keywords" content="heat pump cost UK, heat pump installation cost, heat pump running costs, heat pump price, air source heat pump cost, heat pump grant savings" />
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <Logo className="h-11 w-auto transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/#how-it-works" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                How it works
              </Link>
              <Link href="/#faq" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                FAQ
              </Link>
              <Link href="/blog" className="text-sm font-medium text-[#0071e3]">
                Blog
              </Link>
              <Link href="/quiz">
                <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
                  Get Free Quotes
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-linear-to-br from-[#ff9500] to-[#e68600]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-[13px] font-medium text-white uppercase tracking-wide">Costs & Savings</span>
          </div>
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-white mb-6 tracking-tight leading-[1.1]">
            Heat Pump Cost UK 2025: Complete Price Breakdown
          </h1>
          <div className="flex items-center gap-4 text-white/80">
            <span className="text-[15px]">March 10, 2025</span>
            <span>•</span>
            <span className="text-[15px]">8 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg mb-12">
            <p className="text-[19px] md:text-[21px] text-[#1d1d1f] leading-[1.6] mb-6">
              Thinking about installing a heat pump? One question probably keeps you up at night: "How much is this actually going to cost?"
            </p>
            <p className="text-[19px] md:text-[21px] text-[#1d1d1f] leading-[1.6] mb-6">
              Good news: the £7,500 government grant makes heat pumps much more affordable than they used to be. But let's break down the real numbers — installation costs, running costs, and what you'll actually pay after the grant.
            </p>
          </div>

          {/* Installation Costs */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Heat Pump Installation Costs
            </h2>

            <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-8">
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
                <strong>Installation costs range from £8,000 to £15,000</strong> depending on your property size, heating system, and installation complexity.
              </p>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                Here's the breakdown by system type:
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Air Source Heat Pump (Most Common)</h3>
                <p className="text-[17px] text-[#6e6e73] mb-3">Extracts heat from outside air</p>
                <p className="text-[24px] font-bold text-[#0071e3]">£8,000 – £12,000</p>
                <p className="text-[15px] text-[#6e6e73] mt-3">Cheapest option, suitable for most homes, can work in cold climates</p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Ground Source Heat Pump</h3>
                <p className="text-[17px] text-[#6e6e73] mb-3">Extracts heat from ground beneath your property</p>
                <p className="text-[24px] font-bold text-[#34c759]">£12,000 – £25,000+</p>
                <p className="text-[15px] text-[#6e6e73] mt-3">Most expensive, most efficient, requires garden space, longer payback period</p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Hybrid System (Heat Pump + Boiler)</h3>
                <p className="text-[17px] text-[#6e6e73] mb-3">Heat pump + existing boiler for backup</p>
                <p className="text-[24px] font-bold text-[#ff9500]">£6,000 – £10,000</p>
                <p className="text-[15px] text-[#6e6e73] mt-3">Cheapest installation, works with existing radiators, good for older homes</p>
              </div>
            </div>

            <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4 mt-8">What's Included in Installation Costs?</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">Heat pump unit (outdoor box)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">Internal unit (typically a hot water tank or fan coil)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">Pipework and connections</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">New radiators (if needed) or underfloor heating</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">Installation labor (typically 2-3 days)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">MCS certification and compliance testing</span>
              </li>
            </ul>
          </div>

          {/* Running Costs */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Heat Pump Running Costs vs Gas Boiler
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Here's where heat pumps shine. They're <strong>3x more efficient</strong> than gas boilers, which means much lower heating bills.
            </p>

            <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-4">Heat Pump Annual Cost</h3>
                  <p className="text-[32px] font-bold text-[#34c759] mb-2">£500 – £800/year</p>
                  <p className="text-[15px] text-[#6e6e73]">For a typical 3-bed semi-detached house</p>
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-4">Gas Boiler Annual Cost</h3>
                  <p className="text-[32px] font-bold text-[#ff9500] mb-2">£1,200 – £1,500/year</p>
                  <p className="text-[15px] text-[#6e6e73]">For the same property</p>
                </div>
              </div>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              <strong>Annual Saving: £400 – £700 per year</strong> compared to gas boiler
            </p>

            <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">5-Year Comparison</h3>
            <div className="border border-gray-200 rounded-xl p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-[15px] text-[#6e6e73] mb-2">Heat Pump (5 years)</p>
                  <p className="text-[28px] font-bold text-[#34c759]">£2,500 – £4,000</p>
                </div>
                <div>
                  <p className="text-[15px] text-[#6e6e73] mb-2">Gas Boiler (5 years)</p>
                  <p className="text-[28px] font-bold text-[#ff9500]">£6,000 – £7,500</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grant Impact */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              How the £7,500 Grant Changes Everything
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              The government's Boiler Upgrade Scheme gives you £7,500 off a new heat pump. This dramatically changes the cost equation.
            </p>

            <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">Real Cost Breakdown (Air Source Heat Pump)</h3>
            <div className="space-y-3 mb-8">
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[17px] text-[#1d1d1f]">Installation cost</span>
                  <span className="text-[20px] font-bold text-[#1d1d1f]">£10,000</span>
                </div>
              </div>
              <div className="border border-green-200 bg-green-50 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[17px] text-[#1d1d1f]">Government grant (- £7,500)</span>
                  <span className="text-[20px] font-bold text-[#34c759]">-£7,500</span>
                </div>
              </div>
              <div className="border border-gray-300 bg-gray-100 rounded-xl p-6">
                <div className="flex justify-between items-center">
                  <span className="text-[18px] font-semibold text-[#1d1d1f]">You actually pay</span>
                  <span className="text-[24px] font-bold text-[#0071e3]">£2,500</span>
                </div>
              </div>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              <strong>Even better:</strong> Your running cost savings (£400-700/year) mean the remaining cost is recouped in 3-4 years. After that, heating is essentially "free."
            </p>
          </div>

          {/* Real Examples */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Real Examples from UK Homes
            </h2>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-xl p-8 bg-white">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-4">Example 1: Detached House, Surrey</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[17px] text-[#6e6e73]">Property type</span>
                    <span className="text-[17px] font-medium text-[#1d1d1f]">4-bed detached</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[17px] text-[#6e6e73]">Installation cost</span>
                    <span className="text-[17px] font-medium text-[#1d1d1f]">£11,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[17px] text-[#6e6e73]">After grant</span>
                    <span className="text-[17px] font-bold text-[#0071e3]">£4,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[17px] text-[#6e6e73]">Annual saving vs gas</span>
                    <span className="text-[17px] font-medium text-[#34c759]">£650/year</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="text-[17px] font-semibold text-[#1d1d1f]">Payback period</span>
                    <span className="text-[17px] font-bold text-[#ff9500]">6 years</span>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-8 bg-white">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-4">Example 2: Semi-Detached, Manchester</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[17px] text-[#6e6e73]">Property type</span>
                    <span className="text-[17px] font-medium text-[#1d1d1f]">3-bed semi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[17px] text-[#6e6e73]">Installation cost</span>
                    <span className="text-[17px] font-medium text-[#1d1d1f]">£9,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[17px] text-[#6e6e73]">After grant</span>
                    <span className="text-[17px] font-bold text-[#0071e3]">£1,700</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[17px] text-[#6e6e73]">Annual saving vs gas</span>
                    <span className="text-[17px] font-medium text-[#34c759]">£550/year</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="text-[17px] font-semibold text-[#1d1d1f]">Payback period</span>
                    <span className="text-[17px] font-bold text-[#ff9500]">3 years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Takeaway */}
          <div className="bg-gradient-to-br from-[#0071e3]/10 to-[#34c759]/10 rounded-2xl p-8 mb-16 border border-[#0071e3]/20">
            <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-4">Key Takeaway</h3>
            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              Heat pump installation costs £8,000-£15,000. With the £7,500 grant, you typically pay £2,500-£7,500. Running cost savings of £400-700/year mean most homeowners break even in 3-6 years. After that, you have cheaper heating for the next 15+ years of the heat pump's lifespan.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-[#f5f5f7] rounded-2xl p-8 text-center mb-16">
            <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-4">Ready to get accurate quotes?</h3>
            <p className="text-[17px] text-[#6e6e73] mb-6">Check your grant eligibility and compare prices from vetted installers in your area.</p>
            <Link href="/quiz">
              <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 text-[18px] rounded-full">
                Get Free Quotes
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="relative border-t border-[#d2d2d7] py-10 sm:py-12 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div className="sm:col-span-2 md:col-span-1">
              <Logo className="h-10 sm:h-11 w-auto mb-3 sm:mb-4" />
              <p className="text-[13px] sm:text-[14px] text-[#6e6e73]">
                Independent heat pump comparison for UK homeowners.
              </p>
            </div>

            <div>
              <h4 className="text-[13px] sm:text-[14px] font-semibold text-[#1d1d1f] mb-3 sm:mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/quiz" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Check Eligibility
                </Link>
                <Link href="/#how-it-works" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  How It Works
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-[13px] sm:text-[14px] font-semibold text-[#1d1d1f] mb-3 sm:mb-4">Resources</h4>
              <div className="space-y-2">
                <Link href="/#faq" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  FAQ
                </Link>
                <Link href="/blog" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Blog
                </Link>
                <Link href="/about" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  About Us
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-[13px] sm:text-[14px] font-semibold text-[#1d1d1f] mb-3 sm:mb-4">Contact</h4>
              <div className="space-y-2">
                <Link href="/contact" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Contact Us
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
    </div>
    </>
  )
}

