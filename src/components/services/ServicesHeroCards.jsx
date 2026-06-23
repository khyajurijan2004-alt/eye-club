import { useState } from 'react'

const ServicesHeroCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const services = [
    { icon: '◎', title: 'Eye Test', desc: 'Comprehensive vision check using advanced Zeiss technology.' },
    { icon: '⌂', title: 'Home Visit', desc: 'Professional optometrist consultation at your residence.' },
    { icon: '✦', title: 'Frame Styling', desc: 'Personal styling session with our luxury eyewear experts.' },
    { icon: '⚙', title: 'Repair Clinic', desc: 'Ultrasonic cleaning and alignment services for your frames.' },
  ]

  return (
    <section style={{ backgroundColor: '#fff', padding: '80px 80px 60px' }}>

      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <h2 style={{ fontSize: '48px', fontWeight: 'bold', color: '#0A0A0A', lineHeight: '1.15', fontFamily: 'Georgia, serif' }}>
          Bespoke Eye Care{' '}
          <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>Services</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
        {services.map((svc, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              borderTop: `2px solid ${hoveredCard === i ? '#C9A84C' : '#e8e3db'}`,
              borderRight: '1px solid #e8e3db',
              borderBottom: '1px solid #e8e3db',
              borderLeft: '1px solid #e8e3db',
              padding: '36px 28px 32px',
              cursor: 'pointer',
              transform: hoveredCard === i ? 'translateY(-4px)' : 'translateY(0)',
              transition: 'border-top-color 0.2s, transform 0.2s',
              backgroundColor: hoveredCard === i ? '#fdfcfa' : '#fff',
            }}
          >
            <div style={{ fontSize: '22px', color: '#C9A84C', marginBottom: '20px' }}>{svc.icon}</div>
            <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0A0A0A', marginBottom: '12px', lineHeight: '1.2' }}>
              {svc.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '32px' }}>
              {svc.desc}
            </p>
            <div style={{
              fontSize: '12px', fontWeight: '700', letterSpacing: '2px',
              color: hoveredCard === i ? '#0A0A0A' : '#C9A84C',
              transition: 'color 0.2s',
            }}>
              BOOK NOW →
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesHeroCards