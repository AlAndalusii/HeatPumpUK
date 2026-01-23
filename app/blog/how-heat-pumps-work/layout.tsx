import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How Do Heat Pumps Work? Simple UK Guide",
  description:
    "Understand how heat pumps work in plain English. Learn the simple steps from taking heat from outside air to warming your home efficiently.",
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/blog/how-heat-pumps-work",
  },
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
