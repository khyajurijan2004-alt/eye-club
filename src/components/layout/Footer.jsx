const Footer = () => {
  return (
    <footer>

      {/* Elite Access - Newsletter */}
      <div style={{ backgroundColor: '#F5F0E8', padding: '60px 80px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', letterSpacing: '4px', color: '#C9A84C', fontStyle: 'italic', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>
          ELITE ACCESS
        </h2>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '32px' }}>
          Sign up for early access to limited edition drops and luxury styling tips.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            style={{ padding: '14px 24px', fontSize: '13px', letterSpacing: '2px', border: '1px solid #ccc', outline: 'none', width: '320px', backgroundColor: '#fff' }}
          />
          <button style={{ backgroundColor: '#0A0A0A', color: '#fff', padding: '14px 28px', fontSize: '13px', letterSpacing: '2px', border: 'none', cursor: 'pointer' }}>
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div style={{ backgroundColor: '#fff', padding: '60px 80px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px' }}>

        {/* Brand */}
        <div>
          <div style={{ fontSize: '24px', fontStyle: 'italic', fontWeight: 'bold', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>Eye Club</div>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7', maxWidth: '260px' }}>
            Crafting the future of vision through high-contrast design and artificial intelligence. Nepal's premier luxury eyewear boutique.
          </p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
            <span style={{ cursor: 'pointer', fontSize: '16px', color: '#0A0A0A' }}>𝕏</span>
            <span style={{ cursor: 'pointer', fontSize: '16px', color: '#0A0A0A' }}>in</span>
            <span style={{ cursor: 'pointer', fontSize: '16px', color: '#0A0A0A' }}>◎</span>
          </div>
        </div>

        {/* Shop */}
        <div>
          <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '3px', marginBottom: '20px', color: '#0A0A0A' }}>SHOP</div>
          {["Men's Optical", "Women's Optical", "Sunglasses", "New Arrivals", "Limited Edition"].map((item, i) => (
            <div key={i} style={{ fontSize: '14px', color: '#666', marginBottom: '12px', cursor: 'pointer' }}>{item}</div>
          ))}
        </div>

        {/* Services */}
        <div>
          <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '3px', marginBottom: '20px', color: '#0A0A0A' }}>SERVICES</div>
          {["AI Face Scan", "Virtual Try-On", "Eye Appointments", "Home Trial", "Lens Quiz"].map((item, i) => (
            <div key={i} style={{ fontSize: '14px', color: '#666', marginBottom: '12px', cursor: 'pointer' }}>{item}</div>
          ))}
        </div>

        {/* Support */}
        <div>
          <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '3px', marginBottom: '20px', color: '#0A0A0A' }}>SUPPORT</div>
          {["Shipping & Returns", "Warranty Info", "FAQs", "Contact Us", "Store Locator"].map((item, i) => (
            <div key={i} style={{ fontSize: '14px', color: '#666', marginBottom: '12px', cursor: 'pointer' }}>{item}</div>
          ))}
        </div>

      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: '#fff', borderTop: '1px solid #eee', padding: '20px 80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', color: '#aaa' }}>© 2025 EYE CLUB LUXURY EYEWEAR. ALL RIGHTS RESERVED.</span>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span style={{ fontSize: '12px', color: '#aaa', cursor: 'pointer' }}>FB</span>
          <span style={{ fontSize: '12px', color: '#aaa', cursor: 'pointer' }}>IG</span>
          <span style={{ fontSize: '12px', color: '#aaa', cursor: 'pointer' }}>TW</span>
        </div>
      </div>

    </footer>
  )
}

export default Footer