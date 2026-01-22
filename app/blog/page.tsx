"use client"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"

const guides = [
  {
    id: "heat-pump-grant-application-guide",
    title: "£7,500 Heat Pump Grant – Simple Step-by-Step Guide (UK)",
    excerpt: "Complete step-by-step guide to applying for the UK £7,500 heat pump grant. Eligibility checklist, documents needed, timeline, and template emails included.",
    image: "/modern-heat-pump-installation.jpg",
    date: "June 15, 2025",
    category: "Guides",
  },
  {
    id: "heat-pump-quotes-manchester",
    title: "Heat Pump Quotes Manchester: Real Costs 2026 | £2,500-£6,500",
    excerpt: "Real Manchester heat pump quotes: £8K-£14K before grant, £2.5K-£6.5K after. See what's included, typical extras, and how quotes are presented locally.",
    image: "/micheile-henderson-ZVprbBmT8QA-unsplash.jpg",
    date: "January 22, 2026",
    category: "Manchester",
    path: "/heat-pump-quotes-manchester",
  },
  {
    id: "air-source-heat-pump-disadvantages-uk",
    title: "Air Source Heat Pump Disadvantages (UK) – Honest 2026 Guide",
    excerpt: "Worried about the disadvantages of air source heat pumps in the UK? We explain the real problems – costs, noise, radiators, bills, space and installers – in simple language.",
    image: "/julian-hochgesang-mk9kC-klh5o-unsplash.jpg",
    date: "January 15, 2026",
    category: "Guides",
  },
  {
    id: "ground-source-heat-pump-cost-uk",
    title: "Ground Source Heat Pump Cost in the UK (2026 Guide)",
    excerpt: "Simple 2026 guide to ground source heat pump costs. See real price ranges, borehole vs trench costs, running costs, and how the £7,500 grant works.",
    image: "/ticka-kao-1KNFO2dpoiM-unsplash.jpg",
    date: "January 8, 2026",
    category: "Guides",
  },
  {
    id: "air-source-heat-pump-cost-uk",
    title: "Air Source Heat Pump Cost in the UK (2026 Guide)",
    excerpt: "Complete breakdown of Air Source Heat Pump costs. Learn the real prices, hidden costs, and how to save thousands with the £7,500 grant.",
    image: "/thisisengineering-vEoMKBdUIzs-unsplash.jpg",
    date: "January 3, 2026",
    category: "Guides",
  },
  {
    id: "are-heat-pumps-worth-it",
    title: "Are Air Source Heat Pumps Worth It? The Honest Answer for UK Homes",
    excerpt: "Get the straight answer about whether Air Source Heat Pumps are worth it. Real costs, genuine savings, and who they're perfect for.",
    image: "/fotos-k72xVjAmVHE-unsplash.jpg",
    date: "August 23, 2025",
    category: "Guides",
  },
  {
    id: "how-heat-pumps-work",
    title: "How Do Air Source Heat Pumps Work? The Simple Guide",
    excerpt: "Understand how Air Source Heat Pumps work in plain English. Learn the simple steps from taking heat from outside air to warming your home efficiently.",
    image: "/emmanuel-ikwuegbu-_2AlIm-F6pw-unsplash.jpg",
    date: "May 7, 2025",
    category: "Guides",
  },
  {
    id: "heat-pump-grant-guide",
    title: "Everything You Need to Know About the £7,500 Air Source Heat Pump Grant",
    excerpt: "The UK government is giving away up to £7,500 to help you get a Air Source Heat Pump. Learn who qualifies, how to apply, and how much you could save.",
    image: "/modern-heat-pump-installation.jpg",
    date: "February 19, 2025",
    category: "Guides",
  },
]

const installerLocations = [
  { name: "London", path: "/installers/london", description: "Find vetted Air Source Heat Pump installers across all London areas" },
  { name: "Manchester", path: "/installers/manchester", description: "Compare MCS-certified installers serving Greater Manchester" },
]

const cities = [
  { name: "South London", path: "/installers/london/south-london", description: "Air source heat pump installers in South London" },
  { name: "North London", path: "/installers/london/north-london", description: "Air source heat pump installers in North London" },
  { name: "East London", path: "/installers/london/east-london", description: "Air source heat pump installers in East London" },
  { name: "West London", path: "/installers/london/west-london", description: "Air source heat pump installers in West London" },
  { name: "South East London", path: "/installers/london/south-east-london", description: "Air source heat pump installers in South East London" },
  { name: "South West London", path: "/installers/london/south-west-london", description: "Air source heat pump installers in South West London" },
]

type TabType = "guides" | "blogs" | "installers" | "cities"

export default function ResourceHubPage() {
  const [activeTab, setActiveTab] = useState<TabType>("guides")

  // Intersection Observer for scroll animations
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
        <title>Air Source Heat Pump Resources | Guides, Blogs & Local Installers</title>
        <meta name="description" content="Everything you need to know about Air Source Heat Pumps. Browse expert guides, read our blog, find local installers, or explore installers in your city." />
        <meta name="keywords" content="Air Source Heat Pump guides, Air Source Heat Pump blog, Air Source Heat Pump installers, local heat pump installers, heat pump resources" />
      </Head>
      <div className="min-h-screen bg-white text-[#1d1d1f]">
      {/* Header */}
      <Navbar activePage="resources" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-linear-to-br from-[#f5f5f7] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <h1 className="text-[48px] md:text-[72px] font-semibold text-[#1d1d1f] mb-6 tracking-tight leading-[1.1] text-balance">
              Air Source Heat Pump Resources
            </h1>
            <p className="text-[19px] md:text-[21px] text-[#6e6e73] leading-[1.4] max-w-2xl mx-auto">
              Expert guides, installation tips, local installers, and everything you need to know about Air Source Heat Pumps
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <button
              onClick={() => setActiveTab("guides")}
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-[15px] sm:text-[16px] transition-all duration-300 ${
                activeTab === "guides"
                  ? "bg-[#0071e3] text-white shadow-lg"
                  : "bg-white text-[#1d1d1f] border-2 border-gray-200 hover:border-[#0071e3]"
              }`}
            >
              📚 Guides
            </button>
            <button
              onClick={() => setActiveTab("blogs")}
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-[15px] sm:text-[16px] transition-all duration-300 ${
                activeTab === "blogs"
                  ? "bg-[#0071e3] text-white shadow-lg"
                  : "bg-white text-[#1d1d1f] border-2 border-gray-200 hover:border-[#0071e3]"
              }`}
            >
              📰 Blog
            </button>
            <button
              onClick={() => setActiveTab("installers")}
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-[15px] sm:text-[16px] transition-all duration-300 ${
                activeTab === "installers"
                  ? "bg-[#0071e3] text-white shadow-lg"
                  : "bg-white text-[#1d1d1f] border-2 border-gray-200 hover:border-[#0071e3]"
              }`}
            >
              🔧 Installers
            </button>
            <button
              onClick={() => setActiveTab("cities")}
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-[15px] sm:text-[16px] transition-all duration-300 ${
                activeTab === "cities"
                  ? "bg-[#0071e3] text-white shadow-lg"
                  : "bg-white text-[#1d1d1f] border-2 border-gray-200 hover:border-[#0071e3]"
              }`}
            >
              🏙️ Cities
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Guides Tab */}
          {activeTab === "guides" && (
            <div className="opacity-0 animate-fade-in-up">
              <h2 className="text-[32px] md:text-[44px] font-semibold text-[#1d1d1f] mb-12 tracking-tight">
                📚 Expert Guides
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guides.map((post, index) => (
                  <Link href={post.path || `/blog/${post.id}`} key={post.id}>
                    <div className="overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer bg-white border border-gray-100 shadow-sm opacity-0 animate-fade-in-up-scroll h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={post.image || "/placeholder.svg"} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                        />
                      </div>
                      <div className="p-6 bg-white">
                        <p className="text-[13px] font-medium text-[#0071e3] mb-3 uppercase tracking-wide">{post.date}</p>
                        <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3 leading-tight text-balance">{post.title}</h3>
                        <p className="text-[15px] text-[#6e6e73] leading-normal mb-4">{post.excerpt}</p>
                        <div className="flex items-center text-[#0071e3] font-medium text-[15px] group">
                          Read guide
                          <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Blogs Tab */}
          {activeTab === "blogs" && (
            <div className="opacity-0 animate-fade-in-up">
              <div className="text-center py-24">
                <div className="mb-6">
                  <svg className="w-16 h-16 mx-auto text-[#d2d2d7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0013.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12a3.375 3.375 0 110-6.75M9.75 21H7.5a3.375 3.375 0 01-3.375-3.375V9.75" />
                  </svg>
                </div>
                <h3 className="text-[32px] font-semibold text-[#1d1d1f] mb-3">Blog Coming Soon</h3>
                <p className="text-[17px] text-[#6e6e73] max-w-md mx-auto mb-8">
                  We're working on fresh, expert blog content about Air Source Heat Pumps. Check back soon for in-depth articles and industry insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/blog/heat-pump-installation-cost-uk" className="inline-block">
                    <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                      Read Our Guides Instead →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Installers Tab */}
          {activeTab === "installers" && (
            <div className="opacity-0 animate-fade-in-up">
              <h2 className="text-[32px] md:text-[44px] font-semibold text-[#1d1d1f] mb-12 tracking-tight">
                🔧 Air Source Heat Pump Installers
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {installerLocations.map((location, index) => (
                  <Link href={location.path} key={location.name}>
                    <div className="overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer bg-white border-2 border-[#0071e3]/20 opacity-0 animate-fade-in-up-scroll h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="p-8 h-full flex flex-col justify-between">
                        <div>
                          <div className="w-14 h-14 bg-[#0071e3]/10 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-7 h-7 text-[#0071e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-3">{location.name}</h3>
                          <p className="text-[15px] text-[#6e6e73] leading-normal mb-6">{location.description}</p>
                        </div>
                        <div className="flex items-center text-[#0071e3] font-medium text-[15px] group">
                          Find installers
                          <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Cities Tab */}
          {activeTab === "cities" && (
            <div className="opacity-0 animate-fade-in-up">
              <h2 className="text-[32px] md:text-[44px] font-semibold text-[#1d1d1f] mb-12 tracking-tight">
                🏙️ Local City Installers
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map((city, index) => (
                  <Link href={city.path} key={city.name}>
                    <div className="overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer bg-white border-2 border-[#34c759]/20 opacity-0 animate-fade-in-up-scroll h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="p-8 h-full flex flex-col justify-between">
                        <div>
                          <div className="w-14 h-14 bg-[#34c759]/10 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-7 h-7 text-[#34c759]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-3">{city.name}</h3>
                          <p className="text-[15px] text-[#6e6e73] leading-normal mb-6">{city.description}</p>
                        </div>
                        <div className="flex items-center text-[#34c759] font-medium text-[15px] group">
                          View installers
                          <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-br from-[#0071e3] to-[#0056b3] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-[40px] md:text-[56px] font-semibold mb-6 tracking-tight leading-[1.1] text-balance opacity-0 animate-fade-in-up-scroll">
            Ready to get your Air Source Heat Pump quotes?
          </h2>
          <p className="text-[19px] md:text-[24px] mb-12 leading-[1.3] opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
            Answer 10 quick questions and get free quotes from vetted installers
          </p>
          
          <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
            <Link href="/quiz">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-[#0071e3] px-12 py-6 text-[19px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-xl"
              >
                Get Free Quotes →
              </Button>
            </Link>
          </div>

          <p className="text-[15px] text-white/70 mt-8">No obligation • 100% free • Takes 2 minutes</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
    </>
  )
}
