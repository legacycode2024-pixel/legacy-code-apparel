import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { supabase } from '../../lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any;
    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name;
    const orderId = session.id;
    const itemsSummary: string = session.metadata?.items || '';

    // Parse "Name (Color)|Size|Quantity;Name (Color)|Size|Quantity" and mark each as sold
    const parsedItems = itemsSummary.split(';').filter(Boolean).map(entry => {
      const [nameWithColor, size] = entry.split('|');
      const match = nameWithColor.match(/^(.+) \((.+)\)$/);
      return {
        product: match ? match[1] : nameWithColor,
        color: match ? match[2] : '',
        size,
      };
    });

    for (const item of parsedItems) {
      await supabase
        .from('Inventory')
        .update({ sold: true })
        .eq('product', item.product)
        .eq('color', item.color)
        .eq('size', item.size)
        .eq('sold', false)
        .limit(1);
    }

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-confirmation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: customerEmail,
        name: customerName,
        items: parsedItems,
        total: session.amount_total / 100,
        orderId,
      }),
    });
  }

  return NextResponse.json({ received: true });
}
