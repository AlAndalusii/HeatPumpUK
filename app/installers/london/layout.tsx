import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Heat Pump Installers London | Compare MCS Quotes",
  description:
    "Get free quotes from vetted heat pump installers in London. Check £7,500 grant eligibility and compare local MCS-certified installer prices.",
  keywords:
    "heat pump installers London, heat pump London, MCS installers London, heat pump installation London",
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/installers/london",
  },
}

export default function LondonInstallersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
