"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HeatPumpTumbleDryerPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
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
      <section className="pt-32 pb-12 px-6 bg-linear-to-br from-[#34c759] to-[#30a14e]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-[13px] font-medium text-white uppercase tracking-wide">Appliance Guide</span>
          </div>
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-white mb-6 tracking-tight leading-[1.1]">
            What is a Heat Pump Tumble Dryer? (And Why Everyone's Talking About Them!)
          </h1>
          <div className="flex items-center gap-4 text-white/80">
            <span className="text-[15px]">March 12, 2025</span>
            <span>•</span>
            <span className="text-[15px]">7 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg mb-12">
            <p className="text-[19px] md:text-[21px] text-[#1d1d1f] leading-[1.6] mb-6">
              Ever wondered why some tumble dryers cost way more than others? The answer is usually: it's a <strong>heat pump tumble dryer</strong>! These clever machines are like the eco-friendly superheroes of the laundry world.
            </p>
            <p className="text-[19px] md:text-[21px] text-[#1d1d1f] leading-[1.6] mb-6">
              But <strong>what is a heat pump tumble dryer</strong> exactly? How do they work? And are they actually worth the extra money? Let's find out together – no confusing tech-speak, we promise!
            </p>
          </div>

          {/* What is a Heat Pump Tumble Dryer? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              What is a Heat Pump Tumble Dryer?
            </h2>
            
            <div className="bg-[#34c759]/10 rounded-2xl p-8 mb-8">
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
                Think of it like this: A normal tumble dryer is like leaving a hairdryer on inside your clothes drum. It blows hot air through your wet clothes until they're dry, then chucks all that hot air out through a vent. What a waste!
              </p>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                A <strong>heat pump tumble dryer</strong> is much cleverer. Instead of wasting all that hot air, it recycles it! It takes the warm, damp air from your clothes, removes the water, heats it back up, and uses it again. Genius, right?
              </p>
            </div>

            <div className="bg-white border-2 border-[#34c759] rounded-2xl p-8 mb-8">
              <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-4 flex items-center gap-2">
                <span>🌟</span> The Simple Answer
              </h3>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                A heat pump tumble dryer dries your clothes using way less electricity by recycling hot air instead of wasting it. It's like the difference between leaving the tap running and using the same water over and over (but for drying clothes, not washing them!).
              </p>
            </div>

            <img 
              src="/modern-heat-pump-installation.jpg" 
              alt="Heat pump tumble dryer in a modern laundry room" 
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg mb-6"
            />
            <p className="text-[14px] text-[#6e6e73] text-center mb-8">A modern heat pump tumble dryer - looks just like a normal dryer but works much smarter!</p>
          </div>

          {/* How Does It Work? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              How Does a Heat Pump Tumble Dryer Work?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Ready for the magic trick? Here's <strong>how heat pump tumble dryers work</strong> in super simple steps:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#34c759] flex items-center justify-center flex-shrink-0 text-white text-[20px] font-bold">
                    1
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Hot Air Dries Your Clothes</h4>
                    <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                      Just like any dryer, warm air spins around inside the drum, picking up moisture from your wet clothes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#34c759] flex items-center justify-center flex-shrink-0 text-white text-[20px] font-bold">
                    2
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">The Wet Air Gets Captured</h4>
                    <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                      Instead of chucking this damp air outside (like old dryers do), it goes into a special part called the evaporator. This is where the clever bit happens!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#34c759] flex items-center justify-center flex-shrink-0 text-white text-[20px] font-bold">
                    3
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Water Gets Removed</h4>
                    <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                      The evaporator cools down the damp air really quickly. This makes the water turn into droplets (like when your cold drink makes the glass go all sweaty on a hot day). The water drips into a tank or goes down the drain.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#34c759] flex items-center justify-center flex-shrink-0 text-white text-[20px] font-bold">
                    4
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">The Air Gets Heated Up Again</h4>
                    <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                      Now the air is dry but cold. The heat pump (that's the special bit!) warms it back up again – but using way less energy than starting from scratch.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#34c759] flex items-center justify-center flex-shrink-0 text-white text-[20px] font-bold">
                    5
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Round and Round It Goes!</h4>
                    <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                      This warm, dry air goes back into the drum to dry your clothes some more. Then it goes round the cycle again – remove water, heat up, dry clothes, repeat!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0071e3]/5 border-l-4 border-[#0071e3] rounded-r-xl p-6">
              <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">💡 Why This Matters</h3>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                Because it reuses the same air over and over, a heat pump dryer uses about HALF the electricity of a normal dryer. That's like getting your drying done for half price, every single time!
              </p>
            </div>
          </div>

          {/* Heat Pump vs Condenser Dryer */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Heat Pump vs Condenser Dryer: What's the Difference?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              You might be thinking: "Wait, I've heard of condenser dryers too. Aren't they the same thing?" Great question! Let me explain the difference between a <strong>heat pump vs condenser dryer</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-[#34c759] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[32px]">🌟</span>
                  <h3 className="text-[22px] font-semibold text-[#1d1d1f]">Heat Pump Dryer</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-[#34c759] text-[20px]">✓</span>
                    <p className="text-[15px] text-[#6e6e73]">Recycles hot air = super efficient</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#34c759] text-[20px]">✓</span>
                    <p className="text-[15px] text-[#6e6e73]">Uses about 50% less electricity</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#34c759] text-[20px]">✓</span>
                    <p className="text-[15px] text-[#6e6e73]">Gentler on your clothes</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#34c759] text-[20px]">✓</span>
                    <p className="text-[15px] text-[#6e6e73]">Better for the environment</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#ff9500] text-[20px]">⚠</span>
                    <p className="text-[15px] text-[#6e6e73]">Costs more to buy (£400-900)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#ff9500] text-[20px]">⚠</span>
                    <p className="text-[15px] text-[#6e6e73]">Takes a bit longer to dry</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-[17px] font-semibold text-[#34c759]">Best for: Saving money long-term</p>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[32px]">⚡</span>
                  <h3 className="text-[22px] font-semibold text-[#1d1d1f]">Condenser Dryer</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-[#34c759] text-[20px]">✓</span>
                    <p className="text-[15px] text-[#6e6e73]">Cheaper to buy (£200-500)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#34c759] text-[20px]">✓</span>
                    <p className="text-[15px] text-[#6e6e73]">Dries clothes faster</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#34c759] text-[20px]">✓</span>
                    <p className="text-[15px] text-[#6e6e73]">No venting needed</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 text-[20px]">✗</span>
                    <p className="text-[15px] text-[#6e6e73]">Uses much more electricity</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 text-[20px]">✗</span>
                    <p className="text-[15px] text-[#6e6e73]">Expensive to run</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 text-[20px]">✗</span>
                    <p className="text-[15px] text-[#6e6e73]">Hotter = harder on fabrics</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-[17px] font-semibold text-[#6e6e73]">Best for: Tight budgets upfront</p>
                </div>
              </div>
            </div>

            <div className="bg-[#f5f5f7] rounded-2xl p-8">
              <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">The Bottom Line</h3>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
                A condenser dryer collects water from your clothes (instead of venting steam outside), but it still uses new hot air every time. A heat pump dryer does the same thing BUT recycles the hot air – making it way more efficient.
              </p>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                Think of it like this: A condenser dryer is like a car that doesn't waste petrol out the exhaust. A heat pump dryer is like an electric car – totally different technology that's much cheaper to run!
              </p>
            </div>
          </div>

          {/* Types of Tumble Dryers */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Types of Tumble Dryer (The Quick Guide)
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              There are actually THREE main <strong>types of tumble dryer</strong>. Here's the super quick version:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-[20px] font-semibold text-[#1d1d1f]">1. Vented Dryers 🌬️</h4>
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-[13px] font-semibold rounded-full">Old Tech</span>
                </div>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6] mb-3">
                  Blows hot damp air straight outside through a big hose. Cheapest to buy, but wastes tons of energy and needs to be near a window or wall.
                </p>
                <p className="text-[15px] font-medium text-[#6e6e73]">Energy Rating: Usually D or E ❌</p>
              </div>

              <div className="bg-white border-2 border-[#ff9500] rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-[20px] font-semibold text-[#1d1d1f]">2. Condenser Dryers 💧</h4>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[13px] font-semibold rounded-full">Mid-Range</span>
                </div>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6] mb-3">
                  Collects water in a tank (no hose needed), but still uses fresh hot air every time. Medium price, medium running costs.
                </p>
                <p className="text-[15px] font-medium text-[#6e6e73]">Energy Rating: Usually B or C ⚠️</p>
              </div>

              <div className="bg-white border-2 border-[#34c759] rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-[20px] font-semibold text-[#1d1d1f]">3. Heat Pump Dryers 🌟</h4>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-[13px] font-semibold rounded-full">Best Tech</span>
                </div>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6] mb-3">
                  Recycles hot air = super efficient. Most expensive upfront but pays for itself through lower electricity bills.
                </p>
                <p className="text-[15px] font-medium text-[#34c759]">Energy Rating: Usually A++ or A+++ ✅</p>
              </div>
            </div>
          </div>

          {/* Are They Any Good? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Are Heat Pump Tumble Dryers Any Good?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Okay, so <strong>are heat pump tumble dryers any good</strong>? Let's be honest about the pros and cons:
            </p>

            <div className="bg-[#34c759]/10 rounded-2xl p-8 mb-6">
              <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-4 flex items-center gap-2">
                <span className="text-[#34c759]">✅</span> The Good Stuff
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#34c759] text-[20px] mt-1">•</span>
                  <p className="text-[17px] text-[#1d1d1f]"><strong>Save loads of money</strong> – Your electricity bills could drop by £100+ per year</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#34c759] text-[20px] mt-1">•</span>
                  <p className="text-[17px] text-[#1d1d1f]"><strong>Kinder to clothes</strong> – Lower temperatures mean your favourite jumper lasts longer</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#34c759] text-[20px] mt-1">•</span>
                  <p className="text-[17px] text-[#1d1d1f]"><strong>Better for the planet</strong> – Uses way less energy = smaller carbon footprint</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#34c759] text-[20px] mt-1">•</span>
                  <p className="text-[17px] text-[#1d1d1f]"><strong>No ventilation needed</strong> – Put it anywhere, no hose required</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#34c759] text-[20px] mt-1">•</span>
                  <p className="text-[17px] text-[#1d1d1f]"><strong>Pays for itself</strong> – The savings usually cover the extra cost in 2-3 years</p>
                </div>
              </div>
            </div>

            <div className="bg-[#ff9500]/10 rounded-2xl p-8 mb-6">
              <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-4 flex items-center gap-2">
                <span className="text-[#ff9500]">⚠️</span> The Not-So-Good Bits
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#ff9500] text-[20px] mt-1">•</span>
                  <p className="text-[17px] text-[#1d1d1f]"><strong>Costs more upfront</strong> – Expect to pay £400-900 instead of £200-400</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#ff9500] text-[20px] mt-1">•</span>
                  <p className="text-[17px] text-[#1d1d1f]"><strong>Takes longer</strong> – A cycle might take 2-3 hours instead of 1-2 hours</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#ff9500] text-[20px] mt-1">•</span>
                  <p className="text-[17px] text-[#1d1d1f]"><strong>Heavier</strong> – They're chunkier than normal dryers</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#ff9500] text-[20px] mt-1">•</span>
                  <p className="text-[17px] text-[#1d1d1f]"><strong>Filter cleaning</strong> – You need to clean filters regularly (but it only takes a minute)</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0071e3] text-white rounded-2xl p-8">
              <h3 className="text-[24px] font-semibold mb-4">Our Honest Answer</h3>
              <p className="text-[17px] leading-[1.6]">
                Yes, <strong>heat pump tumble dryers ARE good</strong> – especially if you use your dryer a lot. The extra cost upfront is worth it because you'll save so much money on electricity. Plus, they're much better for the environment!
              </p>
            </div>
          </div>

          {/* Best Heat Pump Tumble Dryers */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Best Heat Pump Tumble Dryer Options (UK 2025)
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Looking for the <strong>best heat pump tumble dryer</strong>? Here are some top picks for different budgets:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border-2 border-[#0071e3] rounded-2xl overflow-hidden">
                <div className="bg-[#0071e3] px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[22px] font-semibold text-white">Budget Pick 💰</h3>
                    <span className="text-white text-[15px]">£400-500</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Beko or Indesit Heat Pump Dryers</h4>
                  <p className="text-[17px] text-[#6e6e73] mb-4">
                    Great for first-time buyers. A++ rated, 8kg capacity, all the basics you need. Not as fancy as pricier models but gets the job done brilliantly.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[#34c759]">✓</span>
                    <span className="text-[15px] text-[#6e6e73]">Best for: Getting started without breaking the bank</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-[#34c759] rounded-2xl overflow-hidden">
                <div className="bg-[#34c759] px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[22px] font-semibold text-white">Mid-Range Hero 🌟</h3>
                    <span className="text-white text-[15px]">£500-700</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Bosch or Siemens Heat Pump Dryers</h4>
                  <p className="text-[17px] text-[#6e6e73] mb-4">
                    Excellent quality and reliability. A+++ rated, smart sensors, gentle drum action. The sweet spot between price and features.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[#34c759]">✓</span>
                    <span className="text-[15px] text-[#6e6e73]">Best for: Most families – perfect balance</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-[#ff9500] rounded-2xl overflow-hidden">
                <div className="bg-[#ff9500] px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[22px] font-semibold text-white">Samsung Special ✨</h3>
                    <span className="text-white text-[15px]">£600-800</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Samsung Heat Pump Tumble Dryer</h4>
                  <p className="text-[17px] text-[#6e6e73] mb-4">
                    Packed with smart features. Many <strong>Samsung heat pump tumble dryer</strong> models have WiFi connectivity, phone app control, and clever AI drying. Very cool!
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[#ff9500]">✓</span>
                    <span className="text-[15px] text-[#6e6e73]">Best for: Tech lovers who want all the bells and whistles</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-2xl overflow-hidden">
                <div className="bg-gray-700 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[22px] font-semibold text-white">Premium Choice 👑</h3>
                    <span className="text-white text-[15px]">£700-900</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Miele Heat Pump Dryers</h4>
                  <p className="text-[17px] text-[#6e6e73] mb-4">
                    The Rolls Royce of dryers. Built to last 20+ years, whisper-quiet, perfect drying every time. Worth it if you want the absolute best.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">✓</span>
                    <span className="text-[15px] text-[#6e6e73]">Best for: Long-term investment and peace of mind</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0071e3]/5 border-l-4 border-[#0071e3] rounded-r-xl p-6">
              <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">💡 Shopping Tip</h3>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                Always check the energy rating label! Look for A+++ if possible. The difference between A+ and A+++ might only be £50 upfront but could save you £30-40 per year on electricity.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-8 tracking-tight">
              Your Questions Answered
            </h2>

            <div className="space-y-4">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">How long do heat pump dryers last?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                  A good quality heat pump dryer should last 10-15 years with proper care. Premium brands like Miele can last even longer – sometimes 20+ years! That's way better than cheaper dryers that might only last 5-7 years.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Why does my heat pump dryer take so long?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                  Heat pump dryers use lower temperatures (about 50-60°C instead of 70-80°C), which is gentler on your clothes but takes longer. Think of it like cooking something slowly in the oven – it takes more time but gives better results! The trade-off? You save loads on electricity.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Do I need to empty a water tank?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                  Most heat pump dryers collect water in a tank that you empty after every load (takes 10 seconds). Some models can also be plumbed directly to your drain, so you never have to think about it. Check before you buy!
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Are they difficult to maintain?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                  Nope! Just empty the water tank and clean the lint filter after each use (exactly like a normal dryer). Once a month, give the condenser unit a quick rinse. That's it! Takes less time than loading the dishwasher.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Will it work in a cold garage?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                  Most heat pump dryers work best in rooms above 5°C. If your garage gets really cold in winter, check the manual – some models are fine, others might struggle. Generally, they're happiest indoors in a utility room or kitchen.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">How much does it cost to run per load?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                  A heat pump dryer costs about 25-35p per load (based on typical UK electricity prices). A normal condenser dryer costs about 50-70p per load. If you dry 5 loads a week, that's a saving of £60-90 per year!
                </p>
              </div>
            </div>
          </div>

          {/* Calculator */}
          <div className="mb-16">
            <div className="bg-linear-to-br from-[#34c759] to-[#30a14e] rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-[28px] md:text-[36px] font-semibold mb-4 text-center">💚 Will You Save Money?</h3>
              <p className="text-[17px] mb-8 text-center opacity-90">
                Let's do some quick maths to see if a heat pump dryer makes sense for you:
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-[17px]">If you dry 5 loads per week...</span>
                    <span className="text-[20px] font-semibold">260 loads/year</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-[17px]">Normal dryer costs (50p per load)</span>
                    <span className="text-[20px] font-semibold">£130/year</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-[17px]">Heat pump dryer costs (30p per load)</span>
                    <span className="text-[20px] font-semibold">£78/year</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[20px] font-semibold">Your yearly saving:</span>
                    <span className="text-[32px] font-bold">£52 💰</span>
                  </div>
                </div>
              </div>

              <p className="text-[17px] text-center opacity-90 mb-6">
                If the heat pump dryer costs £200 extra, it pays for itself in less than 4 years. Then it's pure savings!
              </p>

              <div className="text-center">
                <p className="text-[15px] opacity-80">
                  Plus your clothes last longer + you help the planet = Win win win! 🌍
                </p>
              </div>
            </div>
          </div>

          {/* Final Thoughts */}
          <div className="bg-[#f5f5f7] rounded-2xl p-8">
            <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-4">So, Should You Get One?</h3>
            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
              If you use your tumble dryer regularly (more than 2-3 times a week), then yes – a <strong>heat pump tumble dryer</strong> is definitely worth it. You'll save money, your clothes will last longer, and you'll be doing your bit for the environment.
            </p>
            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
              The extra cost upfront might seem scary, but think of it like this: You're basically pre-paying for lower electricity bills. And in a few years, that dryer is paying YOU back!
            </p>
            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              Our advice? If you're buying a new dryer anyway, spend the extra £100-200 to get a heat pump model. Future you will thank you when those electricity bills come in! 😊
            </p>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-linear-to-br from-[#0071e3] to-[#0056b3] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[32px] md:text-[40px] font-semibold mb-4 tracking-tight leading-[1.1]">
            Want to Save Even More Money?
          </h2>
          <p className="text-[19px] mb-8 leading-[1.4] opacity-90">
            A heat pump tumble dryer is great, but did you know you could also get up to £7,500 towards a heat pump for your home?
          </p>
          
          <Link href="/quiz">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#0071e3] px-12 py-6 text-[19px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-xl"
            >
              Check Your Eligibility →
            </Button>
          </Link>

          <p className="text-[15px] text-white/70 mt-6">Takes 2 minutes • 100% free • No obligation</p>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-8 tracking-tight">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/heat-pump-grant-guide">
              <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="/modern-heat-pump-installation.jpg" alt="Heat pump installation" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Get £7,500 for a Home Heat Pump</h3>
                  <p className="text-[15px] text-[#6e6e73]">Everything you need to know about the government grant</p>
                </div>
              </div>
            </Link>
            <Link href="/blog">
              <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="/energy-efficiency-comparison-chart.jpg" alt="Energy comparison" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Heat Pumps vs Gas Boilers</h3>
                  <p className="text-[15px] text-[#6e6e73]">Which one saves you more money?</p>
                </div>
              </div>
            </Link>
            <Link href="/blog">
              <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="/green-energy-environment-nature.jpg" alt="Green energy" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Slash Your Energy Bills in 2025</h3>
                  <p className="text-[15px] text-[#6e6e73]">10 simple ways to save money this year</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-[#d2d2d7] py-12 bg-white">
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
  )
}

