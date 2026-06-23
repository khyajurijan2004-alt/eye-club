const collections = [
  {
    title: 'Precision Optical',
    desc: 'Crystal clear vision for daily work and reading. Available in ultra-thin indexes.',
    cta: 'EXPLORE LENSES',
    bg: '#8a9a8a',
  },
  {
    title: 'Ultimate Sun',
    desc: '100% UVA/UVB protection with enhanced contrast and polarization.',
    cta: 'EXPLORE SUN',
    bg: '#7a8a6a',
  },
  {
    title: 'Digital Elite',
    desc: 'Advanced blue-light filtering and anti-fatigue technology for the digital age.',
    cta: 'EXPLORE TECH',
    bg: '#6a7a8a',
  },
]

const LensCollections = () => {
  return (
    <section style={{ backgroundColor: '#fff' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
        {collections.map((col, i) => (
          <div
            key={i}
            style={{
              position: 'relative',
              height: '400px',
              backgroundColor: col.bg,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '36px',
              overflow: 'hidden',
            }}
          >
            {/* Dark overlay gradient */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%)',
              pointerEvents: 'none',
            }} />
            {/* Placeholder label */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -60%)',
              color: 'rgba(255,255,255,0.3)', fontSize: '12px', letterSpacing: '1px',
            }}>
              [ Image ]
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#fff', marginBottom: '10px', lineHeight: '1.2' }}>
                {col.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.6', marginBottom: '20px' }}>
                {col.desc}
              </p>
              <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', color: '#C9A84C', cursor: 'pointer' }}>
                {col.cta} →
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LensCollections
