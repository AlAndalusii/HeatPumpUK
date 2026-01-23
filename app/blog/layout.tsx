import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Heat Pump Guides & Resources | HeatPump UK",
  description:
    "Expert guides on heat pumps, installation costs, £7,500 grant eligibility, and more. Everything UK homeowners need to know about air source heat pumps.",
  keywords:
    "heat pump guides, heat pump resources, heat pump blog, air source heat pump UK, heat pump installation guide, heat pump grant guide",
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/blog",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
