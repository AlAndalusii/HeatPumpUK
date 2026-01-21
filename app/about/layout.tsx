import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About HeatPump UK | Independent Air Source Heat Pump Comparison Platform",
  description:
    "HeatPump UK is an independent comparison platform helping UK homeowners check £7,500 Air Source Heat Pump grant eligibility, compare MCS-certified installers, and get free quotes for Air Source Heat Pump installation.",
  keywords:
    "Air Source Heat Pump installation, Air Source Heat Pump installers, Air Source Heat Pumps, £7,500 Air Source Heat Pump grant, MCS-certified installers, Air Source Heat Pump quotes UK, Air Source Heat Pump comparison, Boiler Upgrade Scheme",
  openGraph: {
    title: "About HeatPump UK | Independent Air Source Heat Pump Comparison Platform",
    description:
      "Independent comparison platform helping UK homeowners check £7,500 Air Source Heat Pump grant eligibility and compare MCS-certified installers.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "About HeatPump UK | Independent Air Source Heat Pump Comparison Platform",
    description:
      "Independent comparison platform helping UK homeowners check £7,500 Air Source Heat Pump grant eligibility and compare MCS-certified installers.",
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



