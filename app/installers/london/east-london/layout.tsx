import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Heat Pump Installers East London | Free Quotes",
  description:
    "Compare MCS-certified heat pump installers in East London. Free quotes, £7,500 grant support. Serving Tower Hamlets, Newham, Hackney, and more.",
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/installers/london/east-london",
  },
}

export default function EastLondonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
