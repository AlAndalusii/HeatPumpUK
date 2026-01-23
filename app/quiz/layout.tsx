import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Heat Pump Grant Eligibility Check | Free Quiz UK",
  description:
    "Check if you qualify for the £7,500 heat pump grant in 90 seconds. Get matched with MCS-certified installers and receive free quotes.",
  keywords:
    "heat pump eligibility quiz, heat pump grant eligibility, £7500 grant quiz, heat pump assessment, government grant checker",
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/quiz",
  },
}

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
