import { useState } from 'react'

const HomeTrial = () => {
  const [hoveredBtn, setHoveredBtn] = useState(false)

  const steps = [
    'Choose 5 frames from our Home-Try-On collection.',
    'Keep them for 5 days. Get opinions from family and friends.',
    'Return them for free using the prepaid label.',
  ]

  const perks = [
    { icon: '🚚', title: "SHIPPING'S ON US", desc: 'Both ways, no hidden fees.' },
    { icon: '💳', title: 'ZERO PRE-PAY', desc: 'We only charge for what you keep.' },
    { icon: '📅', title: '5-DAY TRIAL', desc: 'Take your time to decide.' },
    { icon: '🧴', title: 'PROFESSIONAL CARE', desc: 'Every trial box is sanitized.' },
  ]

  return (
    <section style={{ backgroundColor: '#fff', padding: '60px 80px' }}>
      <div style={{ backgroundColor: '#F5F0E8', borderRadius: '8px', padding: '60px', display: 'flex', gap: '80px', alignItems: 'flex-start' }}>

        {/* Left */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '11px', letterSpacing: '3px', color: '#C9A84C', marginBottom: '16px', fontWeight: '600' }}>
            LUXURY AT YOUR DOOR
          </div>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', color: '#0A0A0A', lineHeight: '1.15', marginBottom: '36px', fontFamily: 'Georgia, serif' }}>
            Try 5 Frames<br />at Home,{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Free.</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
            {steps.map((step, index) => (
              <div key={index} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', flexShrink: 0, marginTop: '2px' }}>
                  {index + 1}
                </div>
                <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', margin: 0 }}>{step}</p>
              </div>
            ))}
          </div>

          <button
            onMouseEnter={() => setHoveredBtn(true)}
            onMouseLeave={() => setHoveredBtn(false)}
            style={{
              backgroundColor: hoveredBtn ? '#C9A84C' : '#0A0A0A',
              color: '#fff',
              padding: '14px 28px', fontSize: '12px', letterSpacing: '2px',
              border: 'none', cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
          >
            ORDER YOUR TRIAL BOX
          </button>
        </div>

        {/* Right - Perks Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', flex: 1, alignSelf: 'center' }}>
          {perks.map((perk, index) => (
            <div key={index} style={{ backgroundColor: '#fff', padding: '28px 24px', borderRadius: '4px' }}>
              <div style={{ fontSize: '20px', marginBottom: '12px', color: '#C9A84C' }}>{perk.icon}</div>
              <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px', color: '#0A0A0A', marginBottom: '8px' }}>{perk.title}</div>
              <div style={{ fontSize: '13px', color: '#888', lineHeight: '1.6' }}>{perk.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HomeTrial
