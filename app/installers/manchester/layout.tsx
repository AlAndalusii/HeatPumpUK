import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Heat Pump Installers Manchester | Compare MCS Quotes",
  description:
    "Get free quotes from MCS-certified heat pump installers in Manchester. Check £7,500 grant eligibility. Serving all Greater Manchester.",
  keywords:
    "heat pump installers Manchester, heat pump Manchester, MCS installers Manchester, heat pump installation Manchester",
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/installers/manchester",
  },
}

export default function ManchesterInstallersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
