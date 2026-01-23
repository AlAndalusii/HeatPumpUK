import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Heat Pump Installers West London | Free Quotes",
  description:
    "Compare MCS-certified heat pump installers in West London. Free quotes, £7,500 grant support. Serving Hammersmith, Ealing, Richmond, and more.",
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/installers/london/west-london",
  },
}

export default function WestLondonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
