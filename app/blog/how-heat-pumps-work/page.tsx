"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"

export default function HowHeatPumpsWorkPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>How Do Heat Pumps Work? Simple Guide for UK Homeowners</title>
        <meta name="description" content="Learn how heat pumps work in simple terms. Discover why they're 3x more efficient than boilers and how to get £7,500 off installation. Easy 5-minute read." />
        <meta name="keywords" content="how heat pumps work, air source heat pump, heat pump technology, heat pump efficiency, heat pump explained, renewable heating" />
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
      <section className="pt-32 pb-12 px-6 bg-linear-to-br from-[#34c759] to-[#30a14e]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-[13px] font-medium text-white uppercase tracking-wide">How They Work</span>
          </div>
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-white mb-6 tracking-tight leading-[1.1]">
            How Do Heat Pumps Work? The Simple Guide
          </h1>
          <div className="flex items-center gap-4 text-white/80">
            <span className="text-[15px]">March 18, 2025</span>
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
              You know how your fridge keeps food cold? Well, a heat pump is basically a fridge that works backwards. Instead of making things cold, it makes your house warm. Pretty clever, right?
            </p>
            <p className="text-[19px] md:text-[21px] text-[#1d1d1f] leading-[1.6] mb-6">
              Let me explain this properly, because understanding how heat pumps work isn't as complicated as it sounds. I promise.
            </p>
          </div>

          {/* What Actually Is a Heat Pump? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              What Actually Is a Heat Pump?
            </h2>

            <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-8">
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
                A heat pump is a machine that heats your home. But here's the cool part – it doesn't create heat like a normal boiler does. Instead, it <strong>steals heat from outside</strong> and brings it inside your house.
              </p>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                I know what you're thinking: "Wait, how can you steal heat from outside when it's freezing cold?" Great question!
              </p>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Here's the thing – <strong>even when it's really cold outside, there's still some heat in the air</strong>. Heat pumps are clever enough to grab that heat and bring it indoors.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Think of it like this: imagine you're trying to warm your hands on a winter day. Even though the air feels freezing, if you cup your hands together, you can feel a tiny bit of warmth, right? Heat pumps do something similar, but way more powerful.
            </p>
          </div>

          {/* How Does a Heat Pump Actually Work? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              How Does a Heat Pump Actually Work?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Okay, let's break this down into really simple steps.
            </p>

            {/* Step 1 */}
            <div className="bg-white border-2 border-[#34c759] rounded-2xl overflow-hidden mb-6">
              <div className="bg-[#34c759] px-6 py-4">
                <h3 className="text-[24px] font-semibold text-white">Step 1: The Outside Bit</h3>
              </div>
              <div className="p-6">
                <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                  There's a big metal box that sits outside your house. This is called an <strong>air source heat pump</strong> (because it takes heat from the air). Inside this box, there's a special liquid that's really good at absorbing heat.
                </p>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mt-4">
                  When cold air blows past this liquid, the liquid soaks up any heat that's in the air – even if the air feels freezing to you and me.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border-2 border-[#0071e3] rounded-2xl overflow-hidden mb-6">
              <div className="bg-[#0071e3] px-6 py-4">
                <h3 className="text-[24px] font-semibold text-white">Step 2: The Squeezing Part</h3>
              </div>
              <div className="p-6">
                <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                  Now here's where it gets interesting. The heat pump has a <strong>compressor</strong> inside it. This compressor squeezes the liquid really, really hard.
                </p>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mt-4">
                  Why? Because <strong>when you squeeze things, they get hot</strong>. Try this: rub your hands together really fast. They get warm, right? That's kind of what the compressor does to the liquid.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border-2 border-[#ff9500] rounded-2xl overflow-hidden mb-6">
              <div className="bg-[#ff9500] px-6 py-4">
                <h3 className="text-[24px] font-semibold text-white">Step 3: Sending Heat Inside</h3>
              </div>
              <div className="p-6">
                <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                  Once the liquid is hot, the heat pump sends it into your house. The hot liquid flows through pipes in your radiators or underfloor heating, warming up your rooms.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white border-2 border-[#af52de] rounded-2xl overflow-hidden mb-8">
              <div className="bg-[#af52de] px-6 py-4">
                <h3 className="text-[24px] font-semibold text-white">Step 4: Going Round Again</h3>
              </div>
              <div className="p-6">
                <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                  After the liquid has given away all its heat, it goes back outside to start the whole process again. <strong>Round and round it goes</strong>, keeping your house toasty warm.
                </p>
              </div>
            </div>

            <div className="bg-[#34c759]/10 border-l-4 border-[#34c759] rounded-r-xl p-6">
              <p className="text-[17px] text-[#1d1d1f] font-semibold mb-2">The Magic Bit:</p>
              <p className="text-[16px] text-[#6e6e73]">
                The whole thing runs on electricity, kind of like how your TV or computer runs on electricity. But here's the magic – <strong>for every £1 of electricity you use, you get about £3 worth of heat</strong>. That's three times more efficient than a normal boiler!
              </p>
            </div>
          </div>

          {/* Why Is Everyone Talking About Heat Pumps Now? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Why Is Everyone Talking About Heat Pumps Now?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              You might have noticed people talking about heat pumps a lot lately. There are a few reasons for this.
            </p>

            {/* Reason 1 */}
            <div className="bg-linear-to-r from-[#0071e3]/10 to-[#34c759]/10 rounded-2xl p-6 mb-6">
              <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">🌍 Reason 1: They're Better for the Planet</h3>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                Normal boilers burn gas or oil to make heat. This creates pollution that's not great for the environment. Heat pumps just move heat around using electricity, which can come from clean sources like wind or solar power.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-linear-to-r from-[#34c759]/10 to-[#ff9500]/10 rounded-2xl p-6 mb-6">
              <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">💷 Reason 2: The Government Is Giving Away Money</h3>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
                This is a big one. <strong>Right now, the UK government is giving people £7,500 to help pay for a heat pump</strong>. That's a lot of money! It's called the Boiler Upgrade Scheme.
              </p>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                Why are they doing this? Because the government wants more homes to use heat pumps instead of gas boilers. It's part of their plan to reduce pollution. Not everyone can get this money though. You need to own your home and be replacing an old gas, oil, or LPG boiler.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-linear-to-r from-[#ff9500]/10 to-[#af52de]/10 rounded-2xl p-6">
              <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">⚡ Reason 3: Energy Bills</h3>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                Gas prices went really high recently, making it expensive to heat homes with gas boilers. Heat pumps use electricity, and because they're so efficient, they can work out cheaper to run. Though it depends on your home and how you use them.
              </p>
            </div>
          </div>

          {/* Are There Different Types? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Are There Different Types of Heat Pumps?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Yes! The most common type for homes is the <strong>air source heat pump</strong>. This is the one I've been describing – the one with the metal box outside that takes heat from the air.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-[#34c759] rounded-2xl p-6">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">✓ Air Source Heat Pump</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  Gets heat from the air. Simpler, cheaper to install, and most people choose this one.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-2xl p-6">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">🏗️ Ground Source Heat Pump</h3>
                <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                  Gets heat from the ground. Works great, but you need to dig up your garden, which makes it more expensive.
                </p>
              </div>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              Most people go for air source heat pumps because they're simpler and cheaper to install.
            </p>
          </div>

          {/* What's Good About Heat Pumps? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              What's Good About Heat Pumps?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Let me give you the main benefits in plain English:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-[#34c759]/5 rounded-xl">
                <span className="text-[32px] shrink-0">⚡</span>
                <div>
                  <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">They're Super Efficient</h4>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                    Remember how I said you get £3 of heat for every £1 of electricity? That's about three times better than a normal boiler. Gas boilers can only give you about £1 of heat for every £1 of gas you burn.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-[#0071e3]/5 rounded-xl">
                <span className="text-[32px] shrink-0">⏱️</span>
                <div>
                  <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">They Last a Long Time</h4>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                    A good heat pump can last 20-25 years if you look after it properly. That's longer than most gas boilers, which usually last about 10-15 years.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-[#ff9500]/5 rounded-xl">
                <span className="text-[32px] shrink-0">❄️</span>
                <div>
                  <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">They Work as Air Conditioning Too</h4>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                    Many heat pumps can run backwards in summer, cooling your house down instead of heating it up. So it's like getting air conditioning included.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-[#af52de]/5 rounded-xl">
                <span className="text-[32px] shrink-0">🌱</span>
                <div>
                  <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Lower Carbon Footprint</h4>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                    If you care about reducing pollution (and let's be honest, we all should), heat pumps are much cleaner than burning gas or oil.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-[#34c759]/10 rounded-xl border-2 border-[#34c759]">
                <span className="text-[32px] shrink-0">💚</span>
                <div>
                  <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">That £7,500 Grant</h4>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">
                    I mentioned this already, but it's worth repeating. If you qualify for the government grant, you're getting £7,500 knocked off the price. That's massive!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What About the Downsides? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              What About the Downsides?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              I should be honest with you – heat pumps aren't perfect for everyone.
            </p>

            <div className="bg-[#ff9500]/10 border-l-4 border-[#ff9500] rounded-r-xl p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#ff9500] text-[20px] font-bold mt-1">•</span>
                  <p className="text-[16px] text-[#1d1d1f]">
                    <strong>They cost more to install</strong> than a new boiler (though the grant helps a lot with this)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#ff9500] text-[20px] font-bold mt-1">•</span>
                  <p className="text-[16px] text-[#1d1d1f]">
                    <strong>They work best in well-insulated homes.</strong> If your house is drafty, you might not get the full benefit
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#ff9500] text-[20px] font-bold mt-1">•</span>
                  <p className="text-[16px] text-[#1d1d1f]">
                    <strong>On really cold days</strong>, they might need a backup heater to help out
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#ff9500] text-[20px] font-bold mt-1">•</span>
                  <p className="text-[16px] text-[#1d1d1f]">
                    <strong>The outdoor unit makes noise</strong> – like a quiet fan or fridge humming. Most people don't mind it, but it's something to think about
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Should You Get a Heat Pump? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Should You Get a Heat Pump?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              That depends on your situation. Here are some quick questions to think about:
            </p>

            <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#34c759] text-[20px]">✓</span>
                  <p className="text-[16px] text-[#1d1d1f]">Do you own your home?</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#34c759] text-[20px]">✓</span>
                  <p className="text-[16px] text-[#1d1d1f]">Do you have a gas, oil, or LPG boiler now?</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#34c759] text-[20px]">✓</span>
                  <p className="text-[16px] text-[#1d1d1f]">Is your home reasonably well-insulated?</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#34c759] text-[20px]">✓</span>
                  <p className="text-[16px] text-[#1d1d1f]">Do you have space outside for the outdoor unit?</p>
                </div>
              </div>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              If you answered yes to most of these, a heat pump might be a great option for you. <strong>Especially with that £7,500 grant available.</strong>
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              The best way to find out is to check your eligibility for the grant and get some quotes from installers. They can look at your specific home and tell you if a heat pump makes sense.
            </p>
          </div>

          {/* CTA Box */}
          <div className="bg-linear-to-br from-[#34c759] to-[#30a14e] rounded-2xl p-8 md:p-12 text-white mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold mb-4">Want to Check If You Qualify for the £7,500 Grant?</h2>
            
            <p className="text-[18px] opacity-90 mb-8 leading-[1.6]">
              Look, I know this is a lot of information to take in. Heat pumps are fascinating when you understand them, but the most important question is probably: <strong>"Can I get that £7,500 grant money?"</strong>
            </p>

            <p className="text-[17px] opacity-85 mb-8 leading-[1.6]">
              The good news is you can find out in about <strong>90 seconds</strong>. We built a simple eligibility checker that asks you a few quick questions about your home and heating system. It'll tell you straight away if you're likely to qualify.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[20px]">✓</span>
                  <span className="text-[15px]">No catch. No sales calls.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[20px]">✓</span>
                  <span className="text-[15px]">Just a quick answer.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[20px]">✓</span>
                  <span className="text-[15px]">Plus, if you do want to go ahead, we'll connect you with vetted installers in your area.</span>
                </div>
              </div>
            </div>

            <Link href="/quiz" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#34c759] px-10 py-5 text-[17px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-lg"
              >
                Check Your Eligibility →
              </Button>
            </Link>
          </div>

          {/* Summary */}
          <div className="bg-[#34c759]/5 border-2 border-[#34c759] rounded-2xl p-8">
            <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-6">The Bottom Line</h2>
            
            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              So that's how heat pumps work. They're basically <strong>heat-stealing machines</strong> that are way more efficient than normal boilers, better for the environment, and might save you money – especially with the government grant.
            </p>

            <p className="text-[17px] leading-[1.6] font-semibold text-[#34c759]">
              Not as complicated as you thought, was it?
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-8 tracking-tight">
            Read More
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/blog/heat-pump-grant-guide">
              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="/modern-heat-pump-installation.jpg" alt="Heat pump grant" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">£7,500 Heat Pump Grant Guide</h3>
                  <p className="text-[15px] text-[#6e6e73]">Complete guide to eligibility, application, and getting your grant</p>
                </div>
              </div>
            </Link>
            <Link href="/blog/best-tumble-dryers-uk">
              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="/energy-efficiency-comparison-chart.jpg" alt="Tumble dryers" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Best Tumble Dryers UK 2025</h3>
                  <p className="text-[15px] text-[#6e6e73]">Expert reviews and buying guide for energy-efficient dryers</p>
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
            {/* Brand */}
            <div>
              <Logo className="h-11 w-auto mb-4" />
              <p className="text-[14px] text-[#6e6e73]">
                Free heat pump quotes from trusted installers. Save up to £7,500.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-[14px] font-semibold text-[#1d1d1f] mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/quiz" className="block text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Check Eligibility
                </Link>
                <Link href="/installation" className="block text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Get Quote
                </Link>
                <Link href="/#how-it-works" className="block text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  How It Works
                </Link>
              </div>
            </div>

            {/* Resources */}
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

            {/* Contact */}
            <div>
              <h4 className="text-[14px] font-semibold text-[#1d1d1f] mb-4">Contact</h4>
              <div className="space-y-2">
                <Link href="/contact" className="block text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Contact Us
                </Link>
                <Link href="/contact" className="block text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Support
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-[#d2d2d7] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[12px] text-[#86868b]">
                © 2025 HeatPump UK. All rights reserved.
              </p>
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

