import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, postcode, inquiryType, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !postcode || !inquiryType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Initialize Resend client at runtime
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Build email content with urgent styling
    const emailContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <div style="background-color: #ff3b30; color: white; padding: 15px; border-radius: 12px; margin-bottom: 20px;">
          <h2 style="margin: 0; font-size: 24px;">🚨 URGENT CALLBACK REQUEST</h2>
        </div>
        
        <div style="background-color: #fff3cd; border-left: 4px solid #ff9500; padding: 15px; margin: 20px 0;">
          <p style="margin: 0; font-weight: bold; color: #856404;">
            ⚠️ Priority Response Required - Customer expecting callback ASAP
          </p>
        </div>
        
        <div style="background-color: #f5f5f7; border-radius: 12px; padding: 20px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1d1d1f;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #ff3b30; font-weight: bold; font-size: 18px;">${phone}</a></p>
          <p><strong>Postcode:</strong> ${postcode}</p>
        </div>
        
        <div style="background-color: #ffffff; border: 2px solid #ff3b30; border-radius: 12px; padding: 20px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #ff3b30;">Inquiry Type</h3>
          <p style="font-size: 18px; font-weight: bold; color: #1d1d1f;">${inquiryType}</p>
        </div>
        
        ${message ? `
        <div style="background-color: #ffffff; border: 1px solid #d2d2d7; border-radius: 12px; padding: 20px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1d1d1f;">Additional Details</h3>
          <p style="white-space: pre-wrap; color: #1d1d1f;">${message}</p>
        </div>
        ` : ''}
        
        <div style="background-color: #e8f4fd; border-radius: 12px; padding: 20px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #0071e3;">Action Required</h3>
          <ol style="color: #1d1d1f; line-height: 1.8;">
            <li>Call the customer at <strong style="color: #ff3b30;">${phone}</strong> as soon as possible</li>
            <li>Confirm receipt and expected response time</li>
            <li>Address their ${inquiryType.toLowerCase()}</li>
          </ol>
        </div>
        
        <hr style="border: none; border-top: 1px solid #d2d2d7; margin: 30px 0;" />
        <p style="color: #666; font-size: 12px;">
          <strong>Submitted at:</strong> ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}<br/>
          <strong>Priority:</strong> <span style="color: #ff3b30; font-weight: bold;">URGENT</span>
        </p>
      </div>
    `;

    // Send urgent email to admin with high priority
    const { data: adminEmailData, error: adminError } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Heat Pump Resource <onboarding@resend.dev>',
      to: [process.env.ADMIN_EMAIL || 'info@heatpumpresource.co.uk'],
      subject: `🚨 URGENT CALLBACK: ${inquiryType} - ${name}`,
      html: emailContent,
      replyTo: email,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high',
      },
    });

    if (adminError) {
      console.error('Error sending admin email:', adminError);
      return NextResponse.json(
        { error: 'Failed to send email', details: adminError },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const userConfirmation = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #ff3b30; color: white; padding: 20px; border-radius: 12px; margin-bottom: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">✓ Urgent Request Received</h1>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; color: #1d1d1f;">Hi ${name},</p>
        
        <p style="font-size: 16px; line-height: 1.5; color: #1d1d1f;">
          Thank you for your urgent inquiry. We've received your callback request and our team has been notified immediately.
        </p>
        
        <div style="background-color: #fff3cd; border-left: 4px solid #ff9500; padding: 15px; margin: 20px 0;">
          <p style="margin: 0; color: #856404; font-weight: bold;">
            ⏰ We will contact you as soon as possible during business hours (Mon-Fri 9am-6pm)
          </p>
        </div>
        
        <div style="background-color: #f5f5f7; border-radius: 12px; padding: 20px; margin: 20px 0;">
          <h3 style="color: #1d1d1f; margin-top: 0;">Your Request Details:</h3>
          <p style="color: #1d1d1f;"><strong>Type:</strong> ${inquiryType}</p>
          <p style="color: #1d1d1f;"><strong>Phone:</strong> ${phone}</p>
          <p style="color: #1d1d1f;"><strong>Postcode:</strong> ${postcode}</p>
          ${message ? `<p style="color: #1d1d1f;"><strong>Details:</strong> ${message}</p>` : ''}
        </div>
        
        <div style="background-color: #e8f4fd; border-radius: 12px; padding: 20px; margin: 20px 0;">
          <h3 style="color: #0071e3; margin-top: 0;">What Happens Next?</h3>
          <ol style="color: #1d1d1f; line-height: 1.8;">
            <li>A specialist will review your request immediately</li>
            <li>We'll call you as soon as possible during business hours</li>
            <li>We'll arrange the fastest solution for your needs</li>
          </ol>
        </div>
        
        <div style="background-color: #f5f5f7; border-radius: 12px; padding: 20px; margin: 20px 0;">
          <h3 style="color: #1d1d1f; margin-top: 0;">Business Hours</h3>
          <p style="color: #1d1d1f; margin: 5px 0;">Monday - Friday: 9am - 6pm</p>
          <p style="color: #1d1d1f; margin: 5px 0;">Saturday: 10am - 4pm</p>
          <p style="color: #1d1d1f; margin: 5px 0;">Sunday: Closed</p>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; color: #1d1d1f;">
          Best regards,<br/>
          <strong>Heat Pump Resource Team</strong>
        </p>
        
        <hr style="border: none; border-top: 1px solid #d2d2d7; margin: 30px 0;" />
        
        <p style="font-size: 12px; color: #86868b; line-height: 1.5;">
          This is an automated confirmation. We've received your urgent callback request and will contact you as soon as possible.
        </p>
      </div>
    `;

    const { data: userEmailData, error: userError } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Heat Pump Resource <onboarding@resend.dev>',
      to: [email],
      subject: '✓ Urgent Callback Request Received - Heat Pump Resource',
      html: userConfirmation,
    });

    if (userError) {
      console.error('Error sending user confirmation email:', userError);
      // Don't fail the request if user email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Urgent callback request submitted successfully',
      adminEmailId: adminEmailData?.id,
      userEmailId: userEmailData?.id,
    });
  } catch (error) {
    console.error('Error processing urgent callback:', error);
    return NextResponse.json(
      { error: 'Failed to process submission', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

