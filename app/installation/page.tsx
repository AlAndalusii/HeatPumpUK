"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

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
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-[#34C759] flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Request Received!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your interest. A certified installer will contact you shortly with a free, no-obligation quote
            for your heat pump installation.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-[#007AFF] hover:bg-[#0051D5] text-white">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              HeatPumpResource
            </Link>
          </div>
        </div>
      </header>

      {/* Form Content */}
      <div className="flex items-center justify-center min-h-screen px-6 py-24">
        <div className="max-w-xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Get Your Free Quote</h1>
            <p className="text-xl text-gray-600 text-pretty">
              Fill in your details and we'll connect you with a certified heat pump installer
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
                className="w-full bg-[#34C759] hover:bg-[#2AB74A] text-white py-6 text-lg rounded-xl font-medium"
              >
                Get Free Quote
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
