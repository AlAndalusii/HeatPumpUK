"use client"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Head from "next/head"

export default function AirSourceHeatPumpCostPage() {
  return (
    <>
      <Head>
        <title>Air Source Heat Pump Cost UK (2026 Guide) – What You'll Really Pay</title>
        <meta name="description" content="Air source heat pump cost UK: £8,000-£15,000 before grant, £500-£7,500 after the £7,500 grant. Complete breakdown of what you'll actually pay in 2026." />
        <meta name="keywords" content="air source heat pump cost UK, how much does an air source heat pump cost, heat pump installation cost, air source heat pump price UK" />
      </Head>
      <div className="min-h-screen bg-white text-[#1d1d1f]">
      {/* Header */}
      <Navbar activePage="resources" />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-linear-to-br from-[#0071e3] to-[#0056b3]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-[13px] font-medium text-white uppercase tracking-wide">2026 Cost Guide</span>
          </div>
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-white mb-6 tracking-tight leading-[1.1]">
            Air Source Heat Pump Cost in the UK (2026 Guide)
          </h1>
          <div className="flex items-center gap-4 text-white/80">
            <span className="text-[15px]">January 3, 2026</span>
            <span>•</span>
            <span className="text-[15px]">10 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Simple Introduction */}
          <div className="mb-12">
            <p className="text-[19px] md:text-[21px] text-[#1d1d1f] leading-[1.6] mb-6">
              You want to know how much an air source heat pump really costs in the UK. Here's the simple answer.
            </p>
            
            <p className="text-[21px] md:text-[24px] font-bold text-[#1d1d1f] leading-[1.4] mb-8">
              Most UK homes pay around £8,000–£15,000 before the grant, and about £500–£7,500 after the £7,500 grant.
            </p>
          </div>

          {/* Main Cost Breakdown Table */}
          <div className="mb-12">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              What You'll Actually Pay: Full Breakdown
            </h2>

            <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden mb-8 shadow-sm">
              <table className="w-full">
                <thead className="bg-[#0071e3]">
                  <tr>
                    <th className="text-left p-4 text-[17px] font-semibold text-white">What You're Paying For</th>
                    <th className="text-right p-4 text-[17px] font-semibold text-white">Typical Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="p-4 text-[15px] text-[#1d1d1f]">Heat pump system (outdoor + indoor unit)</td>
                    <td className="p-4 text-[17px] font-semibold text-[#1d1d1f] text-right">£5,000 – £9,000</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-[#f5f5f7]">
                    <td className="p-4 text-[15px] text-[#1d1d1f]">Labour (installation team for 2-3 days)</td>
                    <td className="p-4 text-[17px] font-semibold text-[#1d1d1f] text-right">£2,000 – £3,000</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="p-4 text-[15px] text-[#1d1d1f]">Extras (radiators, hot water cylinder, electrical work)</td>
                    <td className="p-4 text-[17px] font-semibold text-[#1d1d1f] text-right">£1,000 – £3,000</td>
                  </tr>
                  <tr className="border-t-2 border-gray-300 bg-[#f5f5f7]">
                    <td className="p-4 text-[17px] font-bold text-[#1d1d1f]">Total Before Grant</td>
                    <td className="p-4 text-[20px] font-bold text-[#1d1d1f] text-right">£8,000 – £15,000</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-[#34c759]/10">
                    <td className="p-4 text-[17px] font-bold text-[#34c759]">Government Grant</td>
                    <td className="p-4 text-[20px] font-bold text-[#34c759] text-right">-£7,500</td>
                  </tr>
                  <tr className="border-t-2 border-[#34c759] bg-[#34c759]">
                    <td className="p-4 text-[19px] font-bold text-white">What YOU Actually Pay</td>
                    <td className="p-4 text-[24px] font-bold text-white text-right">£500 – £7,500</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[15px] text-[#6e6e73] leading-[1.6] mb-8">
              The exact cost depends on your home's size, how well it's insulated, and whether you need extras like new radiators or a hot water cylinder. <Link href="/blog/heat-pump-grant-guide" className="text-[#0071e3] hover:underline">Learn more about the £7,500 grant</Link>.
            </p>
          </div>

          {/* Early CTA */}
          <div className="bg-linear-to-br from-[#0071e3] to-[#0056b3] rounded-2xl p-8 text-center text-white mb-16">
            <h3 className="text-[24px] md:text-[28px] font-bold mb-4">Want to Know Your Exact Cost?</h3>
            <p className="text-[17px] leading-[1.6] mb-6 opacity-90">
              Check your eligibility in 90 seconds and see how much YOU would actually pay after the £7,500 grant.
            </p>
            <Link href="/quiz">
              <Button className="bg-white hover:bg-gray-100 text-[#0071e3] px-10 py-4 rounded-full text-[17px] font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Check My Cost & Eligibility →
              </Button>
            </Link>
          </div>

          {/* Why the Cost Varies */}
          <div className="mb-16">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Why Does the Cost of an Air Source Heat Pump Vary?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Not every home costs the same to fit with a heat pump. Here's what makes the price go up or down:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Your Home's Size</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  A bigger house needs a bigger heat pump. A small 2-bed flat might only need a 5kW system (around £8,000). A large 4-bed house might need a 12kW system (around £13,000).
                </p>
              </div>

              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Your Current Heating System</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  If you've got a combi boiler now, you'll need a hot water cylinder (adds £800-£1,500). If you already have a cylinder, that's one less thing to buy.
                </p>
              </div>

              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Your Radiators</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  Heat pumps work best with bigger radiators. If yours are tiny, you might need to upgrade a few (£150-£300 each).
                </p>
              </div>

              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Your Insulation</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  Poorly insulated homes lose heat fast. You might need loft insulation (£300-£700) or cavity wall insulation (£1,000-£2,000) first.
                </p>
              </div>

              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Where You Live</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  London and the South East cost more (10-20% higher). In Manchester, costs are often lower – <Link href="/installers/manchester" className="text-[#0071e3] hover:underline">see our Manchester guide</Link>. Scotland and Northern England are usually cheapest.
                </p>
              </div>
            </div>
          </div>

          {/* Running Costs vs Gas */}
          <div className="mb-16">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Running Costs: Heat Pump vs Gas Boiler
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              The upfront cost is higher, but what about your energy bills? Here's the simple truth.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-[#ff9500] rounded-2xl p-6">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">⚡ Gas Boiler</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6] mb-4">
                  Gas is cheap but boilers waste lots of energy. For every £1 of gas you burn, you get about £0.90 worth of heat. The rest goes out the flue.
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-4">
                  <p className="text-[13px] font-semibold uppercase tracking-wide mb-1 text-[#6e6e73]">Typical Annual Cost</p>
                  <p className="text-[24px] font-bold text-[#1d1d1f]">£800 – £1,200</p>
                </div>
              </div>

              <div className="bg-white border-2 border-[#0071e3] rounded-2xl p-6">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">🌡️ Heat Pump</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6] mb-4">
                  Electricity costs more per unit, but heat pumps are super efficient. For every £1 of electricity, you get £3-£4 worth of heat. Magic? No, just physics.
                </p>
                <div className="bg-[#0071e3]/10 rounded-xl p-4">
                  <p className="text-[13px] font-semibold uppercase tracking-wide mb-1 text-[#6e6e73]">Typical Annual Cost</p>
                  <p className="text-[24px] font-bold text-[#0071e3]">£700 – £1,100</p>
                </div>
              </div>
            </div>

            <div className="bg-[#34c759]/10 border-l-4 border-[#34c759] rounded-r-xl p-6">
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                <strong>Bottom line:</strong> If your home is well insulated, a heat pump will usually cost about the same to run as a gas boiler, sometimes a bit less. If your home is poorly insulated, a heat pump will cost more to run.
              </p>
            </div>
          </div>

          {/* Is It Worth It Section */}
          <div className="mb-16">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Is an Air Source Heat Pump Worth It?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              With costs ranging from £500 to £7,500 after the grant, is it actually worth getting one? Here's when it makes sense and when it doesn't.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-[#d4edda] border-2 border-[#28a745] rounded-2xl p-8">
                <h3 className="text-[22px] font-semibold text-[#155724] mb-4">✓ It's Worth It If:</h3>
                <ul className="space-y-3 text-[16px] text-[#155724]">
                  <li className="flex items-start gap-3">
                    <span className="text-[20px] mt-[-2px]">•</span>
                    <span>Your gas boiler is old and needs replacing soon anyway</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[20px] mt-[-2px]">•</span>
                    <span>You qualify for the £7,500 grant (most homeowners do)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[20px] mt-[-2px]">•</span>
                    <span>Your home has decent insulation (loft, cavity walls, double glazing)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[20px] mt-[-2px]">•</span>
                    <span>You're planning to stay in your home for 10+ years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[20px] mt-[-2px]">•</span>
                    <span>You want to future-proof (gas boilers are being phased out by 2035)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f8d7da] border-2 border-[#dc3545] rounded-2xl p-8">
                <h3 className="text-[22px] font-semibold text-[#721c24] mb-4">✗ It's Probably Not Worth It If:</h3>
                <ul className="space-y-3 text-[16px] text-[#721c24]">
                  <li className="flex items-start gap-3">
                    <span className="text-[20px] mt-[-2px]">•</span>
                    <span>Your gas boiler is only a few years old and works perfectly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[20px] mt-[-2px]">•</span>
                    <span>Your home has poor insulation (single glazing, no loft insulation)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[20px] mt-[-2px]">•</span>
                    <span>You're planning to move in the next 5 years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[20px] mt-[-2px]">•</span>
                    <span>You don't qualify for the grant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[20px] mt-[-2px]">•</span>
                    <span>You're expecting massive savings immediately (payback takes time)</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              Want a detailed breakdown of whether it's worth it for your situation? <Link href="/blog/are-heat-pumps-worth-it" className="text-[#0071e3] hover:underline font-semibold">Read our honest analysis here</Link>.
            </p>
          </div>

          {/* Mid CTA */}
          <div className="bg-linear-to-br from-[#34c759] to-[#28a745] rounded-2xl p-8 text-center text-white mb-16">
            <h3 className="text-[24px] md:text-[28px] font-bold mb-4">Want Real Numbers for Your Home?</h3>
            <p className="text-[17px] leading-[1.6] mb-6 opacity-90">
              Get free quotes from vetted MCS-certified installers. Compare prices and find the best deal.
            </p>
            <Link href="/">
              <Button className="bg-white hover:bg-gray-100 text-[#34c759] px-10 py-4 rounded-full text-[17px] font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Compare Quotes from MCS Installers →
              </Button>
            </Link>
            <p className="text-[13px] mt-4 opacity-75">Takes 90 seconds • No obligation • 100% free</p>
          </div>

          {/* How to Get the Cheapest Installation */}
          <div className="mb-16">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              How to Get the Cheapest Air Source Heat Pump Installation
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              You can save thousands by being smart about how you buy. Here's what to do:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-[#f5f5f7] rounded-xl p-6">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#0071e3] flex items-center justify-center text-white font-bold text-[18px]">
                  1
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Get at Least 3 Quotes</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                    Prices vary loads between installers. One might quote £9,000, another £13,000 for the exact same job. Always compare.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#f5f5f7] rounded-xl p-6">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#0071e3] flex items-center justify-center text-white font-bold text-[18px]">
                  2
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Use the £7,500 Grant</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                    The Boiler Upgrade Scheme gives you £7,500 off. Your installer applies for it – you don't have to do anything. <Link href="/blog/heat-pump-grant-guide" className="text-[#0071e3] hover:underline">Learn how it works</Link>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#f5f5f7] rounded-xl p-6">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#0071e3] flex items-center justify-center text-white font-bold text-[18px]">
                  3
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Only Use MCS-Certified Installers</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                    You need an MCS installer to get the grant anyway. Plus they're properly trained and follow quality standards. <Link href="/" className="text-[#0071e3] hover:underline">Find MCS installers here</Link>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#f5f5f7] rounded-xl p-6">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#0071e3] flex items-center justify-center text-white font-bold text-[18px]">
                  4
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Book in Spring or Summer</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                    Installers are quieter in May-August. You'll get better prices and faster installation. Everyone panics in October when winter's coming.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#f5f5f7] rounded-xl p-6">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#0071e3] flex items-center justify-center text-white font-bold text-[18px]">
                  5
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Don't Pick the Cheapest Quote Automatically</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                    Sometimes cheap = corners cut. Look at reviews, check their experience, make sure they include everything in the quote (no hidden extras).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Questions to Ask */}
          <div className="mb-16">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Questions to Ask When Getting Quotes
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Make sure you ask these questions to understand the real cost:
            </p>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#0071e3] text-[20px] mt-1">?</span>
                  <p className="text-[16px] text-[#1d1d1f]">Does this quote include EVERYTHING? (VAT, labour, grant application, electrics, scaffolding if needed)</p>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-start gap-3">
                  <span className="text-[#0071e3] text-[20px] mt-1">?</span>
                  <p className="text-[16px] text-[#1d1d1f]">What brand of heat pump are you installing? (Daikin, Mitsubishi, and Vaillant are reliable)</p>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-start gap-3">
                  <span className="text-[#0071e3] text-[20px] mt-1">?</span>
                  <p className="text-[16px] text-[#1d1d1f]">What warranty comes with it? (You want at least 5 years on parts and labour)</p>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-start gap-3">
                  <span className="text-[#0071e3] text-[20px] mt-1">?</span>
                  <p className="text-[16px] text-[#1d1d1f]">Will I need new radiators or a hot water cylinder? (Get it in the quote upfront)</p>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-start gap-3">
                  <span className="text-[#0071e3] text-[20px] mt-1">?</span>
                  <p className="text-[16px] text-[#1d1d1f]">How many heat pumps have you actually installed? (You want someone with proper experience)</p>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-start gap-3">
                  <span className="text-[#0071e3] text-[20px] mt-1">?</span>
                  <p className="text-[16px] text-[#1d1d1f]">Can I see examples of your previous work? (Photos or addresses of nearby jobs)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="mb-16">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              The Bottom Line on Air Source Heat Pump Costs
            </h2>

            <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-8">
              <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">Quick Summary</h3>
              <ul className="space-y-3 text-[16px] text-[#1d1d1f] leading-[1.6]">
                <li className="flex items-start gap-3">
                  <span className="text-[#0071e3] mt-1">→</span>
                  <span>Typical cost: <strong>£8,000 – £15,000</strong> before grant</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0071e3] mt-1">→</span>
                  <span>After £7,500 grant: Most pay <strong>£500 – £7,500</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0071e3] mt-1">→</span>
                  <span>Running costs similar to gas boilers if your home is well insulated</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0071e3] mt-1">→</span>
                  <span>Get 3 quotes from MCS installers to find the best price</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0071e3] mt-1">→</span>
                  <span>Book in spring/summer for better prices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0071e3] mt-1">→</span>
                  <span>Worth it if your boiler needs replacing anyway and you qualify for the grant</span>
                </li>
              </ul>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Yes, it's more expensive than a new gas boiler. But with the grant, rising gas prices, and the fact that gas boilers are being phased out by 2035 anyway, it makes sense for more and more people.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] font-semibold">
              The key is getting multiple quotes, checking everything's included, using an MCS installer, and claiming that £7,500 grant. Those four things will save you thousands.
            </p>
          </div>

          {/* Final CTA */}
          <div className="bg-linear-to-br from-[#0071e3] to-[#0056b3] rounded-2xl p-10 text-center text-white shadow-xl">
            <h2 className="text-[32px] md:text-[40px] font-bold mb-4">Ready to Find Out Your Exact Cost?</h2>
            <p className="text-[18px] leading-[1.6] mb-8 opacity-90 max-w-2xl mx-auto">
              Check your eligibility in 90 seconds, see how much you'd pay after the grant, and compare free quotes from vetted MCS-certified installers.
            </p>
            <Link href="/quiz">
              <Button className="bg-white hover:bg-gray-100 text-[#0071e3] px-12 py-5 rounded-full text-[19px] font-bold transition-all duration-300 hover:scale-105 shadow-2xl">
                Check My Cost and Grant Eligibility →
              </Button>
            </Link>
            <p className="text-[14px] mt-6 opacity-75">
              90 seconds • No obligation • No sales calls • 100% free
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
