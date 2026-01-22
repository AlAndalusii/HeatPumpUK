"use client"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Head from "next/head"
import { useState, useEffect } from "react"

export default function HeatPumpGrantApplicationGuidePage() {
  const [activeSection, setActiveSection] = useState("eligibility")
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  // Intersection Observer for scroll animations and active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            ;(entry.target as HTMLElement).style.opacity = "1"
            
            // Update active section
            const sectionId = entry.target.getAttribute("data-section")
            if (sectionId) {
              setActiveSection(sectionId)
            }
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "-100px 0px -50% 0px",
      }
    )

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const sections = [
    { id: "eligibility", label: "Eligibility", icon: "✓" },
    { id: "documents", label: "Documents", icon: "📄" },
    { id: "process", label: "Process", icon: "→" },
    { id: "timeline", label: "Timeline", icon: "⏱" },
    { id: "mistakes", label: "Mistakes", icon: "!" },
    { id: "template", label: "Template", icon: "✉" },
    { id: "checklist", label: "Checklist", icon: "☐" },
  ]

  const eligibilityItems = [
    { id: "own-home", title: "Do you own your home?", desc: "You must be the owner – tenants cannot apply" },
    { id: "england-wales", title: "Is your home in England or Wales?", desc: "Scotland has a different scheme" },
    { id: "current-heating", title: "Is your current heating gas, oil, or LPG?", desc: "Electric heaters don't qualify" },
    { id: "replacing", title: "Are you replacing (not adding) a heat pump?", desc: null },
    { id: "house", title: "Is your property a house or bungalow?", desc: "Flats can be harder but possible" },
    { id: "epc", title: "Do you have an EPC certificate?", desc: null },
    { id: "epc-rating", title: "Is your EPC rated D or higher?", desc: "Some homes need insulation first" },
    { id: "space", title: "Do you have outdoor space for the unit?", desc: null },
    { id: "mcs", title: "Will you use an MCS-certified installer?", desc: "This is mandatory" },
    { id: "first-grant", title: "Is this your first heat pump grant?", desc: null },
  ]

  return (
    <>
      <Head>
        <title>£7,500 Heat Pump Grant – Simple Step-by-Step Guide (UK) | Get Heat Pump Quotes</title>
        <meta name="description" content="Complete step-by-step guide to applying for the UK £7,500 heat pump grant (Boiler Upgrade Scheme). Eligibility checklist, documents needed, timeline, common mistakes to avoid, and template emails included." />
        <meta name="keywords" content="heat pump grant, £7500 grant, Boiler Upgrade Scheme, BUS grant, heat pump eligibility, MCS installer, heat pump application, UK heat pump grant" />
      </Head>
      <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
        {/* Header */}
        <Navbar activePage="resources" />

        {/* Hero Section - Apple Style */}
        <section className="relative pt-32 pb-24 md:pb-32 overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f7] via-white to-[#fbfbfd]" />
          
          {/* Floating orbs */}
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#34c759]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0071e3]/5 rounded-full blur-3xl" />
          
          <div className="relative max-w-5xl mx-auto px-6">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#34c759]/10 rounded-full">
                <div className="w-2 h-2 bg-[#34c759] rounded-full animate-pulse" />
                <span className="text-[13px] font-medium text-[#34c759] uppercase tracking-wider">Complete Guide</span>
              </div>
            </div>
            
            {/* Main heading */}
            <h1 className="text-center text-[44px] sm:text-[56px] md:text-[72px] lg:text-[80px] font-semibold tracking-tight leading-[1.05] mb-6">
              <span className="bg-gradient-to-r from-[#1d1d1f] via-[#1d1d1f] to-[#6e6e73] bg-clip-text text-transparent">
                £7,500 Heat Pump Grant
              </span>
              <br />
              <span className="text-[#34c759]">Step-by-Step Guide</span>
            </h1>
            
            <p className="text-center text-[19px] md:text-[21px] text-[#6e6e73] leading-relaxed max-w-2xl mx-auto mb-10">
              Everything you need to apply for the UK government's Boiler Upgrade Scheme. Simple, clear, and complete.
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-[14px] text-[#86868b]">
              <span>June 15, 2025</span>
              <span className="w-1 h-1 bg-[#86868b] rounded-full" />
              <span>10 min read</span>
              <span className="w-1 h-1 bg-[#86868b] rounded-full" />
              <span className="text-[#34c759] font-medium">Updated January 2026</span>
            </div>

            {/* Quick summary cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-16">
              {[
                { icon: "✓", label: "Eligibility", color: "#34c759" },
                { icon: "📄", label: "Documents", color: "#0071e3" },
                { icon: "🚀", label: "Process", color: "#ff9500" },
                { icon: "⚠️", label: "Mistakes", color: "#ff3b30" },
                { icon: "✉️", label: "Templates", color: "#5856d6" },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="bg-white/60 backdrop-blur-xl rounded-2xl p-4 text-center border border-white/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-[13px] font-medium text-[#6e6e73]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-xl border-b border-[#d2d2d7]/50">
          <div className="max-w-5xl mx-auto px-6">
            <nav className="flex items-center gap-1 py-3 overflow-x-auto scrollbar-hide">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-[14px] font-medium whitespace-nowrap transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-[#1d1d1f] text-white"
                      : "text-[#6e6e73] hover:bg-[#f5f5f7]"
                  }`}
                >
                  <span className="text-xs">{section.icon}</span>
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <article className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6">

            {/* Section 1: Eligibility */}
            <section id="eligibility" data-section="eligibility" className="mb-24 animate-on-scroll opacity-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#34c759] to-[#30d158] flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-[#34c759]/20">
                  1
                </div>
                <div>
                  <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight">Eligibility Checklist</h2>
                  <p className="text-[#6e6e73]">Check if you qualify for the £7,500 grant</p>
                </div>
              </div>

              <div className="space-y-3">
                {eligibilityItems.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={`group relative bg-white rounded-2xl p-5 cursor-pointer transition-all duration-300 border-2 ${
                      checkedItems[item.id] 
                        ? "border-[#34c759] bg-[#34c759]/5" 
                        : "border-transparent hover:border-[#d2d2d7] shadow-sm hover:shadow-md"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                        checkedItems[item.id]
                          ? "bg-[#34c759] text-white"
                          : "bg-[#f5f5f7] group-hover:bg-[#e8e8ed]"
                      }`}>
                        {checkedItems[item.id] && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[17px] font-medium text-[#1d1d1f]">{item.title}</h4>
                        {item.desc && <p className="text-[15px] text-[#6e6e73] mt-1">{item.desc}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Result indicator */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#34c759]/10 to-[#30d158]/5 border border-[#34c759]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#34c759] flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[17px] font-semibold text-[#1d1d1f]">Mostly yes? You likely qualify!</p>
                    <p className="text-[15px] text-[#6e6e73]">Get matched with MCS installers who handle grants</p>
                  </div>
                </div>
                <Link href="/quiz" className="mt-4 inline-flex items-center gap-2 text-[#34c759] font-medium text-[15px] hover:gap-3 transition-all">
                  Check eligibility now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Pro tip */}
              <div className="mt-6 p-5 rounded-2xl bg-[#fef3cd] border border-[#ffc107]/30">
                <div className="flex items-start gap-3">
                  <span className="text-xl">💡</span>
                  <div>
                    <p className="text-[15px] text-[#856404] font-medium">No EPC certificate?</p>
                    <p className="text-[14px] text-[#856404]/80 mt-1">Get one first (£60-120). You cannot apply without it.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Documents */}
            <section id="documents" data-section="documents" className="mb-24 animate-on-scroll opacity-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0071e3] to-[#0077ed] flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-[#0071e3]/20">
                  2
                </div>
                <div>
                  <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight">Documents Needed</h2>
                  <p className="text-[#6e6e73]">Digital copies work fine</p>
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  { icon: "📋", title: "EPC Certificate", desc: "Energy Performance Certificate" },
                  { icon: "🏠", title: "Proof of ownership", desc: "Land Registry or mortgage statement" },
                  { icon: "🔥", title: "Boiler details", desc: "Gas, oil, or LPG system info" },
                  { icon: "📸", title: "Photos", desc: "Current boiler & outdoor space" },
                  { icon: "📍", title: "Address & postcode", desc: "Your full property address" },
                  { icon: "💰", title: "Installer quote", desc: "They'll help prepare this" },
                  { icon: "🪪", title: "ID", desc: "Sometimes requested" },
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#f5f5f7] hover:border-[#0071e3]/30 hover:shadow-sm transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-xl">
                      {doc.icon}
                    </div>
                    <div>
                      <h4 className="text-[16px] font-semibold text-[#1d1d1f]">{doc.title}</h4>
                      <p className="text-[14px] text-[#6e6e73]">{doc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Process */}
            <section id="process" data-section="process" className="mb-24 animate-on-scroll opacity-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff9500] to-[#ff9f0a] flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-[#ff9500]/20">
                  3
                </div>
                <div>
                  <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight">The Process</h2>
                  <p className="text-[#6e6e73]">7 simple steps to your heat pump</p>
                </div>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[#0071e3] via-[#0071e3] to-[#34c759]" />
                
                <div className="space-y-8">
                  {[
                    { step: 1, title: "Find MCS-Certified Installers", desc: "Get quotes from 2-3 installers. All must be MCS-certified.", color: "#0071e3" },
                    { step: 2, title: "Get Your Quotes", desc: "Installers visit, assess needs, and provide quotes with grant included.", color: "#0071e3" },
                    { step: 3, title: "Choose Your Installer", desc: "Compare quotes, check reviews, pick the one you trust.", color: "#0071e3" },
                    { step: 4, title: "Installer Applies for Grant", desc: "They submit to Ofgem on your behalf. You just provide documents.", color: "#0071e3" },
                    { step: 5, title: "Ofgem Approves", desc: "Takes 1-3 weeks. You'll receive confirmation.", color: "#0071e3" },
                    { step: 6, title: "Installation", desc: "Your heat pump is installed in 1-3 days.", color: "#0071e3" },
                    { step: 7, title: "Grant Applied", desc: "£7,500 deducted automatically. You never pay it upfront.", color: "#34c759" },
                  ].map((item, i) => (
                    <div key={i} className="relative flex gap-6 pl-3">
                      <div 
                        className="relative z-10 w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.step}
                      </div>
                      <div className="flex-1 pb-2">
                        <h4 className="text-[18px] font-semibold text-[#1d1d1f] mb-1">{item.title}</h4>
                        <p className="text-[15px] text-[#6e6e73] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 4: Timeline */}
            <section id="timeline" data-section="timeline" className="mb-24 animate-on-scroll opacity-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5856d6] to-[#5e5ce6] flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-[#5856d6]/20">
                  4
                </div>
                <div>
                  <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight">Timeline</h2>
                  <p className="text-[#6e6e73]">How long each stage takes</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden border border-[#f5f5f7] shadow-sm">
                {[
                  { stage: "Finding installers", time: "1–3 days", accent: false },
                  { stage: "Getting quotes", time: "3–7 days", accent: false },
                  { stage: "Choosing installer", time: "1–2 days", accent: false },
                  { stage: "Grant application", time: "1–2 days", accent: false },
                  { stage: "Ofgem review", time: "1–3 weeks", accent: false },
                  { stage: "Installation", time: "1–3 days", accent: false },
                  { stage: "Grant applied", time: "Automatic", accent: true },
                ].map((row, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center justify-between px-6 py-4 ${
                      i !== 6 ? "border-b border-[#f5f5f7]" : ""
                    } ${row.accent ? "bg-[#34c759]/5" : ""}`}
                  >
                    <span className={`text-[16px] ${row.accent ? "font-semibold text-[#1d1d1f]" : "text-[#1d1d1f]"}`}>
                      {row.stage}
                    </span>
                    <span className={`text-[15px] font-medium ${row.accent ? "text-[#34c759]" : "text-[#6e6e73]"}`}>
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-[#0071e3]/5 border border-[#0071e3]/20">
                <div className="flex items-start gap-3">
                  <span className="text-xl">⏱️</span>
                  <div>
                    <p className="text-[15px] text-[#1d1d1f] font-medium">Skip the research</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">Get 3 MCS installer quotes in 90 seconds</p>
                    <Link href="/quiz" className="mt-2 inline-flex items-center gap-1 text-[#0071e3] font-medium text-[14px]">
                      Get quotes now →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Common Mistakes */}
            <section id="mistakes" data-section="mistakes" className="mb-24 animate-on-scroll opacity-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff3b30] to-[#ff453a] flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-[#ff3b30]/20">
                  5
                </div>
                <div>
                  <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight">Common Mistakes</h2>
                  <p className="text-[#6e6e73]">Avoid these rejection reasons</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { mistake: "Installer not MCS certified", fix: "Always verify certification" },
                  { mistake: "Wrong scheme used", fix: "Must be Boiler Upgrade Scheme" },
                  { mistake: "Home already has heat pump", fix: "Only one per property" },
                  { mistake: "EPC missing or too low", fix: "Get EPC first (rated D+)" },
                  { mistake: "Not replacing a boiler", fix: "Must replace existing system" },
                  { mistake: "Incomplete paperwork", fix: "Double-check all documents" },
                  { mistake: "Property not in England/Wales", fix: "Different schemes elsewhere" },
                  { mistake: "Electric heating installed", fix: "Usually not eligible" },
                  { mistake: "Installer applies too late", fix: "Confirm submission" },
                  { mistake: "Grant already claimed", fix: "One grant per home" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#f5f5f7] hover:border-[#ff3b30]/20 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-[#ff3b30]/10 flex items-center justify-center text-[#ff3b30] font-bold text-[13px]">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <span className="text-[15px] text-[#1d1d1f]">{item.mistake}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[14px] text-[#34c759] font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item.fix}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-[#ff9500]/10 border border-[#ff9500]/20">
                <div className="flex items-start gap-3">
                  <span className="text-xl">⚠️</span>
                  <div>
                    <p className="text-[15px] text-[#1d1d1f] font-medium">Avoid all these mistakes</p>
                    <p className="text-[14px] text-[#6e6e73] mt-1">We only list MCS-certified installers who handle grants properly</p>
                    <Link href="/quiz" className="mt-2 inline-flex items-center gap-1 text-[#ff9500] font-medium text-[14px]">
                      Get vetted installers →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Template Email */}
            <section id="template" data-section="template" className="mb-24 animate-on-scroll opacity-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#af52de] to-[#bf5af2] flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-[#af52de]/20">
                  6
                </div>
                <div>
                  <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight">Email Template</h2>
                  <p className="text-[#6e6e73]">Copy and send to installers</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#af52de]/20 to-[#0071e3]/20 rounded-3xl blur-xl opacity-50" />
                <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-[#f5f5f7] shadow-sm">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#f5f5f7]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#6e6e73]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-[15px] font-medium text-[#1d1d1f]">New Message</span>
                    </div>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(`Hello,

I'm looking for a quote for an air source heat pump and the £7,500 Boiler Upgrade Scheme.

Please confirm:
• Your MCS certification
• Full quote with grant included
• That you handle the grant application
• Estimated timeline
• Recent customer references

Thank you,
[Your Name]`)
                        alert('Email copied to clipboard!')
                      }}
                      className="px-4 py-2 bg-[#0071e3] text-white text-[14px] font-medium rounded-lg hover:bg-[#0077ed] transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                  
                  <div className="font-mono text-[14px] text-[#1d1d1f] leading-relaxed space-y-4">
                    <p>Hello,</p>
                    <p>I'm looking for a quote for an air source heat pump and the £7,500 Boiler Upgrade Scheme.</p>
                    <p>Please confirm:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Your MCS certification</li>
                      <li>• Full quote with grant included</li>
                      <li>• That you handle the grant application</li>
                      <li>• Estimated timeline</li>
                      <li>• Recent customer references</li>
                    </ul>
                    <p>Thank you,<br /><span className="text-[#6e6e73]">[Your Name]</span></p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Follow-up Checklist */}
            <section id="checklist" data-section="checklist" className="mb-24 animate-on-scroll opacity-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00c7be] to-[#30d158] flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-[#00c7be]/20">
                  7
                </div>
                <div>
                  <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight">Follow-up Checklist</h2>
                  <p className="text-[#6e6e73]">Track your progress</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "After Quote", items: ["Grant included", "Clear breakdown", "No hidden costs"], color: "#0071e3" },
                  { title: "After Application", items: ["Submission confirmed", "Reference number received"], color: "#5856d6" },
                  { title: "After Approval", items: ["Installation date set", "Final price confirmed"], color: "#ff9500" },
                  { title: "After Installation", items: ["System tested", "MCS certificate received", "£7,500 deducted"], color: "#34c759" },
                ].map((group, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 border border-[#f5f5f7]">
                    <h4 className="text-[16px] font-semibold text-[#1d1d1f] mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: group.color }} />
                      {group.title}
                    </h4>
                    <div className="space-y-3">
                      {group.items.map((item, j) => (
                        <label key={j} className="flex items-center gap-3 cursor-pointer group">
                          <div className="w-5 h-5 rounded-md border-2 border-[#d2d2d7] group-hover:border-[#0071e3] flex items-center justify-center transition-colors">
                            <input type="checkbox" className="sr-only peer" />
                          </div>
                          <span className="text-[15px] text-[#6e6e73]">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Final Tip */}
            <div className="mb-16 animate-on-scroll opacity-0">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#34c759] to-[#30d158]" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
                <div className="relative p-8 md:p-12 text-center text-white">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                    <span className="text-3xl">💡</span>
                  </div>
                  <h3 className="text-[28px] md:text-[32px] font-semibold mb-4">Remember</h3>
                  <p className="text-[20px] md:text-[24px] leading-relaxed text-white/90 max-w-xl mx-auto">
                    You never pay the grant upfront.
                    <br />
                    <span className="font-semibold text-white">The £7,500 is taken off your bill automatically.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section - Apple Style */}
            <div className="animate-on-scroll opacity-0">
              <div className="relative">
                {/* Ambient background glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0071e3]/10 via-[#34c759]/10 to-[#0071e3]/10 rounded-[40px] blur-2xl opacity-60" />
                
                <div className="relative bg-white rounded-[32px] border border-[#e5e5e5] shadow-2xl shadow-black/5 overflow-hidden">
                  {/* Top section */}
                  <div className="px-8 md:px-16 pt-12 md:pt-16 pb-10 text-center">
                    <p className="text-[#0071e3] font-medium text-[15px] mb-4 tracking-wide">Take the next step</p>
                    <h3 className="text-[36px] md:text-[48px] lg:text-[56px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.1] mb-5">
                      Get your free quotes
                    </h3>
                    <p className="text-[19px] md:text-[21px] text-[#6e6e73] max-w-lg mx-auto leading-relaxed">
                      Connect with MCS-certified installers who handle everything, including your £7,500 grant.
                    </p>
                  </div>

                  {/* Features strip */}
                  <div className="border-t border-b border-[#f5f5f7] bg-[#fbfbfd]">
                    <div className="max-w-3xl mx-auto px-6 py-6">
                      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                        {[
                          { icon: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          ), label: "MCS certified" },
                          { icon: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ), label: "Grant included" },
                          { icon: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          ), label: "90 seconds" },
                          { icon: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          ), label: "No obligation" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-[#1d1d1f]">
                            <div className="text-[#34c759]">{item.icon}</div>
                            <span className="text-[15px] font-medium">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA area */}
                  <div className="px-8 md:px-16 py-10 md:py-12 text-center bg-gradient-to-b from-white to-[#f5f5f7]/50">
                    <Link href="/quiz">
                      <button className="group relative inline-flex items-center justify-center">
                        {/* Button glow */}
                        <div className="absolute inset-0 bg-[#0071e3] rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                        
                        <div className="relative flex items-center gap-3 px-10 md:px-14 py-5 md:py-6 bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full font-semibold text-[17px] md:text-[19px] transition-all duration-300 group-hover:scale-[1.02] group-active:scale-[0.98]">
                          Check Your Eligibility
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </Link>
                    
                    <p className="mt-6 text-[14px] text-[#86868b]">
                      Free to use · No spam · Compare up to 3 quotes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-20 px-6 bg-[#f5f5f7]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-4 tracking-tight text-center">
              Continue Reading
            </h2>
            <p className="text-[17px] text-[#6e6e73] text-center mb-12">More helpful guides</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { href: "/blog/air-source-heat-pump-cost-uk", img: "/energy-efficiency-comparison-chart.jpg", title: "Heat Pump Cost UK (2026)", desc: "Complete cost breakdown" },
                { href: "/blog/heat-pump-grant-guide", img: "/modern-heat-pump-installation.jpg", title: "Grant Explained", desc: "Everything about BUS" },
                { href: "/blog/are-heat-pumps-worth-it", img: "/heat-pump-in-winter-snow.jpg", title: "Are They Worth It?", desc: "Honest analysis" },
              ].map((article, i) => (
                <Link key={i} href={article.href}>
                  <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={article.img} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#0071e3] transition-colors">{article.title}</h3>
                      <p className="text-[14px] text-[#6e6e73]">{article.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  )
}
