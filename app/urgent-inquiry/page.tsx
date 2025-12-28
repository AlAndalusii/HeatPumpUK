"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UrgentInquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    inquiryType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [validationError, setValidationError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const inquiryTypes = [
    "Urgent heat pump installation",
    "Emergency repair needed",
    "Grant eligibility check",
    "System replacement ASAP",
    "Technical support",
    "Other urgent inquiry",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setValidationError("")
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setValidationError("Name is required")
      return false
    }
    if (!formData.email.trim()) {
      setValidationError("Email is required")
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      setValidationError("Please enter a valid email address")
      return false
    }
    if (!formData.phone.trim()) {
      setValidationError("Phone number is required")
      return false
    }
    const phoneRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/
    if (!phoneRegex.test(formData.phone.trim())) {
      setValidationError("Please enter a valid UK mobile number (e.g., 07123 456789)")
      return false
    }
    if (!formData.postcode.trim()) {
      setValidationError("Postcode is required")
      return false
    }
    if (!formData.inquiryType) {
      setValidationError("Please select an inquiry type")
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/urgent-callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit urgent callback request')
      }

      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting urgent callback:', error)
      setValidationError('Failed to submit request. Please try again or use the contact form instead.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FF3B30] to-[#FF2D1F] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#34C759]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-white mb-4 sm:mb-6 tracking-tight leading-[1.1]">
            We'll contact you ASAP!
          </h1>
          <p className="text-[17px] sm:text-[19px] md:text-[21px] lg:text-[24px] text-white/90 mb-8 sm:mb-10 md:mb-12 leading-[1.4]">
            Thank you for your urgent inquiry. Our team will contact you as soon as possible during business hours (Mon-Fri 9am-6pm).
          </p>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-white/20">
            <h3 className="text-[18px] sm:text-[20px] font-semibold text-white mb-3 sm:mb-4">What happens next?</h3>
            <div className="space-y-3 sm:space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-semibold">1</span>
                </div>
                <p className="text-[15px] sm:text-[17px] text-white/90">A specialist will review your inquiry immediately</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-semibold">2</span>
                </div>
                <p className="text-[15px] sm:text-[17px] text-white/90">We'll call you as soon as possible (during business hours)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-semibold">3</span>
                </div>
                <p className="text-[15px] sm:text-[17px] text-white/90">We'll arrange the fastest possible solution for your needs</p>
              </div>
            </div>
          </div>

          <Link href="/" className="inline-block w-full sm:w-auto">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#FF3B30] px-8 sm:px-10 py-3 sm:py-5 text-[17px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-lg min-h-[44px]"
            >
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f5f7] to-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link href="/" className="text-base sm:text-lg md:text-xl font-semibold text-[#1d1d1f] py-2 min-h-[44px] flex items-center">
              ← Back
            </Link>
          </div>
        </div>
      </header>

      {/* Form Content */}
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-[#FF3B30] text-white px-4 py-2 rounded-full mb-4 animate-pulse">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <span className="text-sm font-semibold">Urgent Priority Response</span>
            </div>
            
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold text-[#1d1d1f] mb-3 tracking-tight leading-[1.1]">
              Request Urgent Callback
            </h1>
            <p className="text-[15px] sm:text-[17px] text-[#6e6e73] max-w-xl mx-auto">
              Fill in your details below and we'll contact you as soon as possible during business hours (Mon-Fri 9am-6pm)
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-[14px] sm:text-[15px] font-medium text-[#1d1d1f] mb-2">
                  Full Name <span className="text-[#FF3B30]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 text-[16px] sm:text-[17px] focus:outline-none focus:border-[#FF3B30] focus:ring-2 focus:ring-[#FF3B30]/20 text-[#1d1d1f] min-h-[44px]"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[14px] sm:text-[15px] font-medium text-[#1d1d1f] mb-2">
                  Email Address <span className="text-[#FF3B30]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 text-[16px] sm:text-[17px] focus:outline-none focus:border-[#FF3B30] focus:ring-2 focus:ring-[#FF3B30]/20 text-[#1d1d1f] min-h-[44px]"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[14px] sm:text-[15px] font-medium text-[#1d1d1f] mb-2">
                  Phone Number <span className="text-[#FF3B30]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="07123 456789"
                  className="w-full px-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 text-[16px] sm:text-[17px] focus:outline-none focus:border-[#FF3B30] focus:ring-2 focus:ring-[#FF3B30]/20 text-[#1d1d1f] min-h-[44px]"
                  required
                />
              </div>

              {/* Postcode */}
              <div>
                <label className="block text-[14px] sm:text-[15px] font-medium text-[#1d1d1f] mb-2">
                  Postcode <span className="text-[#FF3B30]">*</span>
                </label>
                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  placeholder="e.g. SW1A 1AA"
                  className="w-full px-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 text-[16px] sm:text-[17px] focus:outline-none focus:border-[#FF3B30] focus:ring-2 focus:ring-[#FF3B30]/20 text-[#1d1d1f] min-h-[44px]"
                  required
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-[14px] sm:text-[15px] font-medium text-[#1d1d1f] mb-2">
                  What do you need? <span className="text-[#FF3B30]">*</span>
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 text-[16px] sm:text-[17px] focus:outline-none focus:border-[#FF3B30] focus:ring-2 focus:ring-[#FF3B30]/20 text-[#1d1d1f] min-h-[44px] bg-white"
                  required
                >
                  <option value="">Select an option...</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[14px] sm:text-[15px] font-medium text-[#1d1d1f] mb-2">
                  Additional Details (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your urgent inquiry..."
                  rows={4}
                  className="w-full px-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 text-[16px] sm:text-[17px] focus:outline-none focus:border-[#FF3B30] focus:ring-2 focus:ring-[#FF3B30]/20 text-[#1d1d1f] resize-none"
                />
              </div>
            </div>

            {validationError && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-[14px] sm:text-[15px] text-red-600 font-medium">
                  {validationError}
                </p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 bg-[#FF3B30] hover:bg-[#FF2D1F] text-white py-4 sm:py-6 text-[17px] sm:text-[19px] rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] min-h-[44px] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Submitting...' : 'Request Urgent Callback'}
            </Button>

            <p className="text-[13px] sm:text-[14px] text-[#6e6e73] text-center mt-4">
              We'll contact you as soon as possible during business hours
            </p>
          </form>

          {/* Trust indicator */}
          <div className="text-center mt-8 sm:mt-10">
            <div className="inline-flex items-start sm:items-center gap-2 text-[13px] sm:text-[14px] text-[#6e6e73] max-w-md">
              <svg className="w-4 h-4 text-[#34c759] flex-shrink-0 mt-0.5 sm:mt-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-left sm:text-center">Your information is secure and will be handled with priority</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

