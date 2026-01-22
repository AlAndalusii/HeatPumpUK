"use client"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Head from "next/head"

export default function BlogPostPage() {
  return (
    <>
      <Head>
        <title>£7,500 Air Source Heat Pump Grant UK | Eligibility Guide</title>
        <meta name="description" content="Complete guide to the £7,500 air source heat pump grant in the UK. Check eligibility, learn how to apply for government grants, and find MCS installers in England, Scotland and Wales." />
        <meta name="keywords" content="£7500 Air Source Heat Pump grant, Air Source Heat Pump grant UK, government Air Source Heat Pump grant, Air Source Heat Pump grant eligibility, Air Source Heat Pump grant, Boiler Upgrade Scheme, MCS installers" />
      </Head>
      <div className="min-h-screen bg-white text-[#1d1d1f]">
      {/* Header */}
      <Navbar activePage="resources" />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-linear-to-br from-[#0071e3] to-[#0056b3]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-[13px] font-medium text-white uppercase tracking-wide">Ultimate Guide</span>
          </div>
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-white mb-6 tracking-tight leading-[1.1]">
            Everything You Need to Know About the £7,500 Air Source Heat Pump Grant
          </h1>
          <div className="flex items-center gap-4 text-white/80">
            <span className="text-[15px]">February 19, 2025</span>
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
              Good news! The UK government is giving away up to <strong>£7,500</strong> to help you get an air source heat pump for your home. Think of it like getting a huge discount voucher for making your home warmer and greener!
            </p>
            <p className="text-[19px] md:text-[21px] text-[#1d1d1f] leading-[1.6] mb-6">
              But how does this <strong>air source heat pump grant</strong> work? Who can get it? And how do you apply? Don't worry – we'll explain everything in simple words, just like we're chatting over a cup of tea.
            </p>
          </div>

          {/* What is an Air Source Heat Pump? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              What is an Air Source Heat Pump? (And Why Should You Care?)
            </h2>
            
            <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-8">
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
                Imagine your fridge, but working backwards. Instead of keeping things cold, an air source heat pump takes warmth from outside (even when it's freezing!) and brings it into your home. Pretty clever, right?
              </p>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                Heat pumps are amazing because they use much less energy than old-fashioned boilers. This means lower bills for you and less pollution for our planet. It's like swapping a thirsty car for an electric one!
              </p>
            </div>

            <img 
              src="/modern-heat-pump-installation.jpg" 
              alt="Modern Air Source Heat Pump installation" 
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg mb-6"
            />
            <p className="text-[14px] text-[#6e6e73] text-center mb-8">A modern air source heat pump installed outside a UK home</p>
          </div>

          {/* Understanding the Government Air Source Heat Pump Grant */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              What is the Government Air Source Heat Pump Grant?
            </h2>
            
            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              The <strong>government air source heat pump grant</strong> is officially called the "Boiler Upgrade Scheme" (or BUS for short). It's a program where the government chips in £7,500 towards your air source heat pump installation.
            </p>

            <div className="bg-[#0071e3]/5 border-l-4 border-[#0071e3] rounded-r-xl p-6 mb-8">
              <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">💡 Quick Fact</h3>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                Heat pumps usually cost between £8,000 and £14,000. With the £7,500 grant, you might only pay £500 to £6,500! That's a massive saving.
              </p>
            </div>

            <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-4">Types of Air Source Heat Pumps Covered</h3>
            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
              The grant covers two main types:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">🌬️ Air Source Heat Pumps</h4>
                <p className="text-[15px] text-[#6e6e73] leading-normal mb-3">
                  These grab heat from the air outside. They're the most common type and easier to install.
                </p>
                <div className="text-[14px] text-[#0071e3] font-medium">
                  ✓ £7,500 grant available
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">🌍 Ground Source Heat Pumps</h4>
                <p className="text-[15px] text-[#6e6e73] leading-normal mb-3">
                  These take heat from the ground using pipes buried in your garden. More expensive but super efficient.
                </p>
                <div className="text-[14px] text-[#0071e3] font-medium">
                  ✓ £7,500 grant available
                </div>
              </div>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              The air source heat pump grant is particularly popular because these systems work well for most homes and cost less to install than ground source systems.
            </p>
          </div>

          {/* Who Can Get the Grant? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Who Can Get the Air Source Heat Pump Grant?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Wondering about air source heat pump grant eligibility? Here's the simple checklist:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-[#f5f5f7] rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-[#34c759] flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">You Own Your Home</h4>
                  <p className="text-[15px] text-[#6e6e73]">
                    The property needs to be yours. If you're renting, ask your landlord to apply instead.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#f5f5f7] rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-[#34c759] flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">You Live in England, Scotland, or Wales</h4>
                  <p className="text-[15px] text-[#6e6e73]">
                    The air source heat pump grant in England, Wales and Scotland all use the Boiler Upgrade Scheme. All three parts of the UK follow the same eligibility rules. Northern Ireland has different programs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#f5f5f7] rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-[#34c759] flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Your Home Has Good Insulation</h4>
                  <p className="text-[15px] text-[#6e6e73]">
                    Your home needs to keep heat in well. Most homes with an EPC rating of C or above qualify.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#f5f5f7] rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-[#34c759] flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">You're Replacing an Old Heating System</h4>
                  <p className="text-[15px] text-[#6e6e73]">
                    You need to be getting rid of an old gas boiler, oil boiler, or electric heating system.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#f5f5f7] rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-[#34c759] flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">You Use an MCS-Certified Installer</h4>
                  <p className="text-[15px] text-[#6e6e73]">
                    The installer must be certified by MCS (Microgeneration Certification Scheme). Don't worry – we only work with certified installers!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#ff9500]/10 border-l-4 border-[#ff9500] rounded-r-xl p-6">
              <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">⚠️ Important Note</h3>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                If you've already had other government grants for insulation or heating in the past, you can still get this one. But you can't get the grant twice for the same property!
              </p>
            </div>
          </div>

          {/* How Much Does an air source heat pump Cost? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              How Much Does an Air Source Heat Pump Cost?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Let's talk numbers. Understanding air source heat pump costs helps you plan your budget:
            </p>

            <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden mb-8">
              <div className="bg-[#0071e3] px-6 py-4">
                <h3 className="text-[20px] font-semibold text-white">Air Source Heat Pump Costs</h3>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                  <span className="text-[17px] text-[#6e6e73]">Total Cost (Before Grant)</span>
                  <span className="text-[24px] font-semibold text-[#1d1d1f]">£8,000 - £14,000</span>
                </div>
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                  <span className="text-[17px] text-[#34c759] font-medium">Government Grant</span>
                  <span className="text-[24px] font-semibold text-[#34c759]">-£7,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[20px] font-semibold text-[#1d1d1f]">Your Cost (After Grant)</span>
                  <span className="text-[32px] font-bold text-[#0071e3]">£500 - £6,500</span>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden mb-8">
              <div className="bg-[#34c759] px-6 py-4">
                <h3 className="text-[20px] font-semibold text-white">Ground Source Heat Pump Costs</h3>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                  <span className="text-[17px] text-[#6e6e73]">Total Cost (Before Grant)</span>
                  <span className="text-[24px] font-semibold text-[#1d1d1f]">£18,000 - £28,000</span>
                </div>
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                  <span className="text-[17px] text-[#34c759] font-medium">Government Grant</span>
                  <span className="text-[24px] font-semibold text-[#34c759]">-£7,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[20px] font-semibold text-[#1d1d1f]">Your Cost (After Grant)</span>
                  <span className="text-[32px] font-bold text-[#0071e3]">£10,500 - £20,500</span>
                </div>
              </div>
            </div>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Remember, these are typical costs. Your actual price depends on your home's size, how well it's insulated, and which installer you choose. That's why it's smart to get quotes from multiple installers!
            </p>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              For a full breakdown of prices, you can also read our <Link href="/blog/air-source-heat-pump-cost-uk" className="text-[#0071e3] hover:underline">air source heat pump cost guide</Link>.
            </p>
          </div>

          {/* How to Apply */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              How to Apply for the Air Source Heat Pump Grant
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              Here's the good news: <strong>you don't actually apply yourself</strong>! Your <Link href="/" className="text-[#0071e3] hover:underline">MCS-certified installer</Link> does all the paperwork for you. Here's how it works:
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0071e3] flex items-center justify-center shrink-0">
                  <span className="text-white text-[20px] font-bold">1</span>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Get Your Quotes</h4>
                  <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                    Contact 2-3 <Link href="/" className="text-[#0071e3] hover:underline">MCS-certified installers</Link> and ask for quotes. They'll visit your home for a free survey to check if an air source heat pump is right for you.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0071e3] flex items-center justify-center shrink-0">
                  <span className="text-white text-[20px] font-bold">2</span>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Choose Your Installer</h4>
                  <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                    Compare the quotes and pick the installer you like best. Make sure they mention the £7,500 grant in their quote!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0071e3] flex items-center justify-center shrink-0">
                  <span className="text-white text-[20px] font-bold">3</span>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Installer Applies for Grant</h4>
                  <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                    Your chosen installer applies for the grant through the official <strong>gov uk air source heat pump grant</strong> system. They do all the boring paperwork!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0071e3] flex items-center justify-center shrink-0">
                  <span className="text-white text-[20px] font-bold">4</span>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Installation Day</h4>
                  <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                    Once approved, your installer will arrange a date to fit your new air source heat pump. Most installations take 1-2 days.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#34c759] flex items-center justify-center shrink-0">
                  <span className="text-white text-[20px] font-bold">5</span>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Pay Discounted Price</h4>
                  <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                    You only pay the final cost with the grant already taken off. So if the total was £10,000, you'd pay £2,500 (£10,000 minus £7,500).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#34c759]/10 border-l-4 border-[#34c759] rounded-r-xl p-6">
              <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">✅ Pro Tip</h3>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                Never pay the full price upfront and expect to get the grant back later. The grant should ALWAYS be taken off your final bill. If an installer asks you to pay full price first, that's a red flag!
              </p>
            </div>
          </div>

          {/* Regional Information */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Air Source Heat Pump Grants by Region
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border-2 border-[#0071e3] rounded-2xl p-6">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England</h3>
                <p className="text-[15px] text-[#6e6e73] leading-normal mb-4">
                  Available to all homeowners in England through the Boiler Upgrade Scheme.
                </p>
                <div className="text-[20px] font-bold text-[#0071e3]">£7,500 Available</div>
              </div>

              <div className="bg-white border-2 border-[#0071e3] rounded-2xl p-6">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales</h3>
                <p className="text-[15px] text-[#6e6e73] leading-normal mb-4">
                  Welsh homeowners can claim the grant using the same BUS scheme.
                </p>
                <div className="text-[20px] font-bold text-[#0071e3]">£7,500 Available</div>
              </div>

              <div className="bg-white border-2 border-[#0071e3] rounded-2xl p-6">
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland</h3>
                <p className="text-[15px] text-[#6e6e73] leading-normal mb-4">
                  Scottish homeowners get the same £7,500 through BUS across each part of the UK.
                </p>
                <div className="text-[20px] font-bold text-[#0071e3]">£7,500 Available</div>
              </div>
            </div>

            <div className="bg-[#f5f5f7] rounded-2xl p-6">
              <h4 className="text-[18px] font-semibold text-[#1d1d1f] mb-3">What about Northern Ireland?</h4>
              <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                Northern Ireland has its own schemes. Check with local authorities for grant options and eligibility.
              </p>
            </div>
          </div>

          {/* When Does the Grant End? */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              When Does the Air Source Heat Pump Grant End?
            </h2>

            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-6">
              People often ask about the air source heat pump grant end date. Here's what you need to know:
            </p>

            <div className="bg-[#ff9500]/10 border-2 border-[#ff9500] rounded-2xl p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-[#ff9500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-[22px] font-semibold text-[#1d1d1f]">The grant runs until 2028</h3>
              </div>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
                BUT (and this is important), the money is given out on a first-come, first-served basis. When the pot runs out each year, you'll have to wait for the next allocation.
              </p>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.6] font-medium">
                Bottom line: Don't wait! The sooner you apply, the better your chances of getting the full <strong>£7,500 air source heat pump grant</strong>.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-8 tracking-tight">
              Common Questions About Air Source Heat Pump Grants
            </h2>

            <div className="space-y-4">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h2 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Can I get an air source heat pump grant if I live in a flat?</h2>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                  It's tricky. Most flats don't have space for the outdoor unit. But if you own a flat with a garden or outdoor space, you might be able to get an air source heat pump. Ground floor flats and maisonettes have better chances.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h2 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Do I need better insulation before getting an air source heat pump?</h2>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                  Your home needs decent insulation for an air source heat pump to work well. If your EPC rating is below C, you might need to upgrade your insulation first. The good news? Your installer will tell you exactly what (if anything) you need to do during the survey.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h2 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Will an air source heat pump work with my existing radiators?</h2>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                  Usually, yes! Modern air source heat pumps work fine with most radiators. You might need to upgrade to slightly larger radiators in some rooms, but your installer will check this during the survey.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h2 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">How long does installation take?</h2>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                  An air source heat pump typically takes 1-2 days to install. Ground source systems take longer (3-5 days) because they need to dig trenches or bore holes in your garden.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h2 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Are air source heat pumps noisy?</h2>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                  Modern air source heat pumps are pretty quiet – about as loud as a fridge humming. Your installer will position the outdoor unit away from bedrooms and boundaries to keep everyone happy.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h2 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Will I save money on my bills?</h2>
                <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                  If you're replacing an old gas or oil boiler, you should see savings on your energy bills. Heat pumps are 300-400% efficient, meaning they produce 3-4 units of heat for every 1 unit of electricity they use. That's way better than boilers!
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
              Ready to Get Your £7,500 Grant?
            </h2>

            <div className="bg-linear-to-br from-[#0071e3] to-[#0056b3] rounded-2xl p-8 md:p-12 text-white text-center">
              <h3 className="text-[28px] md:text-[36px] font-semibold mb-4">Here's what to do next:</h3>
              
              <div className="space-y-4 mb-8 text-left max-w-2xl mx-auto">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-[17px]">Answer 10 quick questions about your home (takes 2 minutes)</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-[17px]">Get matched with up to 3 vetted, MCS-certified installers</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-[17px]">Compare quotes and choose the best deal</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <p className="text-[17px]">Your installer applies for the grant and fits your air source heat pump</p>
                </div>
              </div>

              <Link href="/quiz">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-[#0071e3] px-12 py-6 text-[19px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-xl"
                >
                  Check Your Eligibility in 90 Seconds →
                </Button>
              </Link>

              <p className="text-[15px] text-white/80 mt-6">
                Compare free quotes from vetted MCS-certified installers • 100% free • No obligation
              </p>
            </div>
          </div>

          {/* Final Thoughts */}
          <div className="bg-[#f5f5f7] rounded-2xl p-8">
            <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-4">Final Thoughts</h3>
            <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
              The air source heat pump grant scheme is one of the best deals the government has offered for home improvements. Getting £7,500 towards an air source heat pump means you can make your home more comfortable, slash your energy bills, and help the environment – all at the same time.
            </p>
            <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
              Don't overthink it! Take our quick 2-minute quiz to see if you qualify. You've got nothing to lose and potentially thousands of pounds to save. If you're still unsure, you can also read <Link href="/blog/are-heat-pumps-worth-it" className="text-[#0071e3] hover:underline">our guide on whether air source heat pumps are worth it</Link>. Why not find out today?
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-8 tracking-tight">
            Read More
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/air-source-heat-pump-cost-uk">
              <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="/energy-efficiency-comparison-chart.jpg" alt="Cost comparison" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Air Source Heat Pump Cost UK (2026 Guide)</h3>
                  <p className="text-[15px] text-[#6e6e73]">Complete breakdown of what you'll actually pay in 2026</p>
                </div>
              </div>
            </Link>
            <Link href="/blog/are-heat-pumps-worth-it">
              <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="/heat-pump-in-winter-snow.jpg" alt="Worth it analysis" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Are air source heat pumps worth it?</h3>
                  <p className="text-[15px] text-[#6e6e73]">The honest answer about costs, savings and whether they're right for your home</p>
                </div>
              </div>
            </Link>
            <Link href="/">
              <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="/modern-uk-house-exterior.jpg" alt="Home suitability" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Compare MCS-Certified Installers</h3>
                  <p className="text-[15px] text-[#6e6e73]">Get quotes from vetted installers in 90 seconds</p>
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

