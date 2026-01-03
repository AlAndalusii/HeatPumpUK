# PDF Download with Email Capture - Setup Guide

## Overview
The PDF guide now captures user emails and sends notifications via Resend. Users can either download the PDF or open it directly in their browser.

---

## 🚀 Features Implemented

### 1. **Email Capture**
- ✅ User enters email to access PDF guide
- ✅ Email sent to admin (z.jama-@outlook.com)
- ✅ Thank you email sent to user with CTA
- ✅ Email stored/tracked via Resend dashboard

### 2. **PDF Access Options**
- ✅ **Open in Browser** - View PDF in new tab
- ✅ **Download PDF** - Download to device
- ✅ Both options capture email first

### 3. **Email Notifications**

#### Admin Notification (to z.jama-@outlook.com)
Contains:
- User's email address
- Timestamp (UK timezone)
- Lead type: PDF Download
- Professional HTML email design

#### User Thank You Email
Contains:
- Confirmation message
- What's inside the guide
- CTA to check grant eligibility
- CTA to get free quotes
- Professional branding

---

## 📧 Setup Instructions

### Step 1: Create Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email

### Step 2: Get API Key

1. Go to [API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Name it: "Heat Pump PDF Downloads"
4. Copy the API key

### Step 3: Add Environment Variable

1. Create `.env.local` file in project root:
```bash
RESEND_API_KEY=re_your_api_key_here
```

2. Add to `.env` if using production:
```bash
RESEND_API_KEY=re_your_api_key_here
```

### Step 4: Verify Domain (Important!)

**For production emails:**

1. Go to [Resend Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter: `getheatpumpquotes.co.uk`
4. Add DNS records shown:
   - TXT record for verification
   - MX records for receiving
   - CNAME for DKIM

**For testing (use this first):**
- Use `onboarding@resend.dev` as sender
- Can send to any email
- No domain verification needed

### Step 5: Update Email Sender

If domain not verified yet, update the API route:

```typescript
// In app/api/pdf-download/route.ts
from: "onboarding@resend.dev",  // For testing
// OR
from: "Get Heat Pump Quotes <noreply@getheatpumpquotes.co.uk>",  // After domain verified
```

---

## 🧪 Testing

### Test the PDF Download

1. **Start dev server:**
```bash
npm run dev
```

2. **Open browser:**
```
http://localhost:3000
```

3. **Click "Download Free Guide"**

4. **Enter test email:**
```
your-email@example.com
```

5. **Try both buttons:**
   - "Open in Browser" - Opens PDF in new tab
   - "Download PDF" - Downloads to device

6. **Check emails:**
   - Admin email at: z.jama-@outlook.com
   - User email at: test email you entered

### Expected Results

✅ PDF opens/downloads successfully  
✅ Admin receives notification email  
✅ User receives thank you email  
✅ Emails visible in [Resend Dashboard](https://resend.com/emails)

---

## 📊 Email Templates

### Admin Email Features
- **Header**: Gradient blue with white text
- **Content**: Email, timestamp, lead type
- **Design**: Professional, Apple-style
- **CTA**: Suggests following up with lead

### User Email Features
- **Header**: Gradient blue, thank you message
- **What's Inside**: Bulleted list of guide contents
- **Grant CTA**: Green box linking to eligibility checker
- **Next Steps**: Numbered list with clear actions
- **Primary CTA**: Blue button to get quotes
- **Footer**: Brand info and website link

---

## 🔧 Technical Details

### API Route
**Location**: `/app/api/pdf-download/route.ts`

**Endpoint**: `POST /api/pdf-download`

**Request Body**:
```json
{
  "email": "user@example.com"
}
```

**Response**:
```json
{
  "success": true
}
```

### PDF Modal Updates
**Location**: `/app/page.tsx` (PDFDownloadModal component)

**Changes**:
1. Two buttons instead of one
2. Calls API before generating PDF
3. Opens PDF in browser OR downloads
4. Shows success message after email sent

---

## 🎨 UI Improvements

### Button Layout
```
┌────────────────────────────────────────┐
│  [👁️ Open in Browser] [⬇️ Download]   │
└────────────────────────────────────────┘
```

**Colors**:
- Open in Browser: Blue (#0071e3)
- Download: Green (#34c759)

**Icons**:
- Eye icon for viewing
- Download arrow for downloading

**Responsive**:
- Stacked on mobile
- Side-by-side on desktop

---

## 🔒 Privacy & Security

### Data Handling
- ✅ Email validation before processing
- ✅ No storage of emails in database (yet)
- ✅ Tracked via Resend dashboard
- ✅ Can be exported from Resend

### Privacy Message
Shows below form:
> "We respect your privacy. No spam, ever."

---

## 📈 Analytics & Tracking

### Resend Dashboard Shows:
- Total PDF downloads (emails sent)
- Open rates
- Click rates on CTAs
- Email delivery status
- Bounce/complaint rates

### Access Dashboard:
[https://resend.com/emails](https://resend.com/emails)

---

## 🐛 Troubleshooting

### Issue: Emails not sending

**Solutions**:
1. Check API key in `.env.local`
2. Restart dev server after adding env vars
3. Check Resend dashboard for errors
4. Verify email format is correct

### Issue: Domain not verified

**Solutions**:
1. Use `onboarding@resend.dev` for testing
2. Wait 24-48 hours after adding DNS records
3. Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
4. Contact Resend support if issues persist

### Issue: PDF not opening in browser

**Solutions**:
1. Check browser popup blocker
2. Try different browser
3. Check console for errors
4. Ensure jsPDF is installed: `npm install jspdf`

### Issue: Emails going to spam

**Solutions**:
1. Verify domain properly
2. Set up DMARC records
3. Add SPF and DKIM
4. Send from verified domain, not @resend.dev

---

## 📋 Checklist

Before going live:

- [ ] Add `RESEND_API_KEY` to environment variables
- [ ] Verify domain `getheatpumpquotes.co.uk` in Resend
- [ ] Update email sender from `onboarding@resend.dev` to verified domain
- [ ] Test both "Open in Browser" and "Download" buttons
- [ ] Confirm admin email arrives at z.jama-@outlook.com
- [ ] Confirm user thank you email arrives
- [ ] Check emails on mobile and desktop
- [ ] Test with multiple email providers (Gmail, Outlook, etc.)
- [ ] Add emails to CRM or database (optional, future enhancement)
- [ ] Set up email automation sequences (optional)

---

## 🚀 Next Steps (Optional Enhancements)

### 1. Store Emails in Database
- Set up Supabase/PostgreSQL
- Store email, timestamp, source
- Build admin dashboard

### 2. Email Sequences
- Day 1: Thank you + guide
- Day 3: "Have you read the guide?"
- Day 7: "Ready for quotes?"
- Day 14: Case studies & testimonials

### 3. Advanced Tracking
- Track which CTA was clicked
- Track PDF opens (if sent via email)
- A/B test email subject lines
- Segment users by behavior

### 4. Lead Scoring
- Score based on actions:
  - Downloaded guide: +10 points
  - Opened email: +5 points
  - Clicked CTA: +15 points
  - Started quiz: +20 points

---

## 📝 Summary

✅ **Email capture** working via Resend API  
✅ **Admin notifications** sent to z.jama-@outlook.com  
✅ **User emails** sent with thank you & CTAs  
✅ **PDF opens** in browser or downloads  
✅ **Professional design** matching Apple quality  
✅ **Mobile responsive** email templates  
✅ **Ready for production** after domain verification  

The system is now capturing valuable lead information while providing an excellent user experience!


