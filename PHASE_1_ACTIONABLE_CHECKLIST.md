# ✅ PHASE 1 TECHNICAL SEO - ACTIONABLE CHECKLIST

**Status:** 6/10 - Missing Critical Elements  
**Domain:** GetHeatPumpQuotes.co.uk  
**Framework:** Next.js 16 ✅  
**Deployment:** Vercel ✅  

---

## 🔴 CRITICAL ACTIONS (This Week)

### Action 1: CREATE ROBOTS.TXT
**Time:** 10 minutes  
**File:** `/public/robots.txt`  
**Status:** ⬜ TODO

```text
# Robots.txt for GetHeatPumpQuotes.co.uk
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

Sitemap: https://www.getheatpumpquotes.co.uk/sitemap.xml
```

**Verification:**
```bash
curl https://getheatpumpquotes.co.uk/robots.txt
```

---

### Action 2: REGISTER GOOGLE SEARCH CONSOLE
**Time:** 5 minutes  
**URL:** https://search.google.com/search-console  
**Status:** ⬜ TODO

**Steps:**
1. Go to Search Console
2. Click "Add property"
3. Select "URL prefix"
4. Enter: `https://www.getheatpumpquotes.co.uk`
5. Choose "DNS record" verification method
6. Add DNS TXT record to your domain
7. Click "Verify" (allow 24-48 hours)

**What to do in GSC once verified:**
- Go to "Sitemaps"
- Submit: `https://www.getheatpumpquotes.co.uk/sitemap.xml`
- Go to "Coverage" and check indexing status
- Go to "URL Inspection" and test homepage

---

### Action 3: SUBMIT XML SITEMAP
**Time:** 2 minutes (after GSC verified)  
**File:** `/public/sitemap.xml` (already exists ✅)  
**Status:** ⬜ TODO

**Steps:**
1. Wait for GSC verification (24-48 hours)
2. Open GSC
3. Go to Sitemaps section
4. Click "New sitemap"
5. Enter: `sitemap.xml`
6. Click "Submit"
7. Monitor "Submitted vs Indexed" ratio

**Current sitemap includes:**
- Homepage ✅
- Main pages (6) ✅
- Blog posts (5) ✅
- Total: 12 URLs

---

### Action 4: TEST SSL CERTIFICATE
**Time:** 5 minutes  
**Status:** ⬜ TODO

**Method 1: Terminal**
```bash
curl -s https://getheatpumpquotes.co.uk -I | head -5
# Should show: HTTP/2 200
```

**Method 2: SSL Labs**
1. Go to https://www.ssllabs.com/ssltest/
2. Enter: `getheatpumpquotes.co.uk`
3. Record rating (should be A or A+): ___
4. Check for any warnings

**Expected Result:** ✅ Active SSL, Valid certificate, HTTPS working

---

### Action 5: MEASURE CORE WEB VITALS
**Time:** 15 minutes  
**Status:** ⬜ TODO

**Method 1: PageSpeed Insights**
1. Go to https://pagespeed.web.dev
2. Test: `https://getheatpumpquotes.co.uk` (Desktop)
3. Record scores:
   - Performance: ___/100
   - Accessibility: ___/100
   - Best Practices: ___/100
   - SEO: ___/100

4. Test: `https://getheatpumpquotes.co.uk` (Mobile)
5. Record scores:
   - Performance: ___/100
   - LCP: ___ ms (Target: < 2500ms)
   - FID: ___ ms (Target: < 100ms)
   - CLS: ___ (Target: < 0.1)

**Method 2: WebPageTest**
1. Go to https://webpagetest.org
2. Enter: `getheatpumpquotes.co.uk`
3. Select location: London, UK
4. Record:
   - First Byte: ___
   - Load Time: ___
   - Fully Loaded: ___

---

### Action 6: FIX IMAGE OPTIMIZATION
**Time:** 5 minutes  
**File:** `next.config.mjs`  
**Status:** ⬜ TODO

**Current (❌ WRONG):**
```javascript
images: {
  unoptimized: true,  // ← Disables ALL optimization!
}
```

**Change to (✅ CORRECT):**
```javascript
images: {
  unoptimized: false,
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  remotePatterns: [],
}
```

**Impact:** +30-40% speed improvement on image serving

---

### Action 7: TEST MOBILE RESPONSIVENESS
**Time:** 15 minutes  
**Status:** ⬜ TODO

**Device Testing:**
- [ ] iPhone SE (small) - Test navigation, forms
- [ ] iPhone 14 (medium) - Full user experience
- [ ] Android phone - Cross-platform testing
- [ ] iPad (tablet) - Tablet experience

**Mobile Checklist:**
- [ ] Text readable without zooming
- [ ] Touch targets 48px minimum
- [ ] Images scale properly
- [ ] Buttons clickable
- [ ] Forms usable
- [ ] Navigation accessible
- [ ] No horizontal scroll
- [ ] Viewport configured ✅ (already done)

**Use:** Google Mobile-Friendly Test
1. Go to https://search.google.com/test/mobile-friendly
2. Enter: `https://getheatpumpquotes.co.uk`
3. Result should: "Page is mobile friendly"

---

### Action 8: CRAWL FOR BROKEN LINKS
**Time:** 20 minutes  
**Status:** ⬜ TODO

**Method 1: Screaming Frog (Recommended)**
1. Download: https://www.screamingfrog.co.uk
2. Open application
3. Enter: `getheatpumpquotes.co.uk`
4. Click "Start" to crawl
5. Export report
6. Look for:
   - 4xx errors (red)
   - 5xx errors (red)
   - Timeouts (orange)
7. Fix any found

**Method 2: Online Tools**
- https://www.siteimprove.com/broken-links (simple)
- https://www.broken-link-checker.com (detailed)

**Expected Result:** 0 broken links

---

## 🟠 HIGH PRIORITY (This Week)

### Action 9: ADD CANONICAL URLS
**Time:** 5 minutes  
**File:** `app/layout.tsx`  
**Status:** ⬜ TODO

**Add to metadata:**
```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Heat Pump Quotes UK - Compare Installers & Check £7,500 Grant Eligibility",
  description: "Independent heat pump comparison service...",
  metadataBase: new URL('https://www.getheatpumpquotes.co.uk'),
  alternates: {
    canonical: 'https://www.getheatpumpquotes.co.uk',
  },
  // ... rest of metadata
}
```

**Check:** Every page should have canonical URL pointing to itself

---

### Action 10: ADD OPEN GRAPH TAGS
**Time:** 10 minutes  
**File:** `app/layout.tsx`  
**Status:** ⬜ TODO

**Add to metadata:**
```typescript
export const metadata: Metadata = {
  // ... existing metadata
  openGraph: {
    type: 'website',
    url: 'https://www.getheatpumpquotes.co.uk',
    title: 'Heat Pump Quotes UK - Compare Installers & Check £7,500 Grant Eligibility',
    description: 'Independent heat pump comparison service. Check if you qualify for £7,500 government grant in 90 seconds.',
    siteName: 'Heat Pump Quotes UK',
    images: [
      {
        url: 'https://www.getheatpumpquotes.co.uk/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heat Pump Quotes UK - Free Installer Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heat Pump Quotes UK',
    description: 'Compare heat pump installers and check £7,500 grant eligibility.',
  },
}
```

**Note:** Need to create `og-image.jpg` in `/public/` folder (1200x630px recommended)

---

### Action 11: CREATE CUSTOM 404 PAGE
**Time:** 15 minutes  
**File:** `app/not-found.tsx`  
**Status:** ⬜ TODO

```typescript
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-gray-600 text-center mb-8 max-w-md">
        We couldn't find the page you're looking for. This might be a typo or the page has been moved.
      </p>
      <div className="flex gap-4">
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
        <Link href="/blog">
          <Button variant="outline">View Blog</Button>
        </Link>
      </div>
    </div>
  )
}
```

---

### Action 12: CREATE ERROR BOUNDARY
**Time:** 10 minutes  
**File:** `app/error.tsx`  
**Status:** ⬜ TODO

```typescript
'use client'

import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">Oops!</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Something went wrong</h2>
      <p className="text-gray-600 text-center mb-8 max-w-md">
        We're experiencing a temporary issue. Please try again or contact our support team.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()}>Try Again</Button>
        <a href="/">
          <Button variant="outline">Go Home</Button>
        </a>
      </div>
    </div>
  )
}
```

---

## 🟡 MEDIUM PRIORITY (Next 2 Weeks)

### Action 13: SETUP ERROR TRACKING
**Time:** 30 minutes  
**Status:** ⬜ TODO

**Option 1: Sentry (Recommended)**
1. Go to https://sentry.io
2. Create free account
3. Create Next.js project
4. Follow setup instructions
5. Install: `npm install @sentry/nextjs`
6. Initialize in `next.config.mjs`

**Option 2: Vercel Analytics** (Already enabled ✅)
- Continue monitoring Web Analytics
- Set up alerts for errors

---

### Action 14: OPTIMIZE CACHING HEADERS
**Time:** 20 minutes  
**File:** `next.config.mjs`  
**Status:** ⬜ TODO

**Add to next.config.mjs:**
```javascript
export const nextConfig = {
  headers: async () => {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400' },
        ],
      },
      {
        source: '/public/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}
```

---

### Action 15: REMOVE UNUSED DEPENDENCIES
**Time:** 30 minutes  
**Status:** ⬜ TODO

**Review:**
- 60+ UI components in `/components/ui/`
- Only using subset of them
- Removing unused packages saves ~20% bundle size

**Steps:**
1. List all UI components actually used
2. Remove unused imports
3. Run: `npm audit fix`
4. Test site: `npm run dev`
5. Build and check size: `npm run build`

---

## 📊 TRACKING SHEET

Print this and check off as you complete actions:

```
WEEK 1 (THIS WEEK)
─────────────────────────────────────────
Critical Actions:
☐ Action 1:  robots.txt created
☐ Action 2:  Google Search Console registered
☐ Action 3:  Sitemap submitted
☐ Action 4:  SSL certificate verified
☐ Action 5:  Core Web Vitals measured
☐ Action 6:  Image optimization fixed
☐ Action 7:  Mobile responsiveness tested
☐ Action 8:  Broken links crawled (0 found)

High Priority:
☐ Action 9:   Canonical URLs added
☐ Action 10:  Open Graph tags added
☐ Action 11:  404 page created
☐ Action 12:  Error boundary created

WEEK 2-3
─────────────────────────────────────────
Medium Priority:
☐ Action 13:  Error tracking setup
☐ Action 14:  Caching headers configured
☐ Action 15:  Unused dependencies removed

MONITORING
─────────────────────────────────────────
☐ GSC daily check (for crawl errors)
☐ PageSpeed monitoring (track trends)
☐ Core Web Vitals (watch for regressions)
☐ Indexing progress (URLs indexed count)
```

---

## 🎯 SUCCESS CRITERIA

### Week 1 (End of This Week)
- ✅ robots.txt live and validated
- ✅ GSC verified (domain verified)
- ✅ Sitemap submitted to Google
- ✅ SSL rating A or higher
- ✅ Performance score > 70
- ✅ Mobile score > 75
- ✅ 0 broken links
- ✅ All metadata tags present

### Week 2-4
- ✅ First pages appear in Google index
- ✅ 50+ URLs indexed
- ✅ No crawl errors
- ✅ Core Web Vitals in "Good" range
- ✅ Page speed optimized
- ✅ Error tracking active

### Month 1
- ✅ 100+ pages indexed
- ✅ Organic search traffic visible
- ✅ Ready for Phase 2 (Site Cleanup)

---

## 📞 QUICK LINKS

**Essential Tools:**
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/)
- [SSL Labs](https://www.ssllabs.com/ssltest/)
- [Mobile Friendly Test](https://search.google.com/test/mobile-friendly)

**Verification:**
- robots.txt: `https://getheatpumpquotes.co.uk/robots.txt`
- Sitemap: `https://getheatpumpquotes.co.uk/sitemap.xml`
- SSL: `https://www.ssllabs.com/ssltest/analyze.html?d=getheatpumpquotes.co.uk`

---

## 🚀 ONCE EVERYTHING IS CHECKED

**You're ready to move to Phase 2: Site Cleanup**

Phase 2 includes:
- Duplicate content audit
- Internal linking structure
- Keyword optimization
- Meta tag refinement
- URL structure cleanup
- Content quality review

---

**Last Updated:** January 1, 2026  
**Current Phase:** 1 of 6  
**Status:** 6/10 - Actions Required  
**Estimated Completion:** 1-2 weeks

Print this document and post it on your wall. Check off items as you complete them.


