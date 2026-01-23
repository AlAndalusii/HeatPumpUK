import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | HeatPump UK - Get Expert Advice",
  description:
    "Contact HeatPump UK for expert advice on heat pumps and government grants. Free consultation from MCS-certified installers.",
  keywords:
    "contact heat pump experts, heat pump advice, heat pump consultation, MCS installers contact",
  alternates: {
    canonical: "https://www.getheatpumpquotes.co.uk/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
