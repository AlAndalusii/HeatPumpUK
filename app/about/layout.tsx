import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About HeatPump UK | Independent Heat Pump Comparison Platform",
  description:
    "HeatPump UK is an independent comparison platform helping UK homeowners check £7,500 heat pump grant eligibility, compare MCS-certified installers, and get free quotes for air source heat pump installation.",
  keywords:
    "heat pump installation, heat pump installers, air source heat pumps, £7,500 heat pump grant, MCS-certified installers, heat pump quotes UK, heat pump comparison, Boiler Upgrade Scheme",
  openGraph: {
    title: "About HeatPump UK | Independent Heat Pump Comparison Platform",
    description:
      "Independent comparison platform helping UK homeowners check £7,500 heat pump grant eligibility and compare MCS-certified installers.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "About HeatPump UK | Independent Heat Pump Comparison Platform",
    description:
      "Independent comparison platform helping UK homeowners check £7,500 heat pump grant eligibility and compare MCS-certified installers.",
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


