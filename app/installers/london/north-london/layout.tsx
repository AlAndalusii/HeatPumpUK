import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Heat Pump Installers North London | Free Quotes",
  description:
    "Compare MCS-certified heat pump installers in North London. Free quotes, £7,500 grant support. Serving Islington, Barnet, Enfield, and more.",
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/installers/london/north-london",
  },
}

export default function NorthLondonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
