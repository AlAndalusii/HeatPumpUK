# ✔️ PHASE 1 VERIFICATION GUIDE
## How to Verify Each Component Is Working

**Domain:** GetHeatPumpQuotes.co.uk  
**Date:** January 1, 2026  
**Purpose:** Step-by-step verification of all Phase 1 items

---

## 1. ROBOTS.TXT VERIFICATION

### Check 1.1: File Exists
```bash
curl https://getheatpumpquotes.co.uk/robots.txt
```

**Expected Output:**
```
# Robots.txt for GetHeatPumpQuotes.co.uk
User-agent: *
Allow: /
Disallow: /api/
...
Sitemap: https://www.getheatpumpquotes.co.uk/sitemap.xml
```

✅ **PASS if:** You see the robots.txt content  
❌ **FAIL if:** 404 error or empty response

### Check 1.2: Sitemap Reference
```bash
curl https://getheatpumpquotes.co.uk/robots.txt | grep Sitemap
```

**Expected Output:**
```
Sitemap: https://www.getheatpumpquotes.co.uk/sitemap.xml
```

✅ **PASS if:** Sitemap URL is present  
❌ **FAIL if:** No Sitemap line found

### Check 1.3: Validate with Online Tool
- Go to: https://www.seobility.net/en/robotstester/
- Enter domain: `getheatpumpquotes.co.uk`
- Result should be: **"robots.txt is valid"**

✅ **PASS if:** Green checkmark and "valid" message  
❌ **FAIL if:** Red errors or validation failure

### Check 1.4: Verify Googlebot Can Access
```bash
curl -I -A "Googlebot" https://getheatpumpquotes.co.uk
```

**Expected Output:**
```
HTTP/2 200
```

✅ **PASS if:** Status 200 (not 403 or 401)  
❌ **FAIL if:** Anything other than 200

---

## 2. GOOGLE SEARCH CONSOLE VERIFICATION

### Check 2.1: Domain Property Created
1. Go to: https://search.google.com/search-console
2. Look for your property: `getheatpumpquotes.co.uk`

✅ **PASS if:** Domain appears in your list  
❌ **FAIL if:** Not listed or shows error

### Check 2.2: Domain Verification Status
1. In Search Console, click your property
2. Go to: Settings → Ownership verified
3. Verify status

✅ **PASS if:** Shows "Verified" with green checkmark  
❌ **FAIL if:** Shows "Not verified" or warning

**If Not Verified Yet:**
- Expected time: 24-48 hours
- Verify you added DNS TXT record correctly
- Check with domain registrar that record is live

### Check 2.3: GSC Dashboard Accessible
1. Click your property in GSC
2. You should see Dashboard
3. Look for: Coverage, Performance, URL Inspection

✅ **PASS if:** Dashboard loads with data  
❌ **FAIL if:** Error or empty dashboard

---

## 3. XML SITEMAP VERIFICATION

### Check 3.1: Sitemap Accessible
```bash
curl https://getheatpumpquotes.co.uk/sitemap.xml | head -20
```

**Expected Output:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.getheatpumpquotes.co.uk/</loc>
    ...
```

✅ **PASS if:** Valid XML structure shown  
❌ **FAIL if:** 404 or malformed XML

### Check 3.2: URL Count
```bash
curl -s https://getheatpumpquotes.co.uk/sitemap.xml | grep -o "<loc>" | wc -l
```

**Expected Output:**
```
12
```

✅ **PASS if:** 12 or more URLs listed  
❌ **FAIL if:** Less than 10 URLs

### Check 3.3: All URLs Valid
```bash
curl -s https://getheatpumpquotes.co.uk/sitemap.xml | grep -o "<loc>.*</loc>" | head -5
```

**Expected Output:**
```
<loc>https://www.getheatpumpquotes.co.uk/</loc>
<loc>https://www.getheatpumpquotes.co.uk/about</loc>
...
```

✅ **PASS if:** URLs use full domain names  
❌ **FAIL if:** Relative URLs or broken links

### Check 3.4: Submitted to Google
1. In Google Search Console
2. Go to: Sitemaps section
3. Enter: `sitemap.xml`
4. Click Submit

**After submission, monitor:**
```
Submitted sitemaps: 1
Sitemaps processed: ? (will update within 24 hours)
URLs submitted: 12
URLs indexed: ? (will increase over 1-2 weeks)
```

✅ **PASS if:** Shows as submitted  
❌ **FAIL if:** Error or not processing

---

## 4. CORE WEB VITALS VERIFICATION

### Check 4.1: PageSpeed Insights Desktop
1. Go to: https://pagespeed.web.dev
2. Enter URL: `https://getheatpumpquotes.co.uk`
3. Wait for analysis (1-2 minutes)

**Record these numbers:**
```
Performance Score: ___/100
Accessibility Score: ___/100
Best Practices Score: ___/100
SEO Score: ___/100
```

**Targets:**
- Performance: >70 (good), >90 (excellent)
- Accessibility: >90 (good), >95 (excellent)
- Best Practices: >80 (good), >95 (excellent)
- SEO: >80 (good), >100 (perfect)

✅ **PASS if:** All scores >70  
⚠️ **WARNING if:** Performance or SEO <70  
❌ **FAIL if:** Multiple scores <60

### Check 4.2: PageSpeed Insights Mobile
1. Same URL, but check Mobile tab
2. Record scores:

```
Performance Score: ___/100
LCP (Largest Contentful Paint): ___ ms
FID (First Input Delay): ___ ms
CLS (Cumulative Layout Shift): ___
```

**Targets:**
- Performance: >70
- LCP: <2.5 seconds (2500 ms)
- FID: <100 milliseconds
- CLS: <0.1

✅ **PASS if:** LCP <2.5s, FID <100ms, CLS <0.1  
⚠️ **WARNING if:** LCP 2.5-4s or CLS >0.1  
❌ **FAIL if:** LCP >4s or CLS >0.25

### Check 4.3: WebPageTest (Multi-Region)
1. Go to: https://webpagetest.org
2. Enter: `getheatpumpquotes.co.uk`
3. Select location: London, UK
4. Check advanced: Repeat views, Disable JavaScript

**Record these metrics:**
```
First View Load Time: ___ seconds
Fully Loaded Time: ___ seconds
First Byte: ___ ms
Start Render: ___ ms
```

**Targets:**
- Load Time: <3 seconds
- First Byte: <600 ms
- Start Render: <1.5 seconds

✅ **PASS if:** Load time <3 seconds  
⚠️ **WARNING if:** Load time 3-5 seconds  
❌ **FAIL if:** Load time >5 seconds

---

## 5. MOBILE RESPONSIVENESS VERIFICATION

### Check 5.1: Google Mobile-Friendly Test
1. Go to: https://search.google.com/test/mobile-friendly
2. Enter: `https://getheatpumpquotes.co.uk`
3. Wait for analysis

**Expected Result:**
```
✓ Page is mobile friendly
```

✅ **PASS if:** Shows green checkmark  
❌ **FAIL if:** Shows errors or "Not mobile friendly"

### Check 5.2: Manual Mobile Testing
Test on these devices:
- [ ] iPhone SE (small: 375px)
- [ ] iPhone 14 (medium: 390px)
- [ ] iPad (tablet: 768px)
- [ ] Android phone (e.g., Pixel 5: 412px)

**For each device, verify:**
- [ ] Text readable without zooming
- [ ] Buttons clickable (48px+ touch target)
- [ ] Images scale properly
- [ ] Forms usable
- [ ] Navigation accessible
- [ ] No horizontal scroll
- [ ] Page loads under 3 seconds

✅ **PASS if:** All items pass on all devices  
⚠️ **WARNING if:** 1-2 minor issues  
❌ **FAIL if:** Multiple devices have problems

### Check 5.3: Browser DevTools Testing
1. Open Chrome/Firefox/Safari on desktop
2. Press F12 to open DevTools
3. Click mobile device icon (top left of DevTools)
4. Select "iPhone 12" or similar

**Verify:**
- [ ] Layout reflows properly
- [ ] Text is readable
- [ ] Buttons are clickable
- [ ] No JavaScript errors in console
- [ ] Images load quickly

✅ **PASS if:** No errors and layout looks good  
❌ **FAIL if:** Multiple errors or layout breaks

---

## 6. SSL CERTIFICATE VERIFICATION

### Check 6.1: HTTPS Working
```bash
curl -s https://getheatpumpquotes.co.uk -I | head -1
```

**Expected Output:**
```
HTTP/2 200
```

✅ **PASS if:** HTTP/2 or HTTP/1.1 with status 200  
❌ **FAIL if:** Connection refused or certificate error

### Check 6.2: HTTP Redirects to HTTPS
```bash
curl -I http://getheatpumpquotes.co.uk
```

**Expected Output:**
```
HTTP/1.1 301 Moved Permanently
Location: https://getheatpumpquotes.co.uk/
```

✅ **PASS if:** Status 301 or 302 redirecting to https  
❌ **FAIL if:** Status 200 on http or no redirect

### Check 6.3: SSL Labs Rating
1. Go to: https://www.ssllabs.com/ssltest/
2. Enter: `getheatpumpquotes.co.uk`
3. Wait for scan (1-2 minutes)

**Expected Result:**
```
Overall Rating: A+ or A
Certificate: Valid
Chain: Complete
```

**Record:**
```
Overall Grade: ___
Expiration Date: ___
Certificate Issuer: Let's Encrypt (Vercel auto-renews)
```

✅ **PASS if:** Grade A or A+  
⚠️ **WARNING if:** Grade B  
❌ **FAIL if:** Grade C or lower, or expired

### Check 6.4: No Mixed Content
1. Open homepage: https://getheatpumpquotes.co.uk
2. Press F12 (DevTools)
3. Go to Console tab
4. Look for warnings about mixed content

✅ **PASS if:** No mixed content warnings  
❌ **FAIL if:** See "Mixed Content" warning

---

## 7. SERVER-SIDE RENDERING VERIFICATION

### Check 7.1: Meta Tags in HTML Source
```bash
curl -s https://getheatpumpquotes.co.uk | grep -i "<title>\|meta name=\"description\""
```

**Expected Output:**
```
<title>Heat Pump Quotes UK - Compare Installers & Check £7,500 Grant Eligibility</title>
<meta name="description" content="Independent heat pump comparison service...">
```

✅ **PASS if:** Title and description present in source  
❌ **FAIL if:** Meta tags missing or empty

### Check 7.2: Schema Markup in HTML
```bash
curl -s https://getheatpumpquotes.co.uk | grep -i "application/ld+json" | head -3
```

**Expected Output:**
```
<script type="application/ld+json">{"@context":"https://schema.org",...}
<script type="application/ld+json">{"@context":"https://schema.org",...}
<script type="application/ld+json">{"@context":"https://schema.org",...}
```

✅ **PASS if:** 3 or more JSON-LD blocks found  
❌ **FAIL if:** No schema markup or only 1

### Check 7.3: Verify SSR with Different User Agents
```bash
# Googlebot
curl -s -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" \
  https://getheatpumpquotes.co.uk | grep "<title>"

# Bingbot
curl -s -A "Mozilla/5.0 (compatible; Bingbot/2.0)" \
  https://getheatpumpquotes.co.uk | grep "<title>"
```

✅ **PASS if:** Both show `<title>` tag  
❌ **FAIL if:** Either missing title

---

## 8. BROKEN LINKS VERIFICATION

### Check 8.1: Screaming Frog Crawl (Recommended)
1. Download: https://www.screamingfrog.co.uk/seo-spider/
2. Install and open
3. Enter: `getheatpumpquotes.co.uk`
4. Click "Start" to begin crawl
5. Wait for completion (2-5 minutes for small site)

**When done, check:**
```
Total URLs crawled: ___ (should be ~20-30)
Status codes:
  - 200 OK: ___ (should be most)
  - 301 Redirects: ___
  - 404 Not Found: ___ (should be 0)
  - 500 Errors: ___ (should be 0)
```

✅ **PASS if:** No 404 or 500 errors  
⚠️ **WARNING if:** Any 4xx or 5xx errors  
❌ **FAIL if:** Multiple broken links

### Check 8.2: Online Broken Link Checker
1. Go to: https://www.siteimprove.com/broken-links (simpler)
   OR: https://www.broken-link-checker.com (more detailed)
2. Enter domain: `getheatpumpquotes.co.uk`
3. Wait for scan

**Results should show:**
```
Broken links found: 0
External links: ___ (should be checked)
Internal links: ___ (should be all working)
```

✅ **PASS if:** 0 broken links  
❌ **FAIL if:** Any broken links detected

### Check 8.3: Check Specific Pages
Manually check these important pages:
- [ ] Homepage (/) - All links working
- [ ] Blog index (/blog) - All article links working
- [ ] Quiz page (/quiz) - Form submissions working
- [ ] Contact page (/contact) - Form working
- [ ] About page (/about) - All CTA links working

✅ **PASS if:** All manual tests pass  
❌ **FAIL if:** Any page has broken elements

---

## 9. METADATA & SEO TAGS VERIFICATION

### Check 9.1: Title Tag Length
```bash
curl -s https://getheatpumpquotes.co.uk | grep "<title>" | sed 's/.*<title>\(.*\)<\/title>.*/\1/' | wc -c
```

**Expected:** 50-60 characters

**Current Title:**
```
Heat Pump Quotes UK - Compare Installers & Check £7,500 Grant Eligibility
```

Character count: 75 (slightly long, but acceptable)

✅ **PASS if:** 50-70 characters  
⚠️ **WARNING if:** 70-80 characters  
❌ **FAIL if:** <30 or >80 characters

### Check 9.2: Meta Description Length
```bash
curl -s https://getheatpumpquotes.co.uk | grep "description" | head -1
```

**Expected:** 150-160 characters

✅ **PASS if:** 150-160 characters  
⚠️ **WARNING if:** 100-150 or 160-170  
❌ **FAIL if:** <80 or >170 characters

### Check 9.3: Check for Keywords in Meta
```bash
curl -s https://getheatpumpquotes.co.uk | grep "keywords"
```

**Should include:** heat pump, quotes, UK, installers, grants

✅ **PASS if:** Keywords present  
❌ **FAIL if:** No keywords meta tag (acceptable in modern SEO)

### Check 9.4: Test with Facebook Debugger
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter: `https://getheatpumpquotes.co.uk`
3. Check Open Graph data shown

✅ **PASS if:** Shows title and description  
⚠️ **WARNING if:** Missing og:image  
❌ **FAIL if:** No OG tags detected

---

## 10. SEARCH CONSOLE MONITORING

### Check 10.1: Coverage Report
**In Google Search Console:**
1. Go to: Coverage
2. Check status breakdown:

```
Valid (with warnings): ??? URLs
Excluded: ??? URLs
Errors: ??? URLs (should be 0)
Valid: ??? URLs
```

✅ **PASS if:** Most URLs are Valid, 0 Errors  
⚠️ **WARNING if:** Errors detected  
❌ **FAIL if:** Multiple error types

### Check 10.2: URL Inspection Tool
1. In Search Console
2. Click "URL Inspection"
3. Enter: `https://getheatpumpquotes.co.uk/` (homepage)

**Check result:**
```
✓ URL is on Google
✓ Indexing allowed in robots.txt
✓ No crawl issues
```

✅ **PASS if:** All checks green  
⚠️ **WARNING if:** Any yellow warnings  
❌ **FAIL if:** Red X marks or "Not indexed"

### Check 10.3: Performance Report
**After 1+ week of indexing:**
1. Go to: Performance
2. Look for metrics:

```
Total impressions: ___
Total clicks: ___
Average CTR: ___%
Average position: ___
```

✅ **PASS if:** Showing impressions  
⏳ **PENDING if:** Just submitted (wait 1 week)  
❌ **FAIL if:** Still 0 after 2+ weeks

---

## 📊 VERIFICATION CHECKLIST

Print this checklist and mark off each verification:

```
CRITICAL VERIFICATIONS (Must Pass)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

☐ robots.txt accessible and valid
  └─ Command: curl https://getheatpumpquotes.co.uk/robots.txt
  └─ Result: ____________________

☐ Google Search Console registered
  └─ Status: Verified / Pending / Not started
  └─ Date verified: ____________________

☐ Sitemap submitted to Google
  └─ Status: Submitted / Processing / Indexed
  └─ URLs submitted: ___
  └─ URLs indexed: ___

☐ SSL certificate valid (Grade A+)
  └─ Grade: ___
  └─ Expires: ____________________

☐ Mobile responsive (Mobile-Friendly Test)
  └─ Result: Mobile friendly / Issues found
  └─ Issues: ____________________

HIGH-PRIORITY VERIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

☐ Core Web Vitals Measured
  └─ Performance: ___/100
  └─ LCP: ___ ms (Target: <2500)
  └─ FID: ___ ms (Target: <100)
  └─ CLS: ___ (Target: <0.1)

☐ No broken links (0 found)
  └─ Tool used: Screaming Frog / Online tool
  └─ Total crawled: ___
  └─ Broken: ___

☐ Metadata tags present
  └─ Title: ✓/✗
  └─ Description: ✓/✗
  └─ Canonical: ✓/✗
  └─ OG tags: ✓/✗

ONGOING MONITORING (Weekly)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Week of ________:
☐ Search Console: Checked for errors
☐ Indexing progress: ___ URLs indexed
☐ Performance trends: Score ___/100
☐ No critical alerts

Week of ________:
☐ Search Console: Checked for errors
☐ Indexing progress: ___ URLs indexed
☐ Performance trends: Score ___/100
☐ No critical alerts

Week of ________:
☐ Search Console: Checked for errors
☐ Indexing progress: ___ URLs indexed
☐ Performance trends: Score ___/100
☐ No critical alerts
```

---

## ✅ READY FOR PHASE 2 WHEN:

- [x] robots.txt deployed and validated
- [x] Google Search Console registered
- [ ] Domain verified in GSC (24-48 hours)
- [ ] Sitemap submitted to Google (1-2 weeks for indexing)
- [ ] Core Web Vitals baseline recorded
- [ ] Mobile responsiveness verified
- [ ] SSL certificate rated A+
- [ ] 0 broken links found
- [ ] All metadata tags present
- [ ] Initial Google indexing confirmed (50+ URLs)

**Current Status:** Ready for Phase 2 items 1-8  
**Wait for:** Initial indexing confirmation before moving forward

---

**Last Updated:** January 1, 2026  
**For Questions:** See PHASE_1_TECHNICAL_SEO_AUDIT.md (detailed explanations)  
**For Actions:** See PHASE_1_ACTIONABLE_CHECKLIST.md (step-by-step guide)


