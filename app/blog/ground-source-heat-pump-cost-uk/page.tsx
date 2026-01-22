"use client"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Head from "next/head"

export default function GroundSourceHeatPumpCostPage() {
  return (
    <>
      <Head>
        <title>Ground Source Heat Pump Cost UK (2026 Guide) | Get Heat Pump Quotes</title>
        <meta name="description" content="Simple 2026 guide to ground source heat pump costs in the UK. See real price ranges, borehole vs trench costs, running costs, and how the £7,500 grant works. Check if a ground source or air source heat pump is better for your home." />
        <meta name="keywords" content="ground source heat pump cost UK, ground source heat pump installation cost, ground source heat pump price, borehole heat pump cost, GSHP cost, £7,500 grant, ground vs air source heat pump" />
      </Head>
      <div className="min-h-screen bg-white text-[#1d1d1f]">
      {/* Header */}
      <Navbar activePage="resources" />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-linear-to-br from-[#34c759] to-[#28a745]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-[13px] font-medium text-white uppercase tracking-wide">2026 Cost Guide</span>
          </div>
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-white mb-6 tracking-tight leading-[1.1]">
            Ground Source Heat Pump Cost in the UK (2026 Guide)
          </h1>
          <div className="flex items-center gap-4 text-white/80">
            <span className="text-[15px]">January 8, 2026</span>
            <span>•</span>
            <span className="text-[15px]">12 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg mb-12">
            <p className="text-[19px] md:text-[21px] text-[#1d1d1f] leading-[1.6] mb-6">
              Thinking about a ground source heat pump but not sure how much it really costs in the UK?
            </p>
            <p className="text-[19px] md:text-[21px] text-[#1d1d1f] leading-[1.6] mb-6">
              This guide explains it in simple language.
            </p>
            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              We'll cover:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">What a ground source heat pump actually is</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">Typical prices in the UK in 2026</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">Borehole vs horizontal trench costs</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">Extra costs people forget about</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">Running costs compared to gas and air source heat pumps</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">How the £7,500 Boiler Upgrade Scheme works for ground source</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">When a ground source system is worth it – and when air source is better</span>
              </li>
            </ul>
            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              At the end, you can also check your options and get quotes from vetted MCS installers.
            </p>
          </div>

          {/* Section 1: What is a GSHP */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              1. What is a Ground Source Heat Pump? (Quick Explanation)
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              A ground source heat pump (GSHP) is a low-carbon heating system.
            </p>

            <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-8">
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
                <strong>Very simple version:</strong>
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[17px] text-[#1d1d1f]">Pipes go into the ground (in a loop)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[17px] text-[#1d1d1f]">A liquid runs through the pipes and picks up heat from the earth</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[17px] text-[#1d1d1f]">The heat pump unit in your home boosts that heat and sends it to your radiators, or your underfloor heating, and your hot water cylinder</span>
                </li>
              </ul>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              The ground stays at a fairly steady temperature all year, so these systems can be very efficient – especially on larger homes and rural properties.
            </p>

            <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4 mt-8">Two Ways to Collect Heat</h3>
            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              You can collect heat in two main ways:
            </p>

            <div className="space-y-4 mb-8">
              <div className="border border-gray-200 rounded-xl p-6">
                <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Horizontal Trenches</h4>
                <p className="text-[17px] text-[#6e6e73]">Pipes laid in long shallow trenches across your garden</p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Vertical Boreholes</h4>
                <p className="text-[17px] text-[#6e6e73]">Deep narrow holes drilled straight down</p>
              </div>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              Both do the same job. The big difference is cost and space, which we'll cover next.
            </p>
          </div>

          {/* Section 2: Costs */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              2. How Much Does a Ground Source Heat Pump Cost in the UK?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              These are typical 2026 UK price ranges for a full ground source system (supply + install), based on common homes:
            </p>

            <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-8">
              <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-6">Typical Total System Cost (Before Any Grant)</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6">
                  <p className="text-[15px] text-[#6e6e73] mb-2">Small / well-insulated home</p>
                  <p className="text-[28px] font-bold text-[#0071e3]">£15,000 – £22,000</p>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <p className="text-[15px] text-[#6e6e73] mb-2">Average 3–4 bed UK home</p>
                  <p className="text-[28px] font-bold text-[#34c759]">£18,000 – £30,000</p>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <p className="text-[15px] text-[#6e6e73] mb-2">Large / complex home or multiple boreholes</p>
                  <p className="text-[28px] font-bold text-[#ff9500]">£25,000 – £40,000+</p>
                </div>
              </div>
            </div>

            <p className="text-[15px] text-[#6e6e73] italic mb-8">
              These are not exact quotes, just realistic ranges we see from MCS installers.
            </p>

            <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4 mt-8">Cost Breakdown</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#f5f5f7]">
                    <th className="text-left p-4 text-[15px] font-semibold text-[#1d1d1f] border-b-2 border-gray-200">Cost Item</th>
                    <th className="text-right p-4 text-[15px] font-semibold text-[#1d1d1f] border-b-2 border-gray-200">Typical Range (UK 2026)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-[15px] text-[#1d1d1f]">Ground source heat pump unit + controls</td>
                    <td className="p-4 text-[15px] text-[#1d1d1f] text-right font-medium">£6,000 – £10,000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-[15px] text-[#1d1d1f]">Ground loop – horizontal trenches</td>
                    <td className="p-4 text-[15px] text-[#1d1d1f] text-right font-medium">£4,000 – £10,000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-[15px] text-[#1d1d1f]">Ground loop – vertical boreholes</td>
                    <td className="p-4 text-[15px] text-[#1d1d1f] text-right font-medium">£8,000 – £18,000+</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-[15px] text-[#1d1d1f]">Buffer tank / hot water cylinder</td>
                    <td className="p-4 text-[15px] text-[#1d1d1f] text-right font-medium">£1,500 – £3,000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-[15px] text-[#1d1d1f]">Installation labour & commissioning</td>
                    <td className="p-4 text-[15px] text-[#1d1d1f] text-right font-medium">£3,000 – £6,000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-[15px] text-[#1d1d1f]">Electrics & upgrades (if needed)</td>
                    <td className="p-4 text-[15px] text-[#1d1d1f] text-right font-medium">£500 – £2,000+</td>
                  </tr>
                  <tr className="bg-blue-50 border-b-2 border-blue-200">
                    <td className="p-4 text-[16px] text-[#1d1d1f] font-semibold">Typical total (horizontal)</td>
                    <td className="p-4 text-[16px] text-[#0071e3] text-right font-bold">£15,000 – £25,000</td>
                  </tr>
                  <tr className="bg-green-50 border-b-2 border-green-200">
                    <td className="p-4 text-[16px] text-[#1d1d1f] font-semibold">Typical total (boreholes)</td>
                    <td className="p-4 text-[16px] text-[#34c759] text-right font-bold">£20,000 – £35,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Most normal UK homes land somewhere between <strong>£18,000 and £30,000</strong> before any grant.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#0071e3] rounded-r-xl p-6 mb-8">
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                If you want a deeper cost breakdown for air source systems too, you can read our <Link href="/blog/heat-pump-cost-uk" className="text-[#0071e3] hover:underline font-medium">air source heat pump cost guide</Link> and compare numbers side by side.
              </p>
            </div>
          </div>

          {/* Section 3: Boreholes vs Trenches */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              3. Boreholes vs Horizontal Trenches (Big Cost Difference)
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              A huge part of the price is the groundworks – what happens outside your house.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-2 border-[#0071e3] rounded-2xl p-8 bg-white">
                <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-4">Horizontal Trenches</h3>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0071e3] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Long trenches (around 1–2 metres deep) dug in your garden</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0071e3] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Pipes laid in loops and then covered back over</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0071e3] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">You need quite a bit of land</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f] font-medium">Cheaper than boreholes if you have the space</span>
                  </li>
                </ul>

                <div className="bg-blue-50 rounded-xl p-6">
                  <p className="text-[15px] text-[#6e6e73] mb-2">Typical extra cost:</p>
                  <p className="text-[28px] font-bold text-[#0071e3] mb-3">£4,000 – £10,000</p>
                  <p className="text-[15px] text-[#6e6e73]">Depending on: Length of pipe • Ground conditions • Access for machinery</p>
                </div>
              </div>

              <div className="border-2 border-[#34c759] rounded-2xl p-8 bg-white">
                <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-4">Vertical Boreholes</h3>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Deep narrow holes drilled straight down into the ground</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Great for homes with small gardens or tight sites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Needs specialist drilling rigs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#ff9500] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f] font-medium">Much more expensive than trenches</span>
                  </li>
                </ul>

                <div className="bg-green-50 rounded-xl p-6">
                  <p className="text-[15px] text-[#6e6e73] mb-2">Typical extra cost:</p>
                  <p className="text-[28px] font-bold text-[#34c759] mb-3">£8,000 – £18,000+</p>
                  <p className="text-[15px] text-[#6e6e73]">Depending on: Number of boreholes • Depth (e.g. 100m+ each) • Local ground type</p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-[#ff9500]/10 to-[#e68600]/10 rounded-2xl p-8 border border-[#ff9500]/20">
              <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Very Simple Rule of Thumb:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#0071e3] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[17px] text-[#1d1d1f]"><strong>Big garden, plenty of space</strong> → horizontal trenches often cheaper</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[17px] text-[#1d1d1f]"><strong>Small garden, not much space</strong> → boreholes, but higher upfront cost</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4: Extra Costs */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              4. Extra Costs People Forget About
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              When you look at ground source heat pump cost, don't just think about the pump itself. There are common extras.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 rounded-xl p-6 bg-white">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">a) Radiator Upgrades</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6] mb-4">
                  Ground source systems run at lower water temperatures than gas boilers. Old small radiators may not give enough heat. Many homes need bigger radiators in some rooms.
                </p>
                <p className="text-[17px] text-[#1d1d1f]">
                  <strong>Typical extra spend:</strong> <span className="text-[#ff9500] font-semibold">£1,000 – £4,000+</span> depending on house size
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 bg-white">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">b) Underfloor Heating</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6] mb-4">
                  Ground source works brilliantly with underfloor heating because it uses low-temperature water. Underfloor downstairs, radiators upstairs is a common setup.
                </p>
                <p className="text-[17px] text-[#1d1d1f]">
                  <strong>Retrofitting underfloor can add:</strong> <span className="text-[#ff9500] font-semibold">£3,000 – £8,000+</span>
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 bg-white">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">c) Hot Water Cylinder and Buffer Tank</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6] mb-4">
                  If you have a combi boiler now, you will usually need a new hot water cylinder, and sometimes a small buffer tank for the heating circuit.
                </p>
                <p className="text-[17px] text-[#1d1d1f]">
                  <strong>Rough cost:</strong> <span className="text-[#ff9500] font-semibold">£1,500 – £3,000</span> including install
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 bg-white">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">d) Electrical Upgrades</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6] mb-4">
                  Some homes need consumer unit upgrades, new electrical runs for the heat pump, or sometimes a new supply from the grid (rare, but possible on larger systems).
                </p>
                <p className="text-[17px] text-[#1d1d1f]">
                  <strong>Cost range:</strong> <span className="text-[#ff9500] font-semibold">£500 – £2,000+</span> for more complex jobs
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 bg-white">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">e) Making Good the Garden</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6] mb-4">
                  After trenches or boreholes, the ground will need leveling, maybe re-turfing or re-seeding, and patios or paths made good.
                </p>
                <p className="text-[17px] text-[#1d1d1f]">
                  <strong>Note:</strong> Installers sometimes include this, sometimes not. <span className="font-semibold">Always check your quote.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Running Costs */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              5. Running Costs: Ground Source vs Gas vs Air Source
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Ground source systems are usually very efficient, especially on well-insulated homes with underfloor heating.
            </p>

            <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">Typical Efficiency (Simplified)</h3>
            <div className="space-y-4 mb-8">
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex justify-between items-center">
                  <span className="text-[17px] font-medium text-[#1d1d1f]">Gas boiler</span>
                  <span className="text-[20px] font-bold text-[#ff9500]">~90% efficient</span>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <span className="text-[17px] font-medium text-[#1d1d1f]">Air source heat pump</span>
                  <span className="text-[20px] font-bold text-[#0071e3]">250–350% efficient</span>
                </div>
                <p className="text-[14px] text-[#6e6e73] mt-2">(2.5–3.5 units of heat per 1 unit of electricity)</p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 bg-green-50">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <span className="text-[17px] font-medium text-[#1d1d1f]">Ground source heat pump</span>
                  <span className="text-[20px] font-bold text-[#34c759]">300–400%+ efficient</span>
                </div>
                <p className="text-[14px] text-[#6e6e73] mt-2">(especially in good setups)</p>
              </div>
            </div>

            <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-8">
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                <strong>This means:</strong> For every 1 kWh of electricity, a good ground source system can deliver 3–4 kWh of heat. So even though electricity is more expensive per unit than gas, the system uses fewer units overall.
              </p>
            </div>

            <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">When Ground Source Can Beat Air Source on Running Costs</h3>
            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Ground source can give lower bills than air source when:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">The home is well insulated</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">There is underfloor heating or big radiators</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">The design and installation are done properly</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">You're on a good electricity tariff</span>
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-[#ff9500] rounded-r-xl p-6">
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-3">
                <strong>But remember:</strong>
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-[#ff9500] font-bold">•</span>
                  <span className="text-[17px] text-[#1d1d1f]">Ground source is more expensive to install</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff9500] font-bold">•</span>
                  <span className="text-[17px] text-[#1d1d1f]">Air source has cheaper upfront costs and is easier in normal homes</span>
                </li>
              </ul>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mt-4">
                If you mainly just want lower bills and don't have a big garden or land, many people find air source a better cost-to-benefit balance.
              </p>
            </div>
          </div>

          {/* Section 6: Grant */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              6. Does the £7,500 Grant Cover Ground Source Heat Pumps?
            </h2>

            <div className="bg-linear-to-br from-[#34c759]/10 to-[#28a745]/10 rounded-2xl p-8 mb-8 border border-[#34c759]/20">
              <p className="text-[32px] md:text-[40px] font-bold text-[#34c759] mb-2">Yes.</p>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                The Boiler Upgrade Scheme (BUS) in England and Wales gives £7,500 towards a ground source heat pump, and £7,500 towards an air source heat pump.
              </p>
            </div>

            <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">Key Points:</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">You must own the property (home or small business)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">You must be replacing a fossil fuel boiler (gas, oil, LPG, direct electric)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">The system and installer must both be MCS-certified</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[17px] text-[#1d1d1f]">The grant is paid to the installer, and they take it off your bill</span>
              </li>
            </ul>

            <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">Example Calculation</h3>
            <div className="space-y-3 mb-8">
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[17px] text-[#1d1d1f]">System and install</span>
                  <span className="text-[20px] font-bold text-[#1d1d1f]">£24,000</span>
                </div>
              </div>
              <div className="border border-green-200 bg-green-50 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[17px] text-[#1d1d1f]">Boiler Upgrade Scheme grant</span>
                  <span className="text-[20px] font-bold text-[#34c759]">- £7,500</span>
                </div>
              </div>
              <div className="border border-gray-300 bg-gray-100 rounded-xl p-6">
                <div className="flex justify-between items-center">
                  <span className="text-[18px] font-semibold text-[#1d1d1f]">You pay</span>
                  <span className="text-[24px] font-bold text-[#0071e3]">£16,500</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#0071e3] rounded-r-xl p-6">
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                You can use our <Link href="/quiz" className="text-[#0071e3] hover:underline font-medium">90-second eligibility checker</Link> to quickly see if you might qualify.
              </p>
            </div>
          </div>

          {/* Section 7: Is It Worth It */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              7. Is a Ground Source Heat Pump Worth It?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              It depends on your home, your budget, and how long you plan to stay there.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border-2 border-[#34c759] rounded-2xl p-8 bg-white">
                <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">When Ground Source Makes Sense ✓</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">You have plenty of land (big garden, fields, or space for trenches)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Or you're happy to pay more for boreholes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">You plan to stay in the home for a long time (10+ years)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">You want the lowest running costs you can get from a heat pump</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">You're off the gas grid (oil, LPG, electric heating now)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">You're already planning underfloor heating or a big renovation</span>
                  </li>
                </ul>
              </div>

              <div className="border-2 border-[#0071e3] rounded-2xl p-8 bg-white">
                <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">When Air Source Is Usually Better</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0071e3] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">You live in a typical UK semi or terrace with a normal-size garden</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0071e3] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">You don't want to dig up lots of land or drill boreholes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0071e3] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Your budget is more in the £8,000–£15,000 range before the grant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0071e3] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">You want something quicker and simpler to install</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-linear-to-br from-[#0071e3]/10 to-[#34c759]/10 rounded-2xl p-8 border border-[#0071e3]/20">
              <p className="text-[19px] text-[#1d1d1f] leading-[1.6] mb-4">
                <strong>Our recommendation:</strong>
              </p>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                "If you're not sure whether ground source or air source is better for your home, start with air source. It's cheaper to install and works well for most normal UK homes."
              </p>
            </div>
          </div>

          {/* Section 8: Pros and Cons */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              8. Quick Pros and Cons Summary
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-green-200 bg-green-50 rounded-2xl p-8">
                <h3 className="text-[22px] font-semibold text-[#34c759] mb-6">Ground Source Heat Pump – Pros</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#34c759] font-bold text-[20px]">+</span>
                    <span className="text-[17px] text-[#1d1d1f]">Very high efficiency, especially with underfloor heating</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#34c759] font-bold text-[20px]">+</span>
                    <span className="text-[17px] text-[#1d1d1f]">Stable performance all year round</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#34c759] font-bold text-[20px]">+</span>
                    <span className="text-[17px] text-[#1d1d1f]">Can give lower running costs than air source in the right home</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#34c759] font-bold text-[20px]">+</span>
                    <span className="text-[17px] text-[#1d1d1f]">Neat and quiet – no big fan unit outside the house</span>
                  </li>
                </ul>
              </div>

              <div className="border border-red-200 bg-red-50 rounded-2xl p-8">
                <h3 className="text-[22px] font-semibold text-[#ff3b30] mb-6">Ground Source Heat Pump – Cons</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff3b30] font-bold text-[20px]">−</span>
                    <span className="text-[17px] text-[#1d1d1f]">Much higher upfront cost than air source</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff3b30] font-bold text-[20px]">−</span>
                    <span className="text-[17px] text-[#1d1d1f]">Needs land or expensive boreholes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff3b30] font-bold text-[20px]">−</span>
                    <span className="text-[17px] text-[#1d1d1f]">More disruptive installation (digging, drilling)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff3b30] font-bold text-[20px]">−</span>
                    <span className="text-[17px] text-[#1d1d1f]">Not needed for many normal homes where air source works well</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 9: Not Sure */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              9. Not Sure Which Heat Pump to Choose?
            </h2>

            <p className="text-[19px] text-[#1d1d1f] leading-[1.6] mb-6">
              If you're reading this and thinking:
            </p>

            <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-8 italic">
              <p className="text-[19px] text-[#6e6e73] leading-[1.6]">
                "I like the idea of a ground source heat pump, but I'm not sure if it's right for my house…"
              </p>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              That's normal.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Most UK homeowners don't know if they should choose:
            </p>

            <ul className="space-y-2 mb-8 ml-6">
              <li className="text-[17px] text-[#1d1d1f]">• Gas boiler replacement</li>
              <li className="text-[17px] text-[#1d1d1f]">• Air source heat pump</li>
              <li className="text-[17px] text-[#1d1d1f]">• Ground source heat pump</li>
            </ul>

            <p className="text-[19px] text-[#1d1d1f] leading-[1.6] mb-8 font-medium">
              You don't need to decide alone.
            </p>

            <div className="bg-white border-2 border-[#0071e3] rounded-2xl p-8">
              <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-6">You can:</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#0071e3] text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                      Use a free 90-second checker to see:
                    </p>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li className="text-[16px] text-[#6e6e73]">• If you're likely to get the £7,500 grant</li>
                      <li className="text-[16px] text-[#6e6e73]">• Whether air source or ground source is more realistic for your home</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#34c759] text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                      Get free quotes from vetted, MCS-certified installers and heating engineers who can:
                    </p>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li className="text-[16px] text-[#6e6e73]">• Look at your home</li>
                      <li className="text-[16px] text-[#6e6e73]">• Explain options</li>
                      <li className="text-[16px] text-[#6e6e73]">• Give you clear prices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 10: Next Step */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              10. Next Step: Check Your Options and Get Quotes
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              If you're thinking about a ground source heat pump in the UK, the best next step is simple:
            </p>

            <div className="bg-linear-to-br from-[#0071e3] to-[#0077ed] rounded-2xl p-8 sm:p-12 text-white mb-8">
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-[18px]">1</div>
                  <p className="text-[18px] leading-[1.6]">Check your grant eligibility (takes about 90 seconds)</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-[18px]">2</div>
                  <p className="text-[18px] leading-[1.6]">Tell us about your home (10 easy questions)</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-[18px]">3</div>
                  <p className="text-[18px] leading-[1.6]">Get free quotes from vetted MCS installers and heating engineers</p>
                </div>
              </div>

              <Link href="/quiz">
                <Button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#0071e3] px-10 py-6 text-[19px] rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Free Quotes
                </Button>
              </Link>
            </div>

            <div className="bg-[#f5f5f7] rounded-2xl p-8">
              <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-4">You can then:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[17px] text-[#1d1d1f]">Compare ground source and air source options</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[17px] text-[#1d1d1f]">See real prices for your home</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[17px] text-[#1d1d1f]">Decide if the extra cost of ground source is worth it, or if air source makes more sense</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Final Message */}
          <div className="bg-linear-to-br from-[#34c759]/10 to-[#28a745]/10 rounded-2xl p-8 text-center border border-[#34c759]/20">
            <p className="text-[19px] text-[#1d1d1f] leading-[1.6] font-medium">
              You stay in control. No pushy sales calls. No pressure. Just clear numbers and simple explanations so you can choose what's right for you and your home.
            </p>
          </div>
        </div>
      </article>

      {/* Footer */}
      <Footer />
    </div>
    </>
  )
}
