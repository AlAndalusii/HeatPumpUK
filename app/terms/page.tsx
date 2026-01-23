"use client"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import Head from "next/head"
import Link from "next/link"

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Get Heat Pump Quotes | Service Agreement</title>
        <meta name="description" content="Terms and Conditions for Get Heat Pump Quotes. Read our service agreement, user responsibilities, and legal terms for using our heat pump quote comparison service." />
        <meta name="keywords" content="terms and conditions, service agreement, heat pump quotes terms, user agreement, legal terms" />
      </Head>
      <div className="min-h-screen bg-white text-[#1d1d1f]">
        {/* Header */}
        <Navbar activePage="terms" />

        {/* Content */}
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-[40px] md:text-[56px] font-semibold text-[#1d1d1f] mb-4 tracking-tight">
              Terms and Conditions
            </h1>
            <p className="text-[17px] text-[#6e6e73] mb-12">
              Last updated: 22 January 2026
            </p>

            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">1. Introduction</h2>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                  Welcome to Get Heat Pump Quotes ("we," "our," "us," or the "Company"). These Terms and Conditions ("Terms") govern your use of our website at www.getheatpumpquotes.co.uk (the "Website") and our quote comparison and installer matching services (the "Services").
                </p>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                  By accessing or using our Website and Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Website or Services.
                </p>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                  Please read these Terms carefully before using our Services. We recommend that you print or save a copy of these Terms for your records.
                </p>
              </section>

              {/* About Our Services */}
              <section className="mb-12">
                <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">2. About Our Services</h2>
                
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">2.1 What We Do</h3>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                  Get Heat Pump Quotes is a free quote comparison service that connects homeowners with MCS-certified heat pump installers. Our Services include:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="text-[17px] text-[#1d1d1f]">Providing information about heat pumps and government grants</li>
                  <li className="text-[17px] text-[#1d1d1f]">Collecting your property and contact details through our eligibility quiz</li>
                  <li className="text-[17px] text-[#1d1d1f]">Matching you with up to 3 vetted, MCS-certified heat pump installers</li>
                  <li className="text-[17px] text-[#1d1d1f]">Facilitating communication between you and installers</li>
                </ul>

                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">2.2 What We Don't Do</h3>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                  We are not heat pump installers and do not provide installation services directly. We:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="text-[17px] text-[#1d1d1f]">Do not install heat pumps or any heating equipment</li>
                  <li className="text-[17px] text-[#1d1d1f]">Do not provide quotes ourselves – quotes come from independent installers</li>
                  <li className="text-[17px] text-[#1d1d1f]">Do not guarantee grant eligibility or approval</li>
                  <li className="text-[17px] text-[#1d1d1f]">Do not employ or control the installers in our network</li>
                </ul>

                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">2.3 Free Service</h3>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                  Our comparison service is completely free for homeowners. We are funded by referral fees paid by installers when they receive leads through our platform. You will never be charged by us for using our Services.
                </p>
              </section>

              {/* Eligibility */}
              <section className="mb-12">
                <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">3. Eligibility to Use Our Services</h2>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                  To use our Services, you must:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="text-[17px] text-[#1d1d1f]">Be at least 18 years old</li>
                  <li className="text-[17px] text-[#1d1d1f]">Be the homeowner or have authority to make decisions about the property</li>
                  <li className="text-[17px] text-[#1d1d1f]">Have a property located in England, Wales, or Scotland</li>
                  <li className="text-[17px] text-[#1d1d1f]">Provide accurate and truthful information</li>
                  <li className="text-[17px] text-[#1d1d1f]">Have a genuine interest in obtaining heat pump quotes</li>
                </ul>
              </section>

              {/* Your Responsibilities */}
              <section className="mb-12">
                <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">4. Your Responsibilities</h2>
                
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">4.1 Accurate Information</h3>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                  You agree to provide accurate, current, and complete information when using our Services. This includes information about:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="text-[17px] text-[#1d1d1f]">Your property (address, type, size)</li>
                  <li className="text-[17px] text-[#1d1d1f]">Your current heating system</li>
                  <li className="text-[17px] text-[#1d1d1f]">Your contact details</li>
                  <li className="text-[17px] text-[#1d1d1f]">Your ownership status</li>
                </ul>

                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">4.2 Prohibited Uses</h3>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="text-[17px] text-[#1d1d1f]">Submit false, misleading, or fraudulent information</li>
                  <li className="text-[17px] text-[#1d1d1f]">Use the Service for any unlawful purpose</li>
                  <li className="text-[17px] text-[#1d1d1f]">Attempt to gain unauthorised access to our systems</li>
                  <li className="text-[17px] text-[#1d1d1f]">Interfere with or disrupt our Services</li>
                  <li className="text-[17px] text-[#1d1d1f]">Use automated systems to access our Website without permission</li>
                  <li className="text-[17px] text-[#1d1d1f]">Collect or harvest user data without consent</li>
                  <li className="text-[17px] text-[#1d1d1f]">Impersonate any person or entity</li>
                </ul>
              </section>

              {/* Installers and Quotes */}
              <section className="mb-12">
                <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">5. Installers and Quotes</h2>
                
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">5.1 Independent Installers</h3>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                  The installers in our network are independent businesses, not employees or agents of Get Heat Pump Quotes. While we vet installers for MCS certification and basic quality standards, we:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="text-[17px] text-[#1d1d1f]">Do not guarantee the quality, safety, or legality of their work</li>
                  <li className="text-[17px] text-[#1d1d1f]">Do not control their pricing, availability, or business practices</li>
                  <li className="text-[17px] text-[#1d1d1f]">Are not responsible for any agreements made between you and installers</li>
                  <li className="text-[17px] text-[#1d1d1f]">Do not provide warranties or guarantees on their behalf</li>
                </ul>

                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">5.2 Quotes</h3>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                  Quotes provided by installers are estimates and may change based on:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="text-[17px] text-[#1d1d1f]">Site survey findings</li>
                  <li className="text-[17px] text-[#1d1d1f]">Your specific requirements</li>
                  <li className="text-[17px] text-[#1d1d1f]">Equipment availability</li>
                  <li className="text-[17px] text-[#1d1d1f]">Additional work required</li>
                </ul>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                  Always ensure you receive a final written quote before agreeing to any work.
                </p>

                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">5.3 Your Contract with Installers</h3>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                  Any contract for installation work is made directly between you and the installer. We are not a party to this contract and have no liability for the installer's performance or any disputes that arise.
                </p>
              </section>

              {/* Government Grants */}
              <section className="mb-12">
                <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">6. Government Grants</h2>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                  We provide information about the Boiler Upgrade Scheme (BUS) and other government grants. However:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="text-[17px] text-[#1d1d1f]">We do not administer, control, or guarantee any government grants</li>
                  <li className="text-[17px] text-[#1d1d1f]">Eligibility information is provided as guidance only and may change</li>
                  <li className="text-[17px] text-[#1d1d1f]">Grant availability is subject to government policy and funding</li>
                  <li className="text-[17px] text-[#1d1d1f]">Final eligibility decisions are made by the relevant authorities (e.g., Ofgem)</li>
                  <li className="text-[17px] text-[#1d1d1f]">We are not liable if you do not qualify for or receive a grant</li>
                </ul>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                  Always verify current grant terms and eligibility with official government sources or your installer.
                </p>
              </section>

              {/* Intellectual Property */}
              <section className="mb-12">
                <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">7. Intellectual Property</h2>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                  All content on our Website, including text, graphics, logos, images, and software, is owned by or licensed to Get Heat Pump Quotes and is protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                  You may not reproduce, distribute, modify, or create derivative works from our content without our prior written consent, except for personal, non-commercial use.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-12">
                <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">8. Limitation of Liability</h2>
                
                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">8.1 Service Provided "As Is"</h3>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                  Our Website and Services are provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the reliability, accuracy, or availability of our Services.
                </p>

                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">8.2 Exclusion of Liability</h3>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                  To the fullest extent permitted by law, we shall not be liable for:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="text-[17px] text-[#1d1d1f]">Any indirect, incidental, special, or consequential damages</li>
                  <li className="text-[17px] text-[#1d1d1f]">Loss of profits, revenue, data, or business opportunities</li>
                  <li className="text-[17px] text-[#1d1d1f]">The acts, omissions, or conduct of any installer</li>
                  <li className="text-[17px] text-[#1d1d1f]">The quality, safety, or legality of any installation work</li>
                  <li className="text-[17px] text-[#1d1d1f]">Any failure to qualify for or receive government grants</li>
                  <li className="text-[17px] text-[#1d1d1f]">Technical failures, interruptions, or errors on our Website</li>
                </ul>

                <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">8.3 Maximum Liability</h3>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                  Our total liability to you for any claims arising from your use of our Services shall not exceed £100. This limitation applies regardless of the form of action, whether in contract, tort, or otherwise.
                </p>
              </section>

              {/* Indemnification */}
              <section className="mb-12">
                <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">9. Indemnification</h2>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                  You agree to indemnify and hold harmless Get Heat Pump Quotes, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of our Services, your breach of these Terms, or your violation of any rights of a third party.
                </p>
              </section>

              {/* Privacy */}
              <section className="mb-12">
                <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">10. Privacy</h2>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                  Your privacy is important to us. Please review our <Link href="/privacy" className="text-[#0071e3] hover:underline">Privacy Policy</Link>, which explains how we collect, use, and protect your personal information. By using our Services, you consent to the collection and use of your information as described in our Privacy Policy.
                </p>
              </section>

              {/* Termination */}
              <section className="mb-12">
                <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">11. Termination</h2>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                  We may suspend or terminate your access to our Services at any time, without notice, for any reason, including if we believe you have violated these Terms.
                </p>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                  Upon termination, your right to use our Services will immediately cease. Provisions of these Terms that should reasonably survive termination will continue to apply.
                </p>
              </section>

              {/* Changes to Terms */}
              <section className="mb-12">
                <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">12. Changes to These Terms</h2>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                  We may update these Terms from time to time. We will notify you of any material changes by posting the updated Terms on our Website with a new "Last updated" date. Your continued use of our Services after changes are posted constitutes your acceptance of the revised Terms.
                </p>
              </section>

              {/* Governing Law */}
              <section className="mb-12">
                <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">13. Governing Law and Disputes</h2>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                  These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms or your use of our Services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                  If you are a consumer, you may also have rights under the laws of your country of residence that cannot be waived by agreement.
                </p>
              </section>

              {/* Severability */}
              <section className="mb-12">
                <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">14. Severability</h2>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                  If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions will continue in full force and effect. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable.
                </p>
              </section>

              {/* Entire Agreement */}
              <section className="mb-12">
                <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">15. Entire Agreement</h2>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7]">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and Get Heat Pump Quotes regarding your use of our Services, superseding any prior agreements.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">16. Contact Us</h2>
                <p className="text-[17px] text-[#1d1d1f] leading-[1.7] mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-[#f5f5f7] rounded-xl p-6">
                  <p className="text-[17px] text-[#1d1d1f] mb-2"><strong>Get Heat Pump Quotes</strong></p>
                  <p className="text-[17px] text-[#1d1d1f] mb-2">Email: <a href="mailto:info@getheatpumpquotes.co.uk" className="text-[#0071e3] hover:underline">info@getheatpumpquotes.co.uk</a></p>
                  <p className="text-[17px] text-[#1d1d1f]">Website: <a href="https://www.getheatpumpquotes.co.uk" className="text-[#0071e3] hover:underline">www.getheatpumpquotes.co.uk</a></p>
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
