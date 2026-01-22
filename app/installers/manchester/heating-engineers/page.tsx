"use client"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { useEffect } from "react"
import Head from "next/head"

export default function ManchesterHeatingEngineersPage() {
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
        <title>Heating Engineers in Manchester – Air Source Heat Pump Specialists</title>
        <meta name="description" content="Compare heating engineers in Manchester for boilers and air source heat pumps. Get free quotes from vetted Gas Safe and MCS-certified installers and check if you can get the £7,500 Boiler Upgrade Scheme grant." />
        <meta name="keywords" content="heating engineer Manchester, heating engineers Manchester, boiler repair Manchester, heat pump installer Manchester, Gas Safe engineer Manchester, MCS certified Manchester" />
        <link rel="canonical" href="https://getheatpumpquotes.co.uk/installers/manchester/heating-engineers" />
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
                  <p className="text-[13px] sm:text-[14px] font-medium text-[#0071e3]">Compare Heating Engineers & Heat Pump Installers in Manchester</p>
                </div>
              </div>

              <h1 className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.05] mb-6">
                Heating Engineers in Manchester – Air Source Heat Pump Specialists
              </h1>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#6e6e73] leading-[1.6] mb-4">
                Need a heating engineer in Manchester and don't know who to trust?
              </p>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#6e6e73] leading-[1.6] mb-4">
                We help Manchester homeowners compare local heating engineers and air source heat pump installers, get free quotes, and check if they can claim the £7,500 government grant – all in one simple place.
              </p>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#6e6e73] leading-[1.6] mb-10">
                <strong>We're not a plumbing company.</strong> We're an independent comparison service that matches you with vetted engineers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quiz">
                  <Button className="w-full sm:w-auto bg-[#0071e3] hover:bg-[#0077ed] text-white px-10 py-4 text-[17px] rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg min-h-[52px]">
                    Start Your 90-Second Quiz
                  </Button>
                </Link>
              </div>

              <p className="text-[14px] text-[#86868b] mt-4">Free, no pressure, no obligation</p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-6 opacity-0 animate-fade-in-up-scroll">
                What We Actually Do (In Plain English)
              </h2>

              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.05s" }}>
                When people search for <strong>heating engineer Manchester</strong>, they're usually:
              </p>

              <ul className="space-y-3 text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#0071e3] mt-1">•</span>
                  <span>Boiler broken or making weird noises</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0071e3] mt-1">•</span>
                  <span>Thinking about a new boiler or a heat pump</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0071e3] mt-1">•</span>
                  <span>Doing a full heating upgrade (radiators, cylinder, controls)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0071e3] mt-1">•</span>
                  <span>Want to know if a heat pump will work in their Manchester home</span>
                </li>
              </ul>

              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                Instead of calling random numbers and hoping for the best, you can:
              </p>

              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 sm:p-10 mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <ol className="space-y-4 text-[17px] text-[#1d1d1f]">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#0071e3] text-white rounded-full flex items-center justify-center font-semibold text-[15px]">1</span>
                    <span>Answer a few quick questions about your home</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#34c759] text-white rounded-full flex items-center justify-center font-semibold text-[15px]">2</span>
                    <span>We match you with up to 3 local heating engineers / MCS installers</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#ff9500] text-white rounded-full flex items-center justify-center font-semibold text-[15px]">3</span>
                    <span>You compare quotes and choose the one you like (or walk away)</span>
                  </li>
                </ol>
              </div>

              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.25s" }}>
                <strong>No sales pressure. No "one guy, one price".</strong> Just clear options from people who know Manchester homes.
              </p>

              <div className="text-center">
                <Link href="/quiz">
                  <Button className="bg-[#34c759] hover:bg-[#30b350] text-white px-10 py-4 text-[17px] rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg min-h-[52px]">
                    Answer a Few Questions – Get Free Quotes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Heating Engineers vs Heat Pump Specialists */}
        <section className="py-20 sm:py-28 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-6 opacity-0 animate-fade-in-up-scroll">
                Heating Engineers vs Heat Pump Specialists (And Why It Matters)
              </h2>

              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.05s" }}>
                Most heating engineers in Manchester do things like:
              </p>

              <ul className="space-y-2 text-[17px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <li>• Gas boiler repairs and servicing</li>
                <li>• New boiler installations</li>
                <li>• Radiator fixes and power flushing</li>
                <li>• General heating and hot water issues</li>
              </ul>

              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                We focus on heating engineers who can <strong>also</strong> work with:
              </p>

              <ul className="space-y-2 text-[17px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <li>• Air source heat pumps</li>
                <li>• Ground source heat pumps (for bigger plots)</li>
                <li>• Hybrid systems (boiler + heat pump)</li>
                <li>• Full system upgrades (radiators, underfloor, cylinder, controls)</li>
              </ul>

              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.25s" }}>
                <p className="text-[17px] sm:text-[19px] text-[#1d1d1f] leading-[1.7] mb-4">
                  So you're not just getting "a plumber".
                </p>
                <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7]">
                  You're getting <strong>Gas Safe + MCS-certified engineers</strong> who can talk about:
                </p>
                <ul className="space-y-2 text-[17px] text-[#6e6e73] leading-[1.7] mt-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff9500] mt-1">→</span>
                    <span><strong>Today's problem</strong> ("My boiler isn't working")</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#34c759] mt-1">→</span>
                    <span><strong>Tomorrow's system</strong> ("Should I replace it with a heat pump?")</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-6 text-center opacity-0 animate-fade-in-up-scroll">
              How Our Service Works (for Manchester Homes)
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
              {/* Step 1 */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <div className="w-16 h-16 bg-[#0071e3] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-[28px] font-bold text-white">1</span>
                </div>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">Tell Us About Your Home</h3>
                <ul className="space-y-2 text-[16px] text-[#6e6e73] leading-[1.7]">
                  <li>• Where you live in Greater Manchester</li>
                  <li>• What heating you have now (gas, oil, electric)</li>
                  <li>• If you're thinking about a new boiler, a heat pump, or both</li>
                </ul>
                <p className="text-[15px] text-[#86868b] mt-4">
                  Takes about 90 seconds. No card. No commitment.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <div className="w-16 h-16 bg-[#34c759] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-[28px] font-bold text-white">2</span>
                </div>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">We Match You With Local Heating Engineers</h3>
                <p className="text-[16px] text-[#6e6e73] leading-[1.7] mb-4">
                  We send your details to up to 3 vetted heating engineers / MCS installers who:
                </p>
                <ul className="space-y-2 text-[16px] text-[#6e6e73] leading-[1.7]">
                  <li>• Work in Manchester and surrounding areas</li>
                  <li>• Are Gas Safe for boiler work</li>
                  <li>• Are MCS-certified for heat pump work</li>
                  <li>• Have real reviews and a track record</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 bg-[#ff9500] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-[28px] font-bold text-white">3</span>
                </div>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">You Compare and Decide</h3>
                <p className="text-[16px] text-[#6e6e73] leading-[1.7] mb-4">
                  You can compare:
                </p>
                <ul className="space-y-2 text-[16px] text-[#6e6e73] leading-[1.7]">
                  <li>• Price (boiler vs heat pump, brands, extras)</li>
                  <li>• What's included (radiators, controls, cylinder, pipework)</li>
                  <li>• Grant support (who handles the £7,500 application)</li>
                  <li>• Timescales (how fast they can start)</li>
                </ul>
                <p className="text-[15px] text-[#86868b] mt-4">
                  If you like one, go ahead. If not, no obligation.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/quiz">
                <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-10 py-4 text-[17px] rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg min-h-[52px]">
                  Start Your 90-Second Quiz
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Section - Boiler Work */}
        <section className="py-20 sm:py-28 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-6 opacity-0 animate-fade-in-up-scroll">
                Typical Prices for Heating Work in Manchester
              </h2>

              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-12 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.05s" }}>
                Every home is different, but here's a simple guide so you're not going in blind.
              </p>

              {/* Boiler Work Table */}
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg mb-12 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-8">Boiler & Heating Engineer Work (Rough Manchester Ranges)</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 text-[15px] font-semibold text-[#1d1d1f]">Service</th>
                        <th className="text-right py-4 px-4 text-[15px] font-semibold text-[#1d1d1f]">Cost Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-4 px-4 text-[16px] text-[#6e6e73]">Boiler service</td>
                        <td className="py-4 px-4 text-right text-[16px] font-medium text-[#1d1d1f]">£80 – £120</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-4 px-4 text-[16px] text-[#6e6e73]">Simple boiler repair</td>
                        <td className="py-4 px-4 text-right text-[16px] font-medium text-[#1d1d1f]">£100 – £250</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-4 px-4 text-[16px] text-[#6e6e73]">New combi boiler (supply + fit)</td>
                        <td className="py-4 px-4 text-right text-[16px] font-medium text-[#1d1d1f]">£2,000 – £3,500</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-4 px-4 text-[16px] text-[#6e6e73]">New radiators</td>
                        <td className="py-4 px-4 text-right text-[16px] font-medium text-[#1d1d1f]">£150 – £300 per radiator</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-[16px] text-[#6e6e73]">Power flush</td>
                        <td className="py-4 px-4 text-right text-[16px] font-medium text-[#1d1d1f]">£350 – £600</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[14px] text-[#86868b] mt-6">
                  These are typical ranges. Your actual quote depends on the brand, access, and how complicated your system is.
                </p>
              </div>

              {/* Heat Pump Costs Table */}
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg mb-12 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-4">Heat Pump Installation Costs in Manchester</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7] mb-8">
                  If you're thinking about a heat pump instead of a new boiler, this is what most homes see:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 text-[15px] font-semibold text-[#1d1d1f]">Heat Pump Type</th>
                        <th className="text-right py-4 px-4 text-[15px] font-semibold text-[#1d1d1f]">Before Grant</th>
                        <th className="text-right py-4 px-4 text-[15px] font-semibold text-[#1d1d1f]">After £7,500 Grant</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-4 px-4 text-[16px] font-medium text-[#1d1d1f]">Air source heat pump (most common)</td>
                        <td className="py-4 px-4 text-right text-[16px] text-[#6e6e73]">£8,000 – £15,000</td>
                        <td className="py-4 px-4 text-right text-[16px] font-semibold text-[#34c759]">£500 – £7,500</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-[16px] font-medium text-[#1d1d1f]">Ground source heat pump (bigger plots)</td>
                        <td className="py-4 px-4 text-right text-[16px] text-[#6e6e73]">£18,000 – £30,000+</td>
                        <td className="py-4 px-4 text-right text-[16px] font-semibold text-[#34c759]">£10,500 – £22,500+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-[#0071e3]/5 border-l-4 border-[#0071e3] rounded-r-2xl p-6 sm:p-8 mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                  <strong>You don't need to remember all the numbers.</strong>
                </p>
                <p className="text-[16px] text-[#6e6e73] leading-[1.7]">
                  Our job is to help you see:<br />
                  <em>"If I get a boiler, it will cost about X. If I get a heat pump with the grant, it will cost about Y."</em><br />
                  Then you pick what actually makes sense for your home.
                </p>
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

        {/* Areas Covered */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-8 opacity-0 animate-fade-in-up-scroll">
              Areas We Cover in Manchester
            </h2>
            <p className="text-[18px] text-[#6e6e73] mb-12 max-w-3xl opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
              We work with heating engineers and heat pump installers across Greater Manchester, including:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
              {/* Central Manchester */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-2xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Central Manchester</h3>
                <p className="text-[15px] text-[#6e6e73]">City Centre · Northern Quarter · Ancoats · Spinningfields</p>
              </div>

              {/* South Manchester */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-2xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">South Manchester</h3>
                <p className="text-[15px] text-[#6e6e73]">Chorlton · Didsbury · Withington · Sale · Altrincham · Stockport</p>
              </div>

              {/* North Manchester */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-2xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">North Manchester</h3>
                <p className="text-[15px] text-[#6e6e73]">Prestwich · Bury · Rochdale · Oldham · Middleton</p>
              </div>

              {/* East Manchester */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-2xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">East Manchester</h3>
                <p className="text-[15px] text-[#6e6e73]">Ashton-under-Lyne · Droylsden · Hyde · Stalybridge</p>
              </div>

              {/* West Manchester */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-2xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">West Manchester</h3>
                <p className="text-[15px] text-[#6e6e73]">Salford · Salford Quays · MediaCityUK · Eccles · Worsley</p>
              </div>

              {/* Also nearby */}
              <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-2xl p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">Also nearby</h3>
                <p className="text-[15px] text-[#6e6e73]">Bolton · Wigan · Leigh · Trafford · Tameside and surrounding areas</p>
              </div>
            </div>

            <p className="text-[17px] text-[#6e6e73] mt-8 text-center opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
              If your postcode is in or around Greater Manchester, we'll try to match you with someone local.
            </p>
          </div>
        </section>

        {/* Why Use Us */}
        <section className="py-20 sm:py-28 bg-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-6 opacity-0 animate-fade-in-up-scroll">
                Why Use Us Instead of Just Googling "Heating Engineer Manchester"?
              </h2>

              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.05s" }}>
                You can scroll Google, open 10 tabs, read reviews, send emails and hope someone replies.
              </p>

              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                Or you can:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white rounded-2xl p-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#34c759] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[16px] text-[#1d1d1f]">Fill in one short form</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#34c759] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[16px] text-[#1d1d1f]">Let local Gas Safe + MCS engineers come to you</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.25s" }}>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#34c759] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[16px] text-[#1d1d1f]">Compare quotes side by side</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.3s" }}>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#34c759] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[16px] text-[#1d1d1f]">See boiler vs heat pump options in one place</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 md:col-span-2 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.35s" }}>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#34c759] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[16px] text-[#1d1d1f]">Get help with the £7,500 grant without reading government pages</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.4s" }}>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-6">We're:</h3>
                <ul className="space-y-4 text-[17px] text-[#6e6e73] leading-[1.7]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0071e3] font-bold">Independent</span>
                    <span>– we don't install anything ourselves</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0071e3] font-bold">Free to use</span>
                    <span>– engineers pay us a referral fee, you pay nothing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0071e3] font-bold">Technology-neutral</span>
                    <span>– if a new boiler is better for you, that's what you'll see; if a heat pump fits, we show that</span>
                  </li>
                </ul>
              </div>

              <div className="text-center mt-12">
                <Link href="/quiz">
                  <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-10 py-4 text-[17px] rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg min-h-[52px]">
                    Get Matched With Local Engineers
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Can Heating Engineers Also Do Heat Pumps? */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-6 opacity-0 animate-fade-in-up-scroll">
                Are Heating Engineers in Manchester Also Heat Pump Installers?
              </h2>

              <p className="text-[20px] sm:text-[24px] text-[#1d1d1f] leading-[1.6] mb-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.05s" }}>
                Some are. Some aren't.
              </p>

              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                That's where we come in.
              </p>

              <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                We help you find heating engineers who:
              </p>

              <ul className="space-y-3 text-[17px] text-[#6e6e73] leading-[1.7] mb-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#0071e3] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Can fix or replace your gas boiler today</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#0071e3] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Can also talk honestly about heat pumps</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#0071e3] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Are MCS-certified, so you can claim the £7,500 grant</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#0071e3] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Understand Manchester homes, insulation and radiators</span>
                </li>
              </ul>

              <p className="text-[17px] sm:text-[19px] text-[#1d1d1f] leading-[1.7] font-medium opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.25s" }}>
                So you're not stuck with one option, one opinion.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 sm:py-28 bg-[#f5f5f7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-tight mb-12 opacity-0 animate-fade-in-up-scroll">
              Quick Questions People Ask
            </h2>

            <div className="space-y-8">
              {/* FAQ 1 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 opacity-0 animate-fade-in-up-scroll">
                <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1d1d1f] mb-3">How much do heating engineers in Manchester charge per hour?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  Most charge around <strong>£60–£90 per hour</strong>, or a fixed price for common jobs (service, simple repair, boiler swap). The quotes you get will spell this out clearly.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.05s" }}>
                <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1d1d1f] mb-3">Can the same engineer do boilers and heat pumps?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7] mb-3">
                  Not always.
                </p>
                <ul className="space-y-2 text-[16px] text-[#6e6e73] leading-[1.7]">
                  <li>• Gas work needs a <strong>Gas Safe engineer</strong></li>
                  <li>• Heat pump installs need an <strong>MCS-certified installer</strong></li>
                </ul>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7] mt-3">
                  We match you with companies that have the right mix of skills in one team.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1d1d1f] mb-3">Do I pay you or the installer?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  <strong>You never pay us.</strong> You pay the heating engineer / installer directly. Our service is 100% free for homeowners. Installers pay us a fee for the lead if they want to work with you.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
                <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1d1d1f] mb-3">Can you help me choose between a new boiler and a heat pump?</h3>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Yes – that's a big part of what we do.
                </p>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7] mb-4">
                  Your quotes will usually show:
                </p>
                <ul className="space-y-2 text-[16px] text-[#6e6e73] leading-[1.7] mb-4">
                  <li>• Price for a new boiler</li>
                  <li>• Price for an air source heat pump</li>
                  <li>• How much grant money you could get</li>
                  <li>• What would need upgrading (radiators, insulation, etc.)</li>
                </ul>
                <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
                  You can then ask installers simple questions like: <em>"If this were your house in Manchester, which would you choose and why?"</em>
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/quiz">
                <Button className="bg-[#34c759] hover:bg-[#30b350] text-white px-10 py-4 text-[17px] rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg min-h-[52px]">
                  Take the 90-Second Quiz
                </Button>
              </Link>
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
                Ready to Compare Heating Engineers in Manchester?
              </h2>

              <p className="text-[18px] sm:text-[20px] text-white/90 mb-4 max-w-3xl mx-auto leading-[1.6]">
                You don't need to understand every technical term. You just need clear prices and trusted people.
              </p>

              <p className="text-[17px] text-white/80 mb-8 max-w-3xl mx-auto leading-[1.6]">
                Here's the simple next step:
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto mb-10">
                <ol className="space-y-3 text-left text-[16px] sm:text-[17px] text-white">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-white text-[#0071e3] rounded-full flex items-center justify-center font-semibold text-[14px]">1</span>
                    <span>Answer a few questions about your home</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-white text-[#0071e3] rounded-full flex items-center justify-center font-semibold text-[14px]">2</span>
                    <span>Get quotes from local heating engineers and heat pump specialists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-white text-[#0071e3] rounded-full flex items-center justify-center font-semibold text-[14px]">3</span>
                    <span>Compare boiler vs heat pump options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-white text-[#0071e3] rounded-full flex items-center justify-center font-semibold text-[14px]">4</span>
                    <span>Choose what suits your house and your budget</span>
                  </li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
                <Link href="/quiz">
                  <Button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#0071e3] px-12 py-4 text-[17px] rounded-full font-bold transition-all duration-300 hover:scale-[1.05] shadow-2xl min-h-[52px]">
                    Start Your 90-Second Quiz
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
                  <span>No Pressure</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No Obligation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Heating Engineer Comparison - Manchester",
          "description": "Compare heating engineers and heat pump installers in Manchester. Free quotes from Gas Safe and MCS-certified professionals. £7,500 grant support.",
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
          "serviceType": ["Heating Engineer Services", "Air Source Heat Pump Installation", "Boiler Installation"],
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "GBP",
            "description": "Free heating engineer and heat pump installer comparison service"
          }
        }) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much do heating engineers in Manchester charge per hour?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most heating engineers in Manchester charge around £60–£90 per hour, or a fixed price for common jobs like boiler service, simple repair, or boiler swap."
              }
            },
            {
              "@type": "Question",
              "name": "Can the same engineer do boilers and heat pumps?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not always. Gas work needs a Gas Safe engineer, while heat pump installs need an MCS-certified installer. We match you with companies that have the right mix of skills in one team."
              }
            },
            {
              "@type": "Question",
              "name": "Do I pay you or the installer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You never pay us. You pay the heating engineer or installer directly. Our service is 100% free for homeowners. Installers pay us a fee for the lead if they want to work with you."
              }
            },
            {
              "@type": "Question",
              "name": "Can you help me choose between a new boiler and a heat pump?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes – that's a big part of what we do. Your quotes will usually show the price for a new boiler, price for an air source heat pump, how much grant money you could get, and what would need upgrading."
              }
            }
          ]
        }) }} />

        <Footer />
      </div>
    </>
  )
}
