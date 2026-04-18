'use client';
export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      style={{
        background: '#0a1931',
        color: '#f4f1eb',
        border: 'none',
        padding: '12px 32px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        letterSpacing: '1px',
      }}
    >
      PRINT PACKING SLIP
    </button>
  );
}
