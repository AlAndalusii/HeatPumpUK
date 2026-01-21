import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { answers } = body;

    // Parse the combined name/email field
    const nameEmailField = answers[10] || '';
    const [name, email] = nameEmailField.split('|');
    const phone = answers[11] || 'Not provided';
    const postcode = answers[9] || 'Not provided';

    // Initialize Resend client at runtime
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Build a readable summary of all answers
    const answersSummary = `
      <h2>Quiz Submission Details</h2>
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Postcode:</strong> ${postcode}</p>
      
      <h3>Quiz Responses</h3>
      <p><strong>Purpose:</strong> ${answers[1] || 'Not answered'}</p>
      <p><strong>Property Ownership:</strong> ${answers[2] || 'Not answered'}</p>
      <p><strong>Location:</strong> ${answers[3] || 'Not answered'}</p>
      <p><strong>Current Heating System:</strong> ${answers[4] || 'Not answered'}</p>
      <p><strong>Property Type:</strong> ${answers[5] || 'Not answered'}</p>
      <p><strong>Bedrooms:</strong> ${answers[6] || 'Not answered'}</p>
      <p><strong>Built When:</strong> ${answers[7] || 'Not answered'}</p>
      <p><strong>Installation Timeline:</strong> ${answers[8] || 'Not answered'}</p>
      
      <hr style="margin: 20px 0;" />
      <p style="color: #666; font-size: 12px;">Submitted at: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
    `;

    // Send email to admin
    const { data: adminEmailData, error: adminError } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Air Source Heat Pump Resource <onboarding@resend.dev>',
      to: [process.env.ADMIN_EMAIL || 'info@heatpumpresource.co.uk'],
      subject: `New Quiz Submission - ${name}`,
      html: answersSummary,
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
        <h1 style="color: #0071e3; font-size: 28px; margin-bottom: 20px;">Thank You for Your Submission!</h1>
        
        <p style="font-size: 16px; line-height: 1.5; color: #1d1d1f;">Hi ${name},</p>
        
        <p style="font-size: 16px; line-height: 1.5; color: #1d1d1f;">
          Thank you for completing our Air Source Heat Pump eligibility quiz. We've received your information and our team of MCS-certified installers will review your details.
        </p>
        
        <div style="background-color: #f5f5f7; border-radius: 12px; padding: 20px; margin: 20px 0;">
          <h2 style="color: #1d1d1f; font-size: 20px; margin-top: 0;">What happens next?</h2>
          <ol style="color: #1d1d1f; line-height: 1.8;">
            <li>Up to 3 MCS-certified installers will review your details</li>
            <li>They'll contact you within 48 hours to arrange a free survey</li>
            <li>You'll receive personalized quotes and grant eligibility confirmation</li>
          </ol>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; color: #1d1d1f;">
          If you have any questions in the meantime, feel free to reply to this email and we'll be happy to help.
        </p>
        
        <p style="font-size: 16px; line-height: 1.5; color: #1d1d1f;">
          Best regards,<br/>
          <strong>Air Source Heat Pump Resource Team</strong>
        </p>
        
        <hr style="border: none; border-top: 1px solid #d2d2d7; margin: 30px 0;" />
        
        <p style="font-size: 12px; color: #86868b; line-height: 1.5;">
          This email was sent because you completed a quiz on Air Source Heat Pump Resource. If you didn't submit this form, please ignore this email.
        </p>
      </div>
    `;

    const { data: userEmailData, error: userError } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Air Source Heat Pump Resource <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank You - Your Air Source Heat Pump Quote Request',
      html: userConfirmation,
    });

    if (userError) {
      console.error('Error sending user confirmation email:', userError);
      // Don't fail the request if user email fails, admin email is more important
    }

    return NextResponse.json({
      success: true,
      message: 'Quiz submitted successfully',
      adminEmailId: adminEmailData?.id,
      userEmailId: userEmailData?.id,
    });
  } catch (error) {
    console.error('Error processing quiz submission:', error);
    return NextResponse.json(
      { error: 'Failed to process submission', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

