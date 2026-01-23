import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | HeatPump UK",
  description:
    "HeatPump UK privacy policy. Learn how we protect your personal data and handle information when you request heat pump quotes.",
  keywords:
    "privacy policy, data protection, GDPR compliance, heat pump data privacy",
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/privacy",
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
