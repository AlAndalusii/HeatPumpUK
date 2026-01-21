# Email Templates Reference

This document provides a quick reference for all email templates used in the application.

## Template Overview

| Form | Admin Email | User Email | Priority |
|------|------------|------------|----------|
| Quiz | ✅ Yes | ✅ Yes | Normal |
| Contact | ✅ Yes | ✅ Yes | Normal |
| Urgent Callback | ✅ Yes | ✅ Yes | **HIGH** |

---

## Quiz Form Emails

### Admin Email
**Subject:** `New Quiz Submission - [Name]`

**Contains:**
- Contact Information (Name, Email, Phone, Postcode)
- All quiz responses:
  - Purpose
  - Property Ownership
  - Location
  - Current Heating System
  - Property Type
  - Bedrooms
  - Built When
  - Installation Timeline
- Submission timestamp (UK timezone)

**Style:** Professional, informative

### User Email
**Subject:** `Thank You - Your Air Source Heat Pump Quote Request`

**Contains:**
- Personalized greeting
- Thank you message
- What happens next (3 steps):
  1. MCS-certified installers review details
  2. Contact within 48 hours
  3. Free survey and quotes
- Contact information
- Reassurance message

**Style:** Friendly, reassuring, professional

---

## Contact Form Emails

### Admin Email
**Subject:** `Contact Form: [Name]`

**Contains:**
- Contact Information (Name, Email, Phone)
- Full message text
- Submission timestamp
- **Reply-To:** User's email address

**Style:** Clean, easy to read

### User Email
**Subject:** `We Received Your Message - Air Source Heat Pump Resource`

**Contains:**
- Personalized greeting
- Confirmation message
- Copy of their message
- Response time promise (24 hours)
- Alternative contact methods:
  - Phone: 0800 123 4567
  - Email: info@heatpumpresource.co.uk
  - Business hours
- Reassurance message

**Style:** Friendly, helpful

---

## Urgent Callback Emails

### Admin Email
**Subject:** `🚨 URGENT CALLBACK: [Type] - [Name]`

**Contains:**
- 🚨 URGENT header (red background)
- ⚠️ Priority response warning
- Contact Information (Name, Email, **Phone**, Postcode)
- Inquiry Type (large, bold)
- Additional Details (if provided)
- Action Required checklist:
  1. Call customer ASAP
  2. Confirm receipt
  3. Address inquiry
- Submission timestamp
- Priority flag

**Headers:**
```
X-Priority: 1
X-MSMail-Priority: High
Importance: high
```

**Style:** Urgent, attention-grabbing, red accents

### User Email
**Subject:** `✓ Urgent Callback Request Received - Air Source Heat Pump Resource`

**Contains:**
- ✓ Urgent request received header (red)
- Personalized greeting
- Confirmation message
- ⏰ Response time expectation
- Request details summary
- What happens next (3 steps)
- Business hours (clearly displayed)
- Reassurance message

**Style:** Urgent but reassuring, professional

---

## Email Design System

### Colors

```css
/* Primary Blue */
#0071e3 - Primary actions, links, headings

/* Urgent Red */
#FF3B30 - Urgent indicators, warnings

/* Success Green */
#34C759 - Success indicators, checkmarks

/* Warning Orange */
#FF9500 - Warning indicators

/* Text Colors */
#1d1d1f - Primary text
#6e6e73 - Secondary text
#86868b - Tertiary text

/* Background Colors */
#f5f5f7 - Light gray background
#e8f4fd - Light blue background
#fff3cd - Light yellow (warning)
#ffffff - White
```

### Typography

```css
/* Headings */
H1: 28px, font-weight: 600
H2: 20-24px, font-weight: 600
H3: 18px, font-weight: 600

/* Body Text */
Paragraph: 16px, line-height: 1.5
Small Text: 12px, line-height: 1.5

/* Font Family */
-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
```

### Spacing

```css
/* Border Radius */
Small: 8px
Medium: 12px
Large: 16px

/* Padding */
Small: 15px
Medium: 20px
Large: 30px

/* Margins */
Between sections: 20px
Between paragraphs: 10px
```

### Components

#### Info Box (Gray)
```html
<div style="background-color: #f5f5f7; border-radius: 12px; padding: 20px; margin: 20px 0;">
  <!-- Content -->
</div>
```

#### Action Box (Blue)
```html
<div style="background-color: #e8f4fd; border-radius: 12px; padding: 20px; margin: 20px 0;">
  <!-- Content -->
</div>
```

#### Warning Box (Yellow)
```html
<div style="background-color: #fff3cd; border-left: 4px solid #ff9500; padding: 15px; margin: 20px 0;">
  <!-- Content -->
</div>
```

#### Urgent Header (Red)
```html
<div style="background-color: #ff3b30; color: white; padding: 15px; border-radius: 12px; margin-bottom: 20px;">
  <h2 style="margin: 0; font-size: 24px;">🚨 URGENT</h2>
</div>
```

---

## Customization Guide

### To Update Contact Information

Edit in `/app/api/[form]/route.ts`:

```typescript
// Phone number
0800 123 4567

// Email
info@heatpumpresource.co.uk

// Business hours
Monday - Friday: 9am - 6pm
Saturday: 10am - 4pm
Sunday: Closed
```

### To Update Brand Colors

Search and replace in all route files:
- `#0071e3` → Your primary color
- `#FF3B30` → Your urgent color
- `#34C759` → Your success color

### To Add Company Logo

Add to email templates:
```html
<img src="https://yourdomain.com/logo.png" alt="Company Logo" style="height: 40px; margin-bottom: 20px;" />
```

### To Customize Email Copy

Edit the HTML strings in:
- `/app/api/quiz/route.ts` - Lines 35-80 (admin) and 95-135 (user)
- `/app/api/contact/route.ts` - Lines 30-70 (admin) and 85-125 (user)
- `/app/api/urgent-callback/route.ts` - Lines 35-95 (admin) and 130-195 (user)

---

## Testing Email Templates

### Preview in Browser

Create a test HTML file:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <!-- Paste email template HTML here -->
</body>
</html>
```

### Test Email Clients

Test in:
- ✅ Gmail (Web, iOS, Android)
- ✅ Outlook (Web, Desktop)
- ✅ Apple Mail (macOS, iOS)
- ✅ Yahoo Mail
- ✅ ProtonMail

### Responsive Testing

Test on:
- 📱 Mobile (320px - 480px)
- 📱 Tablet (481px - 768px)
- 💻 Desktop (769px+)

---

## Email Best Practices

### ✅ Do's
- Keep subject lines under 50 characters
- Use clear, actionable language
- Include contact information
- Add timestamps
- Use responsive design
- Test in multiple email clients
- Include plain text fallback
- Use semantic HTML
- Add alt text to images

### ❌ Don'ts
- Don't use JavaScript
- Don't use external CSS files
- Don't use complex layouts
- Don't forget mobile users
- Don't use too many images
- Don't use spam trigger words
- Don't forget unsubscribe link (if marketing)
- Don't use tiny fonts

---

## Troubleshooting

### Emails Going to Spam

**Solutions:**
1. Verify domain in Resend
2. Add SPF/DKIM records
3. Avoid spam trigger words
4. Don't use ALL CAPS in subject
5. Include physical address
6. Add unsubscribe link (if applicable)

### Broken Layouts

**Solutions:**
1. Use inline styles only
2. Test in multiple clients
3. Use tables for layout (if needed)
4. Avoid complex CSS
5. Use web-safe fonts

### Images Not Loading

**Solutions:**
1. Use absolute URLs
2. Host images on CDN
3. Add alt text
4. Don't rely on images for critical info

---

## Additional Resources

- [Resend Email Best Practices](https://resend.com/docs/best-practices)
- [Email on Acid - Testing Tool](https://www.emailonacid.com/)
- [Litmus - Email Testing](https://www.litmus.com/)
- [Can I Email - CSS Support](https://www.caniemail.com/)
- [Really Good Emails - Inspiration](https://reallygoodemails.com/)






