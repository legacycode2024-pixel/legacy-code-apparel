import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    const total = items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);

    const line_items = items.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: `${item.name} (${item.size})`,
          metadata: {
            design: item.name,
            size: item.size,
          },
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const itemsSummary = items
      .map((i: any) => `${i.name}|${i.size}|${i.quantity}`)
      .join(';')
      .slice(0, 500);

    const sessionConfig: any = {
      payment_method_types: ['card', 'klarna', 'afterpay_clearpay', 'zip'],
      line_items,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/cart`,
      allow_promotion_codes: true,
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      metadata: {
        items: itemsSummary,
      },
    };

    if (total >= 45) {
      sessionConfig.shipping_options = [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 0, currency: 'usd' },
            display_name: 'Free Shipping',
          },
        },
      ];
    } else {
      sessionConfig.shipping_options = [
        { shipping_rate: 'shr_1TDgFSQ9qsnPjTMWnvR17Xef' },
      ];
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
