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
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="3" y1="13" x2="21" y2="13"/>
  </svg>
),
    },
    {
      number: '02.',
      title: 'Detect',
      desc: 'We calculate inter-pupillary distance, cheekbone height, and facial width with 99.8% accuracy.',
    icon: (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4.7-3.7 5.7V17a1 1 0 0 1-1 1h-2.6a1 1 0 0 1-1-1v-2.3C7.5 13.7 6 11.5 6 9a6 6 0 0 1 6-6z"/>
    <path d="M10 21h4"/>
    <path d="M10.5 18v3M13.5 18v3"/>
    <circle cx="12" cy="9" r="1.5"/>
    <path d="M12 6v.5M12 11v.5M9.5 7.3l.4.3M14.1 10.4l.4.3M9.5 10.7l.4-.3M14.1 7.6l.4-.3M9 9h.5M14.5 9H15"/>
  </svg>
),
    },
    {
      number: '03.',
      title: 'Recommend',
      desc: 'Receive a curated gallery of frames that fit you like a bespoke suit.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/>
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
        fontFamily: '"DM Sans", sans-serif',
        borderRadius: '20px',
        fontWeight: '500',
      }}>
        POWERED BY AI
      </div>

      {/* Title */}
      <h2 style={{
        fontSize: '56px',
        fontWeight: '700',
        color: '#0A0A0A',
        marginBottom: '16px',
        lineHeight: '1.2',
        fontFamily: '"Bodoni Moda", serif',
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
        fontFamily: '"DM Sans", sans-serif',
      }}>
        Our proprietary AI scans 30,000 mapping points on your face to recommend the exact frame shape and size that complements your unique features.
      </p>

      {/* 3 Cards */}
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '48px', maxWidth: '1000px', margin: '0 auto 48px' }}>
        {steps.map((step, index) => (
          <div key={index} style={{
            flex: 1,
            backgroundColor: '#fff',
            border: '1px solid #e5e5e5',
            padding: '48px 36px',
            textAlign: 'left',
          }}>
            {/* Icon with cream background tile */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '52px',
              height: '52px',
              backgroundColor: '#F9F3DC',
              borderRadius: '12px',
              marginBottom: '28px',
            }}>
              {step.icon}
            </div>

            <h3 style={{
              fontSize: '22px',
              fontWeight: '600',
              marginBottom: '12px',
              color: '#0A0A0A',
              fontFamily: '"Bodoni Moda", serif',
            }}>
              {step.number} {step.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7', fontFamily: '"DM Sans", sans-serif' }}>
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
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: '600',
        }}
      >
        TRY AI FACE SCAN NOW →
      </button>

    </section>
  )
}

export default FitSection