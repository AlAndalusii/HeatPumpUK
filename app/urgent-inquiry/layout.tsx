import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Urgent Heat Pump Inquiry | Request Callback",
  description:
    "Need urgent heat pump assistance? Request an emergency callback from MCS-certified installers for repairs, breakdowns, and urgent installations.",
  keywords:
    "urgent heat pump repair, emergency heat pump service, heat pump breakdown, urgent callback, emergency heating repair",
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/urgent-inquiry",
  },
}

export default function UrgentInquiryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
