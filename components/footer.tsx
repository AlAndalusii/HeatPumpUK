import Link from "next/link"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="relative bg-[#fbfbfd]">
      {/* Elegant top divider */}
      <div className="h-px bg-linear-to-r from-transparent via-[#d2d2d7] to-transparent" />
      
      {/* Main Footer Content */}
      <div className="max-w-[980px] mx-auto px-6 lg:px-4">
        {/* Navigation Links - Apple Style Grid */}
        <div className="py-8 sm:py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-6 lg:gap-x-8">
            {/* Get Started */}
            <div>
              <h4 className="text-[11px] font-semibold text-[#1d1d1f] mb-3 tracking-[0.02em]">
                Get Started
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/quiz" className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors duration-200">
                    Check Eligibility
                  </Link>
                </li>
                <li>
                  <Link href="/installation" className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors duration-200">
                    Get Free Quotes
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors duration-200">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/urgent-inquiry" className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors duration-200">
                    Urgent Callback
                  </Link>
                </li>
              </ul>
            </div>

            {/* Find Installers */}
            <div>
              <h4 className="text-[11px] font-semibold text-[#1d1d1f] mb-3 tracking-[0.02em]">
                Find Installers
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/installers/london" className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors duration-200">
                    London
                  </Link>
                </li>
                <li>
                  <Link href="/installers/manchester" className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors duration-200">
                    Manchester
                  </Link>
                </li>
                <li>
                  <Link href="/installers/london/east-london" className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors duration-200">
                    East London
                  </Link>
                </li>
                <li>
                  <Link href="/installers/london/south-london" className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors duration-200">
                    South London
                  </Link>
                </li>
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h4 className="text-[11px] font-semibold text-[#1d1d1f] mb-3 tracking-[0.02em]">
                Learn
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors duration-200">
                    Guides & Articles
                  </Link>
                </li>
                <li>
                  <Link href="/blog/heat-pump-grant-guide" className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors duration-200">
                    Grant Information
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-heat-pumps-work" className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors duration-200">
                    How Heat Pumps Work
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors duration-200">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[11px] font-semibold text-[#1d1d1f] mb-3 tracking-[0.02em]">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors duration-200">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/urgent-inquiry" className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors duration-200">
                    Urgent Callback
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[11px] font-semibold text-[#1d1d1f] mb-3 tracking-[0.02em]">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-[12px] text-[#424245] hover:text-[#1d1d1f] transition-colors duration-200">
                    Terms of Use
                  </Link>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-[#34c759]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[12px] text-[#424245]">SSL Secured</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-[#0071e3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[12px] text-[#424245]">GDPR Compliant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Thin divider */}
        <div className="h-px bg-[#d2d2d7]" />

        {/* Brand & Mission Section */}
        <div className="py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Logo and tagline */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Logo className="h-8 w-auto" />
              <p className="text-[12px] text-[#86868b] leading-relaxed max-w-sm">
                Helping UK homeowners make informed decisions about low-carbon heating. Independent, free, and trusted since 2024.
              </p>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#f5f5f7] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#34c759]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[11px] text-[#86868b]">Verified Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#f5f5f7] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#0071e3]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-[11px] text-[#86868b]">4.8★ Rated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thin divider */}
        <div className="h-px bg-[#d2d2d7]" />

        {/* Bottom Bar - Apple Style */}
        <div className="py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* Copyright */}
            <p className="text-[11px] text-[#86868b]">
              Copyright © 2025 getheatpumpquotes. All rights reserved.
            </p>
            
            {/* Legal Links - Apple Style inline */}
            <div className="flex flex-wrap items-center gap-x-1 text-[11px] text-[#424245]">
              <Link href="/privacy" className="hover:text-[#1d1d1f] transition-colors">Privacy Policy</Link>
              <span className="text-[#d2d2d7]">|</span>
              <Link href="/terms" className="hover:text-[#1d1d1f] transition-colors">Terms of Use</Link>
              <span className="text-[#d2d2d7]">|</span>
              <Link href="/contact" className="hover:text-[#1d1d1f] transition-colors">Contact Us</Link>
              <span className="text-[#d2d2d7]">|</span>
              <span className="text-[#86868b]">United Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

