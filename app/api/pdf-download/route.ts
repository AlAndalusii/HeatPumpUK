import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured
    if (!resend) {
      console.warn("RESEND_API_KEY is not configured. Email notifications will be skipped.")
      return NextResponse.json({ success: true })
    }

    // Send notification to admin
    // Note: Use "onboarding@resend.dev" for testing before domain verification
    // Change to verified domain email after setting up DNS records
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: ["z.jama-@outlook.com"],
      subject: "New PDF Guide Download",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #0071e3 0%, #0056b3 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600;">New PDF Guide Download</h1>
            </div>
            
            <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 12px 12px;">
              <h2 style="color: #1d1d1f; font-size: 18px; margin-top: 0;">Download Details</h2>
              
              <div style="background: #f5f5f7; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0 0 10px 0;"><strong style="color: #1d1d1f;">Email:</strong></p>
                <p style="margin: 0; font-size: 16px; color: #0071e3;">${email}</p>
              </div>
              
              <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0; color: #856404; font-size: 14px;">
                  <strong>📥 Lead Type:</strong> PDF Download<br>
                  <strong>🕒 Time:</strong> ${new Date().toLocaleString('en-GB', { 
                    timeZone: 'Europe/London',
                    dateStyle: 'full',
                    timeStyle: 'short'
                  })}
                </p>
              </div>
              
              <p style="color: #6e6e73; font-size: 14px; margin-top: 30px;">
                This person has downloaded the Air Source Heat Pump vs Gas Boiler guide. Consider following up with them about their Air Source Heat Pump needs.
              </p>
            </div>
            
            <div style="text-align: center; padding: 20px; color: #86868b; font-size: 12px;">
              <p style="margin: 0;">Heat Pump Quotes UK</p>
              <p style="margin: 5px 0 0 0;">getheatpumpquotes.co.uk</p>
            </div>
          </body>
        </html>
      `,
    })

    // Send thank you email to user
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: [email],
      subject: "Your Heat Pump Guide is Ready",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #0071e3 0%, #0056b3 100%); color: white; padding: 40px; border-radius: 12px 12px 0 0; text-align: center;">
              <h1 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700;">Thank You!</h1>
              <p style="margin: 0; font-size: 16px; opacity: 0.9;">Your Heat Pump Guide is Ready</p>
            </div>
            
            <div style="background: #ffffff; padding: 40px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 12px 12px;">
              <p style="font-size: 16px; color: #1d1d1f; margin-top: 0;">Hi there,</p>
              
              <p style="font-size: 16px; color: #1d1d1f;">
                Thanks for downloading our <strong>Air Source Heat Pump vs Gas Boiler Guide 2025</strong>. Your PDF should have started downloading automatically.
              </p>
              
              <div style="background: #f5f5f7; padding: 25px; border-radius: 12px; margin: 30px 0;">
                <h2 style="margin: 0 0 15px 0; font-size: 18px; color: #1d1d1f;">📖 What's Inside:</h2>
                <ul style="margin: 0; padding-left: 20px; color: #6e6e73;">
                  <li style="margin-bottom: 8px;">Installation costs breakdown for 2025</li>
                  <li style="margin-bottom: 8px;">5-year running costs comparison</li>
                  <li style="margin-bottom: 8px;">£7,500 government grant eligibility</li>
                  <li style="margin-bottom: 8px;">Pros & cons analysis</li>
                  <li style="margin-bottom: 8px;">How to find trusted installers</li>
                </ul>
              </div>
              
              <div style="background: linear-gradient(135deg, #34c759 0%, #28a745 100%); color: white; padding: 25px; border-radius: 12px; margin: 30px 0; text-align: center;">
                <h3 style="margin: 0 0 10px 0; font-size: 20px;">💰 Check Your £7,500 Grant Eligibility</h3>
                <p style="margin: 0 0 20px 0; opacity: 0.9; font-size: 14px;">Most UK homeowners qualify for the government grant</p>
                <a href="https://www.getheatpumpquotes.co.uk/quiz" style="display: inline-block; background: white; color: #34c759; padding: 14px 32px; text-decoration: none; border-radius: 25px; font-weight: 600; font-size: 16px;">Check Eligibility (90 seconds)</a>
              </div>
              
              <div style="border-top: 1px solid #e5e5e5; padding-top: 25px; margin-top: 30px;">
                <h3 style="color: #1d1d1f; font-size: 18px; margin-bottom: 15px;">Next Steps:</h3>
                <ol style="color: #6e6e73; margin: 0; padding-left: 20px;">
                  <li style="margin-bottom: 10px;">Review the guide to understand your options</li>
                  <li style="margin-bottom: 10px;">Take our 90-second eligibility checker</li>
                  <li style="margin-bottom: 10px;">Get free quotes from vetted installers</li>
                  <li>Compare and choose the best option for your home</li>
                </ol>
              </div>
              
              <div style="text-align: center; margin-top: 35px;">
                <a href="https://www.getheatpumpquotes.co.uk/quiz" style="display: inline-block; background: #0071e3; color: white; padding: 14px 32px; text-decoration: none; border-radius: 25px; font-weight: 600; font-size: 16px;">Get Free Quotes</a>
              </div>
              
              <p style="color: #86868b; font-size: 13px; margin-top: 35px; text-align: center;">
                Have questions? Just reply to this email—we're here to help!
              </p>
            </div>
            
            <div style="text-align: center; padding: 20px; color: #86868b; font-size: 12px;">
              <p style="margin: 0 0 5px 0;">Heat Pump Quotes UK</p>
              <p style="margin: 0 0 10px 0;">Independent Heat Pump Comparison Service</p>
              <p style="margin: 0;">
                <a href="https://www.getheatpumpquotes.co.uk" style="color: #0071e3; text-decoration: none;">getheatpumpquotes.co.uk</a>
              </p>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("PDF download email error:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}

