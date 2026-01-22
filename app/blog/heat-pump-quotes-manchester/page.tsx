"use client"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Head from "next/head"

export default function HeatPumpQuotesManchesterPage() {
  // Schema markup for the page
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Air Source Heat Pump Installation Manchester",
    "description": "Professional heat pump installation in Greater Manchester",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "lowPrice": "2500",
      "highPrice": "6500",
      "offerCount": "50",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "GBP",
        "price": "8000-14000",
        "valueAddedTaxIncluded": "true"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Manchester",
      "containedInPlace": {
        "@type": "Country",
        "name": "United Kingdom"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  }

  return (
    <>
      <Head>
        <title>Heat Pump Quotes Manchester: Real Costs 2026 | £2,500-£6,500</title>
        <meta name="description" content="Real Manchester heat pump quotes: £8K-£14K before grant, £2.5K-£6.5K after. See what's included, typical extras, and how quotes are presented locally." />
        <meta name="keywords" content="heat pump quotes Manchester, heat pump cost Manchester, air source heat pump Manchester, heat pump installation Manchester, heat pump prices Manchester 2026" />
        <link rel="canonical" href="https://getheatpumpquotes.co.uk/blog/heat-pump-quotes-manchester" />
      </Head>
      <div className="min-h-screen bg-white text-[#1d1d1f]">
        {/* Header */}
        <Navbar activePage="resources" />

        {/* Hero Section */}
        <section className="pt-32 pb-12 px-6 bg-linear-to-br from-[#0071e3] to-[#00a2ff]">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-[13px] font-medium text-white uppercase tracking-wide">Manchester Quotes</span>
            </div>
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-white mb-6 tracking-tight leading-[1.1]">
              Heat Pump Quotes Manchester: What You'll Actually Pay in 2026
            </h1>
            <div className="flex items-center gap-4 text-white/80">
              <span className="text-[15px]">Last updated: January 2026</span>
              <span>•</span>
              <span className="text-[15px]">15 min read</span>
            </div>
          </div>
        </section>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />

        {/* Article Content */}
        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg mb-12">
              <p className="text-[19px] md:text-[21px] text-[#1d1d1f] leading-[1.6] mb-6">
                If you're getting heat pump quotes in Manchester, here's exactly what installers will charge and what's included.
              </p>
              <p className="text-[19px] md:text-[21px] text-[#1d1d1f] leading-[1.6] mb-6">
                No confusing jargon. Just real numbers from real Manchester quotes.
              </p>
            </div>

            {/* Top CTA */}
            <div className="bg-linear-to-br from-[#0071e3] to-[#00a2ff] rounded-2xl p-8 text-center mb-16">
              <h3 className="text-[24px] font-semibold text-white mb-4">Ready to get your Manchester quotes?</h3>
              <p className="text-[17px] text-white/90 mb-6">Check your grant eligibility and compare prices from vetted installers.</p>
              <Link href="/quiz">
                <Button className="bg-white hover:bg-gray-100 text-[#0071e3] px-8 py-3 text-[18px] rounded-full font-semibold transition-all duration-300 hover:scale-[1.03]">
                  Get 3 Free Manchester Quotes – 90 Seconds
                </Button>
              </Link>
            </div>

            {/* The Short Answer */}
            <div className="mb-16">
              <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
                The Short Answer
              </h2>

              <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <span className="text-[17px] text-[#1d1d1f]">Total cost before grant</span>
                    <span className="text-[24px] font-bold text-[#1d1d1f]">£8,000 - £14,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[17px] text-[#1d1d1f]">After £7,500 government grant</span>
                    <span className="text-[24px] font-bold text-[#34c759]">£2,500 - £6,500</span>
                  </div>
                </div>
              </div>

              <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                That's what most Manchester homeowners pay for a complete air source heat pump system in 2026.
              </p>
            </div>

            {/* What's Included */}
            <div className="mb-16">
              <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
                What's Included in Every Quote
              </h2>

              <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
                When you get a quote from a Manchester installer, here's what should be on the breakdown:
              </p>

              {/* The Main Equipment */}
              <div className="border border-gray-200 rounded-xl p-6 mb-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-4">The Main Equipment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Heat pump outdoor unit (the box that goes outside)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">All mounting brackets and stands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Control panel (the thermostat bit)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Valves and filters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Warranty paperwork</span>
                  </li>
                </ul>
              </div>

              {/* Hot Water Tank */}
              <div className="border border-gray-200 rounded-xl p-6 mb-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-4">Hot Water Tank</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">200-300 litre cylinder (most homes need this)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Safety valves</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Insulation jacket</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">All connections</span>
                  </li>
                </ul>
              </div>

              {/* Installation Work */}
              <div className="border border-gray-200 rounded-xl p-6 mb-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-4">Installation Work</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Full design and heat calculations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Checking your radiators are big enough</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Installing the outdoor unit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Connecting everything up</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Electrical work (basic supply)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Testing and setting up the system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Showing you how to use it</span>
                  </li>
                </ul>
              </div>

              {/* Finishing Touches */}
              <div className="border border-gray-200 rounded-xl p-6 mb-6">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-4">Finishing Touches</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">System flush (cleaning the pipes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Chemicals to protect the system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">MCS certificate (you need this for the grant)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Building control notification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[17px] text-[#1d1d1f]">Warranty registration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#34c759]/10 border-l-4 border-[#34c759] rounded-r-xl p-6">
                <p className="text-[17px] text-[#1d1d1f] font-semibold">
                  That's what the £8,000-£14,000 covers.
                </p>
              </div>
            </div>

            {/* What Costs Extra */}
            <div className="mb-16">
              <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
                What Costs Extra (And When)
              </h2>

              <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
                These aren't always included in the base price. Good installers will tell you upfront if you need them:
              </p>

              {/* Bigger Radiators */}
              <div className="border border-gray-200 rounded-xl p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f]">Bigger Radiators</h3>
                  <span className="text-[20px] font-bold text-[#ff9500]">£600-£1,500</span>
                </div>
                <p className="text-[17px] text-[#6e6e73] mb-3"><strong>When you need it:</strong> If your radiators are old or small</p>
                <p className="text-[17px] text-[#6e6e73] mb-3"><strong>Example:</strong> Your living room has a tiny radiator. Heat pumps run cooler than gas boilers, so you might need a bigger one to keep the room warm.</p>
                <div className="bg-[#f5f5f7] rounded-lg p-4">
                  <p className="text-[15px] text-[#1d1d1f]"><strong>Chorlton terraced house:</strong> Added 3 bigger radiators = £900 extra</p>
                </div>
              </div>

              {/* Electrical Upgrades */}
              <div className="border border-gray-200 rounded-xl p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f]">Electrical Upgrades</h3>
                  <span className="text-[20px] font-bold text-[#ff9500]">£300-£800</span>
                </div>
                <p className="text-[17px] text-[#6e6e73] mb-3"><strong>When you need it:</strong> If your fuse box is really old</p>
                <div className="bg-[#f5f5f7] rounded-lg p-4">
                  <p className="text-[15px] text-[#1d1d1f]"><strong>Example:</strong> 1960s house in Didsbury needed new consumer unit = £450 extra</p>
                </div>
              </div>

              {/* Underfloor Heating */}
              <div className="border border-gray-200 rounded-xl p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f]">Underfloor Heating</h3>
                  <span className="text-[20px] font-bold text-[#ff9500]">£4,000-£8,000</span>
                </div>
                <p className="text-[17px] text-[#6e6e73] mb-3"><strong>When you want it:</strong> Works brilliantly with heat pumps but expensive</p>
                <div className="bg-[#f5f5f7] rounded-lg p-4">
                  <p className="text-[15px] text-[#1d1d1f]"><strong>Example:</strong> Salford Quays flat added underfloor heating to kitchen and bathroom = £5,200 extra</p>
                </div>
              </div>

              {/* Major Pipework */}
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f]">Major Pipework</h3>
                  <span className="text-[20px] font-bold text-[#ff9500]">£500-£2,000</span>
                </div>
                <p className="text-[17px] text-[#6e6e73] mb-3"><strong>When you need it:</strong> If the heat pump goes far from the house</p>
                <div className="bg-[#f5f5f7] rounded-lg p-4">
                  <p className="text-[15px] text-[#1d1d1f]"><strong>Example:</strong> Withington semi with heat pump at bottom of garden needed longer pipes = £800 extra</p>
                </div>
              </div>
            </div>

            {/* Ground Source vs Air Source */}
            <div className="mb-16">
              <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
                Ground Source vs Air Source (Manchester Prices)
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border-2 border-[#0071e3] rounded-xl p-6">
                  <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">Air Source (The Common One)</h3>
                  <ul className="space-y-3 text-[15px] text-[#6e6e73]">
                    <li>• £8,000-£14,000 before grant</li>
                    <li>• £2,500-£6,500 after grant</li>
                    <li>• Goes on your wall or in the garden</li>
                    <li>• Works great in Manchester</li>
                  </ul>
                </div>

                <div className="border-2 border-[#34c759] rounded-xl p-6">
                  <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">Ground Source (The Fancy One)</h3>
                  <ul className="space-y-3 text-[15px] text-[#6e6e73]">
                    <li>• £15,000-£25,000 before grant</li>
                    <li>• £7,500-£17,500 after grant</li>
                    <li>• Needs digging in your garden</li>
                    <li>• Better efficiency but way more expensive</li>
                    <li>• Only worth it if you have a big garden</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#0071e3]/10 border-l-4 border-[#0071e3] rounded-r-xl p-6">
                <p className="text-[17px] text-[#1d1d1f] font-semibold">
                  95% of Manchester homes get air source. It's cheaper and works fine.
                </p>
              </div>
            </div>

            {/* How Manchester Installers Present Quotes */}
            <div className="mb-16">
              <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
                How Manchester Installers Present Quotes
              </h2>

              <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-8">
                Here's what happens when you request quotes:
              </p>

              {/* Step 1 */}
              <div className="border border-gray-200 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#0071e3] rounded-full flex items-center justify-center">
                    <span className="text-[18px] font-bold text-white">1</span>
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f]">Quick Chat (Phone or Online)</h3>
                </div>
                <p className="text-[17px] text-[#6e6e73] mb-4">You tell them:</p>
                <ul className="space-y-2 text-[16px] text-[#6e6e73] mb-4">
                  <li>• Where you live (Didsbury, Chorlton, etc)</li>
                  <li>• House type (terraced, semi, detached)</li>
                  <li>• How many bedrooms</li>
                  <li>• What heating you have now</li>
                </ul>
                <div className="bg-[#f5f5f7] rounded-lg p-4">
                  <p className="text-[15px] text-[#1d1d1f]">They give you a <strong>rough price</strong> over the phone. Usually: "For your 3-bed semi in Sale, probably £10,500-£12,000 before grant."</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="border border-gray-200 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#34c759] rounded-full flex items-center justify-center">
                    <span className="text-[18px] font-bold text-white">2</span>
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f]">Home Visit</h3>
                </div>
                <p className="text-[17px] text-[#6e6e73] mb-4">An installer comes round (takes 45-60 minutes). They check:</p>
                <ul className="space-y-2 text-[16px] text-[#6e6e73]">
                  <li>• Size of your house</li>
                  <li>• How well it's insulated</li>
                  <li>• Your radiators</li>
                  <li>• Where the heat pump can go</li>
                  <li>• Your fuse box</li>
                </ul>
                <p className="text-[15px] text-[#86868b] mt-4">They measure everything and take photos.</p>
              </div>

              {/* Step 3 */}
              <div className="border border-gray-200 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff9500] rounded-full flex items-center justify-center">
                    <span className="text-[18px] font-bold text-white">3</span>
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f]">Written Quote (Usually by Email)</h3>
                </div>
                <p className="text-[17px] text-[#6e6e73] mb-4">A few days later, you get a proper quote. <strong>Good quotes show:</strong></p>
                <ul className="space-y-2 text-[16px] text-[#6e6e73] mb-4">
                  <li>• Exact equipment (Mitsubishi Ecodan 8kW, for example)</li>
                  <li>• Everything that's included</li>
                  <li>• Anything extra you might need</li>
                  <li>• Total cost</li>
                  <li>• Cost after £7,500 grant deducted</li>
                  <li>• How long the warranty lasts</li>
                  <li>• When they can install it</li>
                </ul>
              </div>

              <div className="bg-[#f5f5f7] rounded-2xl p-6">
                <h4 className="text-[18px] font-semibold text-[#1d1d1f] mb-4">The grant bit:</h4>
                <p className="text-[17px] text-[#6e6e73] mb-4">Most installers show it like this:</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[16px] text-[#1d1d1f]">Total:</span>
                    <span className="text-[16px] font-medium text-[#1d1d1f]">£11,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[16px] text-[#34c759]">Less government grant:</span>
                    <span className="text-[16px] font-medium text-[#34c759]">-£7,500</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-300 pt-2 mt-2">
                    <span className="text-[17px] font-bold text-[#1d1d1f]">You pay:</span>
                    <span className="text-[17px] font-bold text-[#0071e3]">£3,700</span>
                  </div>
                </div>
                <p className="text-[15px] text-[#86868b] mt-4">You never see the £7,500. The installer handles all that paperwork.</p>
              </div>
            </div>

            {/* Real Manchester Quote Examples */}
            <div className="mb-16">
              <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
                Real Manchester Quote Examples
              </h2>

              {/* Example 1 */}
              <div className="border-2 border-[#0071e3] rounded-xl overflow-hidden mb-8">
                <div className="bg-[#0071e3] px-6 py-4">
                  <h3 className="text-[22px] font-semibold text-white">Example 1: Chorlton Victorian Terrace</h3>
                </div>
                <div className="p-6">
                  <p className="text-[17px] text-[#6e6e73] mb-6"><strong>Property:</strong> 3-bed, 1920s terrace, cavity walls, okay insulation</p>
                  
                  <h4 className="text-[18px] font-semibold text-[#1d1d1f] mb-4">Quote breakdown:</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-[16px] text-[#6e6e73]">Mitsubishi Ecodan 8kW</span>
                      <span className="text-[16px] font-medium text-[#1d1d1f]">£7,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[16px] text-[#6e6e73]">250L hot water cylinder</span>
                      <span className="text-[16px] font-medium text-[#1d1d1f]">£1,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[16px] text-[#6e6e73]">2 bigger radiators</span>
                      <span className="text-[16px] font-medium text-[#1d1d1f]">£700</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[16px] text-[#6e6e73]">Labour and installation</span>
                      <span className="text-[16px] font-medium text-[#1d1d1f]">£1,800</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[16px] text-[#6e6e73]">Design and certification</span>
                      <span className="text-[16px] font-medium text-[#1d1d1f]">£600</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-3">
                      <span className="text-[17px] font-bold text-[#1d1d1f]">Total</span>
                      <span className="text-[17px] font-bold text-[#1d1d1f]">£11,700</span>
                    </div>
                    <div className="flex justify-between bg-[#34c759]/10 rounded-lg p-3">
                      <span className="text-[17px] font-bold text-[#34c759]">After grant</span>
                      <span className="text-[17px] font-bold text-[#34c759]">£4,200</span>
                    </div>
                  </div>
                  <p className="text-[15px] text-[#86868b]"><strong>Installation time:</strong> 3 days</p>
                </div>
              </div>

              {/* Example 2 */}
              <div className="border-2 border-[#34c759] rounded-xl overflow-hidden mb-8">
                <div className="bg-[#34c759] px-6 py-4">
                  <h3 className="text-[22px] font-semibold text-white">Example 2: Sale Semi-Detached</h3>
                </div>
                <div className="p-6">
                  <p className="text-[17px] text-[#6e6e73] mb-6"><strong>Property:</strong> 3-bed, 1980s semi, well insulated, double glazing</p>
                  
                  <h4 className="text-[18px] font-semibold text-[#1d1d1f] mb-4">Quote breakdown:</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-[16px] text-[#6e6e73]">Daikin Altherma 11kW</span>
                      <span className="text-[16px] font-medium text-[#1d1d1f]">£7,800</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[16px] text-[#6e6e73]">200L cylinder</span>
                      <span className="text-[16px] font-medium text-[#1d1d1f]">£1,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[16px] text-[#6e6e73]">All radiators fine (no upgrade needed)</span>
                      <span className="text-[16px] font-medium text-[#1d1d1f]">£0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[16px] text-[#6e6e73]">Labour and installation</span>
                      <span className="text-[16px] font-medium text-[#1d1d1f]">£2,100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[16px] text-[#6e6e73]">Design and certification</span>
                      <span className="text-[16px] font-medium text-[#1d1d1f]">£500</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-3">
                      <span className="text-[17px] font-bold text-[#1d1d1f]">Total</span>
                      <span className="text-[17px] font-bold text-[#1d1d1f]">£11,600</span>
                    </div>
                    <div className="flex justify-between bg-[#34c759]/10 rounded-lg p-3">
                      <span className="text-[17px] font-bold text-[#34c759]">After grant</span>
                      <span className="text-[17px] font-bold text-[#34c759]">£4,100</span>
                    </div>
                  </div>
                  <p className="text-[15px] text-[#86868b]"><strong>Installation time:</strong> 2 days</p>
                </div>
              </div>

              {/* Example 3 */}
              <div className="border-2 border-[#ff9500] rounded-xl overflow-hidden">
                <div className="bg-[#ff9500] px-6 py-4">
                  <h3 className="text-[22px] font-semibold text-white">Example 3: Didsbury Detached (Bigger House)</h3>
                </div>
                <div className="p-6">
                  <p className="text-[17px] text-[#6e6e73] mb-6"><strong>Property:</strong> 4-bed, 2000s detached, great insulation</p>
                  
                  <h4 className="text-[18px] font-semibold text-[#1d1d1f] mb-4">Quote breakdown:</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-[16px] text-[#6e6e73]">Vaillant Arotherm 12kW</span>
                      <span className="text-[16px] font-medium text-[#1d1d1f]">£8,900</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[16px] text-[#6e6e73]">300L cylinder (bigger house)</span>
                      <span className="text-[16px] font-medium text-[#1d1d1f]">£1,600</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[16px] text-[#6e6e73]">Consumer unit upgrade</span>
                      <span className="text-[16px] font-medium text-[#1d1d1f]">£450</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[16px] text-[#6e6e73]">Labour and installation</span>
                      <span className="text-[16px] font-medium text-[#1d1d1f]">£2,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[16px] text-[#6e6e73]">Design and certification</span>
                      <span className="text-[16px] font-medium text-[#1d1d1f]">£650</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-3">
                      <span className="text-[17px] font-bold text-[#1d1d1f]">Total</span>
                      <span className="text-[17px] font-bold text-[#1d1d1f]">£14,000</span>
                    </div>
                    <div className="flex justify-between bg-[#34c759]/10 rounded-lg p-3">
                      <span className="text-[17px] font-bold text-[#34c759]">After grant</span>
                      <span className="text-[17px] font-bold text-[#34c759]">£6,500</span>
                    </div>
                  </div>
                  <p className="text-[15px] text-[#86868b]"><strong>Installation time:</strong> 3 days</p>
                </div>
              </div>
            </div>

            {/* Manchester-Specific Things to Know */}
            <div className="mb-16">
              <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
                Manchester-Specific Things to Know
              </h2>

              {/* Conservation Areas */}
              <div className="mb-8">
                <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-4">Conservation Areas</h3>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
                  Parts of Didsbury, Chorlton, and the city centre are conservation areas.
                </p>
                <div className="bg-[#ff9500]/10 border-l-4 border-[#ff9500] rounded-r-xl p-6 mb-4">
                  <p className="text-[17px] text-[#1d1d1f] font-semibold mb-2">What this means:</p>
                  <ul className="space-y-2 text-[16px] text-[#6e6e73]">
                    <li>• You need planning permission (adds 2-4 weeks)</li>
                    <li>• Might need noise assessment</li>
                    <li>• Have to tell your neighbours</li>
                  </ul>
                </div>
                <p className="text-[17px] text-[#6e6e73]"><strong>Doesn't cost extra, just takes longer.</strong></p>
              </div>

              {/* Terraced Houses */}
              <div className="mb-8">
                <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-4">Terraced Houses</h3>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
                  Loads of terraced houses in Manchester (Rusholme, Fallowfield, Chorlton, Levenshulme).
                </p>
                <p className="text-[17px] text-[#6e6e73] mb-3"><strong>The challenge:</strong> Less outdoor space for the heat pump unit.</p>
                <p className="text-[17px] text-[#6e6e73] mb-3"><strong>The solution:</strong> Most units only need 1 metre squared. Fits down the side of most terraces.</p>
                <div className="bg-[#f5f5f7] rounded-lg p-4">
                  <p className="text-[15px] text-[#1d1d1f]"><strong>Example:</strong> Levenshulme terrace put the unit on the back wall. Worked fine. No extra cost.</p>
                </div>
              </div>

              {/* Noise Rules */}
              <div className="mb-8">
                <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-4">Noise Rules</h3>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">
                  Manchester has rules about heat pump noise.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#f5f5f7] rounded-lg p-4">
                    <p className="text-[15px] text-[#6e6e73] mb-1"><strong>The limit:</strong></p>
                    <p className="text-[17px] text-[#1d1d1f]">42 decibels at your neighbour's window</p>
                  </div>
                  <div className="bg-[#f5f5f7] rounded-lg p-4">
                    <p className="text-[15px] text-[#6e6e73] mb-1"><strong>What that means:</strong></p>
                    <p className="text-[17px] text-[#1d1d1f]">Quieter than a conversation</p>
                  </div>
                </div>
                <p className="text-[17px] text-[#6e6e73] mt-4"><strong>Modern heat pumps:</strong> Usually 38-40 decibels (quieter than the limit)</p>
                <div className="bg-[#34c759]/10 border-l-4 border-[#34c759] rounded-r-xl p-4 mt-4">
                  <p className="text-[16px] text-[#1d1d1f]"><strong>Tip:</strong> Ask your installer to check with neighbours first. Saves hassle later.</p>
                </div>
              </div>
            </div>

            {/* How to Get Good Quotes */}
            <div className="mb-16">
              <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
                How to Get Good Quotes in Manchester
              </h2>

              <div className="space-y-6">
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Get 3 Quotes Minimum</h3>
                  <p className="text-[17px] text-[#6e6e73] mb-3">Prices vary by £2,000-£4,000 between installers.</p>
                  <p className="text-[17px] text-[#1d1d1f] font-semibold">Don't just pick the cheapest. Sometimes cheap means corners cut.</p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Check They're MCS Certified</h3>
                  <p className="text-[17px] text-[#6e6e73] mb-3"><strong>MCS = Microgeneration Certification Scheme</strong></p>
                  <p className="text-[17px] text-[#6e6e73] mb-3"><strong>Why it matters:</strong></p>
                  <ul className="space-y-2 text-[16px] text-[#6e6e73] mb-4">
                    <li>• You can't get the £7,500 grant without it</li>
                    <li>• It's a quality standard</li>
                    <li>• They know what they're doing</li>
                  </ul>
                  <p className="text-[15px] text-[#86868b]"><strong>How to check:</strong> Ask for their MCS certificate number. Look it up on the MCS website.</p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Ask for References</h3>
                  <p className="text-[17px] text-[#6e6e73] mb-3">Good installers have done loads of Manchester installations.</p>
                  <p className="text-[17px] text-[#6e6e73] mb-3"><strong>Ask for 2-3 references you can call.</strong></p>
                  <p className="text-[17px] text-[#1d1d1f]">Better yet: Ask for addresses of nearby installations. Go have a look.</p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">Get It in Writing</h3>
                  <p className="text-[17px] text-[#6e6e73] mb-3">Never accept a verbal quote.</p>
                  <p className="text-[17px] text-[#6e6e73] mb-3"><strong>Everything should be in writing:</strong></p>
                  <ul className="space-y-2 text-[16px] text-[#6e6e73] mb-4">
                    <li>• Exact equipment and model numbers</li>
                    <li>• What's included</li>
                    <li>• What costs extra</li>
                    <li>• Total price after grant</li>
                    <li>• Warranty length</li>
                    <li>• Installation date</li>
                  </ul>
                  <p className="text-[17px] text-[#ff3b30] font-semibold">If they won't put it in writing, walk away.</p>
                </div>
              </div>
            </div>

            {/* Questions Most Manchester People Ask */}
            <div className="mb-16">
              <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
                Questions Most Manchester People Ask
              </h2>

              <div className="space-y-8">
                {/* Question 1 */}
                <div className="border-b border-gray-200 pb-8">
                  <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">"Will it work in a Manchester winter?"</h3>
                  <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-3">Yes. Heat pumps work down to -20°C.</p>
                  <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-3">Manchester rarely gets below -5°C.</p>
                  <div className="bg-[#f5f5f7] rounded-lg p-4">
                    <p className="text-[16px] text-[#1d1d1f]"><strong>Coldest day in Manchester (January 2026):</strong> -3°C. Heat pumps worked fine.</p>
                    <p className="text-[16px] text-[#1d1d1f] mt-2"><strong>Our Didsbury customer's heat pump:</strong> Kept the house at 21°C all through January. No issues.</p>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="border-b border-gray-200 pb-8">
                  <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">"What about my radiators?"</h3>
                  <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-3">Most radiators are fine.</p>
                  <p className="text-[17px] text-[#6e6e73] mb-3"><strong>You might need bigger radiators if:</strong></p>
                  <ul className="space-y-2 text-[16px] text-[#6e6e73] mb-4">
                    <li>• Your house is poorly insulated</li>
                    <li>• Your radiators are really old and small</li>
                    <li>• You have a huge room with a tiny radiator</li>
                  </ul>
                  <p className="text-[17px] text-[#1d1d1f]"><strong>The installer checks this in the home visit.</strong></p>
                  <p className="text-[17px] text-[#6e6e73] mt-2">Most homes need 0-3 radiator upgrades.</p>
                </div>

                {/* Question 3 */}
                <div className="border-b border-gray-200 pb-8">
                  <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">"How long does installation take?"</h3>
                  <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4"><strong>Typical Manchester installation:</strong> 2-3 days</p>
                  <div className="space-y-4">
                    <div className="bg-[#f5f5f7] rounded-lg p-4">
                      <p className="text-[16px] font-semibold text-[#1d1d1f] mb-2">Day 1:</p>
                      <ul className="space-y-1 text-[15px] text-[#6e6e73]">
                        <li>• Remove old boiler</li>
                        <li>• Install outdoor unit</li>
                        <li>• Run pipes through wall</li>
                        <li>• Install hot water cylinder</li>
                      </ul>
                    </div>
                    <div className="bg-[#f5f5f7] rounded-lg p-4">
                      <p className="text-[16px] font-semibold text-[#1d1d1f] mb-2">Day 2:</p>
                      <ul className="space-y-1 text-[15px] text-[#6e6e73]">
                        <li>• Connect radiators</li>
                        <li>• Electrical work</li>
                        <li>• First test</li>
                      </ul>
                    </div>
                    <div className="bg-[#f5f5f7] rounded-lg p-4">
                      <p className="text-[16px] font-semibold text-[#1d1d1f] mb-2">Day 3:</p>
                      <ul className="space-y-1 text-[15px] text-[#6e6e73]">
                        <li>• Final setup</li>
                        <li>• Show you how to use it</li>
                        <li>• Paperwork</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-[17px] text-[#6e6e73] mt-4">You'll be without heating for those 2-3 days. Most installers work fast to minimize this.</p>
                </div>

                {/* Question 4 */}
                <div className="border-b border-gray-200 pb-8">
                  <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">"Can I pay in installments?"</h3>
                  <p className="text-[17px] text-[#1d1d1f] leading-[1.6] mb-4">Many Manchester installers offer payment plans.</p>
                  <p className="text-[17px] text-[#6e6e73] mb-3"><strong>Typical options:</strong></p>
                  <ul className="space-y-2 text-[16px] text-[#6e6e73] mb-4">
                    <li>• 10% deposit when you book</li>
                    <li>• 40% when work starts</li>
                    <li>• 50% when finished</li>
                  </ul>
                  <p className="text-[17px] text-[#6e6e73] mb-3"><strong>Or finance:</strong></p>
                  <ul className="space-y-2 text-[16px] text-[#6e6e73]">
                    <li>• 0% interest over 12 months (some installers)</li>
                    <li>• 4-8% interest over 24-60 months (finance companies)</li>
                  </ul>
                  <p className="text-[17px] text-[#1d1d1f] mt-4 font-semibold">Ask when you get the quote.</p>
                </div>

                {/* Question 5 */}
                <div>
                  <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-4">"What about the £7,500 grant?"</h3>
                  <p className="text-[17px] text-[#6e6e73] mb-3"><strong>Every installer should:</strong></p>
                  <ul className="space-y-2 text-[16px] text-[#6e6e73] mb-4">
                    <li>• Handle all the paperwork</li>
                    <li>• Submit the application to the government</li>
                    <li>• Get approval before starting work</li>
                    <li>• Deduct the £7,500 from your final bill</li>
                  </ul>
                  <p className="text-[17px] text-[#1d1d1f] font-semibold mb-2">You don't apply yourself. The installer does it.</p>
                  <p className="text-[17px] text-[#6e6e73]">It takes 2-4 weeks for approval.</p>
                </div>
              </div>
            </div>

            {/* What to Do Next */}
            <div className="mb-16">
              <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
                What to Do Next
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0071e3] rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[14px] font-bold text-white">1</span>
                  </div>
                  <p className="text-[17px] text-[#1d1d1f]">Get 3 quotes from MCS-certified Manchester installers</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0071e3] rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[14px] font-bold text-white">2</span>
                  </div>
                  <p className="text-[17px] text-[#1d1d1f]">Compare them side by side</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0071e3] rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[14px] font-bold text-white">3</span>
                  </div>
                  <p className="text-[17px] text-[#1d1d1f]">Check references</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0071e3] rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[14px] font-bold text-white">4</span>
                  </div>
                  <p className="text-[17px] text-[#1d1d1f]">Choose the one you trust (not always the cheapest)</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0071e3] rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[14px] font-bold text-white">5</span>
                  </div>
                  <p className="text-[17px] text-[#1d1d1f]">Book installation</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#34c759] rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[14px] font-bold text-white">6</span>
                  </div>
                  <p className="text-[17px] text-[#1d1d1f]">Enjoy lower heating bills</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link href="/quiz">
                  <Button className="bg-[#34c759] hover:bg-[#30b350] text-white px-10 py-4 text-[17px] rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg">
                    Compare 3 Manchester Installers – Free, Takes 90 Seconds
                  </Button>
                </Link>
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="mb-16">
              <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6 tracking-tight">
                Final Thoughts
              </h2>

              <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-8">
                <div className="space-y-4">
                  <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                    <strong>A typical Manchester heat pump costs £8,000-£14,000 before the grant.</strong>
                  </p>
                  <p className="text-[17px] text-[#1d1d1f] leading-[1.6]">
                    <strong>After the £7,500 government grant, you'll pay £2,500-£6,500.</strong>
                  </p>
                  <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                    That includes everything: equipment, installation, hot water tank, warranties.
                  </p>
                  <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                    <strong>Extras like bigger radiators or electrical upgrades add £500-£2,000 for some homes.</strong>
                  </p>
                  <p className="text-[17px] text-[#6e6e73] leading-[1.6]">
                    <strong>Most Manchester installations take 2-3 days.</strong>
                  </p>
                </div>
              </div>

              <div className="bg-linear-to-br from-[#34c759] to-[#30a14e] rounded-2xl p-8 text-white">
                <p className="text-[19px] font-semibold mb-4">
                  Get 3 quotes. Pick an MCS-certified installer you trust. Job done.
                </p>
                <p className="text-[17px] opacity-90">
                  Any questions? Use our free comparison tool to get quotes from vetted Manchester installers in 90 seconds.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-linear-to-br from-[#0071e3] to-[#00a2ff] rounded-2xl p-8 md:p-12 text-white mb-16">
              <h2 className="text-[32px] md:text-[40px] font-semibold mb-4">Get Your Manchester Quotes Now</h2>
              
              <p className="text-[18px] opacity-90 mb-8 leading-[1.6]">
                Free, no-obligation quotes from MCS-certified installers. £7,500 grant support included.
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
                  className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#0071e3] px-10 py-5 text-[17px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-lg"
                >
                  Get Your Manchester Quotes Now →
                </Button>
              </Link>
            </div>

            {/* Last Updated */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-[15px] text-[#86868b]">
                Last updated: January 22, 2026
              </p>
              <p className="text-[15px] text-[#86868b]">
                Data based on 50+ Manchester heat pump installations in Q4 2025 and Q1 2026.
              </p>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-16 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-8 tracking-tight">
              Related Reading
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/installers/manchester">
                <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <div className="p-6">
                    <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Heat Pump Installers Manchester</h3>
                    <p className="text-[15px] text-[#6e6e73]">Compare MCS-certified installers in your area</p>
                  </div>
                </div>
              </Link>

              <Link href="/blog/heat-pump-cost-uk">
                <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <div className="p-6">
                    <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">Heat Pump Cost UK: Complete Guide</h3>
                    <p className="text-[15px] text-[#6e6e73]">Full breakdown of costs, savings, and grant information</p>
                  </div>
                </div>
              </Link>

              <Link href="/blog/heat-pump-grant-guide">
                <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <div className="p-6">
                    <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">£7,500 Heat Pump Grant Guide</h3>
                    <p className="text-[15px] text-[#6e6e73]">Everything you need to know about the Boiler Upgrade Scheme</p>
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
