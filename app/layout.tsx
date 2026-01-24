import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Heat Pump Quotes UK | £7,500 Grant Check",
  description:
    "Independent UK service helping you check if you can get the £7,500 heat pump grant in 90 seconds, then compare free quotes from vetted MCS-certified installers.",
  keywords:
    "heat pump quotes UK, heat pump installers, heat pump comparison, £7,500 grant, MCS certified installers, low-carbon heating, heat pump installation costs, boiler upgrade scheme",
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
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/",
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
  "description": "Independent heat pump comparison service helping UK homeowners find vetted installers and qualify for £7,500 government grants",
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
  "description": "Compare heat pump installers and check £7,500 grant eligibility. Free, independent comparison service for UK homeowners."
}

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Heat Pump Installer Comparison",
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
    "description": "Free heat pump installer comparison and grant eligibility checking"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
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
