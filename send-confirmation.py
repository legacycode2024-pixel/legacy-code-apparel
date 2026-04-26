new_content = """import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, name, items, total, orderId } = await req.json();

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Legacy Code Apparel <support@legacycodeapparel.store>',
        to: email,
        subject: `Order Confirmed — Legacy Code Apparel`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background-color: #f4f1eb;">
            <div style="background-color: #0a1931; padding: 40px; text-align: center;">
              <h1 style="color: #c9a84c; font-size: 28px; font-weight: 400; margin: 0 0 8px; letter-spacing: 2px;">LEGACY CODE APPAREL</h1>
              <p style="color: rgba(255,255,255,0.7); font-size: 13px; letter-spacing: 3px; margin: 0;">INTEGRITY TEES WITH MEANING</p>
            </div>
            <div style="padding: 48px 40px; text-align: center;">
              <p style="font-size: 13px; letter-spacing: 4px; color: #c9a84c; margin-bottom: 16px;">ORDER CONFIRMED</p>
              <h2 style="font-size: 32px; color: #0a1931; font-weight: 400; margin: 0 0 16px;">Thank you, ${name?.split(' ')[0] || 'friend'}!</h2>
              <p style="font-size: 16px; color: #555; line-height: 1.8; margin: 0 0 32px;">Your order has been received and is being prepared. You will receive a tracking number once your order ships.</p>
              <div style="background-color: #fff; border: 1px solid #c9a84c; border-radius: 12px; padding: 24px; margin-bottom: 32px; text-align: left;">
                <p style="font-size: 11px; letter-spacing: 3px; color: #c9a84c; margin: 0 0 16px; font-family: Arial, sans-serif;">ORDER SUMMARY</p>
                <p style="font-size: 12px; color: #999; margin: 0 0 16px;">Order #${orderId?.slice(-8).toUpperCase()}</p>
                ${items && items.length > 0 ? items.map((item: any) => `
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f0f0f0;">
                    <p style="margin: 0; font-size: 14px; color: #333;">${item.name} x${item.quantity}</p>
                    <p style="margin: 0; font-size: 14px; color: #0a1931; font-weight: 600;">$${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                `).join('') : ''}
                <div style="display: flex; justify-content: space-between; padding: 16px 0 0;">
                  <p style="margin: 0; font-size: 15px; font-weight: 700; color: #0a1931;">Total</p>
                  <p style="margin: 0; font-size: 15px; font-weight: 700; color: #c9a84c;">$${total?.toFixed(2)}</p>
                </div>
              </div>
              <a href="https://legacycodeapparel.store" style="display: inline-block; padding: 16px 40px; background-color: #c9a84c; color: #0a1931; text-decoration: none; font-size: 13px; font-weight: 700; letter-spacing: 2px; border-radius: 8px;">SHOP MORE</a>
            </div>
            <div style="padding: 24px 40px; border-top: 1px solid #e5e5e5; text-align: center;">
              <p style="font-size: 14px; color: #555; line-height: 1.8; font-style: italic; margin: 0 0 16px;">"Wear your values. Leave a legacy."</p>
              <p style="font-size: 12px; color: #999; margin: 0;">Questions? Email us at support@legacycodeapparel.store</p>
            </div>
            <div style="background-color: #0a1931; padding: 24px; text-align: center;">
              <p style="color: #c9a84c; font-size: 12px; letter-spacing: 2px; margin: 0 0 8px;">LEGACY CODE APPAREL</p>
              <p style="color: rgba(255,255,255,0.4); font-size: 11px; margin: 0;">Atlanta, GA &nbsp;·&nbsp; support@legacycodeapparel.store</p>
            </div>
          </div>
        `,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
"""
open('src/app/api/send-confirmation/route.ts', 'w').write(new_content)
print('Done!')
