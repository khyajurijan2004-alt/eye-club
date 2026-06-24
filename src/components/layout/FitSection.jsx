import { useState } from 'react'

const FitSection = () => {
  const [hoveredBtn, setHoveredBtn] = useState(false)

  const steps = [
    {
      number: '01.',
      title: 'Scan',
      desc: 'Turn your camera on. Our AI captures your facial topography in less than 10 seconds.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
          <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
        </svg>
      ),
    },
    {
      number: '02.',
      title: 'Detect',
      desc: 'We calculate inter-pupillary distance, cheekbone height, and facial width with 99.8% accuracy.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="21"/><line x1="3" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="21" y2="12"/>
        </svg>
      ),
    },
    {
      number: '03.',
      title: 'Recommend',
      desc: 'Receive a curated gallery of frames that fit you like a bespoke suit.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      ),
    },
  ]

  return (
    <section style={{ backgroundColor: '#F5F0E8', padding: '80px 80px', textAlign: 'center' }}>

      {/* Badge */}
      <div style={{
        display: 'inline-block',
border: '1px solid #C9A84C',
padding: '6px 20px',
fontSize: '10px',
letterSpacing: '3px',
marginBottom: '28px',
color: '#C9A84C',
backgroundColor: 'transparent',
fontFamily: 'DM Sans, sans-serif',
borderRadius: '20px',
fontWeight: '500',
      }}>
        POWERED BY AI
      </div>

      {/* Title */}
      <h2 style={{
        fontSize: '48px',
        fontWeight: '600',
        color: '#0A0A0A',
        marginBottom: '16px',
        lineHeight: '1.2',
        fontFamily: 'Bodoni Moda, serif',
      }}>
        The Perfect Fit,<br />
        <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Guaranteed.</span>
      </h2>

      <p style={{
        fontSize: '15px',
        color: '#666',
        maxWidth: '580px',
        margin: '0 auto 48px',
        lineHeight: '1.7',
        fontFamily: 'DM Sans, sans-serif',
      }}>
        Our proprietary AI scans 30,000 mapping points on your face to recommend the exact frame shape and size that complements your unique features.
      </p>

      {/* 3 Cards */}
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginBottom: '48px' }}>
        {steps.map((step, index) => (
          <div key={index} style={{
            flex: 1,
            maxWidth: '340px',
            backgroundColor: '#fff',
            border: '1px solid #e5e5e5',
            padding: '40px 32px',
            textAlign: 'left',
          }}>
            <div style={{ marginBottom: '24px' }}>{step.icon}</div>
            <h3 style={{
              fontSize: '22px',
              fontWeight: '600',
              marginBottom: '12px',
              color: '#0A0A0A',
              fontFamily: 'Bodoni Moda, serif',
            }}>
              {step.number} {step.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7', fontFamily: 'DM Sans, sans-serif' }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        onMouseEnter={() => setHoveredBtn(true)}
        onMouseLeave={() => setHoveredBtn(false)}
        style={{
          backgroundColor: hoveredBtn ? '#C9A84C' : '#0A0A0A',
          color: '#fff',
          padding: '16px 36px',
          fontSize: '12px',
          letterSpacing: '2px',
          cursor: 'pointer',
          border: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'background-color 0.2s',
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: '600',
        }}
      >
        TRY AI FACE SCAN NOW →
      </button>

    </section>
  )
}

export default FitSection