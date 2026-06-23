import { useState } from 'react'

const HeroSection = () => {
  const [hoveredBtn, setHoveredBtn] = useState(null)

  return (
    <section style={{ backgroundColor: '#F5F0E8', padding: '60px 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '90vh' }}>

      {/* Left Content */}
      <div style={{ maxWidth: '500px' }}>
        <h1 style={{ fontSize: '56px', fontWeight: 'bold', lineHeight: '1.1', color: '#0A0A0A', marginBottom: '20px' }}>
          See the world in{' '}
          <span style={{ color: '#C9A84C', fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>
            extraordinary
          </span>{' '}
          style
        </h1>

        <p style={{ fontSize: '16px', color: '#555', marginBottom: '32px', lineHeight: '1.6' }}>
          The intersection of avant-garde design and artificial intelligence. Precision engineered for the sophisticated eye.
        </p>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button
            onMouseEnter={() => setHoveredBtn(0)}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              backgroundColor: hoveredBtn === 0 ? '#C9A84C' : '#0A0A0A',
              color: '#fff',
              padding: '14px 28px', fontSize: '14px', letterSpacing: '2px',
              cursor: 'pointer', border: 'none',
              transition: 'background-color 0.2s',
            }}>
            SHOP NOW
          </button>
          <button
            onMouseEnter={() => setHoveredBtn(1)}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              backgroundColor: hoveredBtn === 1 ? '#0A0A0A' : 'transparent',
              color: hoveredBtn === 1 ? '#fff' : '#0A0A0A',
              padding: '14px 28px', fontSize: '14px', letterSpacing: '2px',
              cursor: 'pointer', border: '1px solid #0A0A0A',
              transition: 'background-color 0.2s, color 0.2s',
            }}>
            VIEW CATALOG
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '40px', marginTop: '48px' }}>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#C9A84C' }}>50k+</div>
            <div style={{ fontSize: '12px', letterSpacing: '2px', color: '#888' }}>DIGITAL FITS</div>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#C9A84C' }}>120+</div>
            <div style={{ fontSize: '12px', letterSpacing: '2px', color: '#888' }}>LUXURY BRANDS</div>
          </div>
        </div>
      </div>

      {/* Right Image Placeholder */}
      <div style={{ width: '500px', height: '500px', backgroundColor: '#2a2a2a', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: '14px' }}>
        [ Hero Image ]
      </div>

    </section>
  )
}

export default HeroSection