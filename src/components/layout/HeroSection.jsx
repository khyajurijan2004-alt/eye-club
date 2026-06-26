import { useState } from 'react'

const HeroSection = () => {
  const [hoveredBtn, setHoveredBtn] = useState(null)

  return (
    <section style={{
      backgroundColor: '#F5F0E8',
      padding: '40px 80px 60px 80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: '85vh',
      gap: '40px',
      overflow: 'visible',
    }}>

      {/* Left Content */}
      <div style={{ maxWidth: '420px', flexShrink: 0 }}>
        <h1 style={{
          fontSize: '56px',
          fontWeight: '600',
          lineHeight: '1.05',
          color: '#0A0A0A',
          marginBottom: '24px',
          fontFamily: '"Bodoni Moda", serif',
          letterSpacing: '-1px',
          whiteSpace: 'nowrap',
        }}>
          See the world in<br />
          <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>extraordinary</span><br />
          style
        </h1>

        <p style={{
          fontSize: '15px',
          color: '#555',
          marginBottom: '36px',
          lineHeight: '1.7',
          fontFamily: '"DM Sans", sans-serif',
          maxWidth: '360px',
        }}>
          The intersection of avant-garde design and artificial intelligence. Precision engineered for the sophisticated eye.
        </p>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button
            onMouseEnter={() => setHoveredBtn(0)}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              backgroundColor: hoveredBtn === 0 ? '#C9A84C' : '#0A0A0A',
              color: '#fff',
              padding: '14px 32px',
              fontSize: '11px',
              letterSpacing: '2.5px',
              cursor: 'pointer',
              border: 'none',
              transition: 'background-color 0.2s',
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: '700',
            }}>
            SHOP NOW
          </button>
          <button
            onMouseEnter={() => setHoveredBtn(1)}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              backgroundColor: hoveredBtn === 1 ? '#0A0A0A' : 'transparent',
              color: hoveredBtn === 1 ? '#fff' : '#0A0A0A',
              padding: '14px 32px',
              fontSize: '11px',
              letterSpacing: '2.5px',
              cursor: 'pointer',
              border: '1.5px solid #0A0A0A',
              transition: 'background-color 0.2s, color 0.2s',
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: '700',
            }}>
            VIEW CATALOG
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '48px', marginTop: '52px' }}>
          <div>
            <div style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#C9A84C',
              fontFamily: '"Bodoni Moda", serif',
            }}>50k+</div>
            <div style={{
              fontSize: '10px',
              letterSpacing: '2.5px',
              color: '#0A0A0A',
              marginTop: '6px',
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: '600',
            }}>DIGITAL FITS</div>
          </div>
          <div>
            <div style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#C9A84C',
              fontFamily: '"Bodoni Moda", serif',
            }}>120+</div>
            <div style={{
              fontSize: '10px',
              letterSpacing: '2.5px',
              color: '#0A0A0A',
              marginTop: '6px',
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: '600',
            }}>LUXURY BRANDS</div>
          </div>
        </div>
      </div>

      {/* Right — Image with Latest Drop overlay */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        {/* Hero Image */}
        <div style={{ width: '500px', height: '560px', overflow: 'hidden' }}>
          <img
          src="/src/assets/Luxury Eyewear.png"
            alt="Luxury Eyewear"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        </div>

        {/* Latest Drop card */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '-80px',
          backgroundColor: '#fff',
          padding: '24px 28px',
          width: '220px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
          zIndex: 2,
        }}>
          <div style={{
            fontSize: '10px',
            letterSpacing: '3px',
            color: '#C9A84C',
            fontWeight: '700',
            marginBottom: '10px',
            fontFamily: '"DM Sans", sans-serif',
          }}>
            LATEST DROP
          </div>
          <div style={{
            fontSize: '26px',
            fontWeight: '600',
            color: '#0A0A0A',
            lineHeight: '1.15',
            marginBottom: '10px',
            fontFamily: '"Bodoni Moda", serif',
          }}>
            Aura<br />Titanium
          </div>
          <div style={{
            fontSize: '13px',
            color: '#666',
            lineHeight: '1.6',
            fontFamily: '"DM Sans", sans-serif',
          }}>
            The lightest frame ever created by Eye Club.
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection