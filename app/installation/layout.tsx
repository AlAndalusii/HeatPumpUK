import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get Heat Pump Installation Quote | MCS Installers UK",
  description:
    "Get a free heat pump installation quote from MCS-certified installers. Professional air source and ground source heat pump installation across the UK.",
  keywords:
    "heat pump installation, MCS installers, heat pump fitting, professional heat pump service, heat pump commissioning",
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/installation",
  },
}

export default function InstallationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
