import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Heat Pump Installers South London | Free Quotes",
  description:
    "Compare MCS-certified heat pump installers in South London. Free quotes, £7,500 grant support. Serving Wandsworth, Lambeth, Croydon, and more.",
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/installers/london/south-london",
  },
}

export default function SouthLondonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
