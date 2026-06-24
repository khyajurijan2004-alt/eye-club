import { useState } from 'react'

const HeroSection = () => {
  const [hoveredBtn, setHoveredBtn] = useState(null)

  return (
    <section style={{ backgroundColor: '#F5F0E8', padding: '60px 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '90vh', gap: '40px' }}>

      {/* Left Content */}
      <div style={{ maxWidth: '480px' }}>
        <h1 style={{ fontSize: '64px', fontWeight: '700', lineHeight: '1.05', color: '#0A0A0A', marginBottom: '24px', fontFamily: 'Cormorant Garamond, serif' }}>
          See the world in{' '}
          <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>
            extraordinary
          </span>{' '}
          style
        </h1>

        <p style={{ fontSize: '15px', color: '#555', marginBottom: '36px', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>
          The intersection of avant-garde design and artificial intelligence. Precision engineered for the sophisticated eye.
        </p>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button
            onMouseEnter={() => setHoveredBtn(0)}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              backgroundColor: hoveredBtn === 0 ? '#C9A84C' : '#0A0A0A',
              color: '#fff',
              padding: '14px 32px', fontSize: '13px', letterSpacing: '2px',
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
              padding: '14px 32px', fontSize: '13px', letterSpacing: '2px',
              cursor: 'pointer', border: '1px solid #0A0A0A',
              transition: 'background-color 0.2s, color 0.2s',
            }}>
            VIEW CATALOG
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '48px', marginTop: '52px' }}>
          <div>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#C9A84C', fontFamily: 'Cormorant Garamond, serif' }}>50k+</div>
            <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#888', marginTop: '4px' }}>DIGITAL FITS</div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#C9A84C', fontFamily: 'Cormorant Garamond, serif' }}>120+</div>
            <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#888', marginTop: '4px' }}>LUXURY BRANDS</div>
          </div>
        </div>
      </div>

      {/* Right — Image with Latest Drop overlay */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        {/* Main image */}
        <div style={{ width: '520px', height: '560px', backgroundColor: '#1a1a1a', overflow: 'hidden' }}>
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', fontSize: '13px', letterSpacing: '1px' }}>
            [ Hero Image ]
          </div>
        </div>

        {/* Latest Drop card */}
        <div style={{
          position: 'absolute',
          bottom: '0px',
          left: '-60px',
          backgroundColor: '#fff',
          padding: '24px 28px',
          width: '220px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        }}>
          <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A84C', fontWeight: '700', marginBottom: '8px' }}>
            LATEST DROP
          </div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#0A0A0A', lineHeight: '1.15', marginBottom: '8px', fontFamily: 'Cormorant Garamond, serif' }}>
            Aura<br />Titanium
          </div>
          <div style={{ fontSize: '13px', color: '#666', lineHeight: '1.5' }}>
            The lightest frame ever created by Eye Club.
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection