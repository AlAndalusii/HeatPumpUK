import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | HeatPump UK - Independent Comparison Service",
  description:
    "HeatPump UK is an independent comparison platform helping UK homeowners check £7,500 heat pump grant eligibility, compare MCS-certified installers, and get free quotes.",
  keywords:
    "heat pump installation, heat pump installers, £7,500 grant, MCS-certified installers, heat pump quotes UK, Boiler Upgrade Scheme",
  openGraph: {
    title: "About Us | HeatPump UK - Independent Comparison Service",
    description:
      "Independent comparison platform helping UK homeowners check £7,500 heat pump grant eligibility and compare MCS-certified installers.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | HeatPump UK - Independent Comparison Service",
    description:
      "Independent comparison platform helping UK homeowners check £7,500 heat pump grant eligibility and compare MCS-certified installers.",
  },
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}



