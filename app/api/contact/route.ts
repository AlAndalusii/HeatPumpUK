import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Initialize Resend client at runtime
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Build email content
    const emailContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <h2>New Contact Form Submission</h2>
        
        <div style="background-color: #f5f5f7; border-radius: 12px; padding: 20px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        </div>
        
        <div style="background-color: #ffffff; border: 1px solid #d2d2d7; border-radius: 12px; padding: 20px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #d2d2d7; margin: 30px 0;" />
        <p style="color: #666; font-size: 12px;">Submitted at: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
      </div>
    `;

    // Send email to admin
    const { data: adminEmailData, error: adminError } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Heat Pump Quotes UK <onboarding@resend.dev>',
      to: [process.env.ADMIN_EMAIL || 'info@heatpumpresource.co.uk'],
      subject: `Contact Form: ${name}`,
      html: emailContent,
      replyTo: email, // Allow direct reply to the user
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
        <h1 style="color: #0071e3; font-size: 28px; margin-bottom: 20px;">Message Received!</h1>
        
        <p style="font-size: 16px; line-height: 1.5; color: #1d1d1f;">Hi ${name},</p>
        
        <p style="font-size: 16px; line-height: 1.5; color: #1d1d1f;">
          Thank you for reaching out to us. We've received your message and will get back to you within 24 hours during business days.
        </p>
        
        <div style="background-color: #f5f5f7; border-radius: 12px; padding: 20px; margin: 20px 0;">
          <h3 style="color: #1d1d1f; margin-top: 0;">Your Message:</h3>
          <p style="color: #1d1d1f; white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="background-color: #e8f4fd; border-radius: 12px; padding: 20px; margin: 20px 0;">
          <h3 style="color: #0071e3; margin-top: 0;">Business Hours</h3>
          <p style="color: #1d1d1f; line-height: 1.5;">
            📧 We respond to all messages within 24 hours<br/>
            🕐 Monday - Friday: 9am - 6pm<br/>
            🕐 Saturday: 10am - 4pm<br/>
            🕐 Sunday: Closed
          </p>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; color: #1d1d1f;">
          Best regards,<br/>
          <strong>Air Source Heat Pump Resource Team</strong>
        </p>
        
        <hr style="border: none; border-top: 1px solid #d2d2d7; margin: 30px 0;" />
        
        <p style="font-size: 12px; color: #86868b; line-height: 1.5;">
          This is an automated confirmation email. Please do not reply to this email. If you need to contact us, use the details provided above.
        </p>
      </div>
    `;

    const { data: userEmailData, error: userError } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Heat Pump Quotes UK <onboarding@resend.dev>',
      to: [email],
      subject: 'We Received Your Message - Air Source Heat Pump Resource',
      html: userConfirmation,
    });

    if (userError) {
      console.error('Error sending user confirmation email:', userError);
      // Don't fail the request if user email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      adminEmailId: adminEmailData?.id,
      userEmailId: userEmailData?.id,
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process submission', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

