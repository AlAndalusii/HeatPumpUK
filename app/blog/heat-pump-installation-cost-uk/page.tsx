"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"

export default function HeatPumpInstallationCostPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Heat Pump Installation Cost UK: What You'll Pay 2025</title>
        <meta name="description" content="Heat pump installation cost UK ranges from £8,000-£15,000. With £7,500 grant, pay as little as £500. Complete price breakdown, hidden costs, and how to save money." />
        <meta name="keywords" content="heat pump installation cost UK, heat pump cost, installation price, air source heat pump cost, ground source cost, heat pump grant" />
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
      <section className="pt-32 pb-12 px-6 bg-linear-to-br from-[#0071e3] to-[#0056b3]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-[13px] font-medium text-white uppercase tracking-wide">Installation Costs</span>
          </div>
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-white mb-6 tracking-tight leading-[1.1]">
            Heat Pump Installation Cost UK: What You'll Actually Pay in 2025
          </h1>
          <div className="flex items-center gap-4 text-white/80">
            <span className="text-[15px]">January 1, 2026</span>
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
              Heat pump installation cost is probably the first thing you want to know about when you're thinking of getting one. And honestly, it's not cheap. But let me break down exactly what you'll pay, where the money goes, and how you can keep costs down.
            </p>
            <p className="text-[19px] md:text-[21px] text-[#1d1d1f] leading-[1.6] mb-6">
              I'm going to be completely straight with you. No fancy talk. No hiding the real numbers. Just the honest truth about how much it costs to get a heat pump installed in your home.
            </p>
          </div>

          {/* The Basic Numbers */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              The Basic Numbers You Need to Know
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Right, let's start with the big question. How much does it actually cost to install a heat pump in the UK?
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-[#f5f5f7] rounded-2xl p-8 border-l-4 border-[#0071e3]">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Air Source Heat Pump</h3>
                <p className="text-[17px] text-[#6e6e73] mb-4">Which is what most people get</p>
                <p className="text-[32px] font-bold text-[#0071e3] mb-4">£8,000 – £15,000</p>
                <p className="text-[15px] text-[#6e6e73]">Full installation cost including everything</p>
              </div>

              <div className="bg-[#f5f5f7] rounded-2xl p-8 border-l-4 border-[#34c759]">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Ground Source Heat Pump</h3>
                <p className="text-[17px] text-[#6e6e73] mb-4">Which goes underground</p>
                <p className="text-[32px] font-bold text-[#34c759] mb-4">£15,000 – £35,000</p>
                <p className="text-[15px] text-[#6e6e73]">Way more expensive because they have to dig up your garden</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#34c759] to-[#28a745] rounded-2xl p-8 text-white mb-8">
              <h3 className="text-[24px] font-bold mb-4">The Game Changer: £7,500 Government Grant</h3>
              <p className="text-[17px] leading-[1.6] mb-4">
                I know those numbers probably made your eyes water a bit. They're not small amounts. But remember, there's a <strong>seven and a half thousand pound government grant</strong> available right now.
              </p>
              <p className="text-[17px] leading-[1.6] mb-6">
                So if your air source heat pump costs £12,000 and you get the grant, you're actually paying £4,500. Still a chunk of money, but not as scary as twelve grand.
              </p>
              <Link href="/quiz">
                <Button className="bg-white hover:bg-gray-100 text-[#34c759] px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  Check Your Eligibility →
                </Button>
              </Link>
            </div>
          </div>

          {/* What Makes Up the Cost */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              What Actually Makes Up the Cost?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Let me explain where all that money goes, because it's not just someone sticking a box outside your house.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f]">The Outdoor Unit</h3>
                  <span className="text-[24px] font-bold text-[#0071e3]">£3,000 – £5,000</span>
                </div>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  That's the big metal box that sits outside and does all the work. Better brands cost more, cheaper ones cost less. You get what you pay for with heat pumps.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f]">The Indoor Components</h3>
                  <span className="text-[24px] font-bold text-[#0071e3]">£2,000 – £4,000</span>
                </div>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  This includes all the pipework, the hot water cylinder if you need one, controls, valves, and all the bits and pieces that make it work.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f]">Labour Costs</h3>
                  <span className="text-[24px] font-bold text-[#0071e3]">£2,000 – £3,000</span>
                </div>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  This is what you pay the installers for their time. A proper installation takes 2-3 days with a team of 2-3 people. They're not just plumbers—they need special training to work with heat pumps.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f]">Extras & Upgrades</h3>
                  <span className="text-[24px] font-bold text-[#ff9500]">Variable</span>
                </div>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  If your house needs better insulation first, that's more money. If you need bigger radiators, that's more money. If your electrical supply needs upgrading, that's more money.
                </p>
              </div>
            </div>

            <div className="bg-[#fff3cd] border-l-4 border-[#ff9500] rounded-xl p-6">
              <p className="text-[15px] text-[#856404] leading-[1.6]">
                <strong>Important:</strong> Some houses are dead easy to install a heat pump in. Everything's already perfect. Those installations might only cost £8,000 or £9,000. Other houses are a nightmare—old electrics, tiny radiators, no space for a cylinder, poor insulation. Those can easily hit £15,000 or more.
              </p>
            </div>
          </div>

          {/* Air Source vs Ground Source */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Air Source vs Ground Source Costs
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-[#0071e3] to-[#0056b3] rounded-2xl p-8 text-white">
                <h3 className="text-[24px] font-bold mb-4">Air Source</h3>
                <p className="text-[15px] leading-[1.6] mb-4 opacity-90">
                  Air source heat pumps are way cheaper to install. The outdoor unit sits on a concrete pad or brackets on your wall. The installers run pipes through your wall into the house. Job done in 2-3 days.
                </p>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-[13px] font-semibold uppercase tracking-wide mb-2">Installation Time</p>
                  <p className="text-[20px] font-bold">2-3 Days</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#34c759] to-[#28a745] rounded-2xl p-8 text-white">
                <h3 className="text-[24px] font-bold mb-4">Ground Source</h3>
                <p className="text-[15px] leading-[1.6] mb-4 opacity-90">
                  Ground source heat pumps need massive holes dug in your garden. Either they dig trenches about 2 metres deep across your whole lawn, or they drill really deep boreholes straight down. Both options are expensive and messy.
                </p>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-[13px] font-semibold uppercase tracking-wide mb-2">Digging Cost Alone</p>
                  <p className="text-[20px] font-bold">£5,000 – £10,000</p>
                </div>
              </div>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
              But here's the thing. Ground source heat pumps are more efficient once they're in. The ground temperature is more stable than air temperature, so they work better in really cold weather. Over 20 years, you might save enough on running costs to make up for the higher installation cost.
            </p>
            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              Most people go for air source though. It's just simpler and cheaper to get installed.
            </p>
          </div>

          {/* Hidden Costs */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Hidden Costs Nobody Tells You About
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Right, this is important. The quote you get from an installer might not include everything you need.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Radiator Upgrades</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6] mb-3">
                  Heat pumps work at lower temperatures than gas boilers, so your existing radiators might not give out enough heat. New radiators cost about £150-£300 each.
                </p>
                <p className="text-[17px] font-bold text-[#ff9500]">If you need 6 radiators: £900 – £1,800 extra</p>
              </div>

              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Hot Water Cylinder</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6] mb-3">
                  If you've got a combi boiler now, you don't have a cylinder. Heat pumps need one.
                </p>
                <p className="text-[17px] font-bold text-[#ff9500]">£800 – £1,500 including fitting</p>
              </div>

              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Electrical Upgrades</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6] mb-3">
                  Heat pumps use quite a bit of electricity, and old houses sometimes can't handle it. Upgrading your consumer unit and cables could be necessary.
                </p>
                <p className="text-[17px] font-bold text-[#ff9500]">£500 – £1,000</p>
              </div>

              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Insulation Improvements</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6] mb-3">
                  If your house is really draughty, a heat pump will struggle. Getting proper insulation done first could be necessary.
                </p>
                <p className="text-[17px] font-bold text-[#ff9500]">£2,000 – £5,000 depending on what you need</p>
              </div>

              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Annual Servicing</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6] mb-3">
                  It's not optional. You need to get it serviced to keep the warranty valid.
                </p>
                <p className="text-[17px] font-bold text-[#ff9500]">£150 – £200 every year</p>
              </div>

              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Planning Permission</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6] mb-3">
                  Most houses don't need it, but if you're in a conservation area or your house is listed, you might need to apply.
                </p>
                <p className="text-[17px] font-bold text-[#ff9500]">A few hundred pounds</p>
              </div>
            </div>
          </div>

          {/* How to Get Cheapest Installation */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              How to Get the Cheapest Installation
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-[#34c759] pl-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Get at least three quotes</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  Prices vary loads between installers. One might quote £9,000, another might quote £13,000 for the exact same job. Shop around.
                </p>
              </div>

              <div className="border-l-4 border-[#34c759] pl-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Check if you need all the extras</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  Some installers try to sell you stuff you don't actually need. If your radiators are already quite big and your house is well insulated, you might not need to upgrade anything.
                </p>
              </div>

              <div className="border-l-4 border-[#34c759] pl-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Time it right</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  Installers are busier in autumn when everyone panics about winter. They're quieter in spring and summer. You might get a better price in May than in October.
                </p>
              </div>

              <div className="border-l-4 border-[#34c759] pl-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Use the grant</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  Seriously, the £7,500 Boiler Upgrade Scheme grant makes a massive difference. Don't try to install a heat pump without claiming it. You'd be throwing away free money.
                </p>
              </div>

              <div className="border-l-4 border-[#ff9500] pl-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Don't go for the cheapest quote automatically</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  The cheapest installer might cut corners. They might use cheaper equipment that breaks down sooner. They might rush the job. Sometimes paying a bit more gets you much better quality.
                </p>
              </div>

              <div className="border-l-4 border-[#0071e3] pl-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Look for MCS certified installers</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  MCS certification means they've been properly trained and they follow quality standards. You need an MCS installer to get the grant anyway.
                </p>
              </div>
            </div>
          </div>

          {/* Comparing to Gas Boilers */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Comparing Installation Costs to Gas Boilers
            </h2>

            <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-8">
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
                A new gas boiler costs about <strong>£2,500 – £4,500</strong> installed. Way cheaper than a heat pump.
              </p>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                So why would anyone pay three times more for a heat pump?
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#34c759] flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">The Grant</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                    With the grant, you might only pay a bit more than a boiler would cost anyway.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#34c759] flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Running Costs</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                    Heat pumps are cheaper to run than gas boilers if you've got a decent electricity tariff. Over 15 years, you could save thousands on bills.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#34c759] flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Future Proofing</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                    Gas boilers are being phased out. By 2035, you probably won't be able to buy a new gas boiler. Heat pumps are the future whether you like it or not.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#34c759] flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">House Value</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                    Having a heat pump might make your house worth more when you sell it. Buyers are starting to care about energy efficiency.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              But yes, the upfront cost is definitely higher. No getting around that.
            </p>
          </div>

          {/* Regional Differences */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Regional Differences in Cost
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Installation costs vary depending on where you live in the UK.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#fff3cd] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#856404] mb-2">Most Expensive</h3>
                <p className="text-[15px] text-[#856404] leading-[1.6]">
                  <strong>London & South East:</strong> Same installation that costs £10,000 in Yorkshire might cost £12,000 in Surrey. Higher labour costs, higher living costs, everything costs more down south.
                </p>
              </div>

              <div className="bg-[#d1ecf1] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#0c5460] mb-2">Most Affordable</h3>
                <p className="text-[15px] text-[#0c5460] leading-[1.6]">
                  <strong>Scotland & Northern England:</strong> Generally 10-20% cheaper than London prices.
                </p>
              </div>

              <div className="bg-[#e2e3e5] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#383d41] mb-2">Middle Range</h3>
                <p className="text-[15px] text-[#383d41] leading-[1.6]">
                  <strong>Wales & Midlands:</strong> Usually middle of the range pricing.
                </p>
              </div>

              <div className="bg-[#e2e3e5] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#383d41] mb-2">Similar to North</h3>
                <p className="text-[15px] text-[#383d41] leading-[1.6]">
                  <strong>Northern Ireland:</strong> Similar to Northern England pricing.
                </p>
              </div>
            </div>

            <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
              It's not a huge difference, maybe 10-20% between the cheapest and most expensive areas. But it's worth knowing.
            </p>
          </div>

          {/* Finance Options */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Finance Options
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Most people can't just drop £10,000 on a heat pump. So there are ways to spread the cost.
            </p>

            <div className="space-y-4">
              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Installer Finance Plans</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  Some installers offer finance plans. You pay monthly instead of all at once. Interest rates vary loads though. Some are reasonable, some are absolutely taking the mick.
                </p>
              </div>

              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Council Grants & Loans</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  Your local council might have grants or loans available on top of the national grant. Worth checking your council's website.
                </p>
              </div>

              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Energy Company Deals</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  Some energy companies offer deals where they help with the cost if you switch to their tariff. Read the small print carefully on those.
                </p>
              </div>

              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Green Mortgages & Home Improvement Loans</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  Green mortgages or home improvement loans from banks can work if you're doing other upgrades at the same time.
                </p>
              </div>
            </div>
          </div>

          {/* Is It Worth It */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Is It Worth the Cost?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Here's my honest take. For some people, yes absolutely. For others, probably not yet.
            </p>

            <div className="bg-[#d4edda] border-l-4 border-[#28a745] rounded-xl p-6 mb-6">
              <h3 className="text-[18px] font-semibold text-[#155724] mb-3">✓ Worth It If:</h3>
              <ul className="space-y-2 text-[15px] text-[#155724]">
                <li>• Your gas boiler is dying and needs replacing anyway</li>
                <li>• You qualify for the £7,500 grant</li>
                <li>• Your house is reasonably well insulated</li>
                <li>• You're staying put for 10+ years</li>
                <li>• You want to future-proof your home</li>
              </ul>
            </div>

            <div className="bg-[#f8d7da] border-l-4 border-[#dc3545] rounded-xl p-6 mb-6">
              <h3 className="text-[18px] font-semibold text-[#721c24] mb-3">✗ Probably Not Worth It If:</h3>
              <ul className="space-y-2 text-[15px] text-[#721c24]">
                <li>• Your gas boiler works fine and is relatively new</li>
                <li>• Your house is poorly insulated with single glazing</li>
                <li>• You're planning to move in the next 5 years</li>
                <li>• You're just switching to be environmentally friendly (payback takes time)</li>
              </ul>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              But if you're staying put for 10 years or more, your house is in decent condition, and your boiler needs replacing soon anyway, then yeah. The installation cost makes sense when you look at the long-term picture.
            </p>
          </div>

          {/* Questions to Ask */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              What to Ask Installers
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              When you're getting quotes, ask these questions to understand the real cost:
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0071e3] flex items-center justify-center text-white text-[12px] font-bold mt-1">
                  ?
                </div>
                <p className="text-[15px] text-[#1d1d1f]">Does the quote include everything? VAT, scaffolding if needed, electrics, the grant application, everything?</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0071e3] flex items-center justify-center text-white text-[12px] font-bold mt-1">
                  ?
                </div>
                <p className="text-[15px] text-[#1d1d1f]">What brand of heat pump are you installing? Daikin, Mitsubishi, and Vaillant are generally reliable.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0071e3] flex items-center justify-center text-white text-[12px] font-bold mt-1">
                  ?
                </div>
                <p className="text-[15px] text-[#1d1d1f]">What warranty comes with it? You want at least 5 years on parts and labour.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0071e3] flex items-center justify-center text-white text-[12px] font-bold mt-1">
                  ?
                </div>
                <p className="text-[15px] text-[#1d1d1f]">Are you MCS certified? If not, walk away. You need MCS for the grant.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0071e3] flex items-center justify-center text-white text-[12px] font-bold mt-1">
                  ?
                </div>
                <p className="text-[15px] text-[#1d1d1f]">How many heat pumps have you actually installed? You want someone with proper experience.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0071e3] flex items-center justify-center text-white text-[12px] font-bold mt-1">
                  ?
                </div>
                <p className="text-[15px] text-[#1d1d1f]">What extras might I need that aren't in this quote? Make them tell you now, not after they start work.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0071e3] flex items-center justify-center text-white text-[12px] font-bold mt-1">
                  ?
                </div>
                <p className="text-[15px] text-[#1d1d1f]">Can you show me examples of previous installations? Photos or addresses of jobs nearby.</p>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              The Bottom Line
            </h2>

            <div className="bg-gradient-to-br from-[#0071e3] to-[#0056b3] rounded-2xl p-8 text-white mb-8">
              <h3 className="text-[24px] font-bold mb-4">Quick Summary</h3>
              <ul className="space-y-3 text-[15px] leading-[1.6]">
                <li>• Air source: £8,000 – £15,000 before grant</li>
                <li>• Ground source: £15,000 – £35,000 before grant</li>
                <li>• With £7,500 grant: Most pay £500 – £7,500</li>
                <li>• Watch for hidden costs (radiators, cylinder, electrics)</li>
                <li>• Get 3 quotes from MCS installers</li>
                <li>• Time it right (spring/summer = cheaper)</li>
                <li>• London 10-20% more expensive than North</li>
              </ul>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              It's a big investment. No point pretending otherwise. But with the grant, rising gas prices, and the fact that gas boilers are being phased out anyway, it's starting to make sense for more and more people.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] font-semibold">
              Just make sure you get multiple quotes, check everything's included, use an MCS installer, and claim that grant. Those four things will save you thousands.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#34c759] to-[#28a745] rounded-2xl p-8 text-center text-white">
            <h2 className="text-[28px] md:text-[32px] font-bold mb-4">Ready to Get Heat Pump Quotes?</h2>
            <p className="text-[17px] leading-[1.6] mb-6 opacity-90">
              Compare prices from vetted installers. Check your grant eligibility. Get the best deal for your home.
            </p>
            <Link href="/quiz">
              <Button className="bg-white hover:bg-gray-100 text-[#34c759] px-10 py-4 rounded-full text-[17px] font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Get Free Quotes →
              </Button>
            </Link>
            <p className="text-[13px] mt-4 opacity-75">Takes 90 seconds • No obligation • 100% free</p>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-[#d2d2d7] py-12 px-6 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <Logo className="h-11 w-auto mb-4" />
              <p className="text-[14px] text-[#6e6e73]">
                Independent heat pump comparison service for UK homeowners.
              </p>
            </div>
            <div>
              <h4 className="text-[14px] font-semibold text-[#1d1d1f] mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/quiz" className="block text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Check Eligibility
                </Link>
                <Link href="/#how-it-works" className="block text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  How It Works
                </Link>
                <Link href="/blog" className="block text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Blog
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-[14px] font-semibold text-[#1d1d1f] mb-4">Resources</h4>
              <div className="space-y-2">
                <Link href="/blog/heat-pump-grant-guide" className="block text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Grant Guide
                </Link>
                <Link href="/blog/how-heat-pumps-work" className="block text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  How They Work
                </Link>
                <Link href="/blog/are-heat-pumps-worth-it" className="block text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Are They Worth It?
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-[14px] font-semibold text-[#1d1d1f] mb-4">Contact</h4>
              <div className="space-y-2">
                <Link href="/contact" className="block text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Contact Us
                </Link>
                <Link href="/privacy" className="block text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-[#d2d2d7] pt-8">
            <p className="text-[12px] text-[#86868b] text-center">
              © 2025 Get Heat Pump Quotes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

