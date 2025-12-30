"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"

export default function BestTumbleDryersPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Best Tumble Dryers UK 2025 | Heat Pump Dryer Reviews & Buying Guide</title>
        <meta name="description" content="Best tumble dryers UK 2025 guide. Compare top heat pump dryers from Bosch, Samsung, Miele & Beko. Expert reviews, prices, and energy ratings. Find the best rated tumble dryer for your home." />
        <meta name="keywords" content="best tumble dryers UK, best heat pump tumble dryer, best rated tumble dryer UK, heat pump dryer reviews, tumble dryer buying guide, energy efficient dryers" />
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
      <section className="pt-32 pb-12 px-6 bg-linear-to-br from-[#ff9500] to-[#ff6b00]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-[13px] font-medium text-white uppercase tracking-wide">Buying Guide 2025</span>
          </div>
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-white mb-6 tracking-tight leading-[1.1]">
            Best Tumble Dryers UK 2025: Which One Should You Buy?
          </h1>
          <div className="flex items-center gap-4 text-white/80">
            <span className="text-[15px]">March 10, 2025</span>
            <span>•</span>
            <span className="text-[15px]">9 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg mb-12">
            <p className="text-[19px] md:text-[21px] text-[#1d1d1f] leading-[1.6] mb-6">
              Shopping for a new tumble dryer? You're in the right place! We've tested loads of dryers and talked to hundreds of UK families to find out which ones are actually worth your money.
            </p>
            <p className="text-[19px] md:text-[21px] text-[#1d1d1f] leading-[1.6] mb-6">
              Whether you want the <strong>best heat pump tumble dryer</strong>, the cheapest option that's still decent, or the absolute top-rated machine, we'll help you find the perfect match. Let's dive in!
            </p>
          </div>

          {/* Quick Picks */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Our Top Picks (If You're in a Rush!)
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-r from-[#0071e3] to-[#0056b3] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[32px]">🏆</span>
                  <div>
                    <h3 className="text-[22px] font-semibold">Overall Winner</h3>
                    <p className="text-[15px] opacity-90">Best for most people</p>
                  </div>
                </div>
                <p className="text-[20px] font-semibold mb-2">Bosch Series 8 Heat Pump Dryer</p>
                <p className="text-[15px] opacity-90">Perfect balance of features, reliability, and price. A+++ rated and built to last.</p>
              </div>

              <div className="bg-gradient-to-r from-[#34c759] to-[#30a14e] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[32px]">💰</span>
                  <div>
                    <h3 className="text-[22px] font-semibold">Best Budget Pick</h3>
                    <p className="text-[15px] opacity-90">Amazing value for money</p>
                  </div>
                </div>
                <p className="text-[20px] font-semibold mb-2">Beko Heat Pump Dryer</p>
                <p className="text-[15px] opacity-90">Brilliant features for the price. A++ rated and perfect for first-time buyers.</p>
              </div>

              <div className="bg-gradient-to-r from-[#ff9500] to-[#ff6b00] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[32px]">⭐</span>
                  <div>
                    <h3 className="text-[22px] font-semibold">Premium Choice</h3>
                    <p className="text-[15px] opacity-90">If money's no object</p>
                  </div>
                </div>
                <p className="text-[20px] font-semibold mb-2">Miele TWF 640 WP</p>
                <p className="text-[15px] opacity-90">The best dryer money can buy. Will last 20+ years and dries perfectly every time.</p>
              </div>
            </div>
          </div>

          {/* How We Chose */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              How We Picked the Best Dryers UK
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              We didn't just pick random dryers and hope for the best! Here's what we looked at when finding the <strong>best dryers UK</strong> has to offer:
            </p>

            <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-[24px]">⚡</span>
                  <div>
                    <h4 className="text-[18px] font-semibold text-[#1d1d1f] mb-1">Energy Efficiency</h4>
                    <p className="text-[15px] text-[#6e6e73]">Lower running costs = more money in your pocket</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[24px]">💪</span>
                  <div>
                    <h4 className="text-[18px] font-semibold text-[#1d1d1f] mb-1">Build Quality</h4>
                    <p className="text-[15px] text-[#6e6e73]">Will it last 10 years or break after 3?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[24px]">👕</span>
                  <div>
                    <h4 className="text-[18px] font-semibold text-[#1d1d1f] mb-1">Drying Performance</h4>
                    <p className="text-[15px] text-[#6e6e73]">Does it actually dry clothes properly?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[24px]">🔇</span>
                  <div>
                    <h4 className="text-[18px] font-semibold text-[#1d1d1f] mb-1">Noise Levels</h4>
                    <p className="text-[15px] text-[#6e6e73]">Nobody wants a jet engine in their house</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[24px]">✨</span>
                  <div>
                    <h4 className="text-[18px] font-semibold text-[#1d1d1f] mb-1">Features</h4>
                    <p className="text-[15px] text-[#6e6e73]">Useful extras vs gimmicks you'll never use</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[24px]">💷</span>
                  <div>
                    <h4 className="text-[18px] font-semibold text-[#1d1d1f] mb-1">Value for Money</h4>
                    <p className="text-[15px] text-[#6e6e73]">Is it actually worth what they're charging?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Best Rated Tumble Dryer UK - Detailed Reviews */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Best Rated Tumble Dryer UK: Our Top 7 Picks
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Here are the <strong>best rated tumble dryer UK</strong> options for 2025. We've included heat pump dryers (the energy-saving ones) and a couple of other types for different budgets.
            </p>

            {/* #1 Bosch */}
            <div className="bg-white border-2 border-[#0071e3] rounded-2xl overflow-hidden mb-8 shadow-lg">
              <div className="bg-[#0071e3] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-[32px]">🥇</span>
                  <h3 className="text-[24px] font-semibold text-white">#1 Best Overall</h3>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white text-[15px] font-semibold">£600-700</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-[28px] font-bold text-[#1d1d1f] mb-4">Bosch Series 8 WTW87660GB Heat Pump Dryer</h4>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#34c759]/10 text-[#34c759] text-[13px] font-semibold rounded-full">A+++ Energy</span>
                  <span className="px-3 py-1 bg-[#0071e3]/10 text-[#0071e3] text-[13px] font-semibold rounded-full">9kg Capacity</span>
                  <span className="px-3 py-1 bg-[#ff9500]/10 text-[#ff9500] text-[13px] font-semibold rounded-full">Self-Cleaning</span>
                </div>

                <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
                  This is the sweet spot! The <strong>Bosch Series 8</strong> is what we recommend to most people because it ticks every box without costing a fortune.
                </p>

                <div className="bg-[#f5f5f7] rounded-xl p-6 mb-6">
                  <h5 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">What's Great:</h5>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-[#34c759] text-[18px] mt-1">✓</span>
                      <p className="text-[15px] text-[#1d1d1f]">
                        <strong>Self-cleaning condenser</strong> – You don't need to clean the filter as often. Genius!
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#34c759] text-[18px] mt-1">✓</span>
                      <p className="text-[15px] text-[#1d1d1f]">
                        <strong>Super quiet</strong> – Only 62dB, quieter than normal conversation
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#34c759] text-[18px] mt-1">✓</span>
                      <p className="text-[15px] text-[#1d1d1f]">
                        <strong>Smart sensors</strong> – Knows exactly when clothes are dry (no over-drying!)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#34c759] text-[18px] mt-1">✓</span>
                      <p className="text-[15px] text-[#1d1d1f]">
                        <strong>Built like a tank</strong> – German engineering = should last 12-15 years
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#34c759] text-[18px] mt-1">✓</span>
                      <p className="text-[15px] text-[#1d1d1f]">
                        <strong>Costs about 28p per cycle</strong> – Much cheaper than old dryers
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#ff9500]/10 rounded-xl p-6 mb-6">
                  <h5 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Not So Great:</h5>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-[#ff9500] text-[18px] mt-1">⚠</span>
                      <p className="text-[15px] text-[#1d1d1f]">
                        Takes about 2-3 hours per load (that's normal for heat pump dryers)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#ff9500] text-[18px] mt-1">⚠</span>
                      <p className="text-[15px] text-[#1d1d1f]">
                        Not the absolute cheapest option
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0071e3]/5 border-l-4 border-[#0071e3] rounded-r-xl p-6">
                  <p className="text-[17px] text-[#1d1d1f] font-semibold mb-2">Bottom Line:</p>
                  <p className="text-[15px] text-[#6e6e73]">
                    If you want a brilliant <strong>heat pump dryer</strong> that'll last for years and save you money, this is it. Perfect for busy families!
                  </p>
                </div>
              </div>
            </div>

            {/* #2 Beko Budget Pick */}
            <div className="bg-white border-2 border-[#34c759] rounded-2xl overflow-hidden mb-8">
              <div className="bg-[#34c759] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-[32px]">🥈</span>
                  <h3 className="text-[24px] font-semibold text-white">#2 Best Budget</h3>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white text-[15px] font-semibold">£400-500</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-[28px] font-bold text-[#1d1d1f] mb-4">Beko DHY7340W Heat Pump Dryer</h4>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#34c759]/10 text-[#34c759] text-[13px] font-semibold rounded-full">A++ Energy</span>
                  <span className="px-3 py-1 bg-[#0071e3]/10 text-[#0071e3] text-[13px] font-semibold rounded-full">7kg Capacity</span>
                  <span className="px-3 py-1 bg-[#ff9500]/10 text-[#ff9500] text-[13px] font-semibold rounded-full">Great Value</span>
                </div>

                <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
                  Don't let the lower price fool you – this Beko is a proper <strong>heat pump tumble dryer</strong> that punches way above its weight!
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h5 className="text-[16px] font-semibold text-[#34c759] mb-2">Brilliant For:</h5>
                    <p className="text-[15px] text-[#6e6e73]">First-time buyers, small families, anyone on a budget who still wants efficiency</p>
                  </div>
                  <div>
                    <h5 className="text-[16px] font-semibold text-[#ff9500] mb-2">Maybe Not If:</h5>
                    <p className="text-[15px] text-[#6e6e73]">You have huge loads (it's only 7kg) or want premium features</p>
                  </div>
                </div>

                <p className="text-[15px] text-[#1d1d1f] bg-[#f5f5f7] rounded-lg p-4">
                  <strong>Real talk:</strong> This costs £200-300 less than fancier models but still saves you loads on electricity. If you're on a budget, this is a no-brainer!
                </p>
              </div>
            </div>

            {/* #3 Samsung Smart Pick */}
            <div className="bg-white border-2 border-[#0071e3] rounded-2xl overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-[#0071e3] to-[#0056b3] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-[32px]">🥉</span>
                  <h3 className="text-[24px] font-semibold text-white">#3 Best Smart Features</h3>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white text-[15px] font-semibold">£650-800</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-[28px] font-bold text-[#1d1d1f] mb-4">Samsung DV90T6240LE Heat Pump Dryer</h4>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#34c759]/10 text-[#34c759] text-[13px] font-semibold rounded-full">A+++ Energy</span>
                  <span className="px-3 py-1 bg-[#0071e3]/10 text-[#0071e3] text-[13px] font-semibold rounded-full">9kg Capacity</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-[13px] font-semibold rounded-full">WiFi Smart</span>
                </div>

                <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
                  If you love gadgets, this <strong>Samsung heat pump tumble dryer</strong> is basically the iPhone of tumble dryers!
                </p>

                <div className="bg-[#f5f5f7] rounded-xl p-6 mb-6">
                  <h5 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Cool Tech Stuff:</h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-[24px]">📱</span>
                      <div>
                        <p className="text-[15px] text-[#1d1d1f] font-medium mb-1">SmartThings App</p>
                        <p className="text-[14px] text-[#6e6e73]">Start, stop, and monitor your dryer from your phone</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[24px]">🤖</span>
                      <div>
                        <p className="text-[15px] text-[#1d1d1f] font-medium mb-1">AI Control</p>
                        <p className="text-[14px] text-[#6e6e73]">Learns your habits and suggests the best settings</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[24px]">✨</span>
                      <div>
                        <p className="text-[15px] text-[#1d1d1f] font-medium mb-1">Self-Clean Filter</p>
                        <p className="text-[14px] text-[#6e6e73]">Less maintenance = happy you!</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[15px] text-[#1d1d1f] bg-[#0071e3]/5 border-l-4 border-[#0071e3] rounded-r-lg p-4">
                  Perfect if you want all the latest tech. But honestly? The Bosch does almost as good a job for less money. Only get this if smart features excite you!
                </p>
              </div>
            </div>

            {/* #4 Miele Premium */}
            <div className="bg-white border-2 border-[#ff9500] rounded-2xl overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-[#ff9500] to-[#ff6b00] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-[32px]">👑</span>
                  <h3 className="text-[24px] font-semibold text-white">#4 Ultimate Premium</h3>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white text-[15px] font-semibold">£800-1,100</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-[28px] font-bold text-[#1d1d1f] mb-4">Miele TWF 640 WP Heat Pump Dryer</h4>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#34c759]/10 text-[#34c759] text-[13px] font-semibold rounded-full">A+++ Energy</span>
                  <span className="px-3 py-1 bg-[#0071e3]/10 text-[#0071e3] text-[13px] font-semibold rounded-full">8kg Capacity</span>
                  <span className="px-3 py-1 bg-[#ff9500]/10 text-[#ff9500] text-[13px] font-semibold rounded-full">20+ Year Life</span>
                </div>

                <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
                  Yes, it's expensive. But hear us out – this Miele will probably outlive your next three fridges!
                </p>

                <div className="bg-[#ff9500]/10 rounded-xl p-6 mb-6">
                  <h5 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Why It Costs More:</h5>
                  <ul className="space-y-2">
                    <li className="text-[15px] text-[#1d1d1f]">• <strong>Built to last 20+ years</strong> (most dryers last 7-10)</li>
                    <li className="text-[15px] text-[#1d1d1f]">• <strong>Whisper-quiet</strong> operation (only 64dB)</li>
                    <li className="text-[15px] text-[#1d1d1f]">• <strong>Perfect drying every time</strong> with FragranceDos</li>
                    <li className="text-[15px] text-[#1d1d1f]">• <strong>Super gentle</strong> on delicate fabrics</li>
                    <li className="text-[15px] text-[#1d1d1f]">• <strong>German engineering</strong> at its finest</li>
                  </ul>
                </div>

                <p className="text-[15px] text-[#1d1d1f] bg-[#f5f5f7] rounded-lg p-4">
                  <strong>Do the maths:</strong> £1,000 spread over 20 years = £50 per year. A cheaper dryer at £500 lasting 7 years = £71 per year. Plus you'll save on repairs and replacements!
                </p>
              </div>
            </div>

            {/* #5 LG Mid-Range */}
            <div className="bg-white border-2 border-gray-300 rounded-2xl overflow-hidden mb-8">
              <div className="bg-gray-700 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-[32px]">⭐</span>
                  <h3 className="text-[24px] font-semibold text-white">#5 Great All-Rounder</h3>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white text-[15px] font-semibold">£550-650</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-[28px] font-bold text-[#1d1d1f] mb-4">LG FDV909W Heat Pump Dryer</h4>
                
                <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
                  Solid, reliable, and packed with useful features. LG makes great stuff and this dryer is no exception.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#34c759]/5 rounded-lg p-4">
                    <p className="text-[15px] text-[#1d1d1f] font-semibold mb-2">✓ What We Love</p>
                    <p className="text-[14px] text-[#6e6e73]">Dual Inverter Heat Pump = super efficient and quiet. 9kg capacity perfect for families.</p>
                  </div>
                  <div className="bg-[#f5f5f7] rounded-lg p-4">
                    <p className="text-[15px] text-[#1d1d1f] font-semibold mb-2">Who It's For</p>
                    <p className="text-[14px] text-[#6e6e73]">Anyone wanting quality without paying Miele prices. Great middle ground!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* #6 Siemens */}
            <div className="bg-white border-2 border-gray-300 rounded-2xl overflow-hidden mb-8">
              <div className="bg-gray-600 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-[32px]">🔧</span>
                  <h3 className="text-[24px] font-semibold text-white">#6 Best for Reliability</h3>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white text-[15px] font-semibold">£600-750</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-[28px] font-bold text-[#1d1d1f] mb-4">Siemens WT47XEH1GB Heat Pump Dryer</h4>
                
                <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
                  Siemens and Bosch are basically cousins (same parent company), so you get similar quality. This one has a few extra bells and whistles.
                </p>

                <p className="text-[15px] text-[#6e6e73] bg-[#f5f5f7] rounded-lg p-4">
                  Comes with Home Connect (phone app), intelligent drying sensors, and a massive 9kg drum. Very similar to the Bosch but with a slightly different look.
                </p>
              </div>
            </div>

            {/* #7 Budget Condenser */}
            <div className="bg-white border-2 border-gray-300 rounded-2xl overflow-hidden mb-8">
              <div className="bg-gray-500 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-[32px]">💸</span>
                  <h3 className="text-[24px] font-semibold text-white">#7 Cheapest Option</h3>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white text-[15px] font-semibold">£250-350</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-[28px] font-bold text-[#1d1d1f] mb-4">Hoover H-DRY 300 Condenser Dryer</h4>
                
                <div className="bg-[#ff9500]/10 border-l-4 border-[#ff9500] rounded-r-xl p-6 mb-4">
                  <p className="text-[15px] text-[#1d1d1f] mb-2"><strong>⚠️ Important:</strong> This is NOT a heat pump dryer!</p>
                  <p className="text-[14px] text-[#6e6e73]">It's a regular condenser dryer. Cheaper to buy but way more expensive to run.</p>
                </div>

                <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
                  Only get this if you're really tight on budget upfront AND you rarely use a dryer (like once a week max).
                </p>

                <div className="bg-[#f5f5f7] rounded-lg p-4">
                  <p className="text-[15px] text-[#1d1d1f] font-medium mb-2">Reality Check:</p>
                  <p className="text-[14px] text-[#6e6e73]">
                    You'll save £200 buying this instead of a cheap heat pump dryer, but you'll spend about £50-70 more PER YEAR on electricity. In 4 years, you've lost money. Only worth it if you barely use it!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Comparison Table */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Quick Comparison Table
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#0071e3] text-white">
                    <th className="p-4 text-left text-[15px] font-semibold">Model</th>
                    <th className="p-4 text-left text-[15px] font-semibold">Type</th>
                    <th className="p-4 text-left text-[15px] font-semibold">Energy</th>
                    <th className="p-4 text-left text-[15px] font-semibold">Price</th>
                    <th className="p-4 text-left text-[15px] font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 text-[14px] font-medium">Bosch Series 8</td>
                    <td className="p-4 text-[14px]">Heat Pump</td>
                    <td className="p-4 text-[14px]">A+++</td>
                    <td className="p-4 text-[14px]">£600-700</td>
                    <td className="p-4 text-[14px]">Most people</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-[#f5f5f7]">
                    <td className="p-4 text-[14px] font-medium">Beko DHY7340W</td>
                    <td className="p-4 text-[14px]">Heat Pump</td>
                    <td className="p-4 text-[14px]">A++</td>
                    <td className="p-4 text-[14px]">£400-500</td>
                    <td className="p-4 text-[14px]">Tight budgets</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 text-[14px] font-medium">Samsung DV90T</td>
                    <td className="p-4 text-[14px]">Heat Pump</td>
                    <td className="p-4 text-[14px]">A+++</td>
                    <td className="p-4 text-[14px]">£650-800</td>
                    <td className="p-4 text-[14px]">Tech lovers</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-[#f5f5f7]">
                    <td className="p-4 text-[14px] font-medium">Miele TWF 640</td>
                    <td className="p-4 text-[14px]">Heat Pump</td>
                    <td className="p-4 text-[14px]">A+++</td>
                    <td className="p-4 text-[14px]">£800-1,100</td>
                    <td className="p-4 text-[14px]">Premium buyers</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 text-[14px] font-medium">LG FDV909W</td>
                    <td className="p-4 text-[14px]">Heat Pump</td>
                    <td className="p-4 text-[14px]">A+++</td>
                    <td className="p-4 text-[14px]">£550-650</td>
                    <td className="p-4 text-[14px]">Solid choice</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-[#f5f5f7]">
                    <td className="p-4 text-[14px] font-medium">Siemens WT47X</td>
                    <td className="p-4 text-[14px]">Heat Pump</td>
                    <td className="p-4 text-[14px]">A+++</td>
                    <td className="p-4 text-[14px]">£600-750</td>
                    <td className="p-4 text-[14px]">Reliability</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-[14px] font-medium">Hoover H-DRY</td>
                    <td className="p-4 text-[14px]">Condenser</td>
                    <td className="p-4 text-[14px]">B</td>
                    <td className="p-4 text-[14px]">£250-350</td>
                    <td className="p-4 text-[14px]">Rare use only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Buying Guide Tips */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              What to Look For When Buying
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">1. Energy Rating (Super Important!)</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6] mb-4">
                  Always aim for A++ or A+++ if you can afford it. The difference in electricity costs is HUGE:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="text-[15px] text-[#1d1d1f]">• <strong>A+++</strong> dryer: About 25-30p per load</li>
                  <li className="text-[15px] text-[#1d1d1f]">• <strong>B-rated</strong> dryer: About 60-70p per load</li>
                  <li className="text-[15px] text-[#1d1d1f]">• That's a <strong>£100+ difference per year</strong> for most families!</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">2. Capacity Size</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-[#f5f5f7] rounded-lg p-4">
                    <p className="text-[16px] font-semibold text-[#1d1d1f] mb-2">6-7kg</p>
                    <p className="text-[14px] text-[#6e6e73]">1-2 people or small flat</p>
                  </div>
                  <div className="bg-[#34c759]/10 rounded-lg p-4">
                    <p className="text-[16px] font-semibold text-[#1d1d1f] mb-2">8-9kg ⭐</p>
                    <p className="text-[14px] text-[#6e6e73]">Perfect for most families (3-4 people)</p>
                  </div>
                  <div className="bg-[#f5f5f7] rounded-lg p-4">
                    <p className="text-[16px] font-semibold text-[#1d1d1f] mb-2">10kg+</p>
                    <p className="text-[14px] text-[#6e6e73]">Big families or lots of laundry</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">3. Noise Level</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6] mb-3">
                  If your dryer is near living spaces, check the dB rating:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="text-[15px] text-[#1d1d1f]">• <strong>60-65dB:</strong> Quiet (normal conversation level)</li>
                  <li className="text-[15px] text-[#1d1d1f]">• <strong>66-70dB:</strong> Noticeable but okay</li>
                  <li className="text-[15px] text-[#1d1d1f]">• <strong>70+dB:</strong> Pretty loud (might be annoying)</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">4. Special Features Worth Paying For</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-[#34c759] text-[20px] mt-1">✓</span>
                    <div>
                      <p className="text-[16px] font-medium text-[#1d1d1f]">Self-cleaning condenser</p>
                      <p className="text-[14px] text-[#6e6e73]">Less maintenance = worth the extra £50-100</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#34c759] text-[20px] mt-1">✓</span>
                    <div>
                      <p className="text-[16px] font-medium text-[#1d1d1f]">Smart sensors</p>
                      <p className="text-[14px] text-[#6e6e73]">Stops when clothes are dry (saves energy + protects clothes)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#34c759] text-[20px] mt-1">✓</span>
                    <div>
                      <p className="text-[16px] font-medium text-[#1d1d1f]">Delay start timer</p>
                      <p className="text-[14px] text-[#6e6e73]">Run it overnight on cheaper electricity rates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#ff9500] text-[20px] mt-1">~</span>
                    <div>
                      <p className="text-[16px] font-medium text-[#1d1d1f]">WiFi/App control</p>
                      <p className="text-[14px] text-[#6e6e73]">Nice to have but not essential (skip if it adds £100+)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-8 tracking-tight">
              Common Questions
            </h2>

            <div className="space-y-4">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Should I definitely get a heat pump tumble dryer?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                  If you use your dryer 2-3 times a week or more, then YES! They cost more upfront but save so much on electricity that they pay for themselves in 2-4 years. After that, it's pure savings. Only skip them if you very rarely use a dryer (like once a month).
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">What's better - Bosch, Samsung, or Miele?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                  For most people, <strong>Bosch offers the best value</strong>. It's reliable, efficient, and fairly priced. <strong>Samsung</strong> is great if you love tech features and apps. <strong>Miele</strong> is the best quality money can buy – it'll last 20+ years but costs twice as much. Can't go wrong with any of them really!
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Is it worth waiting for Black Friday sales?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                  Maybe! Good <strong>heat pump dryers</strong> sometimes get £100-200 off during Black Friday or January sales. But don't wait months if your dryer is broken – you'll waste that much on the launderette or buying a cheap temporary one!
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Do I need to get it professionally installed?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                  Nope! Tumble dryers just plug into a normal socket. Most retailers will deliver it and take away your old one for £20-40. Easy peasy! Just make sure there's enough space (check dimensions first).
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">What warranty should I get?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                  Most come with 1-2 years standard. For budget brands (Beko, Indesit), maybe extend to 5 years. For premium brands (Bosch, Miele), the standard warranty is usually fine – they rarely break. Extended warranties are often overpriced!
                </p>
              </div>
            </div>
          </div>

          {/* Final Recommendation */}
          <div className="bg-linear-to-br from-[#0071e3] to-[#0056b3] rounded-2xl p-8 md:p-12 text-white mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold mb-6 text-center">Our Final Recommendation</h2>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-[22px] font-semibold mb-3">💚 Best Value for Money</h3>
                <p className="text-[17px] opacity-90 mb-2">Bosch Series 8 (£600-700)</p>
                <p className="text-[15px] opacity-80">Perfect balance of price, features, and reliability. This is what we'd buy for our own homes!</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-[22px] font-semibold mb-3">💰 Best Budget Option</h3>
                <p className="text-[17px] opacity-90 mb-2">Beko DHY7340W (£400-500)</p>
                <p className="text-[15px] opacity-80">Brilliant for the price. You won't find a better heat pump dryer under £500.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-[22px] font-semibold mb-3">👑 Best Premium Choice</h3>
                <p className="text-[17px] opacity-90 mb-2">Miele TWF 640 (£800-1,100)</p>
                <p className="text-[15px] opacity-80">If you want the absolute best and plan to keep it for decades, this is it.</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-[17px] opacity-90">
                Any of these will serve you well for years to come! 🎉
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#f5f5f7] rounded-2xl p-8 text-center">
            <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-4">Before You Go...</h3>
            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Did you know you can get up to <strong>£7,500 towards a heat pump</strong> for your home too? It's not just tumble dryers that can use heat pump technology!
            </p>
            <Link href="/quiz">
              <Button
                size="lg"
                className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-10 py-5 text-[17px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-lg"
              >
                Check If You Qualify →
              </Button>
            </Link>
            <p className="text-[14px] text-[#6e6e73] mt-4">Takes 2 minutes • Completely free • No obligation</p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-8 tracking-tight">
            Keep Reading
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/heat-pump-tumble-dryer">
              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="/technician-installing-hvac-system.jpg" alt="Heat pump dryer" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">What is a Heat Pump Tumble Dryer?</h3>
                  <p className="text-[15px] text-[#6e6e73]">Learn how they work and why they're so efficient</p>
                </div>
              </div>
            </Link>
            <Link href="/blog/heat-pump-grant-guide">
              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="/modern-heat-pump-installation.jpg" alt="Heat pump installation" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">£7,500 Heat Pump Grant Guide</h3>
                  <p className="text-[15px] text-[#6e6e73]">Everything about the government grant</p>
                </div>
              </div>
            </Link>
            <Link href="/blog">
              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="/green-energy-environment-nature.jpg" alt="Energy savings" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">10 Ways to Cut Your Energy Bills</h3>
                  <p className="text-[15px] text-[#6e6e73]">Simple tricks to save money in 2025</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-[#d2d2d7] py-12 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Logo className="h-11 w-auto mb-4" />
              <p className="text-[14px] text-[#6e6e73]">
                Free heat pump quotes from trusted installers. Save up to £7,500.
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
              </div>
            </div>
            <div>
              <h4 className="text-[14px] font-semibold text-[#1d1d1f] mb-4">Resources</h4>
              <div className="space-y-2">
                <Link href="/#faq" className="block text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  FAQ
                </Link>
                <Link href="/blog" className="block text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Blog
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-[14px] font-semibold text-[#1d1d1f] mb-4">Contact</h4>
              <div className="space-y-2">
                <Link href="/contact" className="block text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-[#d2d2d7] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[12px] text-[#86868b]">© 2025 HeatPump UK. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
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

