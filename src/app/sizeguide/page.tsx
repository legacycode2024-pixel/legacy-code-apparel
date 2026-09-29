import Navbar from '../components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Size Guide | Legacy Code Apparel',
  description: 'Find your perfect fit with the Legacy Code Apparel size guide for hoodies, sweatshirts and crops.',
};

export default function SizeGuidePage() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <section style={{ textAlign: 'center', padding: '80px 20px 60px', backgroundColor: '#0a1931', color: '#fff' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', color: '#c9a84c' }}>FIT GUIDE</p>
        <h1 style={{ fontSize: '52px', fontWeight: '400', margin: '0', letterSpacing: '-1px' }}>Size Guide</h1>
      </section>

      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 20px' }}>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '40px' }}>All measurements are in inches. For the best fit, measure yourself and compare to the chart below. Our heavyweight fleece pieces run slightly oversized — for a relaxed fit order your true size, for a more fitted look size down.</p>

        {/* Men's Section */}
        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#0a1931', marginBottom: '8px', letterSpacing: '1px' }}>MEN&apos;S SIZE GUIDE</h2>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px' }}>No Cap Hoodie &amp; Consistent by Choice Sweatshirt</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px', marginBottom: '48px' }}>
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
              { size: 'M', chest: '41-43', length: '28', sleeve: '34' },
              { size: 'L', chest: '44-46', length: '29', sleeve: '35' },
              { size: 'XL', chest: '47-49', length: '30', sleeve: '36' },
            ].map((row, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f4f1eb', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '14px', fontWeight: '700', color: '#0a1931' }}>{row.size}</td>
                <td style={{ padding: '14px', textAlign: 'center' }}>{row.chest}&quot;</td>
                <td style={{ padding: '14px', textAlign: 'center' }}>{row.length}&quot;</td>
                <td style={{ padding: '14px', textAlign: 'center' }}>{row.sleeve}&quot;</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Women's Crop Section */}
        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#0a1931', marginBottom: '8px', letterSpacing: '1px' }}>WOMEN&apos;S SIZE GUIDE</h2>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px' }}>Nothing to Hide Crop</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px', marginBottom: '48px' }}>
          <thead>
            <tr style={{ backgroundColor: '#0a1931', color: '#c9a84c' }}>
              <th style={{ padding: '14px', textAlign: 'left', letterSpacing: '1px' }}>SIZE</th>
              <th style={{ padding: '14px', textAlign: 'center', letterSpacing: '1px' }}>BUST</th>
              <th style={{ padding: '14px', textAlign: 'center', letterSpacing: '1px' }}>LENGTH</th>
              <th style={{ padding: '14px', textAlign: 'center', letterSpacing: '1px' }}>WAIST</th>
            </tr>
          </thead>
          <tbody>
            {[
              { size: 'M', bust: '35-37', length: '17', waist: '29-31' },
              { size: 'L', bust: '38-40', length: '18', waist: '32-34' },
              { size: 'XL', bust: '41-43', length: '19', waist: '35-37' },
            ].map((row, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f4f1eb', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '14px', fontWeight: '700', color: '#0a1931' }}>{row.size}</td>
                <td style={{ padding: '14px', textAlign: 'center' }}>{row.bust}&quot;</td>
                <td style={{ padding: '14px', textAlign: 'center' }}>{row.length}&quot;</td>
                <td style={{ padding: '14px', textAlign: 'center' }}>{row.waist}&quot;</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Women wearing Hoodie & Sweatshirt */}
        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#0a1931', marginBottom: '8px', letterSpacing: '1px' }}>WOMEN WEARING THE HOODIE &amp; SWEATSHIRT</h2>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>The No Cap Hoodie and Consistent by Choice Sweatshirt are unisex pieces. Women who prefer an oversized fit should order their true size. Women who prefer a more fitted look should size down one.</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px', marginBottom: '48px' }}>
          <thead>
            <tr style={{ backgroundColor: '#0a1931', color: '#c9a84c' }}>
              <th style={{ padding: '14px', textAlign: 'left', letterSpacing: '1px' }}>SIZE ON TAG</th>
              <th style={{ padding: '14px', textAlign: 'center', letterSpacing: '1px' }}>OVERSIZED FIT</th>
              <th style={{ padding: '14px', textAlign: 'center', letterSpacing: '1px' }}>FITTED LOOK</th>
            </tr>
          </thead>
          <tbody>
            {[
              { size: 'M', oversized: 'S-M', fitted: 'XS-S' },
              { size: 'L', oversized: 'M-L', fitted: 'S-M' },
              { size: 'XL', oversized: 'L-XL', fitted: 'M-L' },
            ].map((row, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f4f1eb', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '14px', fontWeight: '700', color: '#0a1931' }}>{row.size}</td>
                <td style={{ padding: '14px', textAlign: 'center' }}>{row.oversized}</td>
                <td style={{ padding: '14px', textAlign: 'center' }}>{row.fitted}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* How to Measure */}
        <div style={{ marginTop: '40px', padding: '24px', backgroundColor: '#f4f1eb', borderRadius: '12px', borderLeft: '4px solid #c9a84c' }}>
          <h3 style={{ margin: '0 0 12px', color: '#0a1931' }}>How to Measure</h3>
          <p style={{ margin: '0 0 8px', fontSize: '15px', color: '#444', lineHeight: '1.8' }}><strong>Chest/Bust:</strong> Measure around the fullest part of your chest, keeping the tape horizontal.</p>
          <p style={{ margin: '0 0 8px', fontSize: '15px', color: '#444', lineHeight: '1.8' }}><strong>Length:</strong> Measure from the highest point of the shoulder down to the hem.</p>
          <p style={{ margin: '0 0 8px', fontSize: '15px', color: '#444', lineHeight: '1.8' }}><strong>Sleeve:</strong> Measure from the shoulder seam to the end of the sleeve.</p>
          <p style={{ margin: '0', fontSize: '15px', color: '#444', lineHeight: '1.8' }}><strong>Waist:</strong> Measure around the narrowest part of your natural waistline.</p>
        </div>

        <p style={{ marginTop: '32px', fontSize: '15px', color: '#666', textAlign: 'center' }}>Not sure about your size? Email us at <a href="mailto:support@legacycodeapparel.store" style={{ color: '#0a1931', fontWeight: '600' }}>support@legacycodeapparel.store</a></p>
      </section>
      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>© 2024 LEGACY CODE APPAREL</footer>
    </main>
  );
}
