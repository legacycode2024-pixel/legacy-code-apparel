import Navbar from '../components/Navbar';

export default function SizeGuidePage() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#FAFAFA', minHeight: '100vh', color: '#111' }}>
      <Navbar />
      <section style={{ textAlign: 'center', padding: '80px 20px 60px', backgroundColor: '#0a1931', color: '#fff' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', color: '#c9a84c' }}>FIT GUIDE</p>
        <h1 style={{ fontSize: '52px', fontWeight: '400', margin: '0', letterSpacing: '-1px' }}>Size Guide</h1>
      </section>
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 20px' }}>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '40px' }}>All measurements are in inches. For the best fit, measure yourself and compare to the chart below.</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
          <thead>
            <tr style={{ backgroundColor: '#0a1931', color: '#c9a84c' }}>
              <th style={{ padding: '14px', textAlign: 'left', letterSpacing: '1px' }}>SIZE</th>
              <th style={{ padding: '14px', textAlign: 'center', letterSpacing: '1px' }}>CHEST</th>
              <th style={{ padding: '14px', textAlign: 'center', letterSpacing: '1px' }}>LENGTH</th>
              <th style={{ padding: '14px', textAlign: 'center', letterSpacing: '1px' }}>SLEEVE</th>
            </tr>
          </thead>
          <tbody>
            {[
              { size: 'S', chest: '34-36', length: '27', sleeve: '8' },
              { size: 'M', chest: '38-40', length: '28', sleeve: '8.5' },
              { size: 'L', chest: '42-44', length: '29', sleeve: '9' },
              { size: 'XL', chest: '46-48', length: '30', sleeve: '9.5' },
              { size: '2XL', chest: '50-52', length: '31', sleeve: '10' },
              { size: '3XL', chest: '54-56', length: '32', sleeve: '10.5' },
            ].map((row, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f4f1eb', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '14px', fontWeight: '700', color: '#0a1931' }}>{row.size}</td>
                <td style={{ padding: '14px', textAlign: 'center' }}>{row.chest}"</td>
                <td style={{ padding: '14px', textAlign: 'center' }}>{row.length}"</td>
                <td style={{ padding: '14px', textAlign: 'center' }}>{row.sleeve}"</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: '40px', padding: '24px', backgroundColor: '#f4f1eb', borderRadius: '12px', borderLeft: '4px solid #c9a84c' }}>
          <h3 style={{ margin: '0 0 12px', color: '#0a1931' }}>How to Measure</h3>
          <p style={{ margin: '0 0 8px', fontSize: '15px', color: '#444', lineHeight: '1.8' }}><strong>Chest:</strong> Measure around the fullest part of your chest, keeping the tape horizontal.</p>
          <p style={{ margin: '0 0 8px', fontSize: '15px', color: '#444', lineHeight: '1.8' }}><strong>Length:</strong> Measure from the highest point of the shoulder down to the hem.</p>
          <p style={{ margin: '0', fontSize: '15px', color: '#444', lineHeight: '1.8' }}><strong>Sleeve:</strong> Measure from the shoulder seam to the end of the sleeve.</p>
        </div>
        <p style={{ marginTop: '32px', fontSize: '15px', color: '#666', textAlign: 'center' }}>Not sure about your size? Email us at <a href="mailto:support@legacycodeapparel.store" style={{ color: '#0a1931', fontWeight: '600' }}>support@legacycodeapparel.store</a></p>
      </section>
      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>© 2025 LEGACY CODE APPAREL</footer>
    </main>
  );
}