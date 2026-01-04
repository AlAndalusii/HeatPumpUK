import Link from "next/link"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="relative border-t border-[#d2d2d7] py-10 sm:py-12 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Logo className="h-10 sm:h-11 w-auto mb-3 sm:mb-4" />
            <p className="text-[13px] sm:text-[14px] font-semibold text-[#1d1d1f] mb-2">Get Heat Pump Quotes – Independent Comparison Service</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[13px] sm:text-[14px] font-semibold text-[#1d1d1f] mb-3 sm:mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/quiz" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                Check Eligibility
              </Link>
              <Link href="/installation" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                Get Quote
              </Link>
              <Link href="/#how-it-works" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                How It Works
              </Link>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-[13px] sm:text-[14px] font-semibold text-[#1d1d1f] mb-3 sm:mb-4">Locations</h4>
            <div className="space-y-2">
              <Link href="/installers/london" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                London
              </Link>
              <Link href="/installers/london/south-london" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                South London
              </Link>
              <Link href="/installers/london/north-london" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                North London
              </Link>
              <Link href="/installers/london/east-london" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                East London
              </Link>
              <Link href="/installers/london/west-london" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                West London
              </Link>
              <Link href="/installers/manchester" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                Manchester
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[13px] sm:text-[14px] font-semibold text-[#1d1d1f] mb-3 sm:mb-4">Resources</h4>
            <div className="space-y-2">
              <Link href="/#faq" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                FAQ
              </Link>
              <Link href="/blog" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                Blog
              </Link>
              <Link href="/about" className="block text-[13px] sm:text-[14px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d2d2d7] pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-[11px] sm:text-[12px] text-[#86868b] text-center sm:text-left">
              © 2025 Get Heat Pump Quotes. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="/privacy" className="text-[11px] sm:text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[11px] sm:text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

