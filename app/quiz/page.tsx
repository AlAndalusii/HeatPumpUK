"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Head from "next/head"

const questions = [
  {
    id: 1,
    question: "What brings you here today?",
    options: ["Get heat pump quotes (installation)", "Check grant eligibility", "Heat pump repair/service"],
    type: "choice",
  },
  {
    id: 2,
    question: "Do you own this property?",
    options: ["Yes", "No"],
    type: "choice",
    warningMessage: "Grant requires ownership",
    showWarningFor: "No",
  },
  {
    id: 3,
    question: "Property location?",
    options: ["England", "Wales", "Scotland", "Northern Ireland"],
    type: "choice",
  },
  {
    id: 4,
    question: "Current heating system?",
    options: ["Gas boiler", "Oil", "LPG", "Electric", "Already have heat pump", "Other"],
    type: "choice",
  },
  {
    id: 5,
    question: "Property type?",
    options: ["House", "Bungalow", "Flat", "Other"],
    type: "choice",
  },
  {
    id: 6,
    question: "Bedrooms?",
    options: ["1-2", "3", "4+", "Not sure"],
    type: "choice",
  },
  {
    id: 7,
    question: "Built when?",
    options: ["Before 1990", "1990-2010", "After 2010", "Not sure"],
    type: "choice",
  },
  {
    id: 8,
    question: "Installation timeline?",
    options: ["ASAP", "1-3 months", "3-6 months", "Just researching"],
    type: "choice",
  },
  {
    id: 9,
    question: "Postcode (first half)",
    options: [],
    type: "text",
    placeholder: "e.g. SW1A",
    optional: false,
    helperText: "This helps us match you with local installers",
  },
  {
    id: 10,
    question: "Name + Email",
    options: [],
    type: "combined",
    fields: [
      { name: "name", type: "text", placeholder: "Your full name", label: "Name" },
      { name: "email", type: "email", placeholder: "you@example.com", label: "Email" },
    ],
    microcopy: "We'll email your results",
  },
  {
    id: 11,
    question: "What's the best phone number to reach you?",
    options: [],
    type: "tel",
    placeholder: "07123 456789",
    optional: false,
    helperText: "Required - Installers will contact you within 48 hours",
  },
]

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [textInput, setTextInput] = useState("")
  const [combinedInputs, setCombinedInputs] = useState({ name: "", email: "" })
  const [submitted, setSubmitted] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const [validationError, setValidationError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [earlyResults, setEarlyResults] = useState(false)

  const currentQuestion = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100

  // Restore previous answers when navigating back
  useEffect(() => {
    const currentAnswer = answers[currentQuestion.id]
    
    if (currentAnswer) {
      if (currentQuestion.type === "text" || currentQuestion.type === "tel") {
        setTextInput(currentAnswer)
      } else if (currentQuestion.type === "combined") {
        const [name, email] = currentAnswer.split("|")
        setCombinedInputs({ name: name || "", email: email || "" })
      }
    } else {
      // Clear inputs if no previous answer
      setTextInput("")
      setCombinedInputs({ name: "", email: "" })
    }
  }, [currentStep, currentQuestion.id, currentQuestion.type, answers])

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: answer }
    setAnswers(newAnswers)

    // Show warning if applicable
    if (currentQuestion.showWarningFor && answer === currentQuestion.showWarningFor) {
      setShowWarning(true)
      setTimeout(() => setShowWarning(false), 3000)
    }

    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1)
        setTextInput("")
        setShowWarning(false)
        setValidationError("")
      }, 300)
    } else {
      // All questions answered - submit to API
      setTimeout(async () => {
        setIsSubmitting(true)
        try {
          const response = await fetch('/api/quiz', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ answers: newAnswers }),
          })

          if (!response.ok) {
            throw new Error('Failed to submit quiz')
          }

          setSubmitted(true)
        } catch (error) {
          console.error('Error submitting quiz:', error)
          // Still show success page even if email fails
          setSubmitted(true)
        } finally {
          setIsSubmitting(false)
        }
      }, 300)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setValidationError("")
      setShowWarning(false)
      
      // Restore previous answer if it exists
      const previousQuestion = questions[currentStep - 1]
      const previousAnswer = answers[previousQuestion.id]
      
      if (previousQuestion.type === "text" || previousQuestion.type === "tel") {
        setTextInput(previousAnswer || "")
      } else if (previousQuestion.type === "combined" && previousAnswer) {
        const [name, email] = previousAnswer.split("|")
        setCombinedInputs({ name: name || "", email: email || "" })
      }
    }
  }

  const handleTextSubmit = () => {
    // Validate phone number for tel type
    if (currentQuestion.type === "tel" && !currentQuestion.optional) {
      const phoneRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/
      const cleanPhone = textInput.trim().replace(/\s/g, '')
      
      if (!cleanPhone) {
        setValidationError("Phone number is required")
        return
      }
      
      if (!phoneRegex.test(textInput.trim())) {
        setValidationError("Please enter a valid UK mobile number (e.g., 07123 456789)")
        return
      }
    }
    
    setValidationError("")
    
    if (currentQuestion.optional || textInput.trim()) {
      handleAnswer(textInput.trim() || "Not provided")
    }
  }

  const handleCombinedSubmit = () => {
    // Validate name and email
    if (!combinedInputs.name.trim()) {
      setValidationError("Name is required")
      return
    }
    
    if (!combinedInputs.email.trim()) {
      setValidationError("Email is required")
      return
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(combinedInputs.email.trim())) {
      setValidationError("Please enter a valid email address")
      return
    }
    
    setValidationError("")
    
    if (combinedInputs.name.trim() && combinedInputs.email.trim()) {
      const combined = `${combinedInputs.name}|${combinedInputs.email}`
      setAnswers({ ...answers, [currentQuestion.id]: combined })
      
      if (currentStep < questions.length - 1) {
        setTimeout(() => {
          setCurrentStep(currentStep + 1)
          setTextInput("")
          setValidationError("")
        }, 300)
      }
    }
  }

  const checkGrantEligibility = () => {
    // Check if user is clearly NOT eligible
    const ownsHome = answers[2] === "Yes"
    const hasEligibleHeating = answers[4] === "Gas boiler" || answers[4] === "Oil" || answers[4] === "LPG" || answers[4] === "Electric"
    const notAlreadyHeatPump = answers[4] !== "Already have heat pump"
    const isInEligibleLocation = answers[3] === "England" || answers[3] === "Wales"
    
    // Return true if potentially eligible (will need further assessment)
    // Return false if clearly not eligible
    return ownsHome && hasEligibleHeating && notAlreadyHeatPump && isInEligibleLocation
  }

  const handleEarlyResults = () => {
    setEarlyResults(true)
  }

  if (submitted || earlyResults) {
    const isPotentiallyEligible = checkGrantEligibility()
    
    // Determine specific ineligibility reasons
    const ownsHome = answers[2] === "Yes"
    const alreadyHasHeatPump = answers[4] === "Already have heat pump"
    const isInEligibleLocation = answers[3] === "England" || answers[3] === "Wales"
    const hasEligibleHeating = answers[4] === "Gas boiler" || answers[4] === "Oil" || answers[4] === "LPG" || answers[4] === "Electric"
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0071e3] to-[#0056b3] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${isPotentiallyEligible ? 'bg-white' : 'bg-white/90'} flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl`}>
            {isPotentiallyEligible ? (
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#34C759]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF3B30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          
          {isPotentiallyEligible ? (
            <>
              <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#34c759]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-white tracking-tight leading-[1.1]">
                  Great News! You May Qualify for £7,500 in Grant Funding
                </h1>
              </div>
              <p className="text-[17px] sm:text-[19px] md:text-[21px] lg:text-[24px] text-white/90 mb-8 sm:mb-10 md:mb-12 leading-[1.4]">
                Based on your answers, you meet the basic eligibility criteria. Installers will confirm final eligibility and provide exact quotes.
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#0071e3]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-white tracking-tight leading-[1.1]">
                  You Don't Qualify for the Grant—But We Can Still Save You Money
                </h1>
              </div>
              <p className="text-[17px] sm:text-[19px] md:text-[21px] lg:text-[24px] text-white/90 mb-6 sm:mb-8 leading-[1.4]">
                Get competitive quotes for direct installation. Most customers save £1,500-3,000 by comparing multiple installers.
              </p>
              {!isPotentiallyEligible && !ownsHome && (
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 sm:p-6 mb-8 border border-white/20 text-left">
                  <p className="text-[15px] sm:text-[16px] text-white/90">
                    <strong>Note for renters:</strong> You'll need your landlord's permission to install a heat pump. Speak to your landlord about the benefits of upgrading to a low-carbon heating system.
                  </p>
                </div>
              )}
              {!isPotentiallyEligible && (ownsHome || alreadyHasHeatPump || !isInEligibleLocation) && (
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 sm:p-6 mb-8 border border-white/20 text-left">
                  <p className="text-[15px] sm:text-[16px] text-white/90 mb-3">
                    <strong>Alternative options:</strong>
                  </p>
                  <ul className="text-[14px] sm:text-[15px] text-white/80 space-y-2 list-disc pl-5">
                    {!isInEligibleLocation && answers[3] === "Scotland" && (
                      <li>Check <a href="https://www.homeenergyscotland.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Home Energy Scotland</a> for Scottish grants</li>
                    )}
                    {!isInEligibleLocation && answers[3] === "Northern Ireland" && (
                      <li>Check the Northern Ireland Sustainable Energy Programme (NISEP) for local support</li>
                    )}
                    {alreadyHasHeatPump && (
                      <li>Consider a service or repair for your existing heat pump instead</li>
                    )}
                    <li>You can still get free installation quotes without the grant</li>
                    <li>Consider energy-efficient home improvements to reduce running costs</li>
                  </ul>
                </div>
              )}
            </>
          )}

          <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-white/20">
            <h3 className="text-[18px] sm:text-[20px] font-semibold text-white mb-3 sm:mb-4">What happens next?</h3>
            <div className="space-y-3 sm:space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-semibold">1</span>
                </div>
                <p className="text-[15px] sm:text-[17px] text-white/90">
                  {isPotentiallyEligible 
                    ? "Up to 3 MCS-certified installers will review your details and confirm eligibility"
                    : "Up to 3 vetted installers will review your details for installation quotes"
                  }
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-semibold">2</span>
                </div>
                <p className="text-[15px] sm:text-[17px] text-white/90">
                  {isPotentiallyEligible
                    ? "They'll contact you within 48 hours to arrange a free survey and verify grant eligibility"
                    : "They'll contact you to arrange a free survey and discuss installation options"
                  }
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-semibold">3</span>
                </div>
                <p className="text-[15px] sm:text-[17px] text-white/90">Compare quotes and choose the best option for your home</p>
              </div>
            </div>
          </div>

          <Link href="/" className="inline-block w-full sm:w-auto">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#0071e3] px-8 sm:px-10 py-3 sm:py-5 text-[17px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-lg min-h-[44px]"
            >
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Heat Pump Eligibility Quiz | Check Your £7,500 Grant Eligibility | Heat Pump Resource</title>
        <meta name="description" content="Take our 2-minute heat pump eligibility quiz to check if you qualify for the £7,500 government grant. Get matched with MCS-certified installers and receive free heat pump quotes for your home." />
        <meta name="keywords" content="heat pump eligibility quiz, heat pump grant eligibility, £7500 grant quiz, heat pump assessment, government grant checker, MCS installers, heat pump suitability" />
      </Head>
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

      {/* Progress Bar */}
      <div className="fixed top-14 sm:top-16 left-0 right-0 h-1.5 sm:h-2 bg-gray-200 z-40">
        <div 
          className="h-full bg-gradient-to-r from-[#0071e3] to-[#0056b3] transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }} 
        />
      </div>

      {/* Quiz Content */}
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="max-w-2xl w-full animate-fade-in-up">
          {/* Back button */}
          {currentStep > 0 && (
            <div className="mb-4 sm:mb-6">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] text-[#0071e3] hover:text-[#0077ed] font-medium transition-colors min-h-[44px] px-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            </div>
          )}
          
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-[14px] sm:text-[15px] font-medium text-[#0071e3] mb-2 sm:mb-3">
              Question {currentStep + 1} of {questions.length}
            </p>
            <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-[#1d1d1f] mb-2 tracking-tight leading-[1.1] px-2">
              {currentQuestion.question}
              {(currentQuestion.type === "tel" || currentQuestion.type === "text" || currentQuestion.type === "combined") && !currentQuestion.optional && (
                <span className="text-[#FF3B30] ml-1">*</span>
              )}
            </h1>
            {currentQuestion.helperText && (
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] mt-2 sm:mt-3 px-2">{currentQuestion.helperText}</p>
            )}
            {currentQuestion.microcopy && (
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] mt-2 sm:mt-3 max-w-md mx-auto px-2">{currentQuestion.microcopy}</p>
            )}
          </div>

          {/* Warning Message */}
          {showWarning && currentQuestion.warningMessage && (
            <div className="max-w-lg mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-[14px] sm:text-[15px] text-amber-800 text-center">
                ℹ️ {currentQuestion.warningMessage}
              </p>
            </div>
          )}

          {currentQuestion.type === "choice" ? (
            <>
              <div className="grid gap-3 sm:gap-4 max-w-lg mx-auto">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="group px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl bg-white border-2 border-gray-200 hover:border-[#0071e3] hover:shadow-lg transition-all duration-300 text-left active:scale-[0.98] min-h-[44px]"
                  >
                    <span className="text-[16px] sm:text-[17px] md:text-[19px] font-medium text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                      {option}
                    </span>
                  </button>
                ))}
              </div>
              
              {/* Early Results Buttons after Q3 and Q6 */}
              {(currentStep === 2 || currentStep === 5) && (
                <div className="mt-8 sm:mt-10 max-w-lg mx-auto pt-6 border-t border-gray-200">
                  <p className="text-[14px] sm:text-[15px] text-[#6e6e73] text-center mb-4">Want to see preliminary results now?</p>
                  <Button
                    onClick={handleEarlyResults}
                    className="w-full bg-gradient-to-r from-[#34c759] to-[#30a14e] hover:from-[#2eb350] hover:to-[#289645] text-white py-3 sm:py-4 text-[15px] sm:text-[16px] rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] min-h-[44px]"
                  >
                    {currentStep === 2 ? "See Preliminary Results →" : "Get Personalized Report →"}
                  </Button>
                </div>
              )}
            </>
          ) : currentQuestion.type === "combined" ? (
            <div className="max-w-lg mx-auto">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 space-y-4">
                {currentQuestion.fields?.map((field) => (
                  <div key={field.name}>
                    <label className="block text-[13px] sm:text-[14px] font-medium text-[#1d1d1f] mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={combinedInputs[field.name as keyof typeof combinedInputs]}
                      onChange={(e) => {
                        setCombinedInputs({ ...combinedInputs, [field.name]: e.target.value })
                        setValidationError("")
                      }}
                      placeholder={field.placeholder}
                      inputMode={field.type === 'email' ? 'email' : 'text'}
                      autoComplete={field.type === 'email' ? 'email' : field.name === 'name' ? 'name' : 'off'}
                      className="w-full px-4 py-3.5 sm:py-4 rounded-xl border border-gray-200 text-[16px] sm:text-[17px] focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20 text-[#1d1d1f] min-h-[44px]"
                      required
                    />
                  </div>
                ))}
              </div>
              {validationError && (
                <p className="text-[13px] sm:text-[14px] text-red-500 mt-2 text-center font-medium">
                  {validationError}
                </p>
              )}
              <Button
                onClick={handleCombinedSubmit}
                disabled={!combinedInputs.name.trim() || !combinedInputs.email.trim()}
                className="w-full mt-4 bg-[#0071e3] hover:bg-[#0077ed] text-white py-3.5 sm:py-6 md:py-7 text-[16px] sm:text-[17px] md:text-[19px] rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[44px]"
              >
                Continue →
              </Button>
            </div>
          ) : (
            <div className="max-w-lg mx-auto">
              <div className={`bg-white rounded-xl sm:rounded-2xl shadow-sm border-2 p-2 transition-colors ${validationError ? 'border-red-400' : 'border-gray-200'}`}>
                <input
                  type={currentQuestion.type}
                  value={textInput}
                  onChange={(e) => {
                    setTextInput(e.target.value)
                    setValidationError("")
                  }}
                  placeholder={currentQuestion.placeholder}
                  inputMode={currentQuestion.type === 'tel' ? 'tel' : 'text'}
                  autoComplete={currentQuestion.type === 'tel' ? 'tel' : 'off'}
                  className="w-full px-4 sm:px-6 py-3.5 sm:py-5 rounded-xl text-[16px] sm:text-[17px] md:text-[19px] focus:outline-none text-[#1d1d1f] min-h-[44px]"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleTextSubmit()
                    }
                  }}
                  autoFocus
                />
              </div>
              {validationError && (
                <p className="text-[13px] sm:text-[14px] text-red-500 mt-2 text-center font-medium">
                  {validationError}
                </p>
              )}
              {currentQuestion.optional && !validationError && (
                <p className="text-[12px] sm:text-[13px] text-[#6e6e73] mt-2 text-center">Optional - you can skip this</p>
              )}
              <Button
                onClick={handleTextSubmit}
                disabled={!currentQuestion.optional && !textInput.trim()}
                className="w-full mt-4 bg-[#0071e3] hover:bg-[#0077ed] text-white py-3.5 sm:py-6 md:py-7 text-[16px] sm:text-[17px] md:text-[19px] rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[44px]"
              >
                {currentQuestion.optional ? "Continue →" : "Continue →"}
              </Button>
            </div>
          )}

          {/* Trust indicator */}
          <div className="text-center mt-8 sm:mt-10 md:mt-12 px-4">
            <div className="inline-flex items-start sm:items-center gap-2 text-[13px] sm:text-[14px] text-[#6e6e73] max-w-md">
              <svg className="w-4 h-4 text-[#34c759] flex-shrink-0 mt-0.5 sm:mt-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-left sm:text-center">Your information is secure and will only be shared with vetted installers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
