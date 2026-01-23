import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Heat Pump Installers SW London | Free Quotes",
  description:
    "Compare MCS-certified heat pump installers in South West London. Free quotes, £7,500 grant support. Serving Merton, Kingston, Putney, and more.",
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/installers/london/south-west-london",
  },
}

export default function SouthWestLondonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
