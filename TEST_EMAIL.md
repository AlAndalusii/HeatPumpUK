# Test Email Setup

## Quick Test

To test if emails work to `z.jama-@outlook.com`:

1. **Set your Resend API key**:
```bash
# Create .env.local file in project root
echo "RESEND_API_KEY=re_your_api_key_here" > .env.local
```

2. **Restart the dev server**:
```bash
npm run dev
```

3. **Test the PDF download**:
   - Go to http://localhost:3000
   - Click "Download Free Guide"
   - Enter any email address
   - Click either "Open in Browser" or "Download PDF"

4. **Check results**:
   - Admin email should arrive at: **z.jama-@outlook.com**
   - User email should arrive at: the email you entered
   - Check Resend dashboard: https://resend.com/emails

## Get Resend API Key

1. Go to https://resend.com
2. Sign up (free)
3. Go to API Keys: https://resend.com/api-keys
4. Create new API key
5. Copy and paste into `.env.local`

## For Testing (No Domain Verification)

Update line 11 in `/app/api/pdf-download/route.ts`:

```typescript
from: "onboarding@resend.dev",  // Use this for testing
```

This allows you to send test emails without verifying the domain first.

## For Production (After Domain Verification)

```typescript
from: "Get Air Source Heat Pump Quotes <noreply@getheatpumpquotes.co.uk>",
```



