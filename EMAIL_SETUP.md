# Email Integration Setup Guide

This project uses [Resend](https://resend.com) to send emails when users submit forms (quiz, contact, or urgent callback).

## Setup Instructions

### 1. Create a `.env.local` file

Create a `.env.local` file in the root directory with the following content:

```env
# Resend API Key
RESEND_API_KEY=re_gMeDYhLt_QDMbVW1aeAqk65sXmUbz1RYG

# Email Configuration
# The email address that will receive form submissions
ADMIN_EMAIL=info@heatpumpresource.co.uk

# The email address that will be used as the sender (must be verified in Resend)
FROM_EMAIL=onboarding@resend.dev
```

### 2. Configure Resend

1. Go to [Resend Dashboard](https://resend.com/dashboard)
2. Verify your domain or use the default `onboarding@resend.dev` for testing
3. If using a custom domain:
   - Add your domain in Resend
   - Add the required DNS records
   - Update `FROM_EMAIL` in `.env.local` to use your domain (e.g., `noreply@yourdomain.com`)

### 3. Update Admin Email

Update the `ADMIN_EMAIL` in `.env.local` to the email address where you want to receive form submissions.

## Email Features

### Quiz Form (`/quiz`)
- **Admin Email**: Receives all quiz responses with contact details and answers
- **User Email**: Sends confirmation with next steps
- **Subject**: "New Quiz Submission - [Name]"

### Contact Form (`/contact`)
- **Admin Email**: Receives contact form submission with message
- **User Email**: Sends confirmation that message was received
- **Subject**: "Contact Form: [Name]"
- **Reply-To**: Set to user's email for easy replies

### Urgent Callback (`/urgent-inquiry`)
- **Admin Email**: Receives urgent callback request with HIGH PRIORITY flag
- **User Email**: Sends confirmation with business hours information
- **Subject**: "🚨 URGENT CALLBACK: [Type] - [Name]"
- **Priority**: High (X-Priority: 1)

## Email Templates

All emails use responsive HTML templates with:
- Clean, modern design
- Mobile-friendly layout
- Brand colors (#0071e3 for primary, #FF3B30 for urgent)
- Clear call-to-action sections

## API Routes

### POST `/api/quiz`
```json
{
  "answers": {
    "1": "Get heat pump quotes",
    "2": "Yes",
    // ... other answers
    "10": "John Smith|john@example.com",
    "11": "07123456789"
  }
}
```

### POST `/api/contact`
```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "07123456789",
  "message": "I have a question..."
}
```

### POST `/api/urgent-callback`
```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "07123456789",
  "postcode": "SW1A 1AA",
  "inquiryType": "Urgent heat pump installation",
  "message": "Optional additional details"
}
```

## Testing

1. Start the development server:
```bash
npm run dev
```

2. Test each form:
   - Quiz: http://localhost:3000/quiz
   - Contact: http://localhost:3000/contact
   - Urgent: http://localhost:3000/urgent-inquiry

3. Check your email inbox (both admin and user emails)

4. Monitor the Resend dashboard for email delivery status

## Troubleshooting

### Emails not sending
- Check that `RESEND_API_KEY` is correct in `.env.local`
- Verify your domain in Resend dashboard
- Check browser console and server logs for errors

### User not receiving confirmation emails
- Check spam folder
- Verify the user's email address is valid
- Check Resend dashboard for delivery status

### Admin not receiving submissions
- Verify `ADMIN_EMAIL` is correct in `.env.local`
- Check spam folder
- Check Resend dashboard for delivery status

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform:
   - `RESEND_API_KEY`
   - `ADMIN_EMAIL`
   - `FROM_EMAIL`

2. Ensure your domain is verified in Resend

3. Test all forms after deployment

## Resend API Features Used

- ✅ Send single emails
- ✅ Custom HTML templates
- ✅ Reply-To headers
- ✅ Priority headers (for urgent emails)
- ❌ Batch sending (not currently used)
- ❌ Scheduled emails (not currently used)
- ❌ Email tracking (available in Resend dashboard)

## Cost

Resend offers:
- **Free tier**: 3,000 emails/month
- **Pro tier**: $20/month for 50,000 emails

Each form submission sends 2 emails (admin + user confirmation), so:
- Free tier: ~1,500 form submissions/month
- Pro tier: ~25,000 form submissions/month

## Support

For Resend support and documentation:
- [Resend Documentation](https://resend.com/docs)
- [Resend API Reference](https://resend.com/docs/api-reference)
- [Resend Support](https://resend.com/support)



