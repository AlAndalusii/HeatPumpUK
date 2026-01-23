import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Heat Pump Installers SE London | Free Quotes",
  description:
    "Compare MCS-certified heat pump installers in South East London. Free quotes, £7,500 grant support. Serving Greenwich, Lewisham, Bexley, and more.",
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/installers/london/south-east-london",
  },
}

export default function SouthEastLondonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
