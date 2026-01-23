import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Heat Pump Cost UK 2026 | Prices & Savings Guide",
  description:
    "Complete breakdown of heat pump costs in the UK. Learn the real prices, hidden costs, and how to save thousands with the £7,500 grant.",
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/blog/heat-pump-cost-uk",
  },
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
