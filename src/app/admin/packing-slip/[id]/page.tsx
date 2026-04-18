import Stripe from 'stripe';
import { notFound } from 'next/navigation';
import PrintButton from './print-button';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const dynamic = 'force-dynamic';

const NAVY = '#0a1931';
const GOLD = '#c9a84c';
const CREAM = '#f4f1eb';

export default async function PackingSlipPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let session: Stripe.Checkout.Session;
  try {
    session = await stripe.checkout.sessions.retrieve(id, {
      expand: ['line_items', 'line_items.data.price.product'],
    });
  } catch {
    notFound();
  }

  const lineItems = session.line_items?.data ?? [];
  const shipping = session.shipping_details ?? session.collected_information?.shipping_details;
  const address = shipping?.address;
  const orderDate = new Date(session.created * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <style>{`
        @media print {
          body { margin: 0; }
          .no-print { display: none !important; }
          .packing-slip { box-shadow: none !important; margin: 0 !important; }
          @page { margin: 0.5in; }
        }
        body { background: #e5e5e5; }
      `}</style>

      <div className="no-print" style={{ padding: '20px', textAlign: 'center', background: '#fff', borderBottom: '1px solid #ddd' }}>
        <PrintButton />
      </div>

      <div
        className="packing-slip"
        style={{
          maxWidth: '8.5in',
          margin: '20px auto',
          padding: '0.75in',
          background: CREAM,
          minHeight: '10.5in',
          fontFamily: 'Arial, sans-serif',
          color: '#222',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: `3px solid ${GOLD}`, paddingBottom: '20px', marginBottom: '30px' }}>
          <div>
            <h1 style={{ color: NAVY, fontSize: '32px', margin: 0, letterSpacing: '2px' }}>LEGACY CODE</h1>
            <div style={{ color: GOLD, fontSize: '14px', letterSpacing: '3px', marginTop: '4px' }}>APPAREL</div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '13px', color: '#555' }}>
            <div>legacycodeapparel.store</div>
            <div>support@legacycodeapparel.store</div>
            <div>(404) 620-7228</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: NAVY, letterSpacing: '2px' }}>PACKING SLIP</div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '14px' }}>
            <div><strong>Order #:</strong> {id.slice(-12).toUpperCase()}</div>
            <div><strong>Order Date:</strong> {orderDate}</div>
            <div><strong>Ship Date:</strong> ________________</div>
          </div>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <div style={{ color: GOLD, fontWeight: 'bold', fontSize: '13px', letterSpacing: '2px', marginBottom: '8px' }}>SHIP TO</div>
          <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{shipping?.name ?? session.customer_details?.name ?? '—'}</div>
          {address && (
            <>
              <div style={{ fontSize: '14px' }}>{address.line1}</div>
              {address.line2 && <div style={{ fontSize: '14px' }}>{address.line2}</div>}
              <div style={{ fontSize: '14px' }}>
                {address.city}, {address.state} {address.postal_code}
              </div>
            </>
          )}
          {session.customer_details?.email && (
            <div style={{ fontSize: '13px', color: '#555', marginTop: '4px' }}>{session.customer_details.email}</div>
          )}
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px' }}>
          <thead>
            <tr style={{ background: NAVY, color: CREAM }}>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', letterSpacing: '1px' }}>ITEM</th>
              <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', letterSpacing: '1px', width: '100px' }}>SIZE</th>
              <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', letterSpacing: '1px', width: '80px' }}>QTY</th>
              <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', letterSpacing: '1px', width: '80px' }}>✓</th>
            </tr>
          </thead>
          <tbody>
            {lineItems.map((item) => {
              const product = item.price?.product as Stripe.Product | undefined;
              const design = product?.metadata?.design ?? item.description ?? '—';
              const size = product?.metadata?.size ?? '—';
              return (
                <tr key={item.id} style={{ borderBottom: '1px solid #ccc' }}>
                  <td style={{ padding: '14px 12px', fontSize: '14px' }}>{design}</td>
                  <td style={{ padding: '14px 12px', textAlign: 'center', fontSize: '14px' }}>{size}</td>
                  <td style={{ padding: '14px 12px', textAlign: 'center', fontSize: '14px' }}>{item.quantity}</td>
                  <td style={{ padding: '14px 12px', textAlign: 'center', fontSize: '20px', color: '#ccc' }}>☐</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div style={{ borderTop: `3px solid ${GOLD}`, paddingTop: '24px', marginTop: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: NAVY, letterSpacing: '2px', marginBottom: '8px' }}>THANK YOU</div>
          <div style={{ fontSize: '15px', fontStyle: 'italic', color: '#444', marginBottom: '16px' }}>
            For choosing Legacy Code Apparel.
          </div>
          <div style={{ fontSize: '14px', color: '#555', marginBottom: '12px' }}>
            Every shirt carries a principle. Every principle builds a legacy.
          </div>
          <div style={{ fontSize: '14px', fontWeight: 'bold', color: NAVY, marginBottom: '8px' }}>
            Tag us when you wear it: @legacycodeapparel
          </div>
          <div style={{ fontSize: '12px', color: '#666' }}>
            Questions or returns? Email support@legacycodeapparel.store
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '0.5in', left: '0.75in', right: '0.75in', borderTop: `1px solid ${GOLD}`, paddingTop: '10px', textAlign: 'center' }}>
          <div style={{ color: GOLD, fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px' }}>
            INTEGRITY · CHARACTER · LEGACY
          </div>
        </div>
      </div>
    </>
  );
}
