'use client';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const freeShipping = total >= 45;
  const shippingCost = freeShipping ? 0 : 5.01;
  const orderTotal = total + shippingCost;

  const handleCheckout = async () => {
    setLoading(true);
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#FAFAFA', minHeight: '100vh', color: '#111' }}>
      <nav style={{ backgroundColor: '#111', color: '#fff', padding: '0 40px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span onClick={() => router.push('/')} style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '2px', cursor: 'pointer' }}>LEGACY CODE</span>
        <a href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '13px', letterSpacing: '1px' }}>CONTINUE SHOPPING</a>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '400', marginBottom: '8px', letterSpacing: '-1px' }}>Your Cart</h1>
        
        {!freeShipping && total > 0 && (
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px' }}>
            Add <strong>${(50 - total).toFixed(2)}</strong> more for free shipping!
          </p>
        )}
        {freeShipping && (
          <p style={{ fontSize: '14px', color: 'green', marginBottom: '24px' }}>
            You qualify for free shipping!
          </p>
        )}

        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <p style={{ fontSize: '18px', color: '#666', marginBottom: '24px' }}>Your cart is empty</p>
            <button onClick={() => router.push('/')} style={{ padding: '14px 36px', backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '600', letterSpacing: '1px' }}>SHOP NOW</button>
          </div>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 0', borderBottom: '1px solid #e5e5e5' }}>
                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', backgroundColor: '#f5f5f5' }} />
                <div style={{ flex: 1 }}>
                  <p style={{ margin: '0 0 4px', fontWeight: '600', fontSize: '15px' }}>{item.name}</p>
                  <p style={{ margin: '0 0 8px', color: '#666', fontSize: '13px' }}>Size: {item.size}</p>
                  <p style={{ margin: '0', fontWeight: '700' }}>${item.price.toFixed(2)}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button onClick={() => updateQuantity(item.name, item.size, item.quantity - 1)} style={{ width: '32px', height: '32px', border: '1px solid #ddd', borderRadius: '6px', backgroundColor: '#fff', cursor: 'pointer', fontSize: '16px' }}>-</button>
                  <span style={{ fontSize: '15px', fontWeight: '600', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.name, item.size, item.quantity + 1)} style={{ width: '32px', height: '32px', border: '1px solid #ddd', borderRadius: '6px', backgroundColor: '#fff', cursor: 'pointer', fontSize: '16px' }}>+</button>
                </div>
                <p style={{ fontWeight: '700', minWidth: '60px', textAlign: 'right' }}>${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.name, item.size)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', fontSize: '18px' }}>✕</button>
              </div>
            ))}

            <div style={{ marginTop: '32px', padding: '24px', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '15px' }}>
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '15px', color: freeShipping ? 'green' : '#666' }}>
                <span>Shipping</span>
                <span>{freeShipping ? 'FREE' : '$5.01'}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '20px', fontWeight: '700', borderTop: '1px solid #e5e5e5', paddingTop: '16px' }}>
                <span>Total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}><span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#666', letterSpacing: '0.5px' }}>SECURE CHECKOUT</span><span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#666', letterSpacing: '0.5px' }}>FREE RETURNS</span><span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#666', letterSpacing: '0.5px' }}>MADE WITH PRIDE</span></div>
              <button onClick={handleCheckout} disabled={loading} style={{ width: '100%', padding: '16px', backgroundColor: loading ? '#666' : '#111', color: '#fff', border: 'none', borderRadius: '8px', cursor: loading ? 'not-allowed' : 'pointer', fontSize: '15px', fontWeight: '600', letterSpacing: '1px' }}>
                {loading ? 'REDIRECTING TO CHECKOUT...' : 'PROCEED TO CHECKOUT'}
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
