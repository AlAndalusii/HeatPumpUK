import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "£7,500 Heat Pump Grant UK | Government Heat Pump Grant Eligibility",
  description:
    "Check your heat pump grant eligibility in 2 minutes. Get up to £7,500 government heat pump grant for air source heat pumps & ground source systems. Available in England, Scotland & Wales. Heat pump grants UK, air source heat pump grants, heat pump cost covered.",
  keywords:
    "heat pump grant, heat pump grant uk, government heat pump grant, air source heat pump grants, heat pump grant eligibility, £7500 heat pump grant, heat pump grants scotland, heat pump grants wales, heat pump grant england, air source heat pump grant, ground source heat pump grant, heat pump cost, heat pump government grant",
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
