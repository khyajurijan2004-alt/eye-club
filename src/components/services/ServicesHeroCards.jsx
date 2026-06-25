const collections = [
  {
    title: 'Precision Optical',
    desc: 'Crystal clear vision for daily work and reading. Available in ultra-thin indexes.',
    cta: 'EXPLORE LENSES',
    img: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80&fit=crop',
  },
  {
    title: 'Ultimate Sun',
    desc: '100% UVA/UVB protection with enhanced contrast and polarization.',
    cta: 'EXPLORE SUN',
    img: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&q=80&fit=crop',
  },
  {
    title: 'Digital Elite',
    desc: 'Advanced blue-light filtering and anti-fatigue technology for the digital age.',
    cta: 'EXPLORE TECH',
    img: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80&fit=crop',
  },
]

const ServicesHeroCards = () => {
  return (
    <section style={{ backgroundColor: '#fff' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {collections.map((col, i) => (
          <div
            key={i}
            style={{
              position: 'relative',
              height: '520px',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            {/* Background image */}
            <img
              src={col.img}
              alt={col.title}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            {/* Dark gradient overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.1) 100%)',
            }} />

            {/* Content */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '40px 36px',
              zIndex: 1,
            }}>
              <h3 style={{
                fontFamily: '"Bodoni Moda", serif',
                fontSize: '32px',
                fontWeight: '400',
                color: '#fff',
                margin: '0 0 12px 0',
                lineHeight: '1.2',
              }}>
                {col.title}
              </h3>
              <p style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '14px',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: '1.6',
                margin: '0 0 24px 0',
              }}>
                {col.desc}
              </p>
              <div style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '2px',
                color: '#C9A84C',
                cursor: 'pointer',
              }}>
                {col.cta} →
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesHeroCards
