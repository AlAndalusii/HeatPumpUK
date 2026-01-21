"use client"

import { Logo } from "@/components/logo"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Head from "next/head"
import { useState, useEffect } from "react"

export default function PrivacyPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Privacy Policy | Air Source Heat Pump Resource | Data Protection & Privacy</title>
        <meta name="description" content="Air Source Heat Pump Resource privacy policy. Learn how we protect your personal data, use cookies, and handle information when you request Air Source Heat Pump quotes and use our services." />
        <meta name="keywords" content="privacy policy, data protection, GDPR compliance, Air Source Heat Pump data privacy, personal information security" />
      </Head>
      <div className="min-h-screen bg-white text-[#1d1d1f]">
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrollY > 50 ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "saturate(180%) blur(20px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <Logo className="h-11 w-auto transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-normal text-[#1d1d1f] hover:text-[#0071e3] transition-colors duration-200">
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[40px] md:text-[56px] font-semibold text-[#1d1d1f] mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-[17px] text-[#6e6e73] mb-12">
            Last updated: 27 December 2025
          </p>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">1. Introduction</h2>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                Welcome to HeatPump UK ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                By using our website and services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">2. Information We Collect</h2>
              
              <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">2.1 Personal Information You Provide</h3>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-[17px] text-[#1d1d1f]">Complete our eligibility quiz or request quotes</li>
                <li className="text-[17px] text-[#1d1d1f]">Contact us via email, phone, or contact forms</li>
                <li className="text-[17px] text-[#1d1d1f]">Subscribe to our newsletter or marketing communications</li>
                <li className="text-[17px] text-[#1d1d1f]">Participate in surveys or promotions</li>
              </ul>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                The personal information we collect may include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-[17px] text-[#1d1d1f]">Name and contact details (email address, phone number, postal address)</li>
                <li className="text-[17px] text-[#1d1d1f]">Property information (address, property type, ownership status)</li>
                <li className="text-[17px] text-[#1d1d1f]">Heating system details and preferences</li>
                <li className="text-[17px] text-[#1d1d1f]">Any other information you choose to provide</li>
              </ul>

              <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-[17px] text-[#1d1d1f]">IP address and browser type</li>
                <li className="text-[17px] text-[#1d1d1f]">Operating system and device information</li>
                <li className="text-[17px] text-[#1d1d1f]">Pages visited and time spent on pages</li>
                <li className="text-[17px] text-[#1d1d1f]">Referring website addresses</li>
                <li className="text-[17px] text-[#1d1d1f]">Clickstream data</li>
              </ul>

              <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">2.3 Cookies and Tracking Technologies</h3>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12">
              <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">3. How We Use Your Information</h2>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-[17px] text-[#1d1d1f]">To connect you with MCS-certified Air Source Heat Pump installers in your area</li>
                <li className="text-[17px] text-[#1d1d1f]">To process and respond to your inquiries and requests</li>
                <li className="text-[17px] text-[#1d1d1f]">To provide information about government Air Source Heat Pump grants and eligibility</li>
                <li className="text-[17px] text-[#1d1d1f]">To send you marketing communications (with your consent)</li>
                <li className="text-[17px] text-[#1d1d1f]">To improve our website and services</li>
                <li className="text-[17px] text-[#1d1d1f]">To analyse usage patterns and trends</li>
                <li className="text-[17px] text-[#1d1d1f]">To comply with legal obligations</li>
                <li className="text-[17px] text-[#1d1d1f]">To prevent fraud and ensure security</li>
              </ul>
            </section>

            {/* Sharing Your Information */}
            <section className="mb-12">
              <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">4. How We Share Your Information</h2>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                We may share your personal information in the following circumstances:
              </p>

              <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">4.1 With Installers</h3>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                When you request quotes, we share your contact details and property information with up to 3 vetted, MCS-certified Air Source Heat Pump installers in your area. These installers will contact you to arrange surveys and provide quotes.
              </p>

              <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">4.2 With Service Providers</h3>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                We may share your information with third-party service providers who perform services on our behalf, such as:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-[17px] text-[#1d1d1f]">Website hosting and maintenance</li>
                <li className="text-[17px] text-[#1d1d1f]">Email delivery services</li>
                <li className="text-[17px] text-[#1d1d1f]">Analytics providers</li>
                <li className="text-[17px] text-[#1d1d1f]">Customer relationship management tools</li>
              </ul>

              <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">4.3 Legal Requirements</h3>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, government agencies).
              </p>

              <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">4.4 Business Transfers</h3>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                If we are involved in a merger, acquisition, or sale of assets, your personal information may be transferred as part of that transaction. We will notify you of any such change.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">5. Data Retention</h2>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                We retain your personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">6. Your Data Protection Rights</h2>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                Under UK data protection law (including UK GDPR), you have the following rights:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-[17px] text-[#1d1d1f]"><strong>Right to access:</strong> You can request copies of your personal information</li>
                <li className="text-[17px] text-[#1d1d1f]"><strong>Right to rectification:</strong> You can request correction of inaccurate information</li>
                <li className="text-[17px] text-[#1d1d1f]"><strong>Right to erasure:</strong> You can request deletion of your personal information</li>
                <li className="text-[17px] text-[#1d1d1f]"><strong>Right to restrict processing:</strong> You can request that we limit how we use your information</li>
                <li className="text-[17px] text-[#1d1d1f]"><strong>Right to data portability:</strong> You can request transfer of your information to another service</li>
                <li className="text-[17px] text-[#1d1d1f]"><strong>Right to object:</strong> You can object to certain types of processing, including direct marketing</li>
                <li className="text-[17px] text-[#1d1d1f]"><strong>Right to withdraw consent:</strong> Where we rely on consent, you can withdraw it at any time</li>
              </ul>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                To exercise any of these rights, please contact us using the details provided at the end of this policy. We will respond to your request within one month.
              </p>
            </section>

            {/* Security */}
            <section className="mb-12">
              <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">7. Security of Your Information</h2>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Third Party Links */}
            <section className="mb-12">
              <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">8. Third-Party Websites</h2>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">9. Children's Privacy</h2>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
              </p>
            </section>

            {/* Marketing Communications */}
            <section className="mb-12">
              <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">10. Marketing Communications</h2>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                With your consent, we may send you marketing emails about our services, Air Source Heat Pump grants, and related offers. You can opt out of marketing communications at any time by:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-[17px] text-[#1d1d1f]">Clicking the "unsubscribe" link in any marketing email</li>
                <li className="text-[17px] text-[#1d1d1f]">Contacting us directly using the details below</li>
              </ul>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                Please note that opting out of marketing communications does not affect service-related messages (such as responses to your quote requests).
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12">
              <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a new "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">12. Contact Us</h2>
              <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <p className="text-[17px] text-[#1d1d1f] mb-2"><strong>HeatPump UK</strong></p>
                <p className="text-[17px] text-[#1d1d1f] mb-2">Email: <a href="mailto:privacy@heatpumpuk.co.uk" className="text-[#0071e3] hover:underline">privacy@heatpumpuk.co.uk</a></p>
                <p className="text-[17px] text-[#1d1d1f]">You also have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK's data protection authority, if you believe your data protection rights have been violated.</p>
              </div>
            </section>

            {/* ICO Information */}
            <section className="mb-12">
              <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">13. Information Commissioner's Office</h2>
              <div className="bg-[#f5f5f7] rounded-xl p-6">
                <p className="text-[17px] text-[#1d1d1f] mb-2"><strong>Information Commissioner's Office</strong></p>
                <p className="text-[17px] text-[#1d1d1f] mb-2">Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#0071e3] hover:underline">www.ico.org.uk</a></p>
                <p className="text-[17px] text-[#1d1d1f] mb-2">Helpline: 0303 123 1113</p>
                <p className="text-[17px] text-[#1d1d1f]">Address: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
              </div>
            </section>
          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/" className="inline-flex items-center gap-2 text-[#0071e3] hover:underline text-[17px] font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
    </>
  )
}




