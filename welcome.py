new_content = """import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Add to Mailchimp
    const mcResponse = await fetch(
      `https://us3.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          tags: ['website-signup'],
        }),
      }
    );

    // Send welcome email via Resend
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Legacy Code Apparel <support@legacycodeapparel.store>',
        to: email,
        subject: 'Welcome to the Legacy — Here is Your 10% Off',
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background-color: #f4f1eb;">
            <div style="background-color: #0a1931; padding: 40px; text-align: center;">
              <h1 style="color: #c9a84c; font-size: 28px; font-weight: 400; margin: 0 0 8px; letter-spacing: 2px;">LEGACY CODE APPAREL</h1>
              <p style="color: rgba(255,255,255,0.7); font-size: 13px; letter-spacing: 3px; margin: 0;">INTEGRITY TEES WITH MEANING</p>
            </div>
            <div style="padding: 48px 40px; text-align: center;">
              <p style="font-size: 13px; letter-spacing: 4px; color: #c9a84c; margin-bottom: 16px;">WELCOME TO THE LEGACY</p>
              <h2 style="font-size: 32px; color: #0a1931; font-weight: 400; margin: 0 0 16px;">You are in.</h2>
              <p style="font-size: 16px; color: #555; line-height: 1.8; margin: 0 0 32px;">Thank you for joining Legacy Code Apparel. Here is your exclusive first-order discount:</p>
              <div style="background-color: #0a1931; padding: 24px; border-radius: 12px; margin-bottom: 32px;">
                <p style="color: rgba(255,255,255,0.7); font-size: 13px; letter-spacing: 2px; margin: 0 0 8px;">YOUR DISCOUNT CODE</p>
                <p style="color: #c9a84c; font-size: 36px; font-weight: 700; letter-spacing: 6px; margin: 0;">LEGACY24</p>
                <p style="color: rgba(255,255,255,0.6); font-size: 13px; margin: 8px 0 0;">10% off your first order</p>
              </div>
              <a href="https://legacycodeapparel.store" style="display: inline-block; padding: 16px 40px; background-color: #c9a84c; color: #0a1931; text-decoration: none; font-size: 13px; font-weight: 700; letter-spacing: 2px; border-radius: 8px;">SHOP NOW</a>
            </div>
            <div style="padding: 24px 40px; border-top: 1px solid #e5e5e5; text-align: center;">
              <p style="font-size: 14px; color: #555; line-height: 1.8; font-style: italic; margin: 0 0 16px;">"Wear your values. Leave a legacy."</p>
              <p style="font-size: 12px; color: #999; margin: 0;">Free shipping over $50 &nbsp;·&nbsp; Ships in 3-5 days &nbsp;·&nbsp; 14-day returns</p>
            </div>
            <div style="background-color: #0a1931; padding: 24px; text-align: center;">
              <p style="color: #c9a84c; font-size: 12px; letter-spacing: 2px; margin: 0 0 8px;">LEGACY CODE APPAREL</p>
              <p style="color: rgba(255,255,255,0.4); font-size: 11px; margin: 0;">Atlanta, GA &nbsp;·&nbsp; support@legacycodeapparel.store</p>
            </div>
          </div>
        `,
      }),
    });

    if (mcResponse.ok) {
      return NextResponse.json({ success: true });
    } else {
      const data = await mcResponse.json();
      return NextResponse.json({ error: data.detail }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
"""
open('src/app/api/newsletter/route.ts', 'w').write(new_content)
print('Done!')
