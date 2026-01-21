import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Air Source Heat Pump Quotes UK - Compare Installers & Check £7,500 Grant Eligibility",
  description:
    "Independent Air Source Heat Pump comparison service. Check if you qualify for £7,500 government grant in 90 seconds, then compare free quotes from vetted MCS installers across the UK.",
  keywords:
    "Air Source Heat Pump quotes UK, Air Source Heat Pump installers, Air Source Heat Pump comparison, £7,500 Air Source Heat Pump grant, MCS certified installers, Air Source Heat Pumps, Air Source Heat Pump installation costs, Air Source Heat Pump grant eligibility",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HeatPump UK",
  "description": "Independent Air Source Heat Pump comparison service helping UK homeowners find vetted installers and qualify for £7,500 government grants",
  "url": "https://www.getheatpumpquotes.co.uk",
  "logo": "https://www.getheatpumpquotes.co.uk/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "areaServed": "GB",
    "availableLanguage": "English"
  }
}

// Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "HeatPump UK",
  "url": "https://www.getheatpumpquotes.co.uk",
  "description": "Compare Air Source Heat Pump installers and check £7,500 grant eligibility. Free, independent comparison service for UK homeowners."
}

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Air Source Heat Pump Installer Comparison",
  "provider": {
    "@type": "Organization",
    "name": "HeatPump UK"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "GBP",
    "description": "Free Air Source Heat Pump installer comparison and grant eligibility checking"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
