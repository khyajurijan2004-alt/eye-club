const HomeTrial = () => {
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
    <section style={{ backgroundColor: '#F5F0E8', padding: '60px 80px' }}>
      <div style={{ backgroundColor: '#eee8df', borderRadius: '8px', padding: '60px', display: 'flex', gap: '60px', alignItems: 'flex-start' }}>

        {/* Left */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '11px', letterSpacing: '3px', color: '#C9A84C', marginBottom: '16px' }}>LUXURY AT YOUR DOOR</div>
          <h2 style={{ fontSize: '44px', fontWeight: 'bold', color: '#0A0A0A', lineHeight: '1.2', marginBottom: '32px' }}>
            Try 5 Frames at Home,{' '}
            <span style={{ color: '#C9A84C', fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>Free.</span>
          </h2>

          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            {steps.map((step, index) => (
              <div key={index} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', flexShrink: 0 }}>
                  {index + 1}
                </div>
                <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', marginTop: '4px' }}>{step}</p>
              </div>
            ))}
          </div>

          <button style={{ backgroundColor: '#0A0A0A', color: '#fff', padding: '14px 28px', fontSize: '13px', letterSpacing: '2px', border: 'none', cursor: 'pointer' }}>
            ORDER YOUR TRIAL BOX
          </button>
        </div>

        {/* Right - Perks Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', flex: 1 }}>
          {perks.map((perk, index) => (
            <div key={index} style={{ backgroundColor: '#fff', padding: '24px' }}>
              <div style={{ fontSize: '20px', marginBottom: '10px' }}>{perk.icon}</div>
              <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px', color: '#0A0A0A', marginBottom: '8px' }}>{perk.title}</div>
              <div style={{ fontSize: '13px', color: '#888', lineHeight: '1.5' }}>{perk.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default  HomeTrial