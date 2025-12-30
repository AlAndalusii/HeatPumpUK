import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Heat Pump Grant Checker UK - Check £7,500 Eligibility in 90s",
  description:
    "Free heat pump grant eligibility checker. Find out if you qualify for £7,500 government funding in 90 seconds. Compare quotes from vetted UK installers. Used by 1,247 homeowners.",
  keywords:
    "heat pump grant UK, heat pump grant checker, £7,500 grant eligibility, government heat pump grant, air source heat pump, heat pump installation costs, heat pump quotes, MCS certified installers, heat pump cost comparison",
  generator: "v0.app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
