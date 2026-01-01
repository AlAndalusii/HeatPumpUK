"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"
import { jsPDF } from "jspdf"

// PDF Guide Generator Function - World Class Easy-to-Read Design
// FIXED: All unicode characters replaced with ASCII equivalents for proper PDF rendering
function generateHeatPumpGuide() {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20
  const contentWidth = pageWidth - (margin * 2)
  let y = margin

  // Apple-style color palette
  const colors = {
    primary: [0, 113, 227] as [number, number, number],
    success: [52, 199, 89] as [number, number, number],
    warning: [255, 149, 0] as [number, number, number],
    error: [255, 59, 48] as [number, number, number],
    text: [29, 29, 31] as [number, number, number],
    textSecondary: [142, 142, 147] as [number, number, number],
    textTertiary: [174, 174, 178] as [number, number, number],
    background: [255, 255, 255] as [number, number, number],
    lightGray: [242, 242, 247] as [number, number, number],
    lightBlue: [237, 244, 255] as [number, number, number],
    lightGreen: [240, 255, 245] as [number, number, number],
    lightOrange: [255, 250, 237] as [number, number, number],
    lightRed: [255, 245, 247] as [number, number, number]
  }

  // Helper functions
  const addNewPage = () => {
    doc.addPage()
    y = margin
    addPageNumber()
  }

  const addPageNumber = () => {
    const pageNum = doc.getNumberOfPages()
    doc.setFontSize(9)
    doc.setTextColor(...colors.textTertiary)
    doc.text(`${pageNum}`, pageWidth / 2, pageHeight - 12, { align: "center" })
  }

  const drawBox = (x: number, yPos: number, width: number, height: number, fillColor: number[], borderColor?: number[], borderWidth: number = 0.5) => {
    doc.setFillColor(fillColor[0], fillColor[1], fillColor[2])
    if (borderColor) {
      doc.setDrawColor(borderColor[0], borderColor[1], borderColor[2])
      doc.setLineWidth(borderWidth)
      doc.roundedRect(x, yPos, width, height, 3, 3, 'FD')
    } else {
      doc.roundedRect(x, yPos, width, height, 3, 3, 'F')
    }
    doc.setLineWidth(0.5) // Reset line width
  }

  const addSectionHeader = (text: string, bgColor: [number, number, number]) => {
    doc.setFillColor(...bgColor)
    doc.rect(0, 0, pageWidth, 35, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(18)
    doc.setFont("helvetica", "bold")
    doc.text(text, margin, 22)
    y = 50
  }

  // ===== COVER PAGE =====
  // Clean white background
  doc.setFillColor(...colors.background)
  doc.rect(0, 0, pageWidth, pageHeight, 'F')
  
  y = 60

  // Main Title - Apple style
  doc.setTextColor(...colors.text)
  doc.setFontSize(36)
  doc.setFont("helvetica", "bold")
  doc.text("Heat Pump", pageWidth / 2, y, { align: "center" })
  
  y += 14
  doc.text("vs Gas Boiler", pageWidth / 2, y, { align: "center" })
  
  y += 20
  doc.setFontSize(14)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(...colors.textSecondary)
  doc.text("The Complete Guide for UK Homeowners", pageWidth / 2, y, { align: "center" })

  y += 6
  doc.setFontSize(11)
  doc.text("2025 Edition", pageWidth / 2, y, { align: "center" })

  // Minimal accent line
  y += 18
  doc.setDrawColor(...colors.primary)
  doc.setLineWidth(1.5)
  doc.line(pageWidth / 2 - 30, y, pageWidth / 2 + 30, y)

  // What's Inside - Clean list
  y += 25
  doc.setTextColor(...colors.text)
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("Inside This Guide", margin, y)
  
  y += 12
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(...colors.textSecondary)
  
  const contents = [
    "How heat pumps work",
    "Installation costs for 2025", 
    "Running costs comparison",
    "£7,500 government grant eligibility",
    "Pros and cons comparison",
    "Air source vs ground source",
    "Finding trusted installers",
    "Step-by-step grant guide"
  ]
  
  contents.forEach((item, index) => {
    doc.setTextColor(...colors.textTertiary)
    doc.text("•", margin + 2, y + (index * 9))
    doc.setTextColor(...colors.textSecondary)
    doc.text(item, margin + 8, y + (index * 9))
  })

  // Grant Highlight - Minimal and elegant
  y += 85
  drawBox(margin, y, contentWidth, 42, colors.lightGreen, colors.success, 1)
  
  doc.setTextColor(...colors.success)
  doc.setFontSize(24)
  doc.setFont("helvetica", "bold")
  doc.text("£7,500", pageWidth / 2, y + 18, { align: "center" })
  
  doc.setFontSize(11)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(...colors.text)
  doc.text("Government grant available", pageWidth / 2, y + 30, { align: "center" })

  // Footer - Professional & Futuristic
  y = pageHeight - 35
  
  // Subtle top border
  doc.setDrawColor(...colors.lightGray)
  doc.setLineWidth(0.3)
  doc.line(margin, y, pageWidth - margin, y)
  
  y += 8
  
  // Domain with modern styling
  doc.setTextColor(...colors.text)
  doc.setFontSize(10)
  doc.setFont("helvetica", "bold")
  doc.text("getheatpumpquotes.co.uk", pageWidth / 2, y, { align: "center" })
  
  y += 6
  
  // Trust badges with modern separator
  doc.setFontSize(8)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(...colors.textSecondary)
  doc.text("Independent", pageWidth / 2 - 30, y, { align: "center" })
  doc.text("Unbiased", pageWidth / 2, y, { align: "center" })
  doc.text("Free Service", pageWidth / 2 + 30, y, { align: "center" })
  
  // Modern divider dots
  doc.setFillColor(...colors.textTertiary)
  doc.circle(pageWidth / 2 - 15, y - 1.5, 0.6, 'F')
  doc.circle(pageWidth / 2 + 15, y - 1.5, 0.6, 'F')
  
  y += 6
  
  // Copyright with year
  doc.setFontSize(7)
  doc.setTextColor(...colors.textTertiary)
  doc.text("© 2025 Get Heat Pump Quotes. All rights reserved.", pageWidth / 2, y, { align: "center" })

  // ===== PAGE 2: HOW HEAT PUMPS WORK =====
  addNewPage()
  addSectionHeader("How Heat Pumps Work", colors.primary)

  // Simple Explanation - Clean and minimal
  drawBox(margin, y, contentWidth, 45, colors.lightBlue, colors.primary, 1)
  doc.setTextColor(...colors.primary)
  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("The Simple Explanation", margin + 12, y + 14)
  
  doc.setTextColor(...colors.text)
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  const wrappedText = doc.splitTextToSize(
    "A heat pump is like a refrigerator in reverse. It extracts heat from outside air or ground and transfers it into your home. Even when it's cold outside, there's still heat energy that can be captured and amplified to warm your house and water.",
    contentWidth - 24
  )
  doc.text(wrappedText, margin + 12, y + 26)

  y += 60

  // Types of Heat Pumps - Elegant section
  doc.setTextColor(...colors.text)
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("Types of Heat Pumps", margin, y)
  y += 15

  // Air Source - Clean card design
  const halfWidth = (contentWidth - 8) / 2
  
  drawBox(margin, y, halfWidth, 70, colors.lightBlue, colors.primary, 0.5)
  
  // Badge
  doc.setFillColor(...colors.primary)
  doc.roundedRect(margin + 12, y + 12, 45, 10, 2, 2, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(7)
  doc.setFont("helvetica", "bold")
  doc.text("MOST POPULAR", margin + 34.5, y + 18.5, { align: "center" })
  
  doc.setTextColor(...colors.primary)
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("Air Source", margin + 12, y + 35)
  doc.setFontSize(10)
  doc.text("Heat Pump", margin + 12, y + 44)
  
  doc.setTextColor(...colors.textSecondary)
  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  doc.text("Easy to install", margin + 12, y + 55)
  doc.setTextColor(...colors.text)
  doc.setFont("helvetica", "bold")
  doc.text("£8,000 - £15,000", margin + 12, y + 63)

  // Ground Source - Clean card design
  drawBox(margin + halfWidth + 8, y, halfWidth, 70, colors.lightGreen, colors.success, 0.5)
  
  // Badge
  doc.setFillColor(...colors.success)
  doc.roundedRect(margin + halfWidth + 20, y + 12, 50, 10, 2, 2, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(7)
  doc.setFont("helvetica", "bold")
  doc.text("MORE EFFICIENT", margin + halfWidth + 45, y + 18.5, { align: "center" })
  
  doc.setTextColor(...colors.success)
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("Ground Source", margin + halfWidth + 20, y + 35)
  doc.setFontSize(10)
  doc.text("Heat Pump", margin + halfWidth + 20, y + 44)
  
  doc.setTextColor(...colors.textSecondary)
  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  doc.text("Underground pipes", margin + halfWidth + 20, y + 55)
  doc.setTextColor(...colors.text)
  doc.setFont("helvetica", "bold")
  doc.text("£15,000 - £35,000", margin + halfWidth + 20, y + 63)

  y += 85

  // Efficiency Highlight - Minimal callout
  drawBox(margin, y, contentWidth, 50, colors.lightOrange, colors.warning, 1)
  doc.setTextColor(...colors.warning)
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("Why Heat Pumps Are More Efficient", margin + 12, y + 16)
  
  doc.setTextColor(...colors.text)
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("Heat pumps produce 3-4 units of heat for every 1 unit of electricity.", margin + 12, y + 30)
  doc.text("Gas boilers only convert about 90% of gas into heat.", margin + 12, y + 40)

  // ===== PAGE 3: COSTS =====
  addNewPage()
  addSectionHeader("Installation Costs", colors.primary)

  // Cost Summary Boxes - Clean Apple-style cards
  const costHalfWidth = (contentWidth - 8) / 2

  // ASHP Cost
  drawBox(margin, y, costHalfWidth, 72, colors.background, colors.lightGray, 0)
  drawBox(margin + 1, y + 1, costHalfWidth - 2, 70, colors.lightBlue, undefined as any)
  
  doc.setTextColor(...colors.primary)
  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("Air Source Heat Pump", margin + 12, y + 16)
  
  doc.setFontSize(26)
  doc.text("£8,000", margin + 12, y + 38)
  doc.setFontSize(14)
  doc.setFont("helvetica", "normal")
  doc.text("- £15,000", margin + 55, y + 38)
  
  doc.setFontSize(9)
  doc.setTextColor(...colors.textSecondary)
  doc.text("Before grant", margin + 12, y + 50)
  
  doc.setTextColor(...colors.success)
  doc.setFont("helvetica", "bold")
  doc.setFontSize(10)
  doc.text("From £500 with grant", margin + 12, y + 62)

  // GSHP Cost
  drawBox(margin + costHalfWidth + 8, y, costHalfWidth, 72, colors.background, colors.lightGray, 0)
  drawBox(margin + costHalfWidth + 9, y + 1, costHalfWidth - 2, 70, colors.lightGreen, undefined as any)
  
  doc.setTextColor(...colors.success)
  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("Ground Source Heat Pump", margin + costHalfWidth + 20, y + 16)
  
  doc.setFontSize(26)
  doc.text("£15,000", margin + costHalfWidth + 20, y + 38)
  doc.setFontSize(14)
  doc.setFont("helvetica", "normal")
  doc.text("- £35,000", margin + costHalfWidth + 66, y + 38)
  
  doc.setFontSize(9)
  doc.setTextColor(...colors.textSecondary)
  doc.text("Before grant", margin + costHalfWidth + 20, y + 50)
  
  doc.setTextColor(...colors.success)
  doc.setFont("helvetica", "bold")
  doc.setFontSize(10)
  doc.text("From £7,500 with grant", margin + costHalfWidth + 20, y + 62)

  y += 87

  // Additional Costs - Clean list
  doc.setTextColor(...colors.text)
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("Additional Costs", margin, y)
  y += 12

  drawBox(margin, y, contentWidth, 50, colors.lightGray, undefined as any)
  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(...colors.textSecondary)
  
  const extraCosts = [
    { label: "Radiator upgrades", detail: "(if needed)" },
    { label: "Underfloor heating", detail: "(optional)" },
    { label: "Insulation improvements", detail: "" },
    { label: "Planning permission", detail: "(rarely required)" },
    { label: "Annual servicing", detail: "£100 - £200" }
  ]
  
  extraCosts.forEach((cost, i) => {
    const xPos = i < 3 ? margin + 12 : margin + (contentWidth / 2) + 6
    const yPos = y + 12 + ((i % 3) * 11)
    
    doc.setTextColor(...colors.text)
    doc.text("•", xPos, yPos)
    doc.text(cost.label, xPos + 5, yPos)
    if (cost.detail) {
      doc.setTextColor(...colors.textTertiary)
      doc.text(cost.detail, xPos + 5, yPos + 5)
    }
  })

  y += 65

  // Running Costs - Clean table
  doc.setTextColor(...colors.text)
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("Annual Running Costs", margin, y)
  y += 12

  // Table with clean design
  drawBox(margin, y, contentWidth, 58, colors.background, colors.lightGray, 0.5)
  
  // Headers
  doc.setTextColor(...colors.textSecondary)
  doc.setFontSize(8)
  doc.setFont("helvetica", "bold")
  doc.text("SYSTEM", margin + 12, y + 12)
  doc.text("ANNUAL", margin + 90, y + 12, { align: "right" })
  doc.text("5-YEAR TOTAL", margin + contentWidth - 12, y + 12, { align: "right" })
  
  // Divider
  doc.setDrawColor(...colors.lightGray)
  doc.setLineWidth(0.5)
  doc.line(margin + 8, y + 18, margin + contentWidth - 8, y + 18)
  
  // Gas Boiler Row
  doc.setTextColor(...colors.text)
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("Gas Boiler", margin + 12, y + 30)
  doc.text("£850 - £1,100", margin + 90, y + 30, { align: "right" })
  doc.text("£4,250 - £5,500", margin + contentWidth - 12, y + 30, { align: "right" })
  
  // Heat Pump Row (highlighted)
  doc.setFillColor(...colors.lightGreen)
  doc.roundedRect(margin + 4, y + 36, contentWidth - 8, 18, 2, 2, 'F')
  
  doc.setTextColor(...colors.success)
  doc.setFont("helvetica", "bold")
  doc.text("Heat Pump", margin + 12, y + 48)
  doc.text("£650 - £900", margin + 90, y + 48, { align: "right" })
  doc.text("£3,250 - £4,500", margin + contentWidth - 12, y + 48, { align: "right" })

  // ===== PAGE 4: GRANT ELIGIBILITY =====
  addNewPage()
  addSectionHeader("£7,500 Government Grant", colors.success)

  // Grant intro - Clean hero text
  doc.setTextColor(...colors.text)
  doc.setFontSize(11)
  doc.setFont("helvetica", "normal")
  const grantIntro = doc.splitTextToSize(
    "The UK government provides up to £7,500 towards your heat pump installation. The grant is deducted directly from your final bill—no upfront payment or reimbursement needed.",
    contentWidth - 24
  )
  drawBox(margin, y, contentWidth, 42, colors.lightGreen, undefined as any)
  doc.text(grantIntro, margin + 12, y + 16)

  y += 55

  // Eligibility section
  doc.setTextColor(...colors.text)
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("Eligibility Requirements", margin, y)
  y += 12

  drawBox(margin, y, contentWidth, 68, colors.lightGreen, colors.success, 0.5)
  
  doc.setTextColor(...colors.text)
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  
  const eligible = [
    "You own your home (not renting)",
    "Property is in England or Wales",
    "Have a valid EPC certificate",
    "Replacing gas, oil, LPG, or electric heating",
    "Use an MCS-certified installer"
  ]
  
  eligible.forEach((item, i) => {
    doc.setFillColor(...colors.success)
    doc.circle(margin + 15, y + 14 + (i * 12), 2, 'F')
    doc.text(item, margin + 22, y + 16 + (i * 12))
  })

  y += 83

  // Not Eligible
  doc.setTextColor(...colors.text)
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("Not Eligible", margin, y)
  y += 12

  drawBox(margin, y, contentWidth, 50, colors.lightRed, colors.error, 0.5)
  
  doc.setTextColor(...colors.textSecondary)
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  
  const notElig = [
    "Rental properties (landlords cannot claim)",
    "New build homes",
    "Properties that already used the grant",
    "Non-MCS certified installations"
  ]
  
  notElig.forEach((item, i) => {
    doc.setDrawColor(...colors.error)
    doc.setLineWidth(1)
    doc.line(margin + 13, y + 13 + (i * 11), margin + 17, y + 13 + (i * 11))
    doc.text(item, margin + 22, y + 15 + (i * 11))
  })

  y += 62

  // How to claim - Process steps
  doc.setTextColor(...colors.text)
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("How to Claim", margin, y)
  y += 12

  const steps = [
    "Get quotes from MCS-certified installers",
    "Installer handles grant application for you",
    "£7,500 deducted from your final bill"
  ]

  steps.forEach((step, i) => {
    drawBox(margin, y + (i * 20), contentWidth, 16, colors.lightBlue, undefined as any)
    
    // Step number
    doc.setFillColor(...colors.primary)
    doc.circle(margin + 12, y + 8 + (i * 20), 5, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(9)
    doc.setFont("helvetica", "bold")
    doc.text(`${i + 1}`, margin + 12, y + 10 + (i * 20), { align: "center" })
    
    // Step text
    doc.setTextColor(...colors.text)
    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.text(step, margin + 22, y + 10 + (i * 20))
  })

  // ===== PAGE 5: PROS AND CONS =====
  addNewPage()
  addSectionHeader("Comparison", colors.primary)

  // Heat Pumps Section
  doc.setTextColor(...colors.text)
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("Heat Pumps", margin, y)
  y += 15

  // Pros and Cons side by side
  const cardWidth = (contentWidth - 8) / 2

  // Advantages
  drawBox(margin, y, cardWidth, 88, colors.lightGreen, colors.success, 0.5)
  doc.setTextColor(...colors.success)
  doc.setFontSize(10)
  doc.setFont("helvetica", "bold")
  doc.text("Advantages", margin + 12, y + 14)
  
  doc.setTextColor(...colors.text)
  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  
  const hpPros = [
    "3-4x more efficient than gas",
    "£7,500 government grant",
    "Low carbon, future-proof",
    "Can provide heating & cooling",
    "20-25 year lifespan",
    "Lower running costs"
  ]
  
  hpPros.forEach((pro, i) => {
    doc.setFillColor(...colors.success)
    doc.circle(margin + 16, y + 26 + (i * 11), 1.5, 'F')
    doc.text(pro, margin + 22, y + 28 + (i * 11))
  })

  // Considerations
  drawBox(margin + cardWidth + 8, y, cardWidth, 88, colors.lightOrange, colors.warning, 0.5)
  doc.setTextColor(...colors.warning)
  doc.setFontSize(10)
  doc.setFont("helvetica", "bold")
  doc.text("Considerations", margin + cardWidth + 20, y + 14)
  
  doc.setTextColor(...colors.text)
  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  
  const hpCons = [
    "Higher upfront cost",
    "May require radiator upgrades",
    "Outdoor unit installation",
    "Works best with good insulation",
    "Fewer engineers currently",
    "Learning curve for optimal use"
  ]
  
  hpCons.forEach((con, i) => {
    doc.setDrawColor(...colors.warning)
    doc.setLineWidth(0.8)
    doc.line(margin + cardWidth + 24, y + 26 + (i * 11), margin + cardWidth + 26, y + 26 + (i * 11))
    doc.text(con, margin + cardWidth + 30, y + 28 + (i * 11))
  })

  y += 103

  // Gas Boilers Section
  doc.setTextColor(...colors.textSecondary)
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("Gas Boilers", margin, y)
  y += 15

  // Gas Pros
  drawBox(margin, y, cardWidth, 66, colors.lightGray, colors.textTertiary, 0.5)
  doc.setTextColor(...colors.textSecondary)
  doc.setFontSize(10)
  doc.setFont("helvetica", "bold")
  doc.text("Advantages", margin + 12, y + 14)
  
  doc.setTextColor(...colors.text)
  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  
  const gasPros = [
    "Lower upfront cost",
    "Works with existing radiators",
    "Many trained engineers",
    "Familiar technology"
  ]
  
  gasPros.forEach((pro, i) => {
    doc.setFillColor(...colors.textSecondary)
    doc.circle(margin + 16, y + 26 + (i * 11), 1.5, 'F')
    doc.text(pro, margin + 22, y + 28 + (i * 11))
  })

  // Gas Cons
  drawBox(margin + cardWidth + 8, y, cardWidth, 66, colors.lightRed, colors.error, 0.5)
  doc.setTextColor(...colors.error)
  doc.setFontSize(10)
  doc.setFont("helvetica", "bold")
  doc.text("Disadvantages", margin + cardWidth + 20, y + 14)
  
  doc.setTextColor(...colors.text)
  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  
  const gasCons = [
    "No grant available",
    "Rising running costs",
    "High carbon emissions",
    "Being phased out by 2035"
  ]
  
  gasCons.forEach((con, i) => {
    doc.setDrawColor(...colors.error)
    doc.setLineWidth(0.8)
    doc.line(margin + cardWidth + 24, y + 26 + (i * 11), margin + cardWidth + 26, y + 26 + (i * 11))
    doc.text(con, margin + cardWidth + 30, y + 28 + (i * 11))
  })

  y += 81

  // Verdict - Clean callout
  drawBox(margin, y, contentWidth, 38, colors.lightBlue, colors.primary, 1)
  doc.setTextColor(...colors.primary)
  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("Bottom Line", margin + 12, y + 14)
  
  doc.setTextColor(...colors.text)
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  const verdict = doc.splitTextToSize(
    "With the £7,500 grant and lower running costs, heat pumps offer excellent long-term value for UK homeowners committed to sustainability.",
    contentWidth - 24
  )
  doc.text(verdict, margin + 12, y + 26)

  // ===== PAGE 6: FINDING INSTALLERS =====
  addNewPage()
  addSectionHeader("Finding Installers", colors.primary)

  // Introduction
  doc.setTextColor(...colors.text)
  doc.setFontSize(11)
  doc.setFont("helvetica", "normal")
  const installerIntro = doc.splitTextToSize(
    "We connect you with vetted, MCS-certified installers across the UK including London, Manchester, Birmingham, Leeds, Scotland, Wales, and beyond.",
    contentWidth - 24
  )
  drawBox(margin, y, contentWidth, 35, colors.lightBlue, undefined as any)
  doc.text(installerIntro, margin + 12, y + 14)

  y += 48

  // Questions section
  doc.setTextColor(...colors.text)
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("Questions to Ask Installers", margin, y)
  y += 12

  drawBox(margin, y, contentWidth, 95, colors.lightGray, undefined as any)
  
  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(...colors.text)
  
  const questions = [
    "Are you MCS-certified?",
    "How many heat pumps have you installed?",
    "Can you provide customer references?",
    "What heat pump brands do you work with?",
    "Will you conduct a full heat loss survey?",
    "What warranty coverage is included?",
    "How do you handle the grant application?",
    "What exactly is included in your quote?"
  ]
  
  questions.forEach((q, i) => {
    const xPos = i < 4 ? margin + 12 : margin + (contentWidth / 2) + 6
    const yPos = y + 14 + ((i % 4) * 19)
    
    // Number circle
    doc.setFillColor(...colors.primary)
    doc.circle(xPos + 4, yPos - 2, 4, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(8)
    doc.setFont("helvetica", "bold")
    doc.text(`${(i % 4) + 1}`, xPos + 4, yPos, { align: "center" })
    
    // Question text
    doc.setTextColor(...colors.text)
    doc.setFontSize(9)
    doc.setFont("helvetica", "normal")
    const wrappedQ = doc.splitTextToSize(q, (contentWidth / 2) - 30)
    doc.text(wrappedQ, xPos + 10, yPos)
  })

  y += 110

  // MCS importance callout
  drawBox(margin, y, contentWidth, 48, colors.lightOrange, colors.warning, 1)
  doc.setTextColor(...colors.warning)
  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("Why MCS Certification Matters", margin + 12, y + 16)
  
  doc.setTextColor(...colors.text)
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  const mcsText = doc.splitTextToSize(
    "MCS certification is mandatory to qualify for the £7,500 grant. Always verify your installer's certification before signing any contracts.",
    contentWidth - 24
  )
  doc.text(mcsText, margin + 12, y + 30)

  // ===== PAGE 7: NEXT STEPS =====
  addNewPage()
  
  // Clean header
  y = 35
  doc.setTextColor(...colors.text)
  doc.setFontSize(20)
  doc.setFont("helvetica", "bold")
  doc.text("Next Steps", pageWidth / 2, y, { align: "center" })
  
  y += 8
  doc.setFontSize(11)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(...colors.textSecondary)
  doc.text("Getting started is simple", pageWidth / 2, y, { align: "center" })

  y += 22

  // Steps - Clean numbered list
  const nextSteps = [
    { title: "Check Eligibility", desc: "Free 90-second checker for the £7,500 grant" },
    { title: "Get Quotes", desc: "Compare up to 3 certified installers" },
    { title: "Compare & Choose", desc: "Pick the best option for your home" },
    { title: "Claim Your Grant", desc: "£7,500 deducted from your final bill" }
  ]

  nextSteps.forEach((step, i) => {
    drawBox(margin, y, contentWidth, 32, colors.lightGray, undefined as any)
    
    // Number circle - larger and cleaner
    doc.setFillColor(...colors.primary)
    doc.circle(margin + 18, y + 16, 8, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text(`${i + 1}`, margin + 18, y + 19, { align: "center" })
    
    // Text content
    doc.setTextColor(...colors.text)
    doc.setFontSize(11)
    doc.setFont("helvetica", "bold")
    doc.text(step.title, margin + 32, y + 13)
    
    doc.setTextColor(...colors.textSecondary)
    doc.setFontSize(9)
    doc.setFont("helvetica", "normal")
    doc.text(step.desc, margin + 32, y + 23)
    
    y += 40
  })

  y += 10

  // CTA Section - Modern gradient-style
  drawBox(margin, y, contentWidth, 70, colors.primary, undefined as any)
  
  // Main CTA
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(20)
  doc.setFont("helvetica", "bold")
  doc.text("Get Started Today", pageWidth / 2, y + 20, { align: "center" })
  
  // Domain with modern styling
  doc.setFontSize(13)
  doc.setFont("helvetica", "normal")
  doc.text("getheatpumpquotes.co.uk", pageWidth / 2, y + 36, { align: "center" })
  
  // Modern trust badges with separators
  doc.setFontSize(9)
  const badges = ["Free Service", "MCS-Certified", "No Obligation"]
  const badgeY = y + 52
  const badgeSpacing = 52
  const startX = pageWidth / 2 - badgeSpacing
  
  badges.forEach((badge, i) => {
    const badgeX = startX + (i * badgeSpacing)
    doc.text(badge, badgeX, badgeY, { align: "center" })
    
    // Add separator dot between badges
    if (i < badges.length - 1) {
      doc.setFillColor(255, 255, 255)
      doc.circle(badgeX + (badgeSpacing / 2), badgeY - 1.5, 0.8, 'F')
    }
  })
  
  // QR code placeholder text (optional for future enhancement)
  doc.setFontSize(7)
  doc.setTextColor(200, 220, 255)
  doc.text("Scan QR code or visit website to get started", pageWidth / 2, y + 62, { align: "center" })

  // Professional footer with line separator
  const footerY = pageHeight - 20
  
  // Separator line
  doc.setDrawColor(200, 200, 200)
  doc.setLineWidth(0.2)
  doc.line(margin, footerY, pageWidth - margin, footerY)
  
  // Footer text
  doc.setTextColor(...colors.textTertiary)
  doc.setFontSize(8)
  doc.text("Get Heat Pump Quotes", pageWidth / 2, footerY + 6, { align: "center" })
  doc.setFontSize(7)
  doc.text("© 2025 All rights reserved • Independent Heat Pump Comparison Service", pageWidth / 2, footerY + 12, { align: "center" })

  return doc
}

function PDFDownloadModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  // Test function to directly generate PDF without email
  const testPDFGeneration = (action: 'download' | 'view') => {
    try {
      console.log('=== TEST PDF GENERATION ===')
      console.log('Action:', action)
      
      const doc = generateHeatPumpGuide()
      console.log('PDF generated successfully')
      
      if (action === 'download') {
        doc.save("Heat-Pump-vs-Gas-Boiler-Guide-2025.pdf")
        console.log('Download triggered')
      } else {
        const pdfBlob = doc.output('blob')
        console.log('PDF blob created:', pdfBlob.size, 'bytes')
        
        const pdfUrl = URL.createObjectURL(pdfBlob)
        console.log('PDF URL:', pdfUrl)
        
        const newWindow = window.open(pdfUrl, '_blank')
        console.log('Window opened:', !!newWindow)
        
        setTimeout(() => {
          URL.revokeObjectURL(pdfUrl)
        }, 1000)
      }
      
      alert('PDF test successful! Check console for details.')
    } catch (err) {
      console.error('PDF test failed:', err)
      alert('PDF test failed: ' + (err as Error).message)
    }
  }

  const handlePDFAction = async (e: React.FormEvent, action: 'download' | 'view') => {
    e.preventDefault()
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Generate the PDF first (always works)
      console.log('Generating PDF...')
      const doc = generateHeatPumpGuide()
      
      // Try to send email (optional - don't fail if this doesn't work)
      try {
        console.log('Sending email to API...')
        const response = await fetch('/api/pdf-download', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        })

        if (response.ok) {
          console.log('Email sent successfully')
        } else {
          console.warn('Email API failed, but continuing with PDF')
        }
      } catch (emailError) {
        // Email failed, but that's okay - still show the PDF
        console.warn('Email error (non-critical):', emailError)
      }
      
      // Open or download the PDF
      if (action === 'download') {
        console.log('Downloading PDF...')
        doc.save("Heat-Pump-vs-Gas-Boiler-Guide-2025.pdf")
      } else {
        console.log('Opening PDF in browser...')
        // Open PDF in new browser tab
        const pdfBlob = doc.output('blob')
        const pdfUrl = URL.createObjectURL(pdfBlob)
        
        // Open in new window
        const newWindow = window.open(pdfUrl, '_blank')
        
        if (!newWindow) {
          // If popup blocked, try download instead
          console.warn('Popup blocked, downloading instead')
          doc.save("Heat-Pump-vs-Gas-Boiler-Guide-2025.pdf")
        }
        
        // Clean up the URL after a delay
        setTimeout(() => {
          URL.revokeObjectURL(pdfUrl)
        }, 1000)
      }
      
      console.log('PDF action completed successfully')
      setSuccess(true)
      
      // Reset after showing success
      setTimeout(() => {
        setEmail("")
        setSuccess(false)
        onClose()
      }, 2500)
      
    } catch (err) {
      console.error('PDF generation error:', err)
      setError("Failed to generate PDF. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-fade-in-up">
        {success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#34c759]/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#34c759]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-[24px] font-semibold text-[#1d1d1f] mb-2">Success!</h2>
            <p className="text-[15px] text-[#6e6e73]">Check your email for a confirmation and the guide link.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f]">
                Get Your Free Guide
              </h2>
              <button
                onClick={onClose}
                className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors p-1"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#6e6e73] mb-4">
              Download the complete 2025 Heat Pump vs Gas Boiler comparison guide.
            </p>

            {/* What's Included */}
            <div className="bg-[#f5f5f7] rounded-xl p-4 mb-6">
              <p className="text-[13px] font-semibold text-[#1d1d1f] mb-2">What's Inside:</p>
              <ul className="space-y-1">
                <li className="text-[12px] text-[#6e6e73] flex items-center gap-2">
                  <span className="text-[#34c759]">✓</span> Installation costs breakdown
                </li>
                <li className="text-[12px] text-[#6e6e73] flex items-center gap-2">
                  <span className="text-[#34c759]">✓</span> 5-year running costs comparison
                </li>
                <li className="text-[12px] text-[#6e6e73] flex items-center gap-2">
                  <span className="text-[#34c759]">✓</span> £7,500 grant eligibility checklist
                </li>
                <li className="text-[12px] text-[#6e6e73] flex items-center gap-2">
                  <span className="text-[#34c759]">✓</span> Heat pump pros & cons analysis
                </li>
              </ul>
            </div>

            <form onSubmit={(e) => handlePDFAction(e, 'download')} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError("")
                  }}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-[16px] focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20 text-[#1d1d1f] min-h-[44px]"
                  required
                />
                {error && (
                  <p className="text-[13px] text-red-500 mt-2 font-medium">{error}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  type="button"
                  onClick={(e) => handlePDFAction(e, 'view')}
                  disabled={isLoading}
                  className="flex-1 bg-[#0071e3] hover:bg-[#0077ed] text-white py-3.5 text-[15px] sm:text-[16px] rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[44px]"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Open in Browser
                    </span>
                  )}
                </Button>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-[#34c759] hover:bg-[#30b350] text-white py-3.5 text-[15px] sm:text-[16px] rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[44px]"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </span>
                  )}
                </Button>
              </div>
            </form>

            <p className="text-[12px] sm:text-[13px] text-[#6e6e73] text-center mt-4">
              We respect your privacy. No spam, ever.
            </p>

            {/* Debug Test Buttons - Remove in production */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-[11px] text-[#86868b] text-center mb-2">Quick Test (No Email Required)</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => testPDFGeneration('view')}
                  className="flex-1 text-[13px] py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  🧪 Test Open
                </button>
                <button
                  type="button"
                  onClick={() => testPDFGeneration('download')}
                  className="flex-1 text-[13px] py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  🧪 Test Download
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function ExitIntentPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("")
  const [subscribeTips, setSubscribeTips] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Simulate API call - in production, this would send to backend
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setSubmitted(true)
      
      // Set cookie to prevent showing again
      document.cookie = "exitIntentShown=true; path=/; max-age=2592000" // 30 days
      
      setTimeout(() => {
        onClose()
      }, 2000)
    } catch (err) {
      setError("Failed to send. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-10 animate-fade-in-up max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#6e6e73] hover:text-[#1d1d1f] transition-colors p-2"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#34c759]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-2">Thanks!</h3>
            <p className="text-[15px] sm:text-[16px] text-[#6e6e73]">Check your email for the free guide</p>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Left: Icon/Illustration */}
              <div className="hidden sm:flex justify-center">
                <div className="w-40 h-40 bg-linear-to-br from-[#0071e3]/20 to-[#34c759]/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-24 h-24 text-[#0071e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Right: Content */}
              <div>
                <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] mb-2 leading-tight">
                  Wait! Before You Go...
                </h2>
                <p className="text-[16px] sm:text-[17px] text-[#6e6e73] mb-6 leading-relaxed">
                  Download our free guide: <strong>5 Questions to Ask Every Heat Pump Installer</strong>
                </p>

                {/* What's Included */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[14px] sm:text-[15px] text-[#1d1d1f]">Red flag warning signs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[14px] sm:text-[15px] text-[#1d1d1f]">Price negotiation tips</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[14px] sm:text-[15px] text-[#1d1d1f]">Grant application checklist</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#34c759] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[14px] sm:text-[15px] text-[#1d1d1f]">Installer comparison worksheet</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setError("")
                      }}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-[16px] focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20 text-[#1d1d1f] min-h-[44px]"
                      required
                    />
                    {error && (
                      <p className="text-[13px] text-red-500 mt-2 font-medium">{error}</p>
                    )}
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={subscribeTips}
                      onChange={(e) => setSubscribeTips(e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300 text-[#0071e3] focus:ring-[#0071e3]"
                    />
                    <span className="text-[14px] sm:text-[15px] text-[#6e6e73]">Send me heat pump tips & exclusive offers</span>
                  </label>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-3.5 sm:py-4 text-[16px] sm:text-[17px] rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[44px]"
                  >
                    {isLoading ? "Sending..." : "Send Me The Free Guide →"}
                  </Button>
                </form>

                <p className="text-[12px] sm:text-[13px] text-[#6e6e73] text-center mt-4">
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function SocialProofBanner() {
  const messages = [
    { text: "Sarah from Manchester just checked", highlight: "Qualified for £7,500!" },
    { text: "James from Bristol compared 3 installers", highlight: "Saved £2,100" },
    { text: "Emma from Leeds got quotes", highlight: "in 24 hours" },
    { text: "1,247 homeowners used this checker", highlight: "this month" },
    { text: "Michael from Glasgow found", highlight: "grant-approved installer" }
  ];
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 4500);
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => setCurrent((prev) => (prev + 1) % messages.length), 250);
      setTimeout(() => setFade(false), 4500);
    }, 5500);
    return () => { clearInterval(interval); clearTimeout(timeout) };
  }, [messages.length]);

  return (
    <div className="w-full flex justify-start mt-8 mb-8">
      <div
        className="group relative inline-flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.25)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.25)',
          opacity: fade ? 1 : 0.4,
          transform: fade ? 'translateY(0) scale(1)' : 'translateY(4px) scale(0.98)',
          transition: 'opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
        aria-live="polite"
      >
        {/* Animated gradient orb icon */}
        <div className="relative shrink-0">
          <div 
            className="absolute inset-0 rounded-full blur-md bg-linear-to-r from-[#34c759] to-[#00d84f] opacity-75 animate-pulse"
            style={{ width: '20px', height: '20px' }}
          />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="relative z-10">
            <circle cx="10" cy="10" r="10" fill="#34c759"/>
            <path d="M14.19 8.23a.75.75 0 00-1.08-1.04l-3.24 3.3-1.1-1.14A.75.75 0 007.6 10.5l1.65 1.7a.75.75 0 001.08 0l3.86-3.97z" fill="#fff"/>
          </svg>
        </div>

        {/* Text content with dual-tone styling */}
        <div className="flex items-baseline gap-1.5 text-white">
          <span 
            className="text-[15px] sm:text-[16px] font-normal"
            style={{ letterSpacing: '0.3px', opacity: 0.85 }}
          >
            {messages[current].text}
          </span>
          <span 
            className="text-[15px] sm:text-[16px] font-semibold"
            style={{ 
              letterSpacing: '0.3px',
              background: 'linear-gradient(135deg, #34c759 0%, #00d84f 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: 'none'
            }}
          >
            {messages[current].highlight}
          </span>
        </div>
      </div>
    </div>
  );
}


export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showPDFModal, setShowPDFModal] = useState(false)
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [exitIntentShown, setExitIntentShown] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

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

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(".opacity-0")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Exit Intent Popup - Desktop (mouse leaving)
  useEffect(() => {
    // Check if already shown in this session (cookie)
    const hasCookie = document.cookie.includes("exitIntentShown=true")
    if (hasCookie) {
      setExitIntentShown(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from top of viewport
      if (e.clientY <= 0 && !exitIntentShown && !showExitIntent) {
        setShowExitIntent(true)
        setExitIntentShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [exitIntentShown, showExitIntent])

  // Exit Intent Popup - Mobile (45 seconds on page)
  useEffect(() => {
    const hasCookie = document.cookie.includes("exitIntentShown=true")
    if (hasCookie) return

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (!isMobile) return

    const timer = setTimeout(() => {
      if (!exitIntentShown && !showExitIntent) {
        setShowExitIntent(true)
        setExitIntentShown(true)
      }
    }, 45000) // 45 seconds

    return () => clearTimeout(timer)
  }, [exitIntentShown, showExitIntent])

  return (
    <>
      <Head>
        <title>Heat Pump Grant Checker UK - Check £7,500 Eligibility in 90s</title>
        <meta name="description" content="Free heat pump grant eligibility checker. Find out if you qualify for £7,500 government funding in 90 seconds. Compare quotes from vetted UK installers. Used by 1,247 homeowners." />
        <meta name="keywords" content="heat pump grant UK, heat pump grant checker, £7,500 grant eligibility, government heat pump grant, air source heat pump, heat pump installation costs, heat pump quotes, MCS certified installers, heat pump cost comparison" />
      </Head>
      <div className="min-h-screen bg-white text-[#1d1d1f]">
      {/* Header - Clean navigation */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrollY > 50 ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "saturate(180%) blur(20px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <Logo className="h-9 sm:h-11 w-auto transition-transform duration-300 group-hover:scale-105" />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#how-it-works" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                How it works
              </Link>
              <Link href="#faq" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                FAQ
              </Link>
              <Link href="/about" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                Who We Are
              </Link>
              <Link href="/quiz">
                <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 min-h-[44px]">
                  Get Free Quotes
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1d1d1f] hover:text-[#0071e3] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40 animate-fade-in-up">
            <nav className="flex flex-col px-4 py-6 gap-4">
              <Link 
                href="#how-it-works" 
                className="text-base font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors py-3 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it works
              </Link>
              <Link 
                href="#faq" 
                className="text-base font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors py-3 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/about" 
                className="text-base font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors py-3 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Who We Are
              </Link>
              <Link href="/quiz" className="mt-4" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-base px-6 py-3 rounded-full transition-all duration-300 min-h-[44px]">
                  Get Free Quotes
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section - Split layout with image */}
      <section className="relative pt-24 pb-12 bg-linear-to-br from-[#0071e3] to-[#0056b3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 sm:py-12">
            {/* Left content */}
            <div className="text-white py-6 sm:py-12 opacity-0 animate-fade-in-up">
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-semibold mb-6 sm:mb-8 tracking-tight leading-[1.1]">
                Find Out If You Qualify for £7,500 Grant + Compare Installer Quotes
              </h1>
              
              {/* Social Proof Banner - Positioned prominently */}
              <SocialProofBanner />

              <p className="text-[17px] sm:text-[19px] md:text-[22px] lg:text-[24px] mb-8 sm:mb-10 leading-[1.4] opacity-85">
                Check your eligibility in 90 seconds, then compare free quotes from 3 vetted installers near you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quiz" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#0071e3] px-8 sm:px-10 py-3 sm:py-5 text-[17px] sm:text-[19px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-lg min-h-[44px]"
                  >
                    Get Free Quotes
                  </Button>
                </Link>
                <Link href="/urgent-inquiry" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#FF3B30] hover:bg-[#FF2D1F] text-white px-8 sm:px-10 py-3 sm:py-5 text-[17px] sm:text-[19px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-lg min-h-[44px] animate-pulse"
                  >
                    Urgent Callback
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right image */}
            <div className="relative w-full max-w-[520px] mx-auto lg:mx-0 lg:ml-auto opacity-0 animate-fade-in-up aspect-square" style={{ animationDelay: "0.2s" }}>
              <img
                src="/modern-heat-pump-installation.jpg"
                alt="Heat pump installation"
                className="w-full h-full object-cover rounded-[16px] sm:rounded-[24px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Apple-Inspired Minimal Design */}
      <section className="py-24 sm:py-28 md:py-32 bg-[#fbfbfd]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Headline & Subheadline */}
          <div className="text-center mb-16 sm:mb-20 md:mb-24 opacity-0 animate-fade-in-up-scroll">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-semibold text-[#1d1d1f] mb-5 sm:mb-6 tracking-tight leading-[1.1]">
              Independent. Trusted. Free.
            </h2>
            <p className="text-[17px] sm:text-[19px] md:text-[21px] text-[#86868b] leading-relaxed max-w-xl mx-auto">
              We help UK homeowners compare heat pump installers and access government grants — without pressure or bias.
            </p>
          </div>

          {/* Features Grid - Clean Apple Style */}
          <div className="max-w-5xl mx-auto opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
              {/* Item 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-2xl bg-[#0071e3]/8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#0071e3]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#1d1d1f] font-medium leading-snug">
                  Independent<br />comparison
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-2xl bg-[#34c759]/8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#34c759]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#1d1d1f] font-medium leading-snug">
                  No sales<br />pressure
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-2xl bg-[#ff9500]/8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#ff9500]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#1d1d1f] font-medium leading-snug">
                  MCS-certified<br />installers
                </p>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-2xl bg-[#5856d6]/8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#5856d6]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#1d1d1f] font-medium leading-snug">
                  £7,500 grant<br />guidance
                </p>
              </div>

              {/* Item 5 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-2xl bg-[#30d158]/8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#30d158]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#1d1d1f] font-medium leading-snug">
                  100% free<br />service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-6 sm:py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center">
            <div className="flex items-center gap-2 text-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#1d1d1f]">Vetted Installers</span>
            </div>
            <div className="flex items-center gap-2 text-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#1d1d1f]">Free Quotes</span>
            </div>
            <div className="flex items-center gap-2 text-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#1d1d1f]">No Obligation</span>
            </div>
            <div className="flex items-center gap-2 text-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#1d1d1f]">MCS Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - 3 steps */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-semibold text-center mb-4 sm:mb-6 tracking-tight text-[#1d1d1f] opacity-0 animate-fade-in-up-scroll">
            How it works
          </h2>
          <p className="text-[16px] sm:text-[17px] md:text-[19px] text-[#6e6e73] text-center mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto opacity-0 animate-fade-in-up-scroll px-4" style={{ animationDelay: "0.1s" }}>
            Get quotes from vetted installers in 3 simple steps
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0071e3] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-[13px] sm:text-[14px] font-semibold text-[#0071e3] mb-2">STEP 1</div>
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">Tell us about your home</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-normal">
                Answer 10 quick questions about your property and heating needs. Takes less than 2 minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.3s" }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#34c759] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="text-[13px] sm:text-[14px] font-semibold text-[#34c759] mb-2">STEP 2</div>
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">Installers contact you</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-normal">
                Up to 3 vetted, MCS-certified installers will reach out within 24 hours to arrange free surveys.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.4s" }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ff9500] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-[13px] sm:text-[14px] font-semibold text-[#ff9500] mb-2">STEP 3</div>
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">Compare & choose</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-normal">
                Review quotes, compare prices and service, then choose the installer that's right for you.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10 sm:mt-12 md:mt-16 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.5s" }}>
            <Link href="/quiz" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 sm:px-10 py-3 sm:py-5 text-[17px] sm:text-[19px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-lg min-h-[44px]"
              >
                Get Free Quotes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-20 sm:py-28 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 opacity-0 animate-fade-in-up-scroll">
            <p className="text-[13px] sm:text-[14px] font-semibold text-[#0071e3] mb-3 tracking-[0.15em] uppercase">
              Why Homeowners Choose Us
            </p>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.1] mb-6">
              Built on trust, not commissions
            </h2>
            <p className="text-[17px] sm:text-[19px] text-[#6e6e73] leading-normal max-w-2xl mx-auto">
              We're independent, transparent, and focused entirely on helping you find the right heat pump.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Trust Signal 1 */}
            <div className="bg-linear-to-br from-[#f5f5f7] to-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0071e3]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#0071e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1d1d1f] mb-3">
                Independent & Unbiased
              </h3>
              <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.6]">
                We're not installers trying to sell you something. We're an independent comparison service providing honest advice. No hidden agenda. No commission bias.
              </p>
            </div>

            {/* Trust Signal 2 */}
            <div className="bg-linear-to-br from-[#f5f5f7] to-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.15s" }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#34c759]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#34c759]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1d1d1f] mb-3">
                Save Time & Money
              </h3>
              <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.6]">
                One form, up to 3 quotes. Installers compete for your business, driving better prices. We help you compare everything easily.
              </p>
            </div>

            {/* Trust Signal 3 */}
            <div className="bg-linear-to-br from-[#f5f5f7] to-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ff9500]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#ff9500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1d1d1f] mb-3">
                Only Vetted Professionals
              </h3>
              <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.6]">
                Every installer is MCS-certified and background-checked. No cowboys. No pushy salespeople. Only quality professionals.
              </p>
            </div>

            {/* Trust Signal 4 */}
            <div className="bg-linear-to-br from-[#f5f5f7] to-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.25s" }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#34c759]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#34c759]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1d1d1f] mb-3">
                Grant Experts
              </h3>
              <p className="text-[16px] sm:text-[17px] text-[#6e6e73] leading-[1.6]">
                We help you maximize your £7,500 government grant. Most people qualify but don't know it. We make sure you get every pound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Download Section - Apple Style */}
      <section className="py-16 sm:py-20 md:py-24 bg-linear-to-br from-white via-[#f5f5f7] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="opacity-0 animate-fade-in-up-scroll">
              <p className="text-[14px] sm:text-[15px] font-semibold text-[#0071e3] mb-3 sm:mb-4 tracking-wide">BUYER'S GUIDE</p>
              <h2 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-semibold text-[#1d1d1f] mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Not Ready for Quotes Yet?
              </h2>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#6e6e73] mb-8 sm:mb-10 leading-normal">
                Download our free 2025 Heat Pump vs Gas Boiler cost comparison guide
              </p>

              {/* Features List */}
              <div className="space-y-4 sm:space-y-5 mb-10 sm:mb-12">
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[16px] sm:text-[17px] text-[#1d1d1f] leading-relaxed">Installation costs breakdown</span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[16px] sm:text-[17px] text-[#1d1d1f] leading-relaxed">Running costs comparison (5-year projection)</span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[16px] sm:text-[17px] text-[#1d1d1f] leading-relaxed">Grant eligibility requirements</span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34c759] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[16px] sm:text-[17px] text-[#1d1d1f] leading-relaxed">Pros and cons of each system</span>
                </div>
              </div>

              <button
                onClick={() => setShowPDFModal(true)}
                className="group inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 md:py-5 bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] min-h-[44px] text-[16px] sm:text-[17px] md:text-[18px] shadow-lg"
              >
                Download Free Guide
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Right: Premium Card Design */}
            <div className="opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="relative group">
                {/* Background gradient orb effect */}
                <div className="absolute -inset-4 sm:-inset-6 bg-linear-to-br from-[#0071e3]/20 via-[#34c759]/10 to-[#0071e3]/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                
                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  {/* PDF Icon */}
                  <div className="mb-6 sm:mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-[#0071e3] to-[#0056b3] rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-[22px] sm:text-[24px] font-semibold text-[#1d1d1f] mb-3">2025 Comparison Guide</h3>
                  <p className="text-[15px] sm:text-[16px] text-[#6e6e73] mb-6 leading-relaxed">
                    Expert analysis comparing heat pumps and gas boilers across cost, performance, and environmental impact.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#34c759] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[14px] text-[#6e6e73]">PDF format • 12 pages</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#34c759] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[14px] text-[#6e6e73]">100% free • No registration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 sm:py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
            <div>
              <div className="text-[40px] sm:text-[48px] md:text-[56px] font-semibold text-[#0071e3] mb-2">10,000+</div>
              <p className="text-[15px] sm:text-[17px] text-[#6e6e73]">Homeowners helped</p>
            </div>
            <div>
              <div className="text-[40px] sm:text-[48px] md:text-[56px] font-semibold text-[#0071e3] mb-2">£7,500</div>
              <p className="text-[15px] sm:text-[17px] text-[#6e6e73]">Average grant received</p>
            </div>
            <div>
              <div className="text-[40px] sm:text-[48px] md:text-[56px] font-semibold text-[#0071e3] mb-2">4.8★</div>
              <p className="text-[15px] sm:text-[17px] text-[#6e6e73]">Average installer rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-semibold text-center mb-4 tracking-tight text-[#1d1d1f] opacity-0 animate-fade-in-up-scroll">
            Frequently asked questions
          </h2>
          <p className="text-[16px] sm:text-[17px] md:text-[19px] text-[#6e6e73] text-center mb-10 sm:mb-12 md:mb-16 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
            Everything you need to know about the heat pump grant
          </p>

          <div className="space-y-3 sm:space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">How much does a heat pump cost in the UK?</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-[1.6]">
                Installation costs range from £8,000-£15,000 depending on property size and system type. With the £7,500 government grant, most homeowners pay £5,000-£7,500.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">Do I qualify for the £7,500 grant?</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-[1.6]">
                You must own your property and be replacing a fossil fuel system (gas, oil, or LPG boiler). Take our 90-second checker to find out.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">How long does installation take?</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-[1.6]">
                Typical installation takes 2-3 days once approved. Grant application and approval takes 2-4 weeks.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.5s" }}>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">Are heat pumps expensive to run?</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-[1.6]">
                Heat pumps are 3x more efficient than gas boilers. Average running costs: £500-800/year vs £1,200-1,500 for gas.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.6s" }}>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">Do I need to replace my radiators?</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-[1.6]">
                Not always. Many homes can keep existing radiators. Installers assess during survey.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.7s" }}>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1d1d1f] mb-2 sm:mb-3">Is this service really free?</h3>
              <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-[1.6]">
                Yes. We connect you with vetted installers who pay us a referral fee. You never pay us anything.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10 sm:mt-12 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "1s" }}>
            <Link href="/quiz" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 sm:px-10 py-3 sm:py-5 text-[17px] sm:text-[19px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-lg min-h-[44px]"
              >
                Get Free Quotes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Blue section */}
      <section className="py-16 sm:py-20 md:py-24 bg-linear-to-br from-[#0071e3] to-[#0056b3] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-semibold mb-4 sm:mb-6 tracking-tight leading-[1.1] text-balance opacity-0 animate-fade-in-up-scroll">
            Ready To Compare Heat Pump Quotes?
          </h2>
          <p className="text-[18px] sm:text-[21px] md:text-[24px] lg:text-[28px] mb-8 sm:mb-10 md:mb-12 leading-[1.3] opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.1s" }}>
            Get free quotes from vetted installers in your area. Most customers qualify for £7,500 grant.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 animate-fade-in-up-scroll" style={{ animationDelay: "0.2s" }}>
            <Link href="/quiz" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#0071e3] px-8 sm:px-10 md:px-12 py-3 sm:py-5 md:py-6 text-[18px] sm:text-[19px] md:text-[21px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-xl min-h-[44px]"
              >
                Get Free Quotes →
              </Button>
            </Link>
            <Link href="/urgent-inquiry" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#FF3B30] hover:bg-[#FF2D1F] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-5 md:py-6 text-[18px] sm:text-[19px] md:text-[21px] rounded-full h-auto font-semibold transition-all duration-300 hover:scale-[1.03] border-0 shadow-xl min-h-[44px]"
              >
                Urgent Callback
              </Button>
            </Link>
          </div>

          <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white/70 mt-6 sm:mt-8">No obligation • 100% free • Takes 2 minutes</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-[#d2d2d7] py-10 sm:py-12 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <Logo className="h-10 sm:h-11 w-auto mb-3 sm:mb-4" />
              <p className="text-[13px] sm:text-[14px] font-semibold text-[#1d1d1f] mb-2">Get Heat Pump Quotes – Independent Comparison Service</p>
              <p className="text-[13px] sm:text-[14px] text-[#6e6e73]">
                Helping UK homeowners check £7,500 grant eligibility and compare quotes from vetted MCS-certified installers. Independent, unbiased, completely free.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-[13px] sm:text-[14px] font-semibold text-[#1d1d1f] mb-3 sm:mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/quiz" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Check Eligibility
                </Link>
                <Link href="/installation" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Get Quote
                </Link>
                <Link href="#how-it-works" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  How It Works
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[13px] sm:text-[14px] font-semibold text-[#1d1d1f] mb-3 sm:mb-4">Resources</h4>
              <div className="space-y-2">
                <Link href="#faq" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  FAQ
                </Link>
                <Link href="/blog" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Blog
                </Link>
                <Link href="/about" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  About Us
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[13px] sm:text-[14px] font-semibold text-[#1d1d1f] mb-3 sm:mb-4">Contact</h4>
              <div className="space-y-2">
                <Link href="/contact" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Contact Us
                </Link>
                <Link href="/contact" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                  Support
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-[#d2d2d7] pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              <p className="text-[11px] sm:text-[12px] text-[#86868b] text-center sm:text-left">
                © 2025 Get Heat Pump Quotes. All rights reserved.
              </p>
              <div className="flex gap-4 sm:gap-6">
                <Link href="/privacy" className="text-[11px] sm:text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-[11px] sm:text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* PDF Download Modal */}
      <PDFDownloadModal isOpen={showPDFModal} onClose={() => setShowPDFModal(false)} />

      {/* Exit Intent Popup */}
      <ExitIntentPopup isOpen={showExitIntent} onClose={() => setShowExitIntent(false)} />
    </div>
    </>
  )
}
