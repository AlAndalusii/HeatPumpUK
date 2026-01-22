"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Head from "next/head"

export default function InstallationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    heatingSystem: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar activePage="installation" />
        <div className="min-h-screen flex items-center justify-center px-6 pt-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-[#34c759] flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4">Request Received!</h1>
            <p className="text-xl text-[#6e6e73] mb-8">
              Thank you for your interest. A certified installer will contact you shortly with a free, no-obligation quote
              for your Air Source Heat Pump installation.
            </p>
            <Link href="/">
              <Button size="lg" className="bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full">
                Return Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Air Source Heat Pump Installation Service | Professional MCS Installers | Air Source Heat Pump Resource</title>
        <meta name="description" content="Professional Air Source Heat Pump installation service from MCS-certified installers. Get quotes for air source and ground source Air Source Heat Pump installation. Expert fitting, commissioning, and aftercare support across the UK." />
        <meta name="keywords" content="Air Source Heat Pump installation, MCS installers, Air Source Heat Pump fitting, ground source installation, professional Air Source Heat Pump service, Air Source Heat Pump commissioning" />
      </Head>
      <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar activePage="installation" />

      {/* Form Content */}
      <div className="flex items-center justify-center min-h-screen px-6 py-24">
        <div className="max-w-xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Get Your Free Quote</h1>
            <p className="text-xl text-gray-600 text-pretty">
              Fill in your details and we'll connect you with a certified Air Source Heat Pump installer
            </p>
          </div>

          <Card className="p-8 border-gray-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007AFF]"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007AFF]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007AFF]"
                  placeholder="07700 900000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Postcode</label>
                <input
                  type="text"
                  required
                  value={formData.postcode}
                  onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007AFF]"
                  placeholder="SW1A 1AA"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Heating System</label>
                <select
                  required
                  value={formData.heatingSystem}
                  onChange={(e) => setFormData({ ...formData, heatingSystem: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007AFF]"
                >
                  <option value="">Select your heating system</option>
                  <option value="gas">Gas Boiler</option>
                  <option value="oil">Oil Boiler</option>
                  <option value="electric">Electric Storage Heaters</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#34c759] hover:bg-[#30a14e] text-white py-6 text-lg rounded-xl font-medium"
              >
                Get Free Quote
              </Button>
            </form>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
}
