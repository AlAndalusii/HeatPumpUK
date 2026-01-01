"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"

const blogPosts = [
  {
    id: "heat-pump-installation-cost-uk",
    title: "Heat Pump Installation Cost UK: What You'll Actually Pay in 2025",
    excerpt:
      "Complete breakdown of heat pump installation costs. Learn the real prices, hidden costs, and how to save thousands with the £7,500 grant.",
    image: "/modern-heat-pump-installation.jpg",
    date: "January 1, 2026",
  },
  {
    id: "are-heat-pumps-worth-it",
    title: "Are Heat Pumps Worth It? The Honest Answer for UK Homes",
    excerpt:
      "Get the straight answer about whether heat pumps are worth it. Real costs, genuine savings, and who they're perfect for.",
    image: "/modern-heat-pump-installation.jpg",
    date: "January 1, 2026",
  },
  {
    id: "how-heat-pumps-work",
    title: "How Do Heat Pumps Work? The Simple Guide",
    excerpt:
      "Understand how heat pumps work in plain English. Learn the simple steps from taking heat from outside air to warming your home efficiently.",
    image: "/modern-heat-pump-installation.jpg",
    date: "March 18, 2025",
  },
  {
    id: "heat-pump-grant-guide",
    title: "Everything You Need to Know About the £7,500 Heat Pump Grant",
    excerpt:
      "The UK government is giving away up to £7,500 to help you get a heat pump. Learn who qualifies, how to apply, and how much you could save.",
    image: "/modern-heat-pump-installation.jpg",
    date: "March 15, 2025",
  },
]

export default function BlogPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
        <title>Heat Pump Blog | Expert Guides & Tips | Heat Pump Resource</title>
        <meta name="description" content="Expert heat pump guides, tips, and news. Learn about heat pump grants, installation, efficiency, and costs. Read our comprehensive guides on heat pump tumble dryers and government incentives." />
        <meta name="keywords" content="heat pump blog, heat pump guides, heat pump tips, heat pump news, heat pump grants, heat pump installation guides, energy efficiency tips" />
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

      {/* Blog Header */}
      <section className="pt-32 pb-16 px-6 bg-linear-to-br from-[#f5f5f7] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[48px] md:text-[72px] font-semibold text-[#1d1d1f] mb-6 tracking-tight leading-[1.1] text-balance opacity-0 animate-fade-in-up">
            Heat Pump Insights
          </h1>
          <p className="text-[19px] md:text-[21px] text-[#6e6e73] leading-[1.4] opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Expert guides, tips, and news about heat pumps and home energy efficiency
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <Card className="overflow-hidden border-0 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer bg-white opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.image || "/placeholder.svg"} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[13px] font-medium text-[#0071e3] mb-3 uppercase tracking-wide">{post.date}</p>
                    <h2 className="text-[22px] font-semibold text-[#1d1d1f] mb-3 leading-tight text-balance">{post.title}</h2>
                    <p className="text-[15px] text-[#6e6e73] leading-normal mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-[#0071e3] font-medium text-[15px] group">
                      Read more
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-br from-[#0071e3] to-[#0056b3] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-[40px] md:text-[56px] font-semibold mb-6 tracking-tight leading-[1.1] text-balance opacity-0 animate-fade-in-up-scroll">
            Ready to get your heat pump quotes?
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
