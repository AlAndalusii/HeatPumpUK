"use client"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Head from "next/head"

export default function AreHeatPumpsWorthItPage() {
  return (
    <>
      <Head>
        <title>Are Air Source Heat Pumps Worth It? The Honest Answer for UK Homes</title>
        <meta name="description" content="The truth about whether Air Source Heat Pumps are worth it for UK homes. Get honest costs, savings analysis, and find out if an Air Source Heat Pump is right for your home." />
        <meta name="keywords" content="are Air Source Heat Pumps worth it, Air Source Heat Pump worth the cost, Air Source Heat Pump cost benefit, Air Source Heat Pump savings UK, Air Source Heat Pump vs boiler comparison" />
      </Head>
      <div className="min-h-screen bg-white text-[#1d1d1f]">
      {/* Header */}
      <Navbar activePage="resources" />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-linear-to-br from-[#ff9500] to-[#ff6b6b]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-[13px] font-medium text-white uppercase tracking-wide">Worth It?</span>
          </div>
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-white mb-6 tracking-tight leading-[1.1]">
            Are Air Source Heat Pumps Worth It? The Honest Answer
          </h1>
          <div className="flex items-center gap-4 text-white/80">
            <span className="text-[15px]">August 23, 2025</span>
            <span>•</span>
            <span className="text-[15px]">12 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Quick Answer Box */}
          <div className="bg-linear-to-br from-[#0071e3] to-[#0056b3] rounded-2xl p-8 mb-12">
            <h2 className="text-[24px] font-bold text-white mb-4">Quick Answer</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-[17px] text-white leading-[1.6] mb-4">
                <strong>Heat pumps are worth it if:</strong> your home is well insulated, your boiler needs replacing soon, and you can get the £7,500 grant.
              </p>
              <p className="text-[17px] text-white leading-[1.6]">
                <strong>They might not be worth it yet if:</strong> your house is very draughty, your boiler is new, or you don't qualify for the grant.
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg mb-12">
            <p className="text-[19px] md:text-[21px] text-[#1d1d1f] leading-[1.6] mb-6">
              Let me get straight to the point. You're thinking about getting an air source heat pump, and you want to know if it's actually worth the money and hassle. Fair question.
            </p>
            <p className="text-[19px] md:text-[21px] text-[#1d1d1f] leading-[1.6] mb-6">
              I'm going to give you the honest answer, not the sales pitch. Because here's the thing about air source heat pumps in the UK right now: they can be absolutely brilliant for some homes and a complete nightmare for others. The trick is figuring out which camp you're in.
            </p>
          </div>

          {/* What Actually Is an Air Source Heat Pump Anyway? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              What Actually Is an Air Source Heat Pump Anyway?
            </h2>

            <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-8">
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
                Before we talk about whether they're worth it, let me explain what an air source heat pump actually does. Because most people think it's some complicated space-age technology, but it's really not.
              </p>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                An air source heat pump is basically a fridge that works backwards. Your fridge takes heat from inside and dumps it outside, keeping your food cold. An air source heat pump takes heat from outside and brings it inside, keeping your house warm.
              </p>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              I know what you're thinking. How can you get heat from outside when it's freezing cold in January? Well, there's always some heat in the air, even when it feels absolutely Baltic outside. Heat pumps are clever enough to grab that heat and squeeze it until it's hot enough to warm your house.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              The most common type for UK homes is called an air source heat pump. It sits outside your house in a metal box about the size of a big wheelie bin. It hums quietly while it works, kind of like a fridge does.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              There's also ground source heat pumps that get heat from underground, but they cost way more and you need to dig up your garden. Most people go for air source because it's simpler and cheaper.
            </p>
          </div>

          {/* So How Much Does an Air Source Heat Pump Actually Cost? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              So How Much Does an Air Source Heat Pump Actually Cost?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Right, let's talk money. Because this is probably the first thing you want to know.
            </p>

            <div className="bg-white border-2 border-[#ff9500] rounded-2xl overflow-hidden mb-8">
              <div className="bg-[#ff9500] px-6 py-4">
                <h3 className="text-[24px] font-semibold text-white">The Price Tag</h3>
              </div>
              <div className="p-6">
                <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
                  A typical air source heat pump for a normal UK house costs between <strong>£8,000 and £15,000</strong> to install. I know. That's a lot of money. That's a decent second hand car or a really nice holiday.
                </p>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                  But here's where it gets interesting. The UK government is currently giving away <strong>£7,500</strong> to help you pay for it. It's called the <strong>Boiler Upgrade Scheme</strong>, and it's proper money, not a loan you have to pay back.
                </p>
              </div>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              So if your air source heat pump costs twelve thousand pounds and you get the seven and a half grand grant, you're actually paying <strong>four and a half thousand</strong>. Still not pocket change, but way better than twelve grand. <Link href="/blog/heat-pump-grant-guide" className="text-[#0071e3] hover:underline">Learn more about the £7,500 grant</Link>.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Why is the government giving away all this money? Because they want everyone to stop using gas boilers and switch to heat pumps. It's part of their plan to reduce pollution and hit climate targets. Whether you care about that or not, you might as well take the free money if you qualify.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              Most people do qualify, by the way. You just need to own your home and be replacing a gas, oil, or LPG boiler. If you're renting, tough luck. If you already have a heat pump, you can't get another grant. But if you've got an old gas boiler that's on its last legs, you're probably good to go.
            </p>
          </div>

          {/* The Big Question: Will It Actually Save You Money? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              The Big Question: Will It Actually Save You Money?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Here's where we need to be really honest. Whether an air source heat pump saves you money depends on a few things.
            </p>

            <div className="bg-[#34c759]/10 border-l-4 border-[#34c759] rounded-r-xl p-6 mb-8">
              <p className="text-[17px] text-[#1d1d1f] font-semibold mb-2">The Basic Math:</p>
              <p className="text-[16px] text-[#6e6e73]">
                Heat pumps run on electricity, not gas. Right now in the UK, electricity costs about three times more than gas per unit of energy. But heat pumps are about three times more efficient than gas boilers. So in theory, it all balances out.
              </p>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              For every pound you spend on electricity, you get about three pounds worth of heat. A gas boiler gives you about one pound of heat for every pound of gas you burn.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              So in theory, it all balances out and your bills stay roughly the same. Some people save a bit of money. Some people's bills go up a bit. It really depends on how well insulated your house is and how you use the heating.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              But here's the thing nobody tells you. <strong>If gas prices stay low and electricity prices stay high, heat pumps aren't going to save you buckets of cash on running costs.</strong> They're better for the environment, sure, but don't expect to cut your heating bill in half.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              The real savings come from that seven and a half grand grant. If you were going to replace your boiler anyway and it was going to cost you five or six grand for a new gas boiler, then paying four and a half grand for a heat pump instead makes sense. You're getting future-proof technology for basically the same money. <Link href="/blog/heat-pump-installation-cost-uk" className="text-[#0071e3] hover:underline">See the full cost breakdown here</Link>.
            </p>
          </div>

          {/* What About When They Go Wrong? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              What About When They Go Wrong?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Gas boilers are simple. When they break, there's a million plumbers who can fix them. Parts are cheap and easy to find.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-[#af52de] rounded-2xl p-6">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">⚠️ Heat Pump Repairs</h3>
                <ul className="space-y-3 text-[15px] text-[#6e6e73]">
                  <li>• Fewer engineers who really know them</li>
                  <li>• Parts can be expensive</li>
                  <li>• Weeks to arrive sometimes</li>
                  <li>• But warranties usually cover repairs</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-[#34c759] rounded-2xl p-6">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">✓ The Upside</h3>
                <ul className="space-y-3 text-[15px] text-[#6e6e73]">
                  <li>• Last 20-25 years (vs 10-15 for boilers)</li>
                  <li>• Warranties 5-7 years usually</li>
                  <li>• Some offer 10-year coverage</li>
                  <li>• Fewer parts wear out</li>
                </ul>
              </div>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              You also need to factor in annual servicing, which costs about <strong>£150 to £200 a year</strong>. Gas boiler servicing is usually cheaper, around <strong>£80 to £100</strong>. Again, not a massive difference, but worth knowing.
            </p>
          </div>

          {/* The Honest Truth About Air Source Heat Pumps vs Gas Boilers */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              The Honest Truth About Air Source Heat Pumps vs Gas Boilers
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Let me give you the real comparison that nobody wants to talk about.
            </p>

              <div className="bg-white border-2 border-[#0071e3] rounded-2xl overflow-hidden mb-8">
              <div className="bg-[#0071e3] px-6 py-4">
                <h3 className="text-[24px] font-semibold text-white">How They're Different</h3>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <p className="text-[17px] font-semibold text-[#1d1d1f] mb-2">Gas Boilers:</p>
                  <p className="text-[16px] text-[#6e6e73]">Heat water really hot, like 60-80 degrees. Blast your radiators and get your house toasty warm in about 20 minutes, even in the middle of winter.</p>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-[17px] font-semibold text-[#1d1d1f] mb-2">Heat Pumps:</p>
                  <p className="text-[16px] text-[#6e6e73]">Work best when running at lower temperatures, around 35-50 degrees. Heat your house more slowly and gently. Think of it like the difference between a sprint and a marathon.</p>
                </div>
              </div>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              This means two things. First, you need to run your heat pump for longer periods. Instead of blasting the heating for two hours in the morning and evening, you might need to run it on low all day. Some people find this weird at first.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Second, your radiators might not get as hot as they used to. If you've got small radiators or your house is poorly insulated, you might need to upgrade to bigger radiators to get the same warmth. That costs extra money.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              In a really well insulated modern house, heat pumps are brilliant. In a drafty old Victorian terrace with single glazing and no insulation, they can struggle. You might get the house warm eventually, but it'll cost you a fortune in electricity.
            </p>
          </div>

          {/* So Who Should Actually Get a Heat Pump? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              So Who Should Actually Get a Heat Pump?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Right, let me be really clear about who heat pumps work well for.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-[#34c759]/5 rounded-xl p-6 border-l-4 border-[#34c759]">
                <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">✓ Good Candidates for Heat Pumps</h4>
                <ul className="space-y-2 text-[15px] text-[#6e6e73]">
                  <li>• Your house is reasonably well insulated (cavity wall, loft insulation, double glazing)</li>
                  <li>• Your current boiler is dying and needs replacing anyway</li>
                  <li>• You have underfloor heating or big radiators</li>
                  <li>• You're at home during the day (heat pumps work best running steadily)</li>
                  <li>• You have space outside for the outdoor unit (about 1 meter clear in front)</li>
                </ul>
              </div>

              <div className="bg-[#ff9500]/5 rounded-xl p-6 border-l-4 border-[#ff9500]">
                <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">✗ Maybe Not the Best Fit</h4>
                <ul className="space-y-2 text-[15px] text-[#6e6e73]">
                  <li>• Your house has poor insulation and old single-glazed windows</li>
                  <li>• Your gas boiler is working perfectly fine</li>
                  <li>• You're hoping to save loads of money on bills immediately</li>
                  <li>• You're only at home mornings and evenings</li>
                  <li>• You have tiny radiators or microbore pipes</li>
                  <li>• You don't qualify for the government grant</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What About the Noise? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              What About the Noise?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Let's talk about something installers don't always mention. Heat pumps make noise.
            </p>

            <div className="bg-[#af52de]/10 border-2 border-[#af52de] rounded-2xl p-6 mb-6">
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                The outdoor unit hums when it's running. It's not mega loud, about the same volume as a fridge or a quiet fan. Most people get used to it pretty quickly.
              </p>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              But if your outdoor unit is right next to your bedroom window or your neighbor's garden, it can be annoying. Some councils have rules about where you can put them because of noise complaints.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              The newer models are quieter than the old ones, but they're never going to be completely silent. If you're the sort of person who gets bothered by background noise, think carefully about where the unit will go.
            </p>
          </div>

          {/* The Installation Process */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              The Installation Process
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              Getting a heat pump installed is more complicated than swapping out a boiler.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Step 1: The Proper Survey</h4>
                <p className="text-[16px] text-[#6e6e73]">A decent installer will spend a couple of hours looking at your house, measuring radiators, checking insulation, and calculating how much heat you actually need. Cowboys skip this bit and just guess, which is how people end up with systems that don't work properly.</p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Step 2: The Installation</h4>
                <p className="text-[16px] text-[#6e6e73]">Takes 2-3 days. They'll put the outdoor unit on a concrete pad or wall brackets, run pipes through your wall into the house, and connect it all up to your heating system. There's quite a bit of disruption.</p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Step 3: Possible Extra Work</h4>
                <p className="text-[16px] text-[#6e6e73]">You might need new radiators if your current ones are too small. You'll definitely need a hot water cylinder if you've got a combi boiler now, because heat pumps can't heat water on demand like combis do. The cylinder is about the size of a big fridge and needs space somewhere.</p>
              </div>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              All of this adds to the cost and hassle. It's not a quick job like swapping a boiler.
            </p>
          </div>

          {/* Manchester Section */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Are air source heat pumps worth it in Manchester?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              In places like Manchester with mild, wet winters, air source heat pumps work very well if your home is insulated. The temperature rarely drops to the extreme lows where heat pumps struggle, which means they run efficiently for most of the year.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Manchester's climate is actually ideal for air source heat pumps. You get consistent performance without the challenges of harsh Scottish winters or the space constraints of central London.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              If you live in Greater Manchester and want to compare local installers, you can <Link href="/installers/manchester" className="text-[#0071e3] hover:underline font-semibold">get free quotes from MCS-certified installers in Manchester here</Link>.
            </p>
          </div>

          {/* The Final Verdict */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              The Final Verdict
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
              So are heat pumps worth it? Here's my honest answer.
            </p>

            <div className="bg-linear-to-br from-[#34c759] to-[#30a14e] rounded-2xl p-8 md:p-12 text-white mb-8">
              <h3 className="text-[24px] font-semibold mb-4">✓ YES, They're Worth It If:</h3>
              <ul className="space-y-3 text-[16px]">
                <li>• You qualify for the £7,500 grant</li>
                <li>• Your house is well insulated</li>
                <li>• Your boiler needs replacing anyway</li>
                <li>• You're okay with heating working slightly differently</li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-[#ff9500] to-[#ff6b6b] rounded-2xl p-8 md:p-12 text-white mb-8">
              <h3 className="text-[24px] font-semibold mb-4">✗ MAYBE Not Yet If:</h3>
              <ul className="space-y-3 text-[16px]">
                <li>• You don't qualify for the grant</li>
                <li>• Your house is poorly insulated</li>
                <li>• Your current boiler works fine</li>
                <li>• You're hoping for massive bill savings</li>
              </ul>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              The technology is brilliant, but it's not magic. It won't fix a cold, drafty house. It won't necessarily slash your bills. But it will give you reliable heating that's better for the environment and might actually cost you less overall once you factor in the grant.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              The key is getting proper advice from someone who's not trying to sell you something. <strong>Check if you qualify for the grant. Get your house assessed properly. Compare quotes from at least three installers who are MCS certified.</strong> That's required for the grant.
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              And whatever you do, don't rush into it because some salesperson is pressuring you. Heat pumps are a big decision and a big chunk of money. Take your time. Do your research. Make sure it's right for your house and your situation.
            </p>
          </div>

          {/* Closing */}
          <div className="bg-[#34c759]/5 border-2 border-[#34c759] rounded-2xl p-8">
            <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-6">For Some People, Heat Pumps Are the Best Decision Ever.</h2>
            
            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              For others, they're an expensive mistake. The difference is usually about doing your homework first.
            </p>
          </div>

          {/* CTA Box */}
          <div className="bg-linear-to-br from-[#ff9500] to-[#ff6b6b] rounded-2xl p-8 md:p-12 text-white mb-16 mt-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold mb-4">Ready to Find Out If It's Worth It for Your Home?</h2>
            
            <p className="text-[18px] opacity-90 mb-8 leading-[1.6]">
              Find out if an air source heat pump is worth it for your home and if you can claim the £7,500 grant.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[20px]">✓</span>
                  <span className="text-[15px]">Check your eligibility in 90 seconds</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[20px]">✓</span>
                  <span className="text-[15px]">Compare free quotes from vetted MCS-certified installers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[20px]">✓</span>
                  <span className="text-[15px]">No obligation or sales calls</span>
                </div>
              </div>
            </div>

            <Link href="/quiz" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#ff9500] px-10 py-5 text-[17px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-lg"
              >
                Check Your Eligibility →
              </Button>
            </Link>
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
            <Link href="/blog/how-heat-pumps-work">
              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="/modern-heat-pump-installation.jpg" alt="How Air Source Heat Pumps work" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">How Do Air Source Heat Pumps Work? The Simple Guide</h3>
                  <p className="text-[15px] text-[#6e6e73]">Understand the technology in plain English without the complicated jargon</p>
                </div>
              </div>
            </Link>

            <Link href="/blog/heat-pump-installation-cost-uk">
              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="/modern-uk-house-exterior.jpg" alt="Installation costs" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Air Source Heat Pump Installation Cost UK</h3>
                  <p className="text-[15px] text-[#6e6e73]">Complete breakdown of what you'll actually pay in 2026</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
    </>
  )
}

