import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Are Heat Pumps Worth It? Honest UK Guide 2026",
  description:
    "Get the straight answer about whether heat pumps are worth it. Real costs, genuine savings, and who they're perfect for in the UK.",
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/blog/are-heat-pumps-worth-it",
  },
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
